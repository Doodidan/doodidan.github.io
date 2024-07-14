<script lang="ts">
  import packageJson from "../../../package.json";
  import Typography from "../../ui-kit/Typography.svelte";

  const { name } = packageJson.author;
</script>

<Typography level="h1">{name}</Typography>
