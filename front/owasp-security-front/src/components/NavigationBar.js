import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';

const NavigationBar = () => {

  const token = localStorage.getItem('token');
  let userName = '';
  let role = '';

  if (token) {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    userName = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    console.log(role);
  }

  const logout = () => {
    localStorage.removeItem('token'); // Usuń token
    // Przekieruj na stronę logowania
    window.location.href = '/login';
  };

    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">OWASP Security</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="products">Products</Nav.Link>
            <Nav.Link href="service">Service Requests</Nav.Link>
          </Nav>
          <Nav className="me-auto text-white mt-2">
            {userName && <p>User: {userName}</p>}
            {token && (
                <button onClick={logout} className="btn btn-danger">Log out</button>
            )}
          </Nav>
        </Container>
      </Navbar>
    );
  };
  
  export default NavigationBar;