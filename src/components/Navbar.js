import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [state] = useContext(AppContext);

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" className="text-white">
        DUMBWAYS.ID
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="text-white">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="text-white">
            Cart
          </Nav.Link>
          <Nav.Link as={Link} to="/login" className="text-white">
            Login
          </Nav.Link>
        </Nav>
        <Nav.Link as={Link} to="/cart" className="text-white">
          Product: {state.carts.length}
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
