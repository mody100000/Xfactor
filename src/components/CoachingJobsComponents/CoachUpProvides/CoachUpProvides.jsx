import React from 'react';
import styles from "./CoachUpProvides.module.css";
import step1 from "@assets/step1.webp";
import step2 from "@assets/step2.webp";
import { Link } from 'react-router-dom';

const CoachUpProvides = () => {
    return (
        <div>
            <div className={`row my-5 ${styles.textColumn}`}>
                <div className={`col-md-6 d-flex flex-column justify-content-center ${styles.text}`}>
                    <h2 className='fw-bold mb-5'>CoachUp Provides:</h2>
                    <ul>
                        <li className={styles.suptext}>A personalized profile with customizable URL</li>
                        <li className={styles.suptext}>Support for your 1-on-1 sessions, group sessions, clinics, camps, online training, and more</li>
                        <li className={styles.suptext}>A stream of new clients to expand your business</li>
                        <li className={styles.suptext}>Ability to set your own hourly rate; coaches earn an average of $45/hour</li>
                        <li className={styles.suptext}>Mobile app to communicate with clients and schedule sessions</li>
                        <li className={styles.suptext}>$1 million liability insurance coverage on all sessions</li>
                        <li className={styles.suptext}>Discounts redeemable to purchase training equipment, apparel, and gear</li>

                    </ul>
                </div>
                <div className="col-md-6">
                    <img src={step1} alt="Step 1" className={styles.coachImg} />
                </div>
            </div>
            {/* //step2 */}
            <div className={`row my-5 ${styles.textColumnBlack}`}>
                <div className="col-md-6">
                    <img src={step2} alt="Step 2: Book" className={styles.coachImg} />
                </div>
                <div className={`col-md-6 d-flex flex-column justify-content-center ${styles.textBlack}`}>
                    <h2 className='fw-bold mb-4 mt-3'>How Do I Apply?</h2>
                    <h4 className={`mb-4 ${styles.suptext}`}>
                        Joining the nation’s leading sports coaching company is as easy as one, two, three!
                    </h4>
                    <ol>
                        <li className={styles.suptext}>Submit an Application: Tell us about your athletic achievements and coaching experience.
                        </li>
                        <li className={styles.suptext}>Learn the Ropes: Pass a quick quiz about the ins and outs of using CoachUp.
                        </li>
                        <li className={styles.suptext}>Pass a Background Check: CoachUp places an emphasis on Trust & Safety by requiring coaches to pass yearly background check.
                        </li>
                    </ol>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <Link to="/register">
                    <button className={`btn btn-danger ${styles.applyBtn}`}>Apply to Coach</button>
                </Link>
            </div>
            <span className={styles.line}></span>
        </div>
    );
};

export default CoachUpProvides;
