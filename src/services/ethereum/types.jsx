
export const EthereumContextValue = {
  account: { isConnected: true, address: '' } || { isConnected: false, address: null },
  network: null,
  switchNetwork: (chainId) => Promise.resolve(),
  connect: () => {},
  disconnect: () => {},
  getWeb3: () => null,
};

export const Account =
  { isConnected: true, address: '' } || { isConnected: false, address: null };

export const Network = null;
