<script lang="ts">
  import { resolve } from "$app/paths";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>Kokbok</title>
</svelte:head>

<article>
  {#each data.recipes as recipe (recipe.id)}
    <a href={resolve(`/recipes/[id]`, { id: recipe.id })}>
      {#if recipe.imageId != null}
        <img src={`/api/assets/${recipe.imageId}`} />
      {/if}
      <div class="name">
        <h2>{recipe.name}</h2>
        <p>{recipe.owner.name}</p>
      </div>
      {#if recipe.imageId == null && recipe.description != null}
        <p>{recipe.description}</p>
      {/if}
    </a>
  {/each}
</article>

<style>
  article {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;

    a {
      color: #000000;
      text-decoration: none;
      background-color: #bac3a1;
      padding: 0.5rem;
      border-radius: 0.5em;
      display: flex;
      flex-direction: column;
      justify-content: end;

      img {
        width: 100%;
      }
      .name {
        display: flex;
        flex-direction: column;

        h2,
        p {
          margin: 0;
        }
        p {
          align-self: end;
        }
      }

      p:last-child {
        margin-block-end: 0;
      }

      &:hover h2 {
        text-decoration: underline;
      }
    }
  }

  @media screen and (min-width: 640px) {
    article {
      grid-template-columns: 1fr 1fr 1fr;
      max-width: 900px;
      margin-inline: auto;
    }
  }
</style>
