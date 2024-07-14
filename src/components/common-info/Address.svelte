<script lang="ts">
  import data from "../../data.json";
  import Typography from "../../ui-kit/Typography.svelte";

  const {
    address: { content },
  } = data;
</script>

<Typography>{content}</Typography>
