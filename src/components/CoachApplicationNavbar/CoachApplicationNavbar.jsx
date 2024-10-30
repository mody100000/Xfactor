import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoLogIn } from 'react-icons/io5';
import { RiUserAddFill } from 'react-icons/ri';
import { MdRealEstateAgent, MdOutlineContactPhone } from 'react-icons/md';
import styles from './CoachApplicationNavbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FiShoppingCart } from 'react-icons/fi';
import { TbShoppingBag } from 'react-icons/tb';
import { GrWorkshop } from 'react-icons/gr';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import { RxReader } from 'react-icons/rx';
import { CiDark } from 'react-icons/ci';
import { TiThMenu } from "react-icons/ti";
import { BsFilePerson, BsPersonWorkspace } from "react-icons/bs";
import logoLightMode from "@assets/logoLightMode.png"

const CoachApplicationNavbar = ({ theme, toggleTheme }) => {
    const [expanded, setExpanded] = useState(false);

    const closeNav = () => setExpanded(false);

    const NavLink = ({ to, onClick, children, className }) => (
        <Link to={to} className={`${styles.item_links} ${className || ''}`} onClick={onClick}>
            {children}
        </Link>
    );

    return (
        <>
            <Navbar
                collapseOnSelect
                expand="xl"
                className={`py-2 px-1 px-md-3 ${styles.navbar}`}
                expanded={expanded}
                onToggle={(expanded) => setExpanded(expanded)}
            >
                <Navbar.Brand>
                    <Link to="/" className={styles.brand} onClick={closeNav}>
                        <img
                            src={theme === 'dark' ? logo : logoLightMode}
                            className={styles.logo}
                            alt="XFACTOR"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <TiThMenu className={styles.toggle} size={25} />
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex justify-content-center align-items-center">
                        <NavLink to="/registerOptions" onClick={closeNav}>
                            Register <RiUserAddFill size={20} />
                        </NavLink>
                        <NavLink to="/login" onClick={closeNav}>
                            Login <IoLogIn size={25} />
                        </NavLink>
                        <div className={styles.item_links} onClick={() => { toggleTheme(); closeNav(); }}>
                            Dark Mode <CiDark className={styles.darkModeIcon} size={30} />
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
            <span className={styles.line}></span>
        </>
    );
};

export default CoachApplicationNavbar;