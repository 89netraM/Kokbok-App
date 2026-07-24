<script lang="ts">
  import { goto, invalidate } from "$app/navigation";
  import { resolve } from "$app/paths";
  import { tick } from "svelte";

  let loading = $state(false);

  let username = $state("");
  let email = $state("");
  let name = $state("");
  let password = $state("");

  async function signup(e: SubmitEvent) {
    e.preventDefault();
    loading = true;
    await tick();
    try {
      const response = await fetch("/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          name,
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

<form onsubmit={signup}>
  <p>
    <label>
      <span>Användarnamn:</span>
      <input name="username" type="text" bind:value={username} required disabled={loading} />
    </label>
  </p>
  <p>
    <label>
      <span>E-post:</span>
      <input name="email" type="email" bind:value={email} required disabled={loading} />
    </label>
  </p>
  <p>
    <label>
      <span>Namn:</span>
      <input name="name" type="text" bind:value={name} required disabled={loading} />
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
        <span>Registrera dig</span>
      {/if}
      <input type="submit" disabled={loading} />
    </label>
  </p>
</form>

<hr />

<p>Registrera med</p>
<p>
  <a href="/auth/facebook/signin">Facebook</a>
  <a href="/auth/google/signin">Google</a>
  <a href="/auth/microsoft/signin">Microsoft</a>
</p>
