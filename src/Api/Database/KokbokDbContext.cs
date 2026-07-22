using Kokbok.Api.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Kokbok.Api.Database;

public sealed class KokbokDbContext(DbContextOptions<KokbokDbContext> options) : IdentityDbContext<User>(options);

public class KokbokDbContextFactory : IDesignTimeDbContextFactory<KokbokDbContext>
{
    public KokbokDbContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<KokbokDbContext>();
        optionsBuilder.UseSqlite("Data Source=kokbok.db");

        return new KokbokDbContext(optionsBuilder.Options);
    }
}
