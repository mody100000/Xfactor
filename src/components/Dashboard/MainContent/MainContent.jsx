import React from 'react';
import styles from './MainContent.module.css';
import Card from './../common/Card/Card';
import ChartComponent from '../common/Chart/ChartComponent/ChartComponent';
import CertificateComponent from '../common/Chart/CertificateComponent/CertificateComponent';

const MainContent = () => {
  return (
    <div className={`${styles.mainContent} container-fluid`}>
      <div className='d-flex flex-row justify-content-between'>
        <h1 className='fw-bold mb-2'>Welcome Back!</h1>
        <div>
          <button className={`${styles.account} btn`}>Account</button>
          <button className={`${styles.payment} btn`}>Payment</button>
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
        <Card title="Graphic Design" type="specialization" className="col-md-6 col-lg-3" />
        <Card title="User Experience Research and Design" type="specialization" className="col-md-6 col-lg-3" />
        <Card title="Innovation through design" type="course" className="col-md-6 col-lg-3" />
      </div>
      <div className={`${styles.statistics} row`}>
        <Card title="1,921 views per week" type="statistic" className="col-md-6 col-lg-3" />
        <Card title="306 bonuses for education" type="statistic" className="col-md-6 col-lg-3" />
        <Card title="26 courses started" type="statistic" className="col-md-6 col-lg-3" />
        <Card title="35 courses in favorites" type="statistic" className="col-md-6 col-lg-3" />
      </div>
      <div className={`${styles.workPreferences} row`}>
        <Card title="Work preferences" content="Graphic Designer / Desktop Publisher (Intern)" className="col-md-6 col-lg-3" />
        <Card title="Additional info" content="Help recruiters get to know you better by describing your skills" className="col-md-6 col-lg-3" />
      </div>
      <div className={`${styles.resume} row`}>
        <button className="btn btn-secondary col-md-6 col-lg-3">Resume and portfolio</button>
        <button className="btn btn-secondary col-md-6 col-lg-3">Download certificates</button>
      </div>
    </div>
  );
};

export default MainContent;
