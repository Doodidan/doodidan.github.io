<script lang="ts">
  import data from "../../data.json";
  import Skills from "./Skills.svelte";

  const {
    hardSkills: { title, content: skills },
  } = data;
</script>

<Skills {title} {skills} />
