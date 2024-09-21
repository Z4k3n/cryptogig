import { useContext, useState } from 'react';
import { WalletContext } from '../pages/context/WalletContext';

const WalletConnect = () => {
  const { connectedAddress, connectWallet, disconnectWallet } = useContext(WalletContext);
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    await connectWallet();
    setLoading(false);
  };

  return (
    <div className="wallet-connection">
      {connectedAddress ? (
        <>
          <span>Connected: {connectedAddress}</span>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </>
      ) : (
        <button onClick={handleConnect} disabled={loading}>
          {loading ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  );
};

export default WalletConnect;