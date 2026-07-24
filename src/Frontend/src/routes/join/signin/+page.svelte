<script lang="ts">
  import { goto, invalidate } from "$app/navigation";
  import { resolve } from "$app/paths";
  import { tick } from "svelte";

  let loading = $state(false);

  let username = $state("");
  let password = $state("");

  async function signin(e: SubmitEvent) {
    e.preventDefault();
    loading = true;
    await tick();
    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      if (response.status === 200) {
        await invalidate("/auth/about");
        await goto(resolve("/"));
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

<form onsubmit={signin}>
  <p>
    <label>
      <span>Användarnamn:</span>
      <input name="username" type="text" bind:value={username} required disabled={loading} />
    </label>
  </p>
  <p>
    <label>
      <span>Lösenord:</span>
      <input name="password" type="password" bind:value={password} required disabled={loading} />
    </label>
  </p>
  <p>
    <label>
      {#if loading}
        <progress></progress>
      {:else}
        <span>Logga in</span>
      {/if}
      <input type="submit" disabled={loading} />
    </label>
  </p>
</form>

<hr />

<p>Logga in med</p>
<p>
  <a href="/auth/facebook/signin">Facebook</a>
  <a href="/auth/google/signin">Google</a>
  <a href="/auth/microsoft/signin">Microsoft</a>
</p>
