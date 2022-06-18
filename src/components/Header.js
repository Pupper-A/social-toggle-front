import React from 'react';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
    return (
        <header>
          <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>

              <LinkContainer to="/">
                <Navbar.Brand>ToggleMedia</Navbar.Brand>
              </LinkContainer>
              
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                  <LinkContainer to="/signin">
                    <Nav.Link><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/signup">
                    <Nav.Link><i className="fa fa-user-plus" aria-hidden="true"></i>Sign Up</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/contact-us">
                    <Nav.Link><i className="fa fa-address-book" aria-hidden="true"></i>Contact Us</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/about-us">
                    <Nav.Link><i className="fa fa-info-circle" aria-hidden="true"></i>About Us</Nav.Link>
                  </LinkContainer>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
    );
  }
  
export default Header;