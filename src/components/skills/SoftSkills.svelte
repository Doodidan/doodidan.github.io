<script lang="ts">
  import data from "../../data.json";
  import Skills from "./Skills.svelte";

  const {
    softSkills: { title, content: skills },
  } = data;
</script>

<Skills {title} {skills} />
