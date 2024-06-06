import React from 'react';
import styles from './Chart.module.css';
import ChartComponent from './ChartComponent/ChartComponent';

const Chart = () => {
  return (
    <div className={styles.chart}>
      <div>
      <div className={styles.chartGraph}>
        <ChartComponent/>
      </div>
      </div>
    <div>

    </div>
    </div>
  );
};

export default Chart;
