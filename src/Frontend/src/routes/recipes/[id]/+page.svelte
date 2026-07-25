<script lang="ts">
  import { AmountValue } from "$lib/models/Amount";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<div class="recipe">
  {#if data.recipe.description != null}
    <p class="description">{data.recipe.description}</p>
  {/if}

  <aside>
    <h2>Ingredienser</h2>
    {#each data.recipe.ingredients as section}
      {#if section.name != null}
        <h3>{section.name}</h3>
      {/if}
      <ul>
        {#each section.values as ingredient}
          <li>
            {#if ingredient.amount != null}
              <span class="amount">
                {#if AmountValue.isExactValue(ingredient.amount.value)}
                  {ingredient.amount.value.value}
                {:else if AmountValue.isRangeValue(ingredient.amount.value)}
                  <span class="from">{ingredient.amount.value.from}</span>
                  <span class="to">{ingredient.amount.value.to}</span>
                {/if}
              </span>
              {#if ingredient.amount.unit != null}
                <span class="unit">{ingredient.amount.unit}</span>
              {/if}
            {/if}
            <span class="name">{ingredient.name}</span>
          </li>
        {/each}
      </ul>
    {/each}
  </aside>

  <article>
    <h2>Gör såhär</h2>
    {#each data.recipe.instructions as section}
      {#if section.name != null}
        <h3>{section.name}</h3>
      {/if}
      <ol>
        {#each section.values as instruction}
          <li>
            {#if instruction.name != null}
              <h3>{instruction.name}</h3>
            {/if}
            <p>{instruction.text}</p>
          </li>
        {/each}
      </ol>
    {/each}
  </article>
</div>

<style>
  .recipe {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "description"
      "ingredients"
      "instructions";
    padding-inline: 1rem;
    padding-block-end: 4rem;

    > p {
      grid-area: description;
    }

    aside {
      grid-area: ingredients;

      ul {
        display: grid;
        grid-template-areas: "amount unit name";
        grid-template-columns: auto auto 1fr;
        margin: 0px;
        padding: 0px;

        li {
          display: grid;
          grid-column: 1 / 4;
          grid-template-columns: subgrid;
          padding-inline-start: 1rem;

          span {
            &.amount {
              grid-area: amount;
              font-variant-numeric: tabular-nums;
              text-align: end;
            }
            &.unit {
              margin-inline-start: 0.25ch;
              grid-area: unit;
            }
            &.name {
              margin-inline-start: 2ch;
              grid-area: name;
            }
          }
        }
      }
    }

    article {
      grid-area: instructions;
    }
  }

  @media screen and (min-width: 640px) {
    .recipe {
      grid-template-areas:
        "description description"
        "ingredients instructions";
      grid-template-rows: auto auto;
      grid-template-columns: auto 1fr;
      max-width: 900px;
      margin-inline: auto;
    }
  }
</style>
