export interface BaseProviderState {
  state: "connected" | "disconnected" | "loading";
}

export type ProviderType = "metamask" | "opera" | "other";

export interface ConnectedProviderState extends BaseProviderState {
  state: "connected";
  provider: Provider;
}

export interface DisconnectedProviderState extends BaseProviderState {
  state: "disconnected";
}

export interface LoadingProviderState extends BaseProviderState {
  state: "loading";
}

export type ProviderState =
  | ConnectedProviderState
  | DisconnectedProviderState
  | LoadingProviderState;

export interface EventEmitter {
  emit(eventName: string, args: never[]): EventEmitter;
  on(
    eventName: "chainChanged" | "accountsChanged" | "connect" | "disconnect",
    listener: EventListener
  ): EventEmitter;
  addListener(eventName: string, listener: EventListener): EventEmitter;
  removeListener(eventName: string, listener: EventListener): EventEmitter;
  removeAllListeners(eventName?: string): EventEmitter;
}

export type JSONRPCId = string | number | null;

export interface JSONRPCRequest {
  jsonrpc?: "2.0";
  method: string;
  params?: unknown[] | object;
  id?: JSONRPCId;
}

export interface JSONRPCError {
  message: string;
  code: number;
  data?: unknown;
}

export interface JSONRPCResultResponse {
  jsonrpc: "2.0";
  id: JSONRPCId;
  result: unknown;
}

export interface JSONRPCErrorResponse {
  jsonrpc: "2.0";
  id: JSONRPCId;
  error: JSONRPCError;
}

export type JSONRPCResponse = JSONRPCErrorResponse | JSONRPCResultResponse;

export type JSONRPCCallback = (error: JSONRPCError | null, response: JSONRPCResponse) => unknown;

interface BaseProvider extends EventEmitter {
  chainId: string | null;
  networkVersion: string | null;

  selectedAddress: string | null;

  enable(): Promise<string>;

  isConnected(): boolean;

  send(
    requestOrMethod: JSONRPCRequest | string,
    callbackOrParams?: JSONRPCCallback | unknown[]
  ): Promise<JSONRPCResponse>;

  request(request: JSONRPCRequest): Promise<unknown>;
}

export interface MetaMaskProvider extends BaseProvider {
  isMetaMask: boolean;
  _metamask: { isUnlocked: () => boolean };
}

export interface OperaProvider extends BaseProvider {
  isOpera: boolean;
}

export type Provider = MetaMaskProvider | OperaProvider;

declare global {
  interface Window {
    ethereum?: Provider;
    web3?: { currentProvider: Provider };
  }
}
