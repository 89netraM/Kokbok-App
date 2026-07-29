<script lang="ts">
  import { goto, invalidate } from "$app/navigation";
  import { resolve } from "$app/paths";
  import { tick } from "svelte";

  let loading = $state(false);

  let link = $state("");

  async function create(e: SubmitEvent) {
    e.preventDefault();
    loading = true;
    await tick();
    try {
      const response = await fetch("/api/recipes/jobs", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "link",
          link,
        }),
      });
      if (response.status === 202) {
        const { id } = await response.json();
        await goto(resolve("/create/[id]", { id }));
        return;
      }
      const result = await response.json();
      // TODO: Error handling
      console.warn(result);
    } finally {
      loading = false;
    }
  }
</script>

<form onsubmit={create}>
  <p>
    <label>
      <span>Länk:</span>
      <input name="link" type="text" bind:value={link} required disabled={loading} />
    </label>
  </p>
  <p>
    <label class="button" tabindex="0">
      {#if loading}
        <progress></progress>
      {:else}
        <span>Skapa</span>
      {/if}
      <input type="submit" disabled={loading} />
    </label>
  </p>
</form>
