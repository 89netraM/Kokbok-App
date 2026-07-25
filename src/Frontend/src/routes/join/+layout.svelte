<script lang="ts">
  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();
</script>

<div>
  <dialog open>
    {@render children()}
  </dialog>
</div>

<style>
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    dialog {
      position: relative;
      border: none;

      @media screen and (min-width: 640px) {
        padding: 2rem;
        border-radius: 2rem;
        background-color: #bac4a1;
        aspect-ratio: 5 / 4;
      }
    }
  }
</style>
