import styles from "./BlogsNavbar.module.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const BlogsNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className={styles.customNavs}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 d-flex justify-content-between">
          <Nav.Link href="#home" style={{ color: 'black' }} className="text-black fs-5">Parents</Nav.Link>
          <NavDropdown title="Coaches" id="coaches-dropdown" style={{ color: 'black' }} className="text-black fs-5">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Training" id="training-dropdown" style={{ color: 'black' }} className="text-black fs-5">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Recruiting" id="recruiting-dropdown" style={{ color: 'black' }} className="text-black fs-5">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Testimonials" id="testimonials-dropdown" style={{ color: 'black' }} className="text-black fs-5">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Videos" id="videos-dropdown" style={{ color: 'black' }} className="text-black fs-5">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BlogsNavbar;
