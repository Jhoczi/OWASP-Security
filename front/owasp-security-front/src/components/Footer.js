import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-4" style={{ 
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: '60px', // Ustaw wysokość stopki
    }}>
      <div className="container text-center py-3">
        <p>© {new Date().getFullYear()} OWASP Security - Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;
