<script lang="ts">
  import packageJson from "../../../package.json";
  import Typography from "../../ui-kit/Typography.svelte";
  import Link from "../../ui-kit/Link.svelte";

  const regexp = /^github:(\w+?)\//;
  const account = packageJson.repository.url.match(regexp)[1];
</script>

<Link href={`https://github.com/${account}`}>
  <Typography>GitHub</Typography>
</Link>
