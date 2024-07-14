<script lang="ts">
  import Typography from "../../ui-kit/Typography.svelte";

  export let title: string;
  export let skills: (string | { title: string; skills: string[] })[];
</script>

<Typography level="h2">{title}</Typography>
{#each skills as skill}
  <Typography>
    {typeof skill === "string"
      ? skill
      : `${skill.title}: ${skill.skills.join(", ")}`}
  </Typography>
{/each}
