// components/LandingNav/LandingNav.js or .tsx
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { IoLogIn } from 'react-icons/io5';
import { RiUserAddFill } from 'react-icons/ri';
import { MdRealEstateAgent, MdOutlineContactPhone } from 'react-icons/md';
import styles from './LandingNav.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FiShoppingCart } from 'react-icons/fi';
import { TbShoppingBag } from 'react-icons/tb';
import { GrWorkshop } from 'react-icons/gr';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import { RxReader } from 'react-icons/rx';
import { CiDark } from 'react-icons/ci';
import { TiThMenu } from "react-icons/ti";
import logoLightMode from "@assets/logoLightMode.png"
const LogoutNav = ({ theme, toggleTheme }) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="xl"
        className={`py-2 px-1 px-md-5 ${styles.navbar} ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}
      >
        <Navbar.Brand>
          <Link to="/" className={styles.brand}>
            {theme === 'dark' ?
              <img src={logo} className={styles.logo} alt="XFACTOR" /> : <img src={logoLightMode} className={styles.logo} alt="XFACTOR" />}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  ><TiThMenu className={styles.toggle} size={25} /></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-center align-items-center">
            <Link to="/CoachUp" className={styles.item_links}>
              CoachUp Works <GrWorkshop size={20} />
            </Link>
            <Link to="/blogs" className={styles.item_links}>
              Blogs <RxReader size={20} />
            </Link>
            <Link to="/FAQ" className={styles.item_links}>
              Questions <FaRegCircleQuestion size={20} />
            </Link>
            <Link to="/AboutUs" className={styles.item_links}>
              About Us <MdRealEstateAgent size={20} />
            </Link>
            <Link to="/contactUs" className={styles.item_links}>
              Contact Us <MdOutlineContactPhone size={23} />
            </Link>
            <Link to="/cart" className={styles.item_links}>
              Cart <TbShoppingBag size={23} />
            </Link>
            <Link to="/shop" className={styles.item_links}>
              Shop <FiShoppingCart size={23} />
            </Link>
            <Link to="/registerOptions" className={styles.item_links}>
              Register <RiUserAddFill size={20} />
            </Link>
            <Link to="/login" className={styles.item_links}>
              Login <IoLogIn size={25} />
            </Link>
            <div className={styles.item_links} onClick={toggleTheme}>
              <CiDark size={30} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <span className={styles.line}></span>
    </>
  );
};

export default LogoutNav;
