import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
// import DarkModeSwitch from "./DarkModeSwitch";
// import { useContext, useState } from "react";
// import { UseHeroesContext } from "../context/UseHeroesContext";

export default function NavReact() {
  return (
    <Navbar className="bg-dark" variant="dark" expand="lg" id="principal">
      <Container>
        <Navbar.Brand className="logo-texto" as={Link} to="/">
          Rolling-code
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/agregar">
              agregar
            </Nav.Link>
            <Nav.Link as={NavLink} to="/acciones">
              acciones
            </Nav.Link>
          </Nav>
          {/* <div className="ms-auto">
            <DarkModeSwitch />
          </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
