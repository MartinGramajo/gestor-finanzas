import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

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
              Agregar
            </Nav.Link>
            <Nav.Link as={NavLink} to="/acciones">
              Acciones
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
