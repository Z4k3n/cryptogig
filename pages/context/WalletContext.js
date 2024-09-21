import { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';

// Crear el contexto
export const WalletContext = createContext();

// Proveedor del contexto
export const WalletProvider = ({ children }) => {
  const [connectedAddress, setConnectedAddress] = useState(null);

  // Función para conectar la wallet
  const connectWallet = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setConnectedAddress(address);
        console.log("Wallet connected:", address);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  // Desconectar la wallet
  const disconnectWallet = () => {
    setConnectedAddress(null);
  };

  // Verificar si ya hay una wallet conectada cuando la página se carga
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setConnectedAddress(accounts[0]);
        } else {
          setConnectedAddress(null);
        }
      });
    }
  }, []);

  return (
    <WalletContext.Provider value={{ connectedAddress, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};