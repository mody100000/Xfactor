// components/LandingNav/LandingNav.js or .tsx
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { IoLogIn } from 'react-icons/io5';
import { RiUserAddFill } from 'react-icons/ri';
import { MdAssignmentInd, MdRealEstateAgent, MdOutlineContactPhone } from 'react-icons/md';
import styles from './ApplicationNavbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FiShoppingCart } from 'react-icons/fi';
import { TbShoppingBag } from 'react-icons/tb';
import { GrWorkshop } from 'react-icons/gr';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import { RxReader } from 'react-icons/rx';

const ApplicationNavbar = ({theme}) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`py-2 px-5 ${styles.navbar} ${theme === 'dark'}`}
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
            <Nav.Link>
              <Link to="/CoachUp" className={styles.item_links}>
                CoachUp Works <GrWorkshop size={20} />
              </Link>
            </Nav.Link>
            <Nav.Link className={styles.item_links}>
              <Link to="/blogs" className={styles.item_links}>
                Blogs <RxReader size={20} />
              </Link>
            </Nav.Link>
            <Nav.Link className={styles.item_links}>
              <Link to="/FAQ" className={styles.item_links}>
                Questions <FaRegCircleQuestion size={20} />
              </Link>
            </Nav.Link>
            <Nav.Link className={styles.item_links}>
              <Link to="/AboutUs" className={styles.item_links}>
                About Us <MdRealEstateAgent size={20} />
              </Link>
            </Nav.Link>
            <Nav.Link className={styles.item_links}>
              <Link to="/contactUs" className={styles.item_links}>
                Contact Us <MdOutlineContactPhone size={23} />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/cart" className={styles.item_links}>
                Cart <TbShoppingBag size={23} />
              </Link>
            </Nav.Link>
            <Nav.Link className={styles.item_links}>
              <Link to="/shop" className={styles.item_links}>
                Shop <FiShoppingCart size={23} />
              </Link>
            </Nav.Link>
            <Nav.Link className={styles.item_links}>
              <Link to="/registerOptions" className={styles.item_links}>
                Register <RiUserAddFill size={20} />
              </Link>
            </Nav.Link>
            <Nav.Link className={styles.item_links}>
              <Link to="/login" className={styles.item_links}>
                Login <IoLogIn size={25} />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <span className={styles.line}></span>
    </>
  );
};

export default ApplicationNavbar;