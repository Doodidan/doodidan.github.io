<script lang="ts">
  import data from "../data.json";
  import Typography from "../ui-kit/Typography.svelte";

  const title = "Languages";
  const { languages } = data;
</script>

<Typography level="h2">{title}</Typography>
<Typography>
  {languages.map(({ title, level }) => `${title} - ${level}.`).join(" ")}
</Typography>
