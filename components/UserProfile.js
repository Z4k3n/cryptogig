import React, { useState, useContext, useEffect } from 'react';
import { WalletContext } from '../pages/context/WalletContext';
import jazzicon from '@metamask/jazzicon';
import { FaClipboard } from 'react-icons/fa';

const UserProfile = () => {
  const { connectedAddress, disconnectWallet } = useContext(WalletContext);
  const [userData, setUserData] = useState({
    username: '',
    bio: '',
    email: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    website: '',
    profilePicture: null,
    banner: null,
  });
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (!connectedAddress) {
      alert('Por favor, inicia sesión para acceder a esta página.');
      window.location.href = '/';
    }
  }, [connectedAddress]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setUserData({ ...userData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User data submitted:', userData);
  };

  const renderAvatar = () => {
    if (userData.profilePicture) {
      return <img src={URL.createObjectURL(userData.profilePicture)} alt="Profile" />;
    }

    const addr = connectedAddress.slice(2, 10);
    const seed = parseInt(addr, 16);
    const icon = jazzicon(100, seed);
    return <div dangerouslySetInnerHTML={{ __html: icon.outerHTML }} />;
  };

  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText(connectedAddress);
    alert('Wallet address copied to clipboard!');
  };

  const shortAddress = `${connectedAddress.slice(0, 6)}...${connectedAddress.slice(-4)}`;

  return (
    <div className="user-profile">
      <nav className="navbar">
        <h1 className="navbar-title">User Profile</h1>
        <div className="navbar-right">
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <button onClick={() => window.location.href = '/'}>Home</button>
        </div>
      </nav>

      <div className="card">
        <h1>Profile Details</h1>
        <p>
          <strong>Wallet Address:</strong> {shortAddress}
          <span onClick={copyAddressToClipboard} className="copy-icon">
            <FaClipboard />
          </span>
        </p>

        <div className="banner-avatar-container">
          <div className="banner" style={{ backgroundImage: `url(${userData.banner ? URL.createObjectURL(userData.banner) : '../assets/images/default-banner.png'})` }}>
            <label style={{ display: 'none' }}>Banner:</label>
            <input type="file" name="banner" accept="image/*" onChange={handleFileChange} />
            <span
              onMouseEnter={() => setShowInfo(true)}
              onMouseLeave={() => setShowInfo(false)}
              className="info-icon"
            >
              i
            </span>
            {showInfo && (
              <div className="info-tooltip">
                <p>Dimensiones recomendadas: 1200x600px</p>
                <p>Tamaño máximo: 2MB</p>
              </div>
            )}
          </div>

          <div className="avatar">
            {renderAvatar()}
            <label>Username:</label>
            <input type="text" name="username" value={userData.username} onChange={handleChange} required />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Bio:</label>
            <textarea name="bio" value={userData.bio} onChange={handleChange} required />
          </div>
          <div>
            <label>Email Address:</label>
            <input type="email" name="email" value={userData.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Twitter:</label>
            <input type="url" name="twitter" value={userData.twitter} onChange={handleChange} />
          </div>
          <div>
            <label>Instagram:</label>
            <input type="url" name="instagram" value={userData.instagram} onChange={handleChange} />
          </div>
          <div>
            <label>LinkedIn:</label>
            <input type="url" name="linkedin" value={userData.linkedin} onChange={handleChange} />
          </div>
          <div>
            <label>Website:</label>
            <input type="url" name="website" value={userData.website} onChange={handleChange} />
          </div>
          <button type="submit">Save Profile</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;