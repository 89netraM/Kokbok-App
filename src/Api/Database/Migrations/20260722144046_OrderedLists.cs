using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Kokbok.Api.Database.Migrations;

/// <inheritdoc />
public partial class _20260722144046_OrderedLists : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<int>(
            name: "Order",
            table: "Section<Instruction>",
            type: "INTEGER",
            nullable: false,
            defaultValue: 0
        );

        migrationBuilder.AddColumn<int>(
            name: "Order",
            table: "Section<Ingredient>",
            type: "INTEGER",
            nullable: false,
            defaultValue: 0
        );

        migrationBuilder.AddColumn<int>(
            name: "Order",
            table: "Instruction",
            type: "INTEGER",
            nullable: false,
            defaultValue: 0
        );

        migrationBuilder.AddColumn<int>(
            name: "Order",
            table: "Ingredient",
            type: "INTEGER",
            nullable: false,
            defaultValue: 0
        );
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(name: "Order", table: "Section<Instruction>");

        migrationBuilder.DropColumn(name: "Order", table: "Section<Ingredient>");

        migrationBuilder.DropColumn(name: "Order", table: "Instruction");

        migrationBuilder.DropColumn(name: "Order", table: "Ingredient");
    }
}
