import React from 'react';
import styles from './HighestJobs.module.css';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const HighestJobs = () => {
    const items = [
        {
            title: 'Texas coaching jobs (67)',
            subTitle: 'Volleyball, Boxing, Gymnastics, Softball (and 11 more)',
        },
        {
            title: 'New York coaching jobs (60)',
            subTitle: 'Football, Volleyball, Boxing, Basketball (and 12 more)',
        },
        {
            title: 'California coaching jobs (47)',
            subTitle: 'Basketball, Boxing, Soccer, Swimming (and 15 more)',
        },
        {
            title: 'Florida coaching jobs (36)',
            subTitle: 'Volleyball, Boxing, Basketball, Gymnastics (and 12 more)',
        },
        {
            title: 'Ohio coaching jobs (35)',
            subTitle: 'Swimming, Boxing, Softball, Baseball (and 11 more)',
        },
        {
            title: 'Michigan coaching jobs (30)',
            subTitle: 'Basketball, Volleyball, Golf, Softball (and 10 more)',
        },
        {
            title: 'North Carolina coaching jobs (28)',
            subTitle: 'Boxing, Basketball, Soccer, Volleyball (and 9 more)',
        },
        {
            title: 'Georgia coaching jobs (28)',
            subTitle: 'Boxing, Basketball, Volleyball, Softball (and 8 more)',
        },
        {
            title: 'Indiana coaching jobs (26)',
            subTitle: 'Basketball, Volleyball, Boxing, Golf (and 6 more)',
        },
        {
            title: 'Pennsylvania coaching jobs (25)',
            subTitle: 'Softball, Basketball, Soccer, Swimming (and 13 more)',
        },
    ];


    return (
        <div className="container">
            <h2 className='my-5 fw-bold text-center'>Jobs in Highest Demand
            </h2>
            <div className={styles.boxContainer}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`row ${index % 2 === 0 ? styles.rowWhite : styles.rowGray}`}
                    >
                        <Link to="/register" className={styles.link}>
                            <div className='d-flex justify-content-center align-items-center px-4 cursor-pointer'>
                                <div className={`col-12 ${styles.myCol}`}>
                                    <h5>{item.title}</h5>
                                    <p className='mb-0 text-start'>{item.subTitle}</p>
                                </div>
                                <p className='mb-0'>
                                    <IoIosArrowForward size={30} />
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HighestJobs;
