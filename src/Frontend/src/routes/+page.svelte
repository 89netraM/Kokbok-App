<script lang="ts">
  import { resolve } from "$app/paths";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

{#each data.recipes as recipe (recipe.id)}
  {#if recipe.imageId != null}
    <img src={`/api/assets/${recipe.imageId}`} />
  {/if}
  <h2><a href={resolve(`/recipes/[id]`, { id: recipe.id })}>{recipe.name}</a></h2>
  <p>{recipe.owner.name}</p>
  {#if recipe.description != null}
    <p>{recipe.description}</p>
  {/if}
{/each}
