import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetailsPage = () => {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    fetch(`/api/orders/${orderId}`)
      .then(response => response.json())
      .then(data => setOrderDetails(data))
      .catch(error => console.error('Error:', error));
  }, [orderId]);

  if (!orderDetails) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Ładowanie...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Szczegóły Zamówienia</h2>
      <div className="card">
        <div className="card-header">
          Zamówienie #{orderId}
        </div>
        <div className="card-body">
          <h5 className="card-title">Status: {orderDetails.status}</h5>
          <p className="card-text">Data zamówienia: {orderDetails.orderDate}</p>
          <p className="card-text">Lista produktów:</p>
          <ul>
            {orderDetails.products.map((product, index) => (
              <li key={index}>{product.name} - {product.quantity} sztuk(a)</li>
            ))}
          </ul>
          <p className="card-text">Łączna kwota: {orderDetails.totalPrice}</p>
          {/* Tutaj możesz dodać więcej informacji o zamówieniu lub akcje */}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
