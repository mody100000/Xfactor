import React from 'react';
import styles from './MainContent.module.css';
import Chart from './../common/Chart/Chart';
import Card from './../common/Card/Card';

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.statisticInfo}>
        <Chart />
      </div>
      <div className={styles.certificates}>
        <Card title="Graphic Design" type="specialization" />
        <Card title="User Experience Research and Design" type="specialization" />
        <Card title="Innovation through design" type="course" />
      </div>
      <div className={styles.statistics}>
        <Card title="1,921 views per week" type="statistic" />
        <Card title="306 bonuses for education" type="statistic" />
        <Card title="26 courses started" type="statistic" />
        <Card title="35 courses in favorites" type="statistic" />
      </div>
      <div className={styles.workPreferences}>
        <Card title="Work preferences" content="Graphic Designer / Desktop Publisher (Intern)" />
        <Card title="Additional info" content="Help recruiters get to know you better by describing your skills" />
      </div>
      <div className={styles.resume}>
        <button className="btn btn-secondary">Resume and portfolio</button>
        <button className="btn btn-secondary">Download certificates</button>
      </div>
    </div>
  );
};

export default MainContent;
