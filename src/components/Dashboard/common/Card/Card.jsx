import React from 'react';
import styles from './Card.module.css';
import { BsArrowUpRightCircle } from "react-icons/bs";

const Card = ({ title, type, content }) => {
  return (
    <div className={`${styles.card} ${styles[type]}`}>
       <div className="row justify-content-between align-items-center mb-3">
        <div className="col-auto">
        <p className={`${styles.account}`}>desired roles</p>
        </div>
        <div className="col-auto">
          <BsArrowUpRightCircle className={styles.headerIcon} />
        </div>
      </div>
      { <div> <p>{title}</p> <p>{content}</p></div>}
    </div>
  );
};

export default Card;
