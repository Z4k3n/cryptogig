import { useState } from 'react';
import { ethers } from 'ethers';

const WalletConnect = ({ onConnect, onDisconnect, connectedAddress }) => {
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    setLoading(true);
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        onConnect(address);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please install MetaMask!');
      setLoading(false);
    }
  };

  const disconnectWallet = () => {
    onDisconnect();
  };

  return (
    <div className="wallet-connection">
      {connectedAddress ? (
        <>
          <span>Connected: {connectedAddress}</span>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </>
      ) : (
        <button onClick={connectWallet} disabled={loading}>
          {loading ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  );
};

export default WalletConnect;