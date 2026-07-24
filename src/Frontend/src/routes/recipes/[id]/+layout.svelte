<script lang="ts">
  import { page } from "$app/state";
import { Source } from "$lib/models/Source";
  import type { LayoutProps } from "./$types";

  let { data, children }: LayoutProps = $props();
</script>

{#if data.recipe.imageId != null}
  <img src={`/api/assets/${data.recipe.imageId}`} />
{/if}

<h1>{data.recipe.name}</h1>
<p>
  <span class="author">{data.recipe.owner.name}</span>
  {#if page.route.id === "/recipes/[id]" && data.recipe.source != null}
    <span class="source">
      {#if Source.isPlaintext(data.recipe.source) || Source.isPdf(data.recipe.source)}
        Från <a href={`/api/assets/${data.recipe.source.assetId}`}>dokument</a>
      {:else if Source.isImages(data.recipe.source)}
        Från bilder:
        {#each data.recipe.source.assetIds as assetId, i (assetId)}
          <a href={`/api/assets/${assetId}`}>Bild {i + 1}</a>
        {/each}
      {:else if Source.isLink(data.recipe.source)}
        <a href={data.recipe.source.url}>Orginal</a>
      {/if}
    </span>
  {/if}
</p>

{@render children()}
