<script lang="ts">
  import data from "../../data.json";
  import Typography from "../../ui-kit/Typography.svelte";
  import Item from "./Item.svelte";

  const title = "Experience";
  const {
    experience: { brief, items: rawItems },
  } = data;
  const items = rawItems
    .map((item) => ({
      ...item,
      start: item.start !== undefined ? new Date(item.start) : undefined,
      end: item.end !== undefined ? new Date(item.end) : undefined,
    }))
    .sort((left, right) => {
      if (left.end === undefined && right.end === undefined) {
        if (left.start === undefined && right.start === undefined) {
          return 0;
        }
        if (left.start === undefined) return -1;
        if (right.start === undefined) return 1;
        if (left.start > right.start) return -1;
        if (left.start < right.start) return 1;
        return 0;
      }
      if (left.end === undefined) return -1;
      if (right.end === undefined) return 1;
      if (left.end > right.end) return -1;
      if (left.end < right.end) return 1;
      return 0;
    });
</script>

<Typography level="h2">{title}</Typography>
<Typography>{brief}</Typography>

{#each items as item}
  <Item {...item} />
{/each}
