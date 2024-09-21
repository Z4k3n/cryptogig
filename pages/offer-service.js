import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';

export default function OfferService() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [revisions, setRevisions] = useState('');
  const [tags, setTags] = useState('');
  const [portfolioURL, setPortfolioURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el servicio a la blockchain
    console.log(`Offering Service: ${title} for ${price} ETH with description: ${description}`);
  };

  return (
    <MainLayout>
      <h1>Offer a Service</h1>
      <form onSubmit={handleSubmit}>
        {/* Título del Servicio */}
        <label>
          Service Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        {/* Descripción del Servicio */}
        <label>
          Service Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Describe the service you offer in detail..."
          />
        </label>

        {/* Categoría del Servicio */}
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="web-development">Web Development</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="seo">SEO Optimization</option>
            <option value="content-writing">Content Writing</option>
            <option value="video-editing">Video Editing</option>
            <option value="other">Other</option>
          </select>
        </label>

        {/* Precio del Servicio */}
        <label>
          Price (in ETH):
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>

        {/* Tiempo de Entrega */}
        <label>
          Delivery Time (in days):
          <input
            type="number"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            required
          />
        </label>

        {/* Revisiones Incluidas */}
        <label>
          Revisions Included:
          <input
            type="number"
            value={revisions}
            onChange={(e) => setRevisions(e.target.value)}
            required
          />
        </label>

        {/* Tags */}
        <label>
          Tags (comma-separated):
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g., design, web, development"
          />
        </label>

        {/* URL de Portafolio */}
        <label>
          Portfolio URL (optional):
          <input
            type="url"
            value={portfolioURL}
            onChange={(e) => setPortfolioURL(e.target.value)}
            placeholder="Add your portfolio or previous work link (optional)"
          />
        </label>

        {/* Botón para Enviar */}
        <button type="submit">Offer Service</button>
      </form>
    </MainLayout>
  );
}