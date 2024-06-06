import React from "react";
import styles from "./CertificateComponent.module.css";
import { BsCalendar2Event } from "react-icons/bs";
import { MdOutlineIncompleteCircle } from "react-icons/md";

const CertificateComponent = () => {
  return (
    <div className={`${styles.certificateContainer} container`}>
      <div className="row justify-content-between align-items-center mb-3">
        <div className="col-auto">
          <p className="fw-bold fs-3">Certificates</p>
        </div>
        <div className="col-auto">
          <BsCalendar2Event className={styles.headerIcon} />
        </div>
      </div>
      {["Football", "Basketball", "Tennis", "Volleyball"].map((sport, index) => (
        <React.Fragment key={index}>
          <div className="row align-items-center mb-2">
            <div className="col-auto">
              <MdOutlineIncompleteCircle className={styles.icon} />
            </div>
            <div className="col">
              <p className={styles.title}>{sport}</p>
              <p className={styles.subtitle}>Specialization</p>
            </div>
            <div className="col-auto">
              <button className={`${styles.continueButton} btn btn-outline-danger`}>Continue</button>
            </div>
          </div>
          {index < 3 && <span className={styles.line}></span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CertificateComponent;
