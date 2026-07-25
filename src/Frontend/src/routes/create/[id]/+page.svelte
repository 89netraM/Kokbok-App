<script lang="ts">
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";
  import type { PageProps } from "./$types";
  import { resolve } from "$app/paths";

  let { params, data }: PageProps = $props();

  onMount(() => {
    if (data.job.completedAt == null) {
      const interval = setInterval(() => {
        invalidate(`/api/recipes/jobs/${params.id}`);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  });
</script>

{#if data.job.completedAt != null}
  {#if data.job.recipeId != null}
    <h1>Ditt recept är redo</h1>
    <p><a href={resolve("/recipes/[id]", { id: data.job.recipeId })}>Visa det nya receptet</a></p>
  {:else}
    <h1>Ditt recept kunde inte skapas</h1>
    <p>Det gick inte att skapa ett recept baserat på källan du angav. Byt källa eller försök igen.</p>
    {#if data.job.errorMessage != null}
      <details>
        <summary>Visa tekniskt felmeddelande</summary>
        <pre>{data.job.errorMessage}</pre>
      </details>
    {/if}
  {/if}
{:else}
  {#if data.job.startedAt != null}
    <h1>Ditt recept bearbetas</h1>
  {:else}
    <h1>Ditt recept ligger i kön</h1>
    <p>Så fort det blir din tur kommer ditt receptet börja skapas</p>
  {/if}
  <p>Det här kan ta ett tag, du kan läsa andra recept medans du väntar.</p>
{/if}

<style>
  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>
