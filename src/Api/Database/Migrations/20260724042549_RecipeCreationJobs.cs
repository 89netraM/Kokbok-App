using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Kokbok.Api.Database.Migrations;

/// <inheritdoc />
public partial class _20260724042549_RecipeCreationJobs : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "RecipeCreationJobs",
            columns: table => new
            {
                Id = table.Column<Guid>(type: "TEXT", nullable: false),
                RecipeId = table.Column<Guid>(type: "TEXT", nullable: false),
                OwnerId = table.Column<string>(type: "TEXT", nullable: true),
                Task = table.Column<string>(type: "TEXT", nullable: false),
                ScheduledAt = table.Column<long>(type: "INTEGER", nullable: false),
                StartedAt = table.Column<long>(type: "INTEGER", nullable: true),
                CompletedAt = table.Column<long>(type: "INTEGER", nullable: true),
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_RecipeCreationJobs", x => x.Id);
                table.ForeignKey(
                    name: "FK_RecipeCreationJobs_AspNetUsers_OwnerId",
                    column: x => x.OwnerId,
                    principalTable: "AspNetUsers",
                    principalColumn: "Id"
                );
            }
        );

        migrationBuilder.CreateIndex(
            name: "IX_RecipeCreationJobs_OwnerId",
            table: "RecipeCreationJobs",
            column: "OwnerId"
        );

        migrationBuilder.CreateIndex(
            name: "IX_RecipeCreationJobs_RecipeId",
            table: "RecipeCreationJobs",
            column: "RecipeId"
        );
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(name: "RecipeCreationJobs");
    }
}
