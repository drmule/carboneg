<script>
  import { Button, ButtonSet } from "carbon-components-svelte";
  import TrashCan16 from "carbon-icons-svelte/lib/TrashCan16";
  import Add16 from "carbon-icons-svelte/lib/Add16";
</script>


<ButtonSet stacked>
  <Button>Primary button</Button>
  <Button kind="secondary">Secondary button</Button>
  <Button kind="tertiary">Tertiary button</Button>
</ButtonSet>
<Button kind="ghost">Ghost button</Button>
<ButtonSet>
  <Button kind="danger">Danger button</Button>
  <Button kind="danger-tertiary">Danger tertiary button</Button>
  <Button kind="danger-tertiary" iconDescription="Delete" icon={TrashCan16} />
  <Button kind="danger-ghost">Danger ghost button</Button>
</ButtonSet>
<Button icon={Add16}>With icon</Button>
<Button iconDescription="Tooltip text" icon={Add16} />
