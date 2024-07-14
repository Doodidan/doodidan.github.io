<script lang="ts">
  import Typography from "../../ui-kit/Typography.svelte";

  export let isFirst = false;
  export let isHidden = false;
  export let company: string | undefined = undefined;
  export let location: string | undefined = undefined;
  export let role: string | undefined = undefined;
  export let start: Date | undefined = undefined;
  export let end: Date | undefined = undefined;
  export let brief: string | undefined = undefined;
  export let keynotes: string[] | undefined = undefined;
</script>

{#if !isHidden}
  {#if !isFirst}
    <hr />
  {/if}

  {#if company !== undefined}
    <Typography>{company}</Typography>
  {/if}

  {#if location !== undefined}
    <Typography>{location}</Typography>
  {/if}

  {#if role !== undefined}
    <Typography>{role}</Typography>
  {/if}

  {#if start !== undefined}
    <Typography>{start.toString()}</Typography>
  {/if}

  {#if end !== undefined}
    <Typography>{end.toString()}</Typography>
  {/if}

  {#if brief !== undefined}
    <Typography>{brief}</Typography>
  {/if}

  {#if keynotes !== undefined}
    <ul>
      {#each keynotes as keynote}
        <li>
          <Typography>{keynote}</Typography>
        </li>
      {/each}
    </ul>
  {/if}
{/if}
