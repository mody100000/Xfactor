import React, { useState } from 'react';
import { IoChevronBackOutline } from "react-icons/io5";
import { FaPaypal, FaPiggyBank, FaExclamationCircle } from "react-icons/fa";
import { SiMoneygram } from "react-icons/si";
import { CiBank } from "react-icons/ci";
import styles from './PaymentMethodForm.module.css';
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

const PaymentMethodForm = () => {
    const [selectedMethod, setSelectedMethod] = useState('paypal');
    const navigate = useNavigate();

    const paymentMethods = [
        {
            id: 'bank',
            name: 'Bank',
            icon: <CiBank className={styles.methodIcon} />,
        },
        {
            id: 'paypal',
            name: 'PayPal',
            icon: <FaPaypal className={styles.methodIcon} />,
        },
        {
            id: 'moneygram',
            name: 'MoneyGram',
            icon: <SiMoneygram className={styles.methodIcon} />,
        },

        {
            id: 'others',
            name: 'Others',
            icon: <FaPlus className={styles.methodIcon} />,
        }
    ];

    const handleNavigate = () => {
        navigate("/CoachAvailability");
    };
    const placeHolderEmailName = () => {
        if (selectedMethod === "paypal") return "Paypal Email"
        else if (selectedMethod === "moneygram") return "Moneygram Email"
        else {
            return "Email"
        }
    }
    return (
        <div className={`container text-white ${styles.loginHolder}`}>
            <div className={styles.custom_form_holder}>
                <h2 className={styles.title}>Payment Setup</h2>

                <div className={styles.custom_form}>
                    <div className={styles.alertBox}>
                        <FaExclamationCircle size={20} className='mt-0' />
                        <p className='mb-0'>Please ensure all banking details are accurate. Incorrect information may delay payments.</p>
                    </div>

                    <div className={styles.methodsContainer}>
                        {paymentMethods.map((method) => (
                            <button
                                key={method.id}
                                className={`${styles.methodButton} ${selectedMethod === method.id ? styles.active : ''}`}
                                onClick={() => setSelectedMethod(method.id)}
                            >
                                {method.icon}
                            </button>
                        ))}
                    </div>

                    <form className="mt-4">

                        {(selectedMethod === 'paypal' || selectedMethod === 'moneygram' || selectedMethod === 'others') && (
                            <>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        className={`form-control ${styles.input}`}
                                        placeholder={placeHolderEmailName()}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <input
                                            type="text"
                                            className={`form-control ${styles.input}`}
                                            placeholder="Account Holder Name"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input
                                            type="text"
                                            className={`form-control ${styles.input}`}
                                            placeholder="Account Name"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="url"
                                        className={`form-control ${styles.input}`}
                                        placeholder="Account link"
                                    />
                                </div>
                            </>
                        )}

                        {(selectedMethod === 'bank') && (
                            <>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        className={`form-control ${styles.input}`}
                                        placeholder="Bank name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        className={`form-control ${styles.input}`}
                                        placeholder="Account holder name"
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <input
                                            type="text"
                                            className={`form-control ${styles.input}`}
                                            placeholder="IBAN"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input
                                            type="text"
                                            className={`form-control ${styles.input}`}
                                            placeholder="Swift code"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        className={`form-control ${styles.input}`}
                                        placeholder="Branch name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="url"
                                        className={`form-control ${styles.input}`}
                                        placeholder="Account link"
                                    />
                                </div>
                            </>
                        )}

                        <div className="d-flex gap-3 mt-5 justify-content-center">
                            <button
                                type="button"
                                className={styles.backBtn}
                                onClick={handleNavigate}
                            >
                                <IoChevronBackOutline size={25} />
                            </button>
                            <Link to="/CoachPayment">
                                <button
                                    type="submit"
                                    className={styles.nextBtn}
                                >
                                    Save Payment Details
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethodForm;