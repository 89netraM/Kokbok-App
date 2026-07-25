<script>
  import { resolve } from "$app/paths";
</script>

<div>
  <a class="button" href={resolve("/join/signin")}>Logga in</a>
  <a class="button" href={resolve("/join/signup")}>Registrera dig</a>
</div>

<style>
  div {
    width: 100%;
    height: 100%;
    display: grid;
    gap: 2rem;
    grid-template-rows: auto auto;
    text-align: center;

    @media screen and (min-width: 640px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      align-items: center;
    }
  }
</style>
