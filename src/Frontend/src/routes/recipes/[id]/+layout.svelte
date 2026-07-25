<script lang="ts">
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import { Source } from "$lib/models/Source";
  import type { LayoutProps } from "./$types";

  let { data, children }: LayoutProps = $props();
</script>

<svelte:head>
  <title>{data.recipe.name} - Kokbok</title>
</svelte:head>

{#if data.recipe.imageId != null}
  <img src={`/api/assets/${data.recipe.imageId}`} />
{/if}

<h1>{data.recipe.name}</h1>
<p>
  <span>{data.recipe.owner.name}</span>
  {#if page.route.id === "/recipes/[id]" && data.recipe.source != null}
    <span>
      {#if Source.isLink(data.recipe.source)}
        <a href={data.recipe.source.url}>Orginal</a>
      {:else}
        <a href={resolve("/recipes/[id]/source", { id: data.recipe.id })}>Källa</a>
      {/if}
    </span>
  {/if}
</p>

{@render children()}

<style>
  img {
    width: 100%;
    display: block;
  }

  h1 {
    margin-block: 0;
  }
  p {
    margin-block-start: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    a[href^="http"]::after {
      content: "";
      display: inline-block;
      width: 1em;
      height: 1em;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImNvbG9yOiBjdXJyZW50Y29sb3I7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTkgMTN2NmEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY3YTIgMiAwIDAgMSAyLTJoNnYySDV2MTJoMTJ2LTZ6TTEzIDN2Mmg0LjU4NmwtNy43OTMgNy43OTNsMS40MTQgMS40MTRMMTkgNi40MTRWMTFoMlYzeiI+PC9wYXRoPjwvc3ZnPg==");
      background-size: cover;
    }
  }
  h1,
  p {
    padding-inline: 1rem;
  }

  @media screen and (min-width: 640px) {
    img,
    h1,
    p {
      max-width: 900px;
      margin-inline: auto;
    }
  }
</style>
