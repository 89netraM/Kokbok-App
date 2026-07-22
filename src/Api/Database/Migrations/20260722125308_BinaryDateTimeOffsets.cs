using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Kokbok.Api.Database.Migrations;

/// <inheritdoc />
public partial class _20260722125308_BinaryDateTimeOffsets : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AlterColumn<long>(
            name: "DeletedAt",
            table: "Recipes",
            type: "INTEGER",
            nullable: true,
            oldClrType: typeof(DateTimeOffset),
            oldType: "TEXT",
            oldNullable: true
        );

        migrationBuilder.AlterColumn<long>(
            name: "CreatedAt",
            table: "Recipes",
            type: "INTEGER",
            nullable: false,
            oldClrType: typeof(DateTimeOffset),
            oldType: "TEXT"
        );

        migrationBuilder.AlterColumn<long>(
            name: "UploadedAt",
            table: "Assets",
            type: "INTEGER",
            nullable: false,
            oldClrType: typeof(DateTimeOffset),
            oldType: "TEXT"
        );

        migrationBuilder.AlterColumn<long>(
            name: "RemovedAt",
            table: "Assets",
            type: "INTEGER",
            nullable: true,
            oldClrType: typeof(DateTimeOffset),
            oldType: "TEXT",
            oldNullable: true
        );
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "DeletedAt",
            table: "Recipes",
            type: "TEXT",
            nullable: true,
            oldClrType: typeof(long),
            oldType: "INTEGER",
            oldNullable: true
        );

        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "CreatedAt",
            table: "Recipes",
            type: "TEXT",
            nullable: false,
            oldClrType: typeof(long),
            oldType: "INTEGER"
        );

        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "UploadedAt",
            table: "Assets",
            type: "TEXT",
            nullable: false,
            oldClrType: typeof(long),
            oldType: "INTEGER"
        );

        migrationBuilder.AlterColumn<DateTimeOffset>(
            name: "RemovedAt",
            table: "Assets",
            type: "TEXT",
            nullable: true,
            oldClrType: typeof(long),
            oldType: "INTEGER",
            oldNullable: true
        );
    }
}
