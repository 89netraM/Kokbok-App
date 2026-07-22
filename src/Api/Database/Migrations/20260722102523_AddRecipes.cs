using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Kokbok.Api.Database.Migrations;

/// <inheritdoc />
public partial class _20260722102523_AddRecipes : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "AmountValue",
            columns: table => new
            {
                Id = table.Column<Guid>(type: "TEXT", nullable: false),
                Discriminator = table.Column<string>(type: "TEXT", maxLength: 13, nullable: false),
                Value = table.Column<double>(type: "REAL", nullable: true),
                From = table.Column<double>(type: "REAL", nullable: true),
                To = table.Column<double>(type: "REAL", nullable: true),
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_AmountValue", x => x.Id);
            }
        );

        migrationBuilder.CreateTable(
            name: "Assets",
            columns: table => new
            {
                Id = table.Column<Guid>(type: "TEXT", nullable: false),
                Filename = table.Column<string>(type: "TEXT", nullable: false),
                UploadedById = table.Column<string>(type: "TEXT", nullable: false),
                UploadedAt = table.Column<DateTimeOffset>(type: "TEXT", nullable: false),
                RemovedAt = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Assets", x => x.Id);
                table.ForeignKey(
                    name: "FK_Assets_AspNetUsers_UploadedById",
                    column: x => x.UploadedById,
                    principalTable: "AspNetUsers",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Cascade
                );
            }
        );

        migrationBuilder.CreateTable(
            name: "Source",
            columns: table => new
            {
                Id = table.Column<Guid>(type: "TEXT", nullable: false),
                Discriminator = table.Column<string>(type: "TEXT", maxLength: 13, nullable: false),
                Url = table.Column<string>(type: "TEXT", nullable: true),
                Pdf_AssetId = table.Column<Guid>(type: "TEXT", nullable: true),
                AssetId = table.Column<Guid>(type: "TEXT", nullable: true),
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Source", x => x.Id);
                table.ForeignKey(
                    name: "FK_Source_Assets_AssetId",
                    column: x => x.AssetId,
                    principalTable: "Assets",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Cascade
                );
                table.ForeignKey(
                    name: "FK_Source_Assets_Pdf_AssetId",
                    column: x => x.Pdf_AssetId,
                    principalTable: "Assets",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Cascade
                );
            }
        );

        migrationBuilder.CreateTable(
            name: "AssetImages",
            columns: table => new
            {
                AssetsId = table.Column<Guid>(type: "TEXT", nullable: false),
                ImagesId = table.Column<Guid>(type: "TEXT", nullable: false),
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_AssetImages", x => new { x.AssetsId, x.ImagesId });
                table.ForeignKey(
                    name: "FK_AssetImages_Assets_AssetsId",
                    column: x => x.AssetsId,
                    principalTable: "Assets",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Cascade
                );
                table.ForeignKey(
                    name: "FK_AssetImages_Source_ImagesId",
                    column: x => x.ImagesId,
                    principalTable: "Source",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Cascade
                );
            }
        );

        migrationBuilder.CreateTable(
            name: "Recipes",
            columns: table => new
            {
                Id = table.Column<Guid>(type: "TEXT", nullable: false),
                Name = table.Column<string>(type: "TEXT", nullable: false),
                Description = table.Column<string>(type: "TEXT", nullable: true),
                OwnerId = table.Column<string>(type: "TEXT", nullable: true),
                CreatedAt = table.Column<DateTimeOffset>(type: "TEXT", nullable: false),
                DeletedAt = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
                Visibility = table.Column<int>(type: "INTEGER", nullable: false),
                SourceId = table.Column<Guid>(type: "TEXT", nullable: true),
                ImageId = table.Column<Guid>(type: "TEXT", nullable: true),
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Recipes", x => x.Id);
                table.ForeignKey(
                    name: "FK_Recipes_AspNetUsers_OwnerId",
                    column: x => x.OwnerId,
                    principalTable: "AspNetUsers",
                    principalColumn: "Id"
                );
                table.ForeignKey(
                    name: "FK_Recipes_Assets_ImageId",
                    column: x => x.ImageId,
                    principalTable: "Assets",
                    principalColumn: "Id"
                );
                table.ForeignKey(
                    name: "FK_Recipes_Source_SourceId",
                    column: x => x.SourceId,
                    principalTable: "Source",
                    principalColumn: "Id"
                );
            }
        );

        migrationBuilder.CreateTable(
            name: "RecipeUser",
            columns: table => new
            {
                SharedRecipesId = table.Column<Guid>(type: "TEXT", nullable: false),
                SharedWithId = table.Column<string>(type: "TEXT", nullable: false),
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_RecipeUser", x => new { x.SharedRecipesId, x.SharedWithId });
                table.ForeignKey(
                    name: "FK_RecipeUser_AspNetUsers_SharedWithId",
                    column: x => x.SharedWithId,
                    principalTable: "AspNetUsers",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Cascade
                );
                table.ForeignKey(
                    name: "FK_RecipeUser_Recipes_SharedRecipesId",
                    column: x => x.SharedRecipesId,
                    principalTable: "Recipes",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Cascade
                );
            }
        );

        migrationBuilder.CreateTable(
            name: "Section<Ingredient>",
            columns: table => new
            {
                Id = table.Column<Guid>(type: "TEXT", nullable: false),
                Name = table.Column<string>(type: "TEXT", nullable: true),
                RecipeId = table.Column<Guid>(type: "TEXT", nullable: true),
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Section<Ingredient>", x => x.Id);
                table.ForeignKey(
                    name: "FK_Section<Ingredient>_Recipes_RecipeId",
                    column: x => x.RecipeId,
                    principalTable: "Recipes",
                    principalColumn: "Id"
                );
            }
        );

        migrationBuilder.CreateTable(
            name: "Section<Instruction>",
            columns: table => new
            {
                Id = table.Column<Guid>(type: "TEXT", nullable: false),
                Name = table.Column<string>(type: "TEXT", nullable: true),
                RecipeId = table.Column<Guid>(type: "TEXT", nullable: true),
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Section<Instruction>", x => x.Id);
                table.ForeignKey(
                    name: "FK_Section<Instruction>_Recipes_RecipeId",
                    column: x => x.RecipeId,
                    principalTable: "Recipes",
                    principalColumn: "Id"
                );
            }
        );

        migrationBuilder.CreateTable(
            name: "Ingredient",
            columns: table => new
            {
                Id = table.Column<Guid>(type: "TEXT", nullable: false),
                Name = table.Column<string>(type: "TEXT", nullable: false),
                Amount_ValueId = table.Column<Guid>(type: "TEXT", nullable: true),
                Amount_Unit = table.Column<string>(type: "TEXT", nullable: true),
                SectionIngredientId = table.Column<Guid>(name: "Section<Ingredient>Id", type: "TEXT", nullable: true),
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Ingredient", x => x.Id);
                table.ForeignKey(
                    name: "FK_Ingredient_AmountValue_Amount_ValueId",
                    column: x => x.Amount_ValueId,
                    principalTable: "AmountValue",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Cascade
                );
                table.ForeignKey(
                    name: "FK_Ingredient_Section<Ingredient>_Section<Ingredient>Id",
                    column: x => x.SectionIngredientId,
                    principalTable: "Section<Ingredient>",
                    principalColumn: "Id"
                );
            }
        );

        migrationBuilder.CreateTable(
            name: "Instruction",
            columns: table => new
            {
                Id = table.Column<Guid>(type: "TEXT", nullable: false),
                Name = table.Column<string>(type: "TEXT", nullable: true),
                Text = table.Column<string>(type: "TEXT", nullable: false),
                SectionInstructionId = table.Column<Guid>(name: "Section<Instruction>Id", type: "TEXT", nullable: true),
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Instruction", x => x.Id);
                table.ForeignKey(
                    name: "FK_Instruction_Section<Instruction>_Section<Instruction>Id",
                    column: x => x.SectionInstructionId,
                    principalTable: "Section<Instruction>",
                    principalColumn: "Id"
                );
            }
        );

        migrationBuilder.CreateIndex(name: "IX_AssetImages_ImagesId", table: "AssetImages", column: "ImagesId");

        migrationBuilder.CreateIndex(name: "IX_Assets_UploadedById", table: "Assets", column: "UploadedById");

        migrationBuilder.CreateIndex(
            name: "IX_Ingredient_Amount_ValueId",
            table: "Ingredient",
            column: "Amount_ValueId"
        );

        migrationBuilder.CreateIndex(
            name: "IX_Ingredient_Section<Ingredient>Id",
            table: "Ingredient",
            column: "Section<Ingredient>Id"
        );

        migrationBuilder.CreateIndex(
            name: "IX_Instruction_Section<Instruction>Id",
            table: "Instruction",
            column: "Section<Instruction>Id"
        );

        migrationBuilder.CreateIndex(name: "IX_Recipes_ImageId", table: "Recipes", column: "ImageId");

        migrationBuilder.CreateIndex(name: "IX_Recipes_OwnerId", table: "Recipes", column: "OwnerId");

        migrationBuilder.CreateIndex(name: "IX_Recipes_SourceId", table: "Recipes", column: "SourceId");

        migrationBuilder.CreateIndex(name: "IX_RecipeUser_SharedWithId", table: "RecipeUser", column: "SharedWithId");

        migrationBuilder.CreateIndex(
            name: "IX_Section<Ingredient>_RecipeId",
            table: "Section<Ingredient>",
            column: "RecipeId"
        );

        migrationBuilder.CreateIndex(
            name: "IX_Section<Instruction>_RecipeId",
            table: "Section<Instruction>",
            column: "RecipeId"
        );

        migrationBuilder.CreateIndex(name: "IX_Source_AssetId", table: "Source", column: "AssetId");

        migrationBuilder.CreateIndex(name: "IX_Source_Pdf_AssetId", table: "Source", column: "Pdf_AssetId");
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(name: "AssetImages");

        migrationBuilder.DropTable(name: "Ingredient");

        migrationBuilder.DropTable(name: "Instruction");

        migrationBuilder.DropTable(name: "RecipeUser");

        migrationBuilder.DropTable(name: "AmountValue");

        migrationBuilder.DropTable(name: "Section<Ingredient>");

        migrationBuilder.DropTable(name: "Section<Instruction>");

        migrationBuilder.DropTable(name: "Recipes");

        migrationBuilder.DropTable(name: "Source");

        migrationBuilder.DropTable(name: "Assets");
    }
}
