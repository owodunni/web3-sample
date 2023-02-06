<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import { availableProviders, connect, providerState, disconnect } from "$lib/provider";

  $: noProvider = availableProviders().length === 0;
  $: disconnected = availableProviders().length > 0 && $providerState.state === "disconnected";
</script>

{#if noProvider}
  <p>No providers available</p>
{:else if $providerState.state === "loading"}
  <p>Loading...</p>
{:else if disconnected}
  <Button on:click={connect} disable={noProvider}>Connect</Button>
{:else}
  <p>Connected to {availableProviders()[0]}!</p>
  <p>Chain id: {$providerState.provider.chainId}</p>
  <p>Selected address: {$providerState.provider.selectedAddress}</p>
{/if}
