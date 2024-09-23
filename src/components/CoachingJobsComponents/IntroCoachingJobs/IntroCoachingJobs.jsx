import React from 'react';
import styles from "./IntroCoachingJobs.module.css";


const IntroCoachingJobs = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.overlay}>
                <div className='d-flex flex-column align-items-center justify-content-center p-5'>
                    <h1 className="fw-bold">Coaching Jobs</h1>
                    <h3 className={`text-center ${styles.suptitle}`}>
                        CoachUp is looking for experienced individuals to join our national team of talented sports coaches and trainers dedicated to taking athletes to Another Level™.
                    </h3>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default IntroCoachingJobs;
