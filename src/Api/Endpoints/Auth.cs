using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Facebook;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.MicrosoftAccount;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;

namespace Kokbok.Api.Endpoints;

public static class Auth
{
    extension(IEndpointRouteBuilder builder)
    {
        public RouteGroupBuilder MapAuthEndpoints()
        {
            var group = builder.MapGroup("auth");

            group.MapPost("login", Login);
            group.MapPost("register", Register);
            group.MapGet("about", GetUser).RequireAuthorization();

            group.MapGet("facebook/signin", ExternalChallenge(FacebookDefaults.AuthenticationScheme));
            group.MapGet("google/signin", ExternalChallenge(GoogleDefaults.AuthenticationScheme));
            group.MapGet("microsoft/signin", ExternalChallenge(MicrosoftAccountDefaults.AuthenticationScheme));
            group.MapGet("callback", Callback);

            return group;
        }
    }

    private static async Task<Results<Ok, UnauthorizedHttpResult>> Login(
        [FromServices] SignInManager<Models.User> signInManager,
        [FromBody] LoginRequest request
    )
    {
        var result = await signInManager.PasswordSignInAsync(
            request.Username,
            request.Password,
            isPersistent: true,
            lockoutOnFailure: false
        );
        return result.Succeeded ? TypedResults.Ok() : TypedResults.Unauthorized();
    }

    private static async Task<Results<Ok, ValidationProblem>> Register(
        [FromServices] SignInManager<Models.User> signInManager,
        [FromServices] UserManager<Models.User> userManager,
        [FromBody] RegisterRequest request
    )
    {
        var user = new Models.User
        {
            UserName = request.Username,
            Name = request.Name,
            Email = request.Email,
        };
        var result = await userManager.CreateAsync(user, request.Password);
        if (!result.Succeeded)
        {
            return TypedResults.ValidationProblem(
                result.Errors.GroupBy(e => e.Code, e => e.Description).ToDictionary(e => e.Key, e => e.ToArray())
            );
        }
        await signInManager.SignInAsync(user, isPersistent: true);
        return TypedResults.Ok();
    }

    private static async Task<Ok<User>> GetUser(
        [FromServices] UserManager<Models.User> userManager,
        HttpContext httpContext
    ) =>
        // Endpoint requires authenticated users
        TypedResults.Ok(User.FromModel((await userManager.GetUserAsync(httpContext.User))!));

    private static Func<SignInManager<Models.User>, ChallengeHttpResult> ExternalChallenge(
        string authenticationScheme
    ) =>
        ([FromServices] signInManager) =>
            TypedResults.Challenge(
                signInManager.ConfigureExternalAuthenticationProperties(authenticationScheme, "/auth/callback"),
                [authenticationScheme]
            );

    private static async Task<RedirectHttpResult> Callback(
        [FromServices] SignInManager<Models.User> signInManager,
        [FromServices] UserManager<Models.User> userManager
    )
    {
        var info = await signInManager.GetExternalLoginInfoAsync();
        if (info is null)
        {
            return TypedResults.Redirect("/join?error=external");
        }

        var result = await signInManager.ExternalLoginSignInAsync(
            info.LoginProvider,
            info.ProviderKey,
            isPersistent: true
        );
        if (!result.Succeeded)
        {
            var user = new Models.User
            {
                Name = info.Principal.FindFirstValue(ClaimTypes.Name),
                UserName = info.Principal.FindFirstValue(ClaimTypes.NameIdentifier),
                Email = info.Principal.FindFirstValue(ClaimTypes.Email),
            };
            await userManager.CreateAsync(user);
            await userManager.AddLoginAsync(user, info);
            await signInManager.SignInAsync(user, isPersistent: true);
        }

        return TypedResults.Redirect("/");
    }
}

public sealed class LoginRequest
{
    public required string Username { get; init; }
    public required string Password { get; init; }
}

public sealed class RegisterRequest
{
    public required string Username { get; init; }
    public required string Email { get; init; }
    public required string Name { get; init; }
    public required string Password { get; init; }
}
