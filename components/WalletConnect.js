import { useContext, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { WalletContext } from '../pages/context/WalletContext';
import jazzicon from '@metamask/jazzicon';

const WalletConnect = () => {
  const { connectedAddress, connectWallet, disconnectWallet } = useContext(WalletContext);
  const [loading, setLoading] = useState(false);
  const avatarRef = useRef();
  const router = useRouter();

  const handleConnect = async () => {
    setLoading(true);
    await connectWallet();
    setLoading(false);
  };

  useEffect(() => {
    const element = avatarRef.current;
    if (element && connectedAddress) {
      const addr = connectedAddress.slice(2, 10);
      const seed = parseInt(addr, 16);
      const icon = jazzicon(40, seed); // tamaño de 40px
      if (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      element.appendChild(icon);
    }
  }, [connectedAddress]);

  const handleProfileClick = () => {
    router.push('/profile'); // Asegúrate de que la ruta sea correcta
  };

  return (
    <div className="wallet-connection">
      {connectedAddress ? (
        <div className="wallet-profile" onClick={handleProfileClick}>
          <div ref={avatarRef} className="profile-icon"></div>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </div>
      ) : (
        <button onClick={handleConnect} disabled={loading}>
          {loading ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  );
};

export default WalletConnect;