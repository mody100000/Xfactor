import React from "react";
import styles from "./CoachAvailability.module.css";
import { Link, useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import CoachCalendar from "../../common/CoachCalendar/CoachCalendar";

const CoachAvailability = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/CoachPrice");
    };

    return (
        <div className={`container text-white ${styles.loginHolder}`}>
            <div className={styles.custom_form_holder}>
                <h2 className={styles.title}>Coach Availability</h2>
                <p className={styles.text}>Select the times when you are available to train. Clients will see these times when you have not confirmed your specific availability.</p>
                <div className={styles.custom_form}>
                    <div className={styles.inputsWrapper}>
                        <CoachCalendar />
                    </div>
                    <div className="d-flex gap-2 mt-3 mb-4 mx-auto">
                        <button type="button" className={styles.backBtn} onClick={handleNavigate}>
                            <IoChevronBackOutline size={25} />
                        </button>
                        <Link to="/CoachPaymentMethod">
                            <button className={styles.nextBtn} type="button">
                                Next
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoachAvailability;