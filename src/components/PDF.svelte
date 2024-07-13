<script lang="ts" context="module">
  import { filename } from "../../playwright/src/common-config.ts";
  export { filename };
</script>

<script lang="ts">
  import Typography from "../ui-kit/Typography.svelte";
  import Link from "../ui-kit/Link.svelte";
</script>

<Link href={`./${filename}`}>
  <Typography>Download PDF</Typography>
</Link>
