import React from 'react';
import styles from './IntroAboutUs.module.css';

const IntroAboutUs = () => {
    return (
        <div className={styles.intro}>
            <div className="overlay">
                <h1 className={styles.title}>About Us</h1>
            </div>
        </div>
    );
}

export default IntroAboutUs;