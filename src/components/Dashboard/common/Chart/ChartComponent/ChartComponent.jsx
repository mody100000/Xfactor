import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import styles from './ChartComponent.module.css';

const ChartComponent = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Courses Completed',
        data: [3, 5, 1, 6, 4, 7, 8, 2, 5, 6, 9, 7],
        borderColor: '#BF1E2E',
        backgroundColor: 'rgba(191,30,46, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Courses',
        },
        beginAtZero: true,
        max: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={`${styles.chartContainer} container`}>
      <h4 className='fw-bold'>Statistic information</h4>
      <div>
        <span className={styles.courseComplet}>7</span>
        <span className={styles.courseTotal}> /15 </span>
        <p className={styles.courseTitle}> courses <span className={styles.courseDone}>is done</span></p>
      </div>
      <div className={`${styles.chartWrapper} row`}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
