import { useContext } from "react";
import { AppContext } from "../context/appContext";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [state, dispatch] = useContext(AppContext);

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" className="text-white">
        DumbWays.Id
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="text-white">
            Home
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
