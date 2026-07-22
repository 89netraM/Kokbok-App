using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Kokbok.Api.Database.Migrations;

/// <inheritdoc />
public partial class _20260722181915_AssetContentType : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<string>(
            name: "ContentType",
            table: "Assets",
            type: "TEXT",
            nullable: false,
            defaultValue: ""
        );
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(name: "ContentType", table: "Assets");
    }
}
