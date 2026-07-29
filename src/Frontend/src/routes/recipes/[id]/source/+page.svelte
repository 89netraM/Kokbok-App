<script lang="ts">
  import { Source } from "$lib/models/Source";
  import type { PageProps } from "../$types";

  let { data }: PageProps = $props();
</script>

{#if Source.isPlaintext(data.recipe.source)}
  <pre>
    {#await fetch(`/api/assets/${data.recipe.source.assetId}`).then((r) => r.text())}
      Laddar...
    {:then text}
      {text}
    {:catch}
      Orginaltexten kunde inte hämtas
    {/await}
  </pre>
{:else if Source.isPdf(data.recipe.source)}
  <iframe src={`/api/assets/${data.recipe.source.assetId}`}></iframe>
{:else if Source.isImages(data.recipe.source)}
  <ul>
    {#each data.recipe.source.assetIds as assetId (assetId)}
      <li><img src={`/api/assets/${assetId}`} /></li>
    {/each}
  </ul>
{:else}
  <p>Orginalkällan kunde inte fastställas</p>
{/if}

<style>
  pre,
  iframe,
  ul,
  p {
    padding-inline: 1rem;
    padding-block-end: 4rem;
  }

  ul {
    list-style: none;

    li {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 640px) {
    pre,
    iframe,
    ul,
    p {
      max-width: 900px;
      margin-inline: auto;
    }
  }
</style>
