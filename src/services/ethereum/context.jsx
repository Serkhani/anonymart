import { createContext, useContext } from 'react';
import { EthereumContextValue } from './types.jsx';

 const EthereumContext = createContext<EthereumContextValue | null>(null);

 const  useEthereum = () => {
  const context = useContext(EthereumContext);

  if (!context) {
    throw new Error('useEthereum must be used within an EthereumProvider');
  }
  return context;
};


export default {EthereumContext, useEthereum};