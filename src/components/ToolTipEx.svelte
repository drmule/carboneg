<script>
  import { Tooltip, TooltipDefinition, TooltipIcon , Button } from "carbon-components-svelte";
  import Carbon24 from "carbon-icons-svelte/lib/Carbon24";

  let open = true;
</script>

<style>
  div {
    margin-top: var(--cds-spacing-05);
  }</style>

<Tooltip bind:open triggerText="Resource list" align="start">
  <p>Resources are provisioned based on your account's organization.</p>
</Tooltip>

<div style="margin-top: var(--cds-spacing-12);">
  <Button size="small" on:click={() => (open = !open)}>
    {open ? 'Close tooltip' : 'Open tooltip'}
  </Button>
</div>

<div>Open: {open}</div>

<TooltipDefinition
  direction="top"
  align="start"
  tooltipText="IBM Corporate Headquarters is based in Armonk, New York."
>
  <h2>Armonk</h2>
</TooltipDefinition>
<TooltipIcon
  tooltipText="Carbon is an open source design system by IBM."
  icon={Carbon24}
/>


