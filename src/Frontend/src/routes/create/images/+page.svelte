<script lang="ts">
  import { goto } from "$app/navigation";
  import { resolve } from "$app/paths";
  import { Asset } from "$lib/models/Asset";
  import { tick } from "svelte";

  let loading = $state(false);

  let images: Array<string> = $state(["1274b410-12a8-4db2-b5ee-d12a9e7e7c71"]);

  async function imageUpload(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input.files == null || input.files.length < 1) {
      return;
    }

    const uploads = [];
    for (const file of input.files) {
      const body = new FormData();
      body.append("file", file, file.name);
      uploads.push(
        (async () => {
          const response = await fetch("/api/assets", {
            method: "PUT",
            body,
          });
          const json = await response.text();
          return JSON.parse(json, Asset.reviver) as Asset;
        })(),
      );
    }
    const results = await Promise.all(uploads);
    images.unshift(...results.map((a) => a.id));
  }

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
          type: "images",
          images,
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
  <h2>Bilder:</h2>
  <p>
    <label class="button">
      <span>Ladda upp</span>
      <input name="image" type="file" accept=".jpg,.png,image/*" multiple disabled={loading} onchange={imageUpload} />
    </label>
  </p>
  <ul>
    {#each images as image, i (image)}
      <li>
        <img src={`/api/assets/${image}`} />
        <button onclick={() => images.splice(i, 1)}>🗑️</button>
      </li>
    {/each}
  </ul>
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

<style>
  ul {
    height: 50svh;
    width: 90svw;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    overflow: auto hidden;
    scrollbar-width: thin;
    scrollbar-gutter: stable;
    overscroll-behavior: none;
    list-style: none;
    padding: 0;
    container-type: size;

    li {
      max-height: 100cqh;
      max-width: 90cqw;
      flex-shrink: 0;
      position: relative;

      img {
        max-height: 100cqh;
        max-width: 100%;
        object-fit: contain;
      }

      button {
        position: absolute;
        top: 0;
        right: 0;

        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;

        text-shadow: 0px 0px 2px #00000074;
        transition: text-shadow 0.1s;

        &:hover {
          text-shadow: 0px 0px 10px #000000;
        }
      }
    }
  }
</style>
