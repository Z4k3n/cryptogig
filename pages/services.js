import React from 'react';
import MainLayout from '../layout/mainLayout';

const services = [
  { id: 1, title: 'Web Development', price: '0.05 ETH' },
  { id: 2, title: 'Graphic Design', price: '0.03 ETH' },
  { id: 3, title: 'SEO Optimization', price: '0.02 ETH' },
];

export default function Services() {
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
    </MainLayout>
  );
}
