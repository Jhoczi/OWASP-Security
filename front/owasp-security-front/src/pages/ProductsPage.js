import React, { useState, useEffect } from 'react';

const ProductsPage = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('api_url/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsPage;
