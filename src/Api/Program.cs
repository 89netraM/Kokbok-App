using System;
using Kokbok.Api.Database;
using Kokbok.Api.Endpoints;
using Kokbok.Api.Services;
using Microsoft.AspNetCore.Authentication.Facebook;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.MicrosoftAccount;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

builder
    .Services.AddDbContext<KokbokDbContext>(
        (sp, options) =>
            options.UseSqlite(sp.GetRequiredService<IConfiguration>().GetConnectionString("KokbokDatabase"))
    )
    .AddMigrationsService();

builder.Services.AddIdentityApiEndpoints<Kokbok.Api.Models.User>().AddEntityFrameworkStores<KokbokDbContext>();

builder.Services.AddAuthentication().AddFacebook().AddGoogle().AddMicrosoftAccount();
builder.Services.AddOptions<FacebookOptions>(FacebookDefaults.AuthenticationScheme).BindConfiguration("Auth:Facebook");
builder.Services.AddOptions<GoogleOptions>(GoogleDefaults.AuthenticationScheme).BindConfiguration("Auth:Google");
builder
    .Services.AddOptions<MicrosoftAccountOptions>(MicrosoftAccountDefaults.AuthenticationScheme)
    .BindConfiguration("Auth:Microsoft");
builder.Services.AddAuthorization();

builder.Services.TryAddSingleton(TimeProvider.System);
builder.Services.AddTransient<RecipeService>();

builder.Services.AddAssetServiceOptions().AddTransient<AssetService>();

using var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();

var api = app.MapGroup("api");
api.MapOpenApi();
api.MapRecipeEndpoints();
api.MapAssetEndpoints();

app.MapAuthEndpoints();

app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();
