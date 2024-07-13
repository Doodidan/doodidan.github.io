<script lang="ts">
  import PageTitle from "../ui-kit/PageTitle.svelte";
  import CommonInfo from "./common-info/CommonInfo.svelte";
  import PDF, { filename } from "./PDF.svelte";

  const REGEXP_TITLE = /(.+)\.pdf/;
  const title = filename.match(REGEXP_TITLE)[1];
</script>

<PageTitle {title} />

<CommonInfo />

<PDF />
