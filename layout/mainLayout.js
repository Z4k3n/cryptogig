import { useState } from 'react';
import WalletConnect from '../components/WalletConnect';

const MainLayout = ({ children }) => {
  const [connectedAddress, setConnectedAddress] = useState(null);

  const handleConnect = (address) => {
    setConnectedAddress(address);
  };

  const handleDisconnect = () => {
    setConnectedAddress(null);
  };

  return (
    <div className="layout">
      <main>{children}</main>
    </div>
  )
};

export default MainLayout;
