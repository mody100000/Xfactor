import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { IoLogIn } from "react-icons/io5";
import { RiUserAddFill } from "react-icons/ri";
import { MdAssignmentInd, MdRealEstateAgent } from "react-icons/md";
import styles from "./LandingNav.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const LogoutNav = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className={`py-2 px-5 ${styles.navbar}`}
      >
        <Navbar.Brand>
          <Link to="/" className={styles.brand}>
            <img src={logo} className={styles.logo} alt="XFACTOR" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-center align-items-center">
            <Nav.Link>
              <Link to="/applyToCoach" className={styles.item_links}>
                Apply to Coach <MdAssignmentInd size={20} />
              </Link>
            </Nav.Link>
            <Nav.Link href="#coachup-nation" className={styles.item_links}>
              CoachUp Nation <MdRealEstateAgent size={20} />
            </Nav.Link>
            <Nav.Link href="#register" className={styles.item_links}>
              Register <RiUserAddFill size={20} />
            </Nav.Link>
            <Nav.Link href="#login" className={styles.item_links}>
              Login <IoLogIn size={25} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <span className={styles.line}></span>
    </>
  );
};

export default LogoutNav;
