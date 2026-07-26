<script lang="ts">
  import { resolve } from "$app/paths";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>Kokbok</title>
</svelte:head>

<aside>
  {#if data.user == null}
    <a class="button" href={resolve("/join")}>Gå med</a>
  {:else}
    <a class="button" href={resolve("/create")}>+ Skapa</a>
  {/if}
</aside>

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
  aside {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 0.5rem 2rem;
    background-color: #c48574;
  }

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
    aside {
      padding-block: 1rem;
      padding-inline: calc(max(0px, 100% - 900px) / 2 + 4rem);
    }

    article {
      grid-template-columns: 1fr 1fr 1fr;
      max-width: 900px;
      margin-inline: auto;
    }
  }
</style>
