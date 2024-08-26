import React, { useState } from 'react';
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
import { BsFilePerson } from "react-icons/bs";
import logoLightMode from "@assets/logoLightMode.png"

const LogoutNav = ({ theme, toggleTheme }) => {
  const [expanded, setExpanded] = useState(false);

  const closeNav = () => setExpanded(false);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="xl"
        className={`py-2 px-1 px-md-3 ${styles.navbar} ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}
        expanded={expanded}
        onToggle={(expanded) => setExpanded(expanded)}
      >
        <Navbar.Brand>
          <Link to="/" className={styles.brand} onClick={closeNav}>
            {theme === 'dark' ?
              <img src={logo} className={styles.logo} alt="XFACTOR" /> : <img src={logoLightMode} className={styles.logo} alt="XFACTOR" />}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"><TiThMenu className={styles.toggle} size={25} /></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-center align-items-center">
            <Link to="/filtered-coaches" className={styles.item_links} onClick={closeNav}>
              See Our Coaches <BsFilePerson size={20} />
            </Link>
            <Link to="/CoachUp" className={styles.item_links} onClick={closeNav}>
              CoachUp Works <GrWorkshop size={20} />
            </Link>
            <Link to="/blogs" className={styles.item_links} onClick={closeNav}>
              Blogs <RxReader size={20} />
            </Link>
            <Link to="/FAQ" className={styles.item_links} onClick={closeNav}>
              Questions <FaRegCircleQuestion size={20} />
            </Link>
            <Link to="/AboutUs" className={styles.item_links} onClick={closeNav}>
              About Us <MdRealEstateAgent size={20} />
            </Link>
            <Link to="/contactUs" className={styles.item_links} onClick={closeNav}>
              Contact Us <MdOutlineContactPhone size={23} />
            </Link>
            <Link to="/cart" className={styles.item_links} onClick={closeNav}>
              Cart <TbShoppingBag size={23} />
            </Link>
            <Link to="/shop" className={styles.item_links} onClick={closeNav}>
              Shop <FiShoppingCart size={23} />
            </Link>
            <Link to="/registerOptions" className={styles.item_links} onClick={closeNav}>
              Register <RiUserAddFill size={20} />
            </Link>
            <Link to="/login" className={styles.item_links} onClick={closeNav}>
              Login <IoLogIn size={25} />
            </Link>
            <div className={styles.item_links} onClick={() => { toggleTheme(); closeNav(); }}>
              Dark Mode  <CiDark className={styles.darkModeIcon} size={30} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <span className={styles.line}></span>
    </>
  );
};

export default LogoutNav;