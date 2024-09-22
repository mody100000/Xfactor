import React from "react";
import styles from "./CoachPayment.module.css";
import { Link, useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import CoachCalendar from "../../common/CoachCalendar/CoachCalendar";
import Input from "../../common/Input";

const CoachPayment = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/CoachAvailability");
    };

    return (
        <div className={`container text-white ${styles.loginHolder}`}>
            <div className={styles.custom_form_holder}>
                <h2 className={styles.title}>Payment</h2>
                <div className={styles.custom_form}>
                    <div className={styles.inputsWrapper}>
                        <div className={`${styles.boxContainer} mb-2`}>
                            <form className="d-flex flex-column">
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Full Name (on the card)</label>
                                    <Input type="text" className={`form-control ${styles.input}`} id="fullName" placeholder="Full Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cardNumber" className="form-label">Credit Card Number</label>
                                    <Input type="text" className={`form-control ${styles.input}`} id="cardNumber" placeholder="1234 5678 9012 3456" />
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-4">
                                        <label htmlFor="expirationMonth" className="form-label">Expiration Month</label>
                                        <Input type="text" className={`form-control ${styles.input}`} id="expirationMonth" placeholder="MM" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="expirationYear" className="form-label">Expiration Year</label>
                                        <Input type="text" className={`form-control ${styles.input}`} id="expirationYear" placeholder="YYYY" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="securityCode" className="form-label">Security Code (CVC)</label>
                                        <Input type="text" className={`form-control ${styles.input}`} id="securityCode" placeholder="123" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="billingZip" className="form-label">Billing ZIP Code</label>
                                    <Input type="text" className={`form-control ${styles.input}`} id="billingZip" placeholder="12345" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex gap-2 mt-3 mb-4 mx-auto">
                        <button type="button" className={styles.backBtn} onClick={handleNavigate}>
                            <IoChevronBackOutline size={25} />
                        </button>
                        <Link to="/dashboard">
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

export default CoachPayment;