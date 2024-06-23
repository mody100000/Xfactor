import React from 'react';
import styles from './ContactUs.module.css'; // Import your CSS module
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const ContactUs = () => {
  return (
    <div className={`container-fluid ${styles.contactUsContainer}`}>
      <div className="row">
        <div className={`col-md-7 ${styles.formColumn}`}>
          <form>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className={`${styles.input}`} placeholder="First name" />
              </div>
              <div className="col">
                <input type="text" className={`${styles.input}`} placeholder="Last name" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className={`${styles.input}`} placeholder="Phone" />
              </div>
              <div className="col">
                <input type="email" className={`${styles.input}`} placeholder="Email" />
              </div>
            </div>
            <div className="mb-3">
              <textarea className={`${styles.input}`} rows="5" placeholder="Message"></textarea>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
            <button type="submit" className={`${styles.submitBtn}`}>Submit</button>
            </div>
          </form>
        </div>
        <div className={`col-md-5 ${styles.infoColumn}`}>
          <h2 className='mb-4'>Contact</h2>
          <p className={styles.textInfo}>If you have any questions, feel free to reach out to us via phone or email.</p>
          <div className='mt-5'>
          <p className='fs-5'><BsTelephone size={45} className={styles.icon}/>(123) 456-7890</p>
          <p className='fs-5'><CiMail size={45} className={styles.icon}/> contact@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
