using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Kokbok.Api.Models;
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

            group.MapGet("facebook/signin", ExternalChallenge(FacebookDefaults.AuthenticationScheme));
            group.MapGet("google/signin", ExternalChallenge(GoogleDefaults.AuthenticationScheme));
            group.MapGet("microsoft/signin", ExternalChallenge(MicrosoftAccountDefaults.AuthenticationScheme));
            group.MapGet("callback", Callback);

            return group;
        }
    }

    private static Func<SignInManager<User>, ChallengeHttpResult> ExternalChallenge(string authenticationScheme) =>
        ([FromServices] signInManager) =>
            TypedResults.Challenge(
                signInManager.ConfigureExternalAuthenticationProperties(authenticationScheme, "/auth/callback"),
                [authenticationScheme]
            );

    private static async Task<RedirectHttpResult> Callback(
        [FromServices] SignInManager<User> signInManager,
        [FromServices] UserManager<User> userManager
    )
    {
        var info = await signInManager.GetExternalLoginInfoAsync();
        if (info is null)
        {
            return TypedResults.Redirect("/login?error=external");
        }

        var result = await signInManager.ExternalLoginSignInAsync(
            info.LoginProvider,
            info.ProviderKey,
            isPersistent: true
        );
        if (!result.Succeeded)
        {
            var user = new User
            {
                Name = info.Principal.FindFirstValue(ClaimTypes.Name),
                UserName = info.Principal.FindFirstValue(ClaimTypes.NameIdentifier),
                Email = info.Principal.FindFirstValue(ClaimTypes.Email),
            };
            await userManager.CreateAsync(user);
            await userManager.AddLoginAsync(user, info);
            await signInManager.SignInAsync(user, isPersistent: true);
        }

        return TypedResults.Redirect("/private");
    }
}
