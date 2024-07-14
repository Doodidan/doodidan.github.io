<script lang="ts">
  import data from "../../data.json";
  import Typography from "../../ui-kit/Typography.svelte";

  const title = "Brief";
  const { brief } = data;
</script>

<Typography level="h2">{title}</Typography>
<Typography>{brief}</Typography>
