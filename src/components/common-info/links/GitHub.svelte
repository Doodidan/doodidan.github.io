<script lang="ts">
  import packageJson from "../../../../package.json";
  import Typography from "../../../ui-kit/Typography.svelte";
  import Link from "../../../ui-kit/Link.svelte";

  const REGEXP_USER = /^github:(\w+?)\//;
  const account = packageJson.repository.url.match(REGEXP_USER)?.[1];
</script>

{#if account !== undefined}
  <Link href={`https://github.com/${account}`}>
    <Typography>GitHub</Typography>
  </Link>
{/if}
