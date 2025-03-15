import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";

function Header() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Cartel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/users">Users</Nav.Link>

            {/* Profile is now on the left side */}
            {userInfo && <Nav.Link as={Link} to="/profile">Profile</Nav.Link>}

            {/* Dropdown for Bookmarks, Cart, and To Rate */}
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/bookmarks">Bookmarks</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cart">Cart</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/to-rate">To Rate</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Authentication Section (Right Side) */}
          <Nav>
            {userInfo ? (
              <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                <i className="fas fa-user"></i> Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
