import React, { useState } from 'react';
import MainLayout from '../layout/mainLayout';

export default function OfferService() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el servicio a la blockchain.
    console.log(`Offering Service: ${title} for ${price}`);
  };

  return (
    <MainLayout>
      <h1>Offer a Service</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Service Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Price (in ETH):
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <button type="submit">Offer Service</button>
      </form>
    </MainLayout>
  );
}
