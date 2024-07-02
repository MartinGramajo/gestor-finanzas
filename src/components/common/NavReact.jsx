import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

export default function NavReact() {
  function cerrar() {
    let navbar = document.querySelector(".navbar-toggler");
    navbar.click();
  }

  return (
    <Navbar className="bg-dark" variant="dark" expand="lg" id="principal">
      <Container>
        <Navbar.Brand className="logo-texto" as={Link} to="/">
          <FontAwesomeIcon className="me-2" icon={faCode} />
          Rolling-code
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" onClick={cerrar}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/agregar" onClick={cerrar}>
              Agregar
            </Nav.Link>
            <Nav.Link as={NavLink} to="/acciones" onClick={cerrar}>
              Acciones
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
