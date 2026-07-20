using Kokbok.Api.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Kokbok.Api.Database;

public sealed class UserDbContext(DbContextOptions<UserDbContext> options) : IdentityDbContext<User>(options);

public class UserDbContextFactory : IDesignTimeDbContextFactory<UserDbContext>
{
    public UserDbContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<UserDbContext>();
        optionsBuilder.UseSqlite("Data Source=user.db");

        return new UserDbContext(optionsBuilder.Options);
    }
}
