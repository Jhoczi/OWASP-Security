import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">OWASP Security</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="products">Products</Nav.Link>
            <Nav.Link href="service">Service Requests</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  };
  
  export default NavigationBar;