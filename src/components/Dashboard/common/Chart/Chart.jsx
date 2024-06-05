import React from 'react';
import styles from './Chart.module.css';

const Chart = () => {
  return (
    <div className={styles.chart}>
      <h4>Statistic information</h4>
      <p>7 / 15 courses is done</p>
      <div className={styles.chartGraph}>
        {/* Add your chart library or custom chart implementation here */}
        <p>Chart placeholder</p>
      </div>
    </div>
  );
};

export default Chart;
