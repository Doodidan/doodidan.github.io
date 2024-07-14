<script lang="ts">
  import Typography from "../../../ui-kit/Typography.svelte";
  import Link from "../../../ui-kit/Link.svelte";

  const REGEXP = /^[^\+\d]|(?<=.)[^\d]/g;
  const { tel } = user;
  const linkTel = tel.replaceAll(REGEXP, "");
</script>

<Link href={`tel:${linkTel}`}>
  <Typography>{tel}</Typography>
</Link>
