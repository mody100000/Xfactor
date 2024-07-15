import styles from "./BlogsNavbar.module.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { TiThMenu } from "react-icons/ti";

const BlogsNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" className={styles.customNavs}>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  ><TiThMenu className={styles.toggle} size={25} /></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 d-flex justify-content-between">
          <Nav.Link href="#home" className="fs-5">Parents</Nav.Link>
          <NavDropdown title="Coaches" id="coaches-dropdown" className="fs-5">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Training" id="training-dropdown" className="fs-5">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Recruiting" id="recruiting-dropdown" className="fs-5">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Testimonials" id="testimonials-dropdown" className="fs-5">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Videos" id="videos-dropdown" className="fs-5">
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
