<script lang="ts">
  import data from "../../data.json";
  import Typography from "../../ui-kit/Typography.svelte";

  const {
    role: { content },
  } = data;
</script>

<Typography>{content}</Typography>
