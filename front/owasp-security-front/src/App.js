import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ServiceRequestForm from './components/ServiceRequestForm';
import OrdersPage from './pages/OrdersPage';
import OrderDetailsPage from './pages/OrderDetailsPage';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        {/* Tutaj będą inne komponenty, np. Routing */}
      </div>
      <div style={{ paddingBottom: '80px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route path="/service" element={<ServiceRequestForm />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/orders/:orderId" element={<OrderDetailsPage />} />
          {/* Dodaj wiecej sciezek do innych stron*/}
        </Routes>
      </div>
      <div>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
