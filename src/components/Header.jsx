import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link> 
          <input  style={{display:"flex",marginLeft:"550px",width:"300px"}} type="text" placeholder='search here'/>
           
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




    </div>
  )
}

export default Header