<script lang="ts">
  import { page } from "$app/state";
</script>

<h1>{page.error?.message}</h1>

<style>
  h1 {
    text-align: center;
  }
</style>
