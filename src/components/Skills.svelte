<script lang="ts">
  import data from "../data.json";
  import Typography from "../ui-kit/Typography.svelte";

  const title = "Skills";
  const { skills } = data;
</script>

<Typography level="h2">{title}</Typography>
{#each skills as skill}
  <Typography>
    {typeof skill === "string"
      ? skill
      : `${skill.title}: ${skill.skills.join(", ")}`}
  </Typography>
{/each}
