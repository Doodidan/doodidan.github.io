<script lang="ts" context="module">
  export type Level =
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "b"
    | "i"
    | "s";
</script>

<script lang="ts">
  export let level: Level = "p";
</script>

<svelte:element this={level} class={$$props.class}><slot /></svelte:element>
