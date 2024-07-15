import React from "react";
import styles from "./Footer.module.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <span className={styles.line}></span>
      <footer className={styles.footer}>
        <div className={styles.footerSection}>
          <Link to="/" className={styles.brand}>
            <img src={logo} className={styles.logo} alt="XFACTOR" />
          </Link>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>My Account</h2>
          <ul className={styles.list}>
            <Link to={"/AboutUs"} className={styles.item}>
              <li>About Us</li>
            </Link>
            <Link to={"/CoachUp"} className={styles.item}>
              <li>Services</li>
            </Link>
            <Link to={"/contactUs"} className={styles.item}>
              <li>Contact</li>
            </Link>
            <Link to={"/blogs"} className={styles.item}>
              <li>Blogs</li>
            </Link>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Top Links</h2>
          <ul className={styles.list}>
            <Link to={"/shop"} className={styles.item}>
              <li>Shop</li>
            </Link>
            <Link to={"/FAQ"} className={styles.item}>
              <li>FAQ</li>
            </Link>
            <Link to={"/applyToCoach"} className={styles.item}>
              <li>Our Trainers</li>
            </Link>
            <Link to={"/AboutUs"} className={styles.item}>
              <li>Pricing</li>
            </Link>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Address</h2>
          <ul className={styles.contactInfo}>
            <li>
              <FaMapMarkerAlt /> 123 Fitness St, Gym City
            </li>
            <li>
              <FaPhone /> +1 234 567 890
            </li>
            <li>
              <FaEnvelope /> contact@xfactor.com
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
