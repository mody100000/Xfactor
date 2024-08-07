import React from 'react';
import styles from "./CoachUpCarts.module.css";
import step1 from "../../../../assets/step1.webp";
import step2 from "../../../../assets/step2.webp";

const CoachUpCarts = () => {
  return (
    <div>
      <div className={`row my-5 ${styles.textColumn}`}>
        <div className={`col-md-6 d-flex flex-column justify-content-center ${styles.text}`}>
          <h2 className='fw-bold mb-5'>Step 1: Search</h2>
          <p className={styles.suptext}>
            Enter your location and let us know about your training goals. We’ll recommend three great coaches, but you can also browse through all coach profiles and sort the results by distance, price, reviews, and training types (in-person or online training) to identify the coach that best fits your needs.
          </p>
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
          <h2 className='fw-bold mb-5 mt-3'>Step 2: Book</h2>
          <p className={styles.suptext}>
            From the coach’s profile, click the “Message Coach” button if you have additional questions for the coach, or click the “Book Now” button if you are ready to start training. After you book your coach, you'll receive each other’s contact information; call or email your coach to set up your first training session.
          </p>
        </div>
      </div>
      <div className={`row my-5 ${styles.textColumn}`}>
        <div className={`col-md-6 d-flex flex-column justify-content-center ${styles.text}`}>
          <h2 className='fw-bold mb-5'>Step 3: Train!</h2>
          <p className={styles.suptext}>
            Enter your location and let us know about your training goals. We’ll recommend three great coaches, but you can also browse through all coach profiles and sort the results by distance, price, reviews, and training types (in-person or online training) to identify the coach that best fits your needs.
          </p>
        </div>
        <div className="col-md-6">
          <img src={step1} alt="Step 3: Train!" className={styles.coachImg} />
        </div>
      </div>
    </div>
  );
};

export default CoachUpCarts;
