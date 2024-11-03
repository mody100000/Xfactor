// PaymentMethodForm.jsx
import React, { useState } from 'react';
import { IoChevronBackOutline, IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { FaPaypal, FaPiggyBank, FaExclamationCircle } from "react-icons/fa";
import styles from './PaymentMethodForm.module.css';
import { Link, useNavigate } from "react-router-dom";

const PaymentMethodForm = () => {
    const [selectedMethod, setSelectedMethod] = useState('paypal');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const paymentMethods = [
        {
            id: 'paypal',
            name: 'PayPal',
            icon: <FaPaypal className={styles.methodIcon} />,
        },
        {
            id: 'moneygrow',
            name: 'Money Grow',
            icon: <FaPiggyBank className={styles.methodIcon} />,
        }
    ];

    const handleNavigate = () => {
        navigate("/CoachAvailability");
    };

    return (
        <div className={`container text-white ${styles.loginHolder}`}>
            <div className={styles.custom_form_holder}>
                <h2 className={styles.title}>Payment Setup</h2>

                <div className={styles.custom_form}>
                    <div className={styles.alertBox}>
                        <FaExclamationCircle size={20} className='mt-0' />
                        <p className='mb-0'>Please ensure all banking details are accurate. Incorrect information may delay payments.</p>
                    </div>

                    {/* Payment Method Selector */}
                    <div className="mb-4">
                        <label className="form-label">Select Payment Method</label>
                        <div className={styles.dropdownContainer}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={styles.dropdownToggle}
                            >
                                <div className={styles.selectedMethod}>
                                    {paymentMethods.find(m => m.id === selectedMethod).icon}
                                    <span>{paymentMethods.find(m => m.id === selectedMethod).name}</span>
                                </div>
                                {isDropdownOpen ?
                                    <IoChevronUpOutline size={20} /> :
                                    <IoChevronDownOutline size={20} />
                                }
                            </button>

                            {isDropdownOpen && (
                                <div className={styles.dropdownMenu}>
                                    {paymentMethods.map((method) => (
                                        <button
                                            key={method.id}
                                            className={styles.dropdownItem}
                                            onClick={() => {
                                                setSelectedMethod(method.id);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            {method.icon}
                                            <span>{method.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <form className="mt-4">
                        {/* Payment Method Specific Fields */}
                        <div className="">
                            {selectedMethod === 'paypal' ? (
                                <>
                                    <div className="mb-4">
                                        <input
                                            type="email"
                                            className={`form-control ${styles.input}`}
                                            placeholder="PayPal email"
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
                            ) : (
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
                        </div>

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