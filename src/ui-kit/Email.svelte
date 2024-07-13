<script lang="ts">
  import Typography, { type Level } from "./Typography.svelte";
  import Link from "./Link.svelte";

  export let address: string;
  export let text: string | undefined;
  export let level: Level | undefined;
</script>

<Link href={`mailto:${address}`}>
  <Typography {level}>{text ?? address}</Typography>
</Link>
