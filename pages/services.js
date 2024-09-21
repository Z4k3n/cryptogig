import { useContext } from 'react';
import { WalletContext } from '../pages/context/WalletContext';
import Link from 'next/link';
import MainLayout from '../layout/MainLayout';

const services = [
  { id: 1, title: 'Web Development', price: '0.05 ETH' },
  { id: 2, title: 'Graphic Design', price: '0.03 ETH' },
  { id: 3, title: 'SEO Optimization', price: '0.02 ETH' },
];

export default function Services() {
  const { connectedAddress } = useContext(WalletContext);

  return (
    <MainLayout>
      <h1>Available Services</h1>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <h2>{service.title}</h2>
            <p>Price: {service.price}</p>
          </li>
        ))}
      </ul>

      {connectedAddress ? (
        <Link href="/offer-service" className="ctaButton">
          Offer Your Service
        </Link>
      ) : (
        <p>Please connect your wallet to offer your own services.</p>
      )}

      <Link href="/" className="ctaButton">
        Go Back to Home
      </Link>
    </MainLayout>
  );
}
