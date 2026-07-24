<script lang="ts">
  import { resolve } from "$app/paths";
  import type { LayoutProps } from "./$types";

  let { data, children }: LayoutProps = $props();
</script>

<nav>
  <h1><a href={resolve("/")}>Kokbok</a></h1>
  {#if data.user == null}
    <p><a href={resolve("/join")}>Gå med</a></p>
  {:else}
    <p>{data.user.name}</p>
  {/if}
</nav>

{@render children()}
