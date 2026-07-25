<script lang="ts">
  import "../app.css";
  import { resolve } from "$app/paths";
  import type { LayoutProps } from "./$types";

  let { data, children }: LayoutProps = $props();
</script>

<nav>
  <h1><a href={resolve("/")}>Kokbok</a></h1>
  <p id="account">
    {#if data.user == null}
      <a href={resolve("/join")}>Gå med</a>
    {:else}
      {data.user.name}
    {/if}
  </p>
</nav>

<main>
  {@render children()}
</main>

<footer>
  <span>
    <a href="https://github.com/89netraM/kokbok-app">Kokbok</a>
    🧡
    <a href="https://xn--sberg-lra.net/">Mårten</a>
  </span>
</footer>

<style>
  nav {
    grid-area: nav;

    padding: 1rem 2rem;
    color: #ffffff;
    background-color: #a25847;
    position: sticky;
    top: 0px;

    display: grid;
    grid-template-areas: "title center account";
    grid-template-columns: auto 1fr auto;
    align-items: baseline;

    h1,
    p {
      margin: 0px;

      a {
        color: #ffffff;
        text-decoration: none;
      }
    }

    h1 {
      grid-area: title;
    }

    #account {
      grid-area: account;
    }
  }

  main {
    grid-area: content;
    background-color: #ffffff;
  }

  footer {
    grid-area: footer;

    min-height: 4rem;
    color: #ffffff;
    background-color: #5d6755;

    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: #ffffff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
