<script lang="ts">
  import Typography from "../../ui-kit/Typography.svelte";
  import Link from "../../ui-kit/Link.svelte";

  const short = "linkedin.com/in/doodidan";
  const url = `https://www.${short}/`;
</script>

<Link href={url}>
  <Typography>{short}</Typography>
</Link>
