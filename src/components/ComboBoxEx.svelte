<script>
  import { ComboBox } from "carbon-components-svelte";
</script>

<ComboBox
  titleText="Contact"
  placeholder="Select contact method"
  items={[{ id: '0', text: 'Slack' }, { id: '1', text: 'Email' }, { id: '2', text: 'Fax' }]}
/>
<ComboBox
  titleText="Contact"
  placeholder="Select contact method"
  selectedIndex={1}
  items={[{ id: '0', text: 'Slack' }, { id: '1', text: 'Email' }, { id: '2', text: 'Fax' }]}
/>