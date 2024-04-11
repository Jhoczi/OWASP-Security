import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5144/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleOrder = async (productId) => {
        // Tu umieść logikę obsługi zamówienia dla produktu o danym productId
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const orderData = {
            CustomerEmail: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'], // Przykładowy ID klienta, powinieneś to dostosować
            ProductID: productId,
            TotalPrice: 100, // Przykładowa cena, powinieneś ją obliczyć lub pobrać
          };

          try {
            const response = await fetch('http://localhost:5144/api/orders', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(orderData),
            });
        
            if (response.ok) {
              // Tutaj możesz dodać jakąś akcję po pomyślnym zamówieniu, np. wyświetlenie komunikatu
              console.log('Order placed successfully');
              alert("Order completed with success!");
            } else {
              // Obsługa odpowiedzi, gdy nie udało się złożyć zamówienia
              console.error('Failed to place order');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };

    return (
        <div class="container mt-3">
            <h2>Product List</h2>
            <Table striped bordered hover> {/* Użycie Table z React Bootstrap */}
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Serial Number</th>
                        <th>Release Date</th>
                        <th>Price ($)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.productid}> {/* Użyj productid jako klucz */}
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.model}</td>
                            <td>{product.serialnumber}</td>
                            <td>{new Date(product.manufacturedate).toLocaleDateString()}</td>
                            <td>{product.price.toFixed(2)}</td>
                            <td><Button variant="primary" onClick={() => handleOrder(product.productid)}>Order</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ProductsPage;