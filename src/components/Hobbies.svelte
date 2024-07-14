<script lang="ts">
  import data from "../data.json";
  import Typography from "../ui-kit/Typography.svelte";

  const {
    hobbies: { title, content: hobbies },
  } = data;
</script>

<Typography level="h2">{title}</Typography>
<Typography>{hobbies.join(", ")}</Typography>
