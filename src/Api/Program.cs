using System.Security.Claims;
using Kokbok.Api.Database;
using Kokbok.Api.Models;
using Microsoft.AspNetCore.Authentication.Facebook;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.MicrosoftAccount;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

builder
    .Services.AddDbContext<UserDbContext>(
        (sp, options) => options.UseSqlite(sp.GetRequiredService<IConfiguration>().GetConnectionString("UserDatabase"))
    )
    .AddMigrationsService();

builder.Services.AddIdentityApiEndpoints<User>().AddEntityFrameworkStores<UserDbContext>();

builder.Services.AddAuthentication().AddFacebook().AddGoogle().AddMicrosoftAccount();
builder.Services.AddOptions<FacebookOptions>(FacebookDefaults.AuthenticationScheme).BindConfiguration("Auth:Facebook");
builder.Services.AddOptions<GoogleOptions>(GoogleDefaults.AuthenticationScheme).BindConfiguration("Auth:Google");
builder
    .Services.AddOptions<MicrosoftAccountOptions>(MicrosoftAccountDefaults.AuthenticationScheme)
    .BindConfiguration("Auth:Microsoft");
builder.Services.AddAuthorization();

using var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();

app.MapOpenApi();

app.MapGet(
    "/auth/google/signin",
    ([FromServices] SignInManager<User> signInManager) =>
        TypedResults.Challenge(
            signInManager.ConfigureExternalAuthenticationProperties(
                GoogleDefaults.AuthenticationScheme,
                "/auth/callback"
            ),
            [GoogleDefaults.AuthenticationScheme]
        )
);
app.MapGet(
    "/auth/facebook/signin",
    ([FromServices] SignInManager<User> signInManager) =>
        TypedResults.Challenge(
            signInManager.ConfigureExternalAuthenticationProperties(
                FacebookDefaults.AuthenticationScheme,
                "/auth/callback"
            ),
            [FacebookDefaults.AuthenticationScheme]
        )
);
app.MapGet(
    "/auth/microsoft/signin",
    ([FromServices] SignInManager<User> signInManager) =>
        TypedResults.Challenge(
            signInManager.ConfigureExternalAuthenticationProperties(
                MicrosoftAccountDefaults.AuthenticationScheme,
                "/auth/callback"
            ),
            [MicrosoftAccountDefaults.AuthenticationScheme]
        )
);

app.MapGet(
    "/auth/callback",
    async ([FromServices] SignInManager<User> signInManager, [FromServices] UserManager<User> userManager) =>
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
);

app.MapGet("/public", () => "Hello World!");
app.MapGet(
        "/private",
        async ([FromServices] UserManager<User> userManager, HttpContext httpContext) =>
            $"Hello {(await userManager.GetUserAsync(httpContext.User))?.Name}!"
    )
    .RequireAuthorization();

app.Run();
