using Kokbok.Api.Database;
using Kokbok.Api.Endpoints;
using Kokbok.Api.Models;
using Microsoft.AspNetCore.Authentication.Facebook;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.MicrosoftAccount;
using Microsoft.AspNetCore.Builder;
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

app.MapAuthEndpoints();

app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();
