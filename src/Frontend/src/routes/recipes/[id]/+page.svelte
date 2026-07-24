<script lang="ts">
  import { AmountValue } from "$lib/models/Amount";
  import { Source } from "$lib/models/Source";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

{#if data.recipe.description != null}
  <p>{data.recipe.description}</p>
{/if}

{#each data.recipe.ingredients as section}
  {#if section.name != null}
    <h2>{section.name}</h2>
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

{#each data.recipe.instructions as section}
  {#if section.name != null}
    <h2>{section.name}</h2>
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
