<script lang="ts">
  import Typography, { type Level } from "./Typography.svelte";
  import Link from "./Link.svelte";

  export let address: string;
  export let text: string | undefined = undefined;
  export let level: Level | undefined = undefined;
</script>

<Link href={`mailto:${address}`} class={$$props.class}>
  <Typography {level}>{text ?? address}</Typography>
</Link>
