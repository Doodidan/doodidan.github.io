<script lang="ts">
  import packageJson from "../../../../package.json";
  import Email from "../../../ui-kit/Email.svelte";

  const { email: address } = packageJson.author;
</script>

<Email {address} />
