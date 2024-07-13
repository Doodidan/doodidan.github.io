<script lang="ts">
  import packageJson from "../../../../package.json";
  import Email from "../../../ui-kit/Email.svelte";
</script>

<Email address={packageJson.author.email} />
