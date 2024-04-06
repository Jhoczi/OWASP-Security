import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`ścieżka_do_twojego_API/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error:', error));
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Model: {product.model}</p>
      <p>Numer seryjny: {product.serialNumber}</p>
      <p>Data produkcji: {product.manufactureDate}</p>
      <p>Cena: {product.price}</p>
      {/* Tutaj mogą być inne informacje o produkcie */}
    </div>
  );
};

export default ProductDetailsPage;
