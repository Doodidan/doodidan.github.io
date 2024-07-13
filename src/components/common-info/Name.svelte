<script lang="ts">
  import packageJson from "../../../package.json";
  import Typography from "../../ui-kit/Typography.svelte";
</script>

<Typography level="h1">{packageJson.author.name}</Typography>
