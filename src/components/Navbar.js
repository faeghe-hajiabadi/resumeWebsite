import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function NavbarComponent(props) {
  return (
 
      <Navbar bg="light" expand="lg" className="Nav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={props.id[0]}>About</Nav.Link>
            <Nav.Link href={props.id[1]}>Experiences</Nav.Link>
            <Nav.Link href="#is">Education</Nav.Link>
            <Nav.Link href="#is">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


  );
}

export default NavbarComponent;
