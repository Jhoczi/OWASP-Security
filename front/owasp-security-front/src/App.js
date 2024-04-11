import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ServiceRequestForm from './components/ServiceRequestForm';
import OrdersPage from './pages/OrdersPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        {/* Tutaj będą inne komponenty, np. Routing */}
      </div>
      <div style={{ paddingBottom: '80px' }}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/products" element={<PrivateRoute><ProductsPage /></PrivateRoute>} />
          <Route path="/products/:productId" element={<PrivateRoute><ProductDetailsPage /></PrivateRoute>} />
          <Route path="/service" element={<PrivateRoute><ServiceRequestForm /></PrivateRoute>} />
          <Route path="/orders" element={<PrivateRoute><OrdersPage /></PrivateRoute>} />
          <Route path="/orders/:orderId" element={<PrivateRoute><OrderDetailsPage /></PrivateRoute>} />
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
