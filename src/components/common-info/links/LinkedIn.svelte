<script lang="ts">
  import data from "../../../data.json";
  import Typography from "../../../ui-kit/Typography.svelte";
  import Link from "../../../ui-kit/Link.svelte";

  const { linkedIn: account } = data;
  const short = `linkedin.com/in/${account}`;
  const url = `https://www.${short}/`;
</script>

<Link href={url}>
  <Typography>{short}</Typography>
</Link>
