<script lang="ts" context="module">
  import { name, filename } from "../../playwright/src/common-config.ts";
  export { name, filename };
</script>

<script lang="ts">
  import Typography from "../ui-kit/Typography.svelte";
  import Link from "../ui-kit/Link.svelte";
</script>

<div class="container">
  <Link href={`./${filename}`} class="link">
    <Typography>Download PDF</Typography>
  </Link>
</div>

<style lang="postcss">
  .container {
    & .link {
      @media print {
        display: none;
      }
    }
  }
</style>
