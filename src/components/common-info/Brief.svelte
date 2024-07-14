<script lang="ts">
  import data from "../../data.json";
  import Typography from "../../ui-kit/Typography.svelte";

  const {
    brief: { title, content },
  } = data;
</script>

<Typography level="h2">{title}</Typography>
<Typography>{content}</Typography>
