import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, type, content }) => {
  return (
    <div className={`${styles.card} ${styles[type]}`}>
      <h3>{title}</h3>
      {content && <p>{content}</p>}
      {type !== 'statistic' && <button className="btn btn-primary">Continue</button>}
    </div>
  );
};

export default Card;
