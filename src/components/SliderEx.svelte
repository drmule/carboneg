<script>
  import { Slider } from "carbon-components-svelte";
</script>

<Slider
  labelText="Runtime memory (MB)"
  min={10}
  max={175}
  maxLabel="175 cm"
  value={100}
  step={5}
/>
