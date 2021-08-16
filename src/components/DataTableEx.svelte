<script>
  import { DataTable, Link } from "carbon-components-svelte";
  import Launch16 from "carbon-icons-svelte/lib/Launch16";
</script>

<DataTable
  headers={[{ key: 'name', value: 'Name' }, { key: 'protocol', value: 'Protocol' }, { key: 'port', value: 'Port' }, { key: 'rule', value: 'Rule' }]}
  rows={[{ id: 'a', name: 'Load Balancer 3', protocol: 'HTTP', port: 3000, rule: 'Round robin' }, { id: 'b', name: 'Load Balancer 1', protocol: 'HTTP', port: 443, rule: 'Round robin' }, { id: 'c', name: 'Load Balancer 2', protocol: 'HTTP', port: 80, rule: 'DNS delegation' }, { id: 'd', name: 'Load Balancer 6', protocol: 'HTTP', port: 3000, rule: 'Round robin' }, { id: 'e', name: 'Load Balancer 4', protocol: 'HTTP', port: 443, rule: 'Round robin' }, { id: 'f', name: 'Load Balancer 5', protocol: 'HTTP', port: 80, rule: 'DNS delegation' }]}
>
  <span slot="cell-header" let:header>
    {#if header.key === 'port'}
      {header.value}
      (network)
    {:else}{header.value}{/if}
  </span>
  <span slot="cell" let:row let:cell>
    {#if cell.key === 'rule' && cell.value === 'Round robin'}
      <Link
        icon={Launch16}
        href="https://en.wikipedia.org/wiki/Round-robin_DNS"
        target="_blank"
      >
        {cell.value}
      </Link>
    {:else}{cell.value}{/if}
  </span>
</DataTable>
<DataTable
  title="Load balancers"
  description="Your organization's active load balancers."
  headers={[{ key: 'name', value: 'Name' }, { key: 'protocol', value: 'Protocol' }, { key: 'port', value: 'Port' }, { key: 'rule', value: 'Rule' }]}
  rows={[{ id: 'a', name: 'Load Balancer 3', protocol: 'HTTP', port: 3000, rule: 'Round robin' }, { id: 'b', name: 'Load Balancer 1', protocol: 'HTTP', port: 443, rule: 'Round robin' }, { id: 'c', name: 'Load Balancer 2', protocol: 'HTTP', port: 80, rule: 'DNS delegation' }, { id: 'd', name: 'Load Balancer 6', protocol: 'HTTP', port: 3000, rule: 'Round robin' }, { id: 'e', name: 'Load Balancer 4', protocol: 'HTTP', port: 443, rule: 'Round robin' }, { id: 'f', name: 'Load Balancer 5', protocol: 'HTTP', port: 80, rule: 'DNS delegation' }]}
/>