import { browser } from "$app/environment";
import { writable } from "svelte/store";
import type {
  ConnectedProviderState,
  MetaMaskProvider,
  OperaProvider,
  Provider,
  ProviderState
} from "./types";

export type ProviderType = "metamask" | "opera" | "other";

export function availableProviders(): [] | [ProviderType] {
  if (!browser || !window.ethereum) return [];
  const ethereum = window.ethereum;
  return [
    (ethereum as MetaMaskProvider).isMetaMask
      ? "metamask"
      : (ethereum as OperaProvider).isOpera
      ? "opera"
      : "other"
  ];
}

export const providerState = writable<ProviderState>({ state: "disconnected" });

/** Check if the injected provider is connected and update the store accordingly */
function getProviderState(): ProviderState {
  if (!browser) return { state: "loading" };
  if (!window.ethereum) return { state: "disconnected" };
  const ethereum = window.ethereum;

  const available = availableProviders();
  if (available.length === 0) return { state: "disconnected" };

  if (ethereum.isConnected() && ethereum.selectedAddress && ethereum.chainId) {
    return {
      state: "connected",
      provider: ethereum
    };
  }
  return { state: "disconnected" };
}

const setState = (state: ProviderState) => providerState.set(state);
const stateChanged = () => setState(getProviderState());

const connected = (ethereum: Provider, state: ConnectedProviderState) => {
  ethereum.on("chainChanged", stateChanged);
  ethereum.on("accountsChanged", stateChanged);
  ethereum.on("connect", stateChanged);
  ethereum.on("disconnect", stateChanged);
  return setState(state);
};

export const connect = async (): Promise<void> => {
  if (!window.ethereum) return;
  const ethereum = window.ethereum;

  let connectedState = getProviderState();
  if (connectedState.state === "connected") {
    return connected(ethereum, connectedState);
  }

  /** Set loading to disable web3Modal button while Provider dialogs might be showing */
  providerState.set({ state: "loading" });

  await ethereum.request({ method: "eth_requestAccounts", jsonrpc: "2.0", id: 1 });
  connectedState = getProviderState();
  if (connectedState.state === "connected") return connected(ethereum, connectedState);
  return disconnect();
};

const connectIfConnected = async () => {
  if (!browser || !window.ethereum) return;
  const ethereum = window.ethereum;

  const connectedState = getProviderState();
  if (connectedState.state === "connected") {
    return connected(ethereum, connectedState);
  }
};

export const disconnect = (): void => {
  providerState.set({ state: "disconnected" });
};

connectIfConnected();
