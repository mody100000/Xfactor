import React from 'react';
import styles from './MainContent.module.css';
import Card from './../common/Card/Card';
import ChartComponent from '../common/Chart/ChartComponent/ChartComponent';
import CertificateComponent from '../common/Chart/CertificateComponent/CertificateComponent';
import Views from './../Views/Views';

const MainContent = () => {
  return (
    <div className={`${styles.mainContent} container-fluid`}>
      <div className='d-flex flex-row justify-content-between'>
        <h1 className={`fw-bold mb-3 ${styles.welcomeTitle}`}>Welcome Back!</h1>
        <div>
          <button className={`${styles.account} btn btn-danger`}>Account</button>
          <button className={`${styles.payment} btn btn btn-outline border border-1 border-danger text-danger`}>Payment</button>
        </div>
      </div>
      <div className={`${styles.statisticInfo} row`}>
        <div className="col-md-6">
          <ChartComponent />
        </div>
        <div className="col-md-6">
          <CertificateComponent />
        </div>
      </div>
      <div className={`${styles.certificates} row`}>
        <Views className="col-md-6 col-lg-3" />
        <Card title="Work preferences" content="Graphic Designer / Desktop Publisher (Intern)" type="specialization" className="col-md-6 col-lg-3" />
        <Card title="Additional info" content="Help recruiters get to know you better by describing your skills" type="course" className="col-md-6 col-lg-3" />
      </div>
      <div className={`${styles.workPreferences} row`}>
        <Card title="Work preferences" content="Graphic Designer / Desktop Publisher (Intern)" className="col-md-6 col-lg-3" />
        <Card title="Additional info" content="Help recruiters get to know you better by describing your skills" className="col-md-6 col-lg-3" />
      </div>
      <div className={`${styles.resume} row`}>
        <button className="btn btn-danger col-md-6 col-lg-3">Download certificates</button>
        <button className="btn btn-outline col-md-6 col-lg-3 border border-1 border-danger text-danger">Resume and portfolio</button>
      </div>
    </div>
  );
};

export default MainContent;
