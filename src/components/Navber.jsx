import React from "react";
import logo from "../../public/logo.png";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navber = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="" />
          <div className="bar"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">ABOut us</Nav.Link>
            <Nav.Link href="#action2">Surmon</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link>
          </Nav>

          <button className="btn btn-warning">COntact us</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navber;
