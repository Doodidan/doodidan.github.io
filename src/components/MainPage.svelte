<script lang="ts">
  import PageTitle from "../ui-kit/PageTitle.svelte";
  import CommonInfo from "./common-info/CommonInfo.svelte";
  import PDF, { name as title } from "./PDF.svelte";
  import Skills from "./Skills.svelte";
  import Experience from "./experience/Experience.svelte";
  import Languages from "./Languages.svelte";
</script>

<PageTitle {title} />

<CommonInfo />
<PDF />
<Skills />
<Experience />
<Languages />
