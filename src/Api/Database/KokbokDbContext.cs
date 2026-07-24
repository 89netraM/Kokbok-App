using System;
using System.Text.Json;
using Kokbok.Api.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Kokbok.Api.Database;

public sealed class KokbokDbContext(DbContextOptions<KokbokDbContext> options) : IdentityDbContext<User>(options)
{
    public required DbSet<Asset> Assets { get; init; }

    public required DbSet<Recipe> Recipes { get; init; }

    public required DbSet<RecipeCreationJob> RecipeCreationJobs { get; init; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        var userBuilder = builder.Entity<User>();
        userBuilder.HasMany(u => u.Assets).WithOne(a => a.UploadedBy);
        userBuilder.HasMany(u => u.OwnedRecipes).WithOne(r => r.Owner);
        userBuilder.HasMany(u => u.SharedRecipes).WithMany(r => r.SharedWith);

        var recipeBuilder = builder.Entity<Recipe>();
        recipeBuilder.HasKey(r => r.Id);
        recipeBuilder.HasOne(r => r.Source);
        recipeBuilder.Property(r => r.CreatedAt).HasConversion<DateTimeOffsetToBinaryConverter>();
        recipeBuilder.Property(r => r.DeletedAt).HasConversion<DateTimeOffsetToBinaryConverter>();
        var sourceBuilder = builder.Entity<Source>();
        sourceBuilder.Property<Guid>("Id");
        sourceBuilder.HasKey("Id");
        sourceBuilder
            .HasDiscriminator()
            .HasValue<Plaintext>("plaintext")
            .HasValue<Pdf>("pdf")
            .HasValue<Images>("images")
            .HasValue<Link>("link")
            .IsComplete(true);

        var imagesBuilder = builder.Entity<Images>();
        imagesBuilder.HasMany(i => i.Assets).WithMany();

        recipeBuilder.HasMany(r => r.Ingredients).WithOne();
        var ingredientSectionBuilder = builder.Entity<Section<Ingredient>>();
        ingredientSectionBuilder.HasKey(s => s.Id);
        recipeBuilder.HasMany(r => r.Instructions).WithOne();
        var instructionSectionBuilder = builder.Entity<Section<Instruction>>();
        instructionSectionBuilder.HasKey(s => s.Id);

        var ingredientBuilder = builder.Entity<Ingredient>();
        ingredientBuilder.HasKey(i => i.Id);
        var amountBuilder = ingredientBuilder.OwnsOne(i => i.Amount);
        amountBuilder.HasOne(a => a.Value);
        var amountValueBuilder = builder.Entity<AmountValue>();
        amountValueBuilder.Property<Guid>("Id");
        amountValueBuilder.HasKey("Id");
        amountValueBuilder
            .HasDiscriminator()
            .HasValue<ExactValue>("exact")
            .HasValue<RangeValue>("range")
            .IsComplete(true);

        var instructionBuilder = builder.Entity<Instruction>();
        instructionBuilder.HasKey(i => i.Id);

        var assetBuilder = builder.Entity<Asset>();
        assetBuilder.HasKey(a => a.Id);
        assetBuilder.Property(a => a.UploadedAt).HasConversion<DateTimeOffsetToBinaryConverter>();
        assetBuilder.Property(a => a.RemovedAt).HasConversion<DateTimeOffsetToBinaryConverter>();

        var recipeCreationJobBuilder = builder.Entity<RecipeCreationJob>();
        recipeCreationJobBuilder.HasOne(j => j.Recipe).WithMany().HasForeignKey(j => j.RecipeId).IsConstrained(false);
        recipeCreationJobBuilder.Property(j => j.ScheduledAt).HasConversion<DateTimeOffsetToBinaryConverter>();
        recipeCreationJobBuilder.Property(j => j.StartedAt).HasConversion<DateTimeOffsetToBinaryConverter>();
        recipeCreationJobBuilder.Property(j => j.CompletedAt).HasConversion<DateTimeOffsetToBinaryConverter>();
        recipeCreationJobBuilder
            .Property(j => j.Task)
            .HasConversion(
                v => JsonSerializer.Serialize<RecipeCreationTask>(v),
                v => JsonSerializer.Deserialize<RecipeCreationTask>(v)
            );
    }
}

public class KokbokDbContextFactory : IDesignTimeDbContextFactory<KokbokDbContext>
{
    public KokbokDbContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<KokbokDbContext>();
        optionsBuilder.UseSqlite("Data Source=kokbok.db");

        return new KokbokDbContext(optionsBuilder.Options)
        {
            Assets = null!,
            Recipes = null!,
            RecipeCreationJobs = null!,
        };
    }
}
