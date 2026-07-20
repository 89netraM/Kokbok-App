using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Kokbok.Api.Database;

public sealed class MigrationsService(IServiceProvider serviceProvider) : IHostedService
{
    public async Task StartAsync(CancellationToken cancellationToken)
    {
        using var scope = serviceProvider.CreateScope();

        var userDbContext = scope.ServiceProvider.GetRequiredService<UserDbContext>();
        await userDbContext.Database.MigrateAsync(cancellationToken);
    }

    public Task StopAsync(CancellationToken cancellationToken) => Task.CompletedTask;
}

public static class MigrationsServiceServiceCollectionExtensions
{
    public static IServiceCollection AddMigrationsService(this IServiceCollection services) =>
        services.AddHostedService<MigrationsService>();
}
