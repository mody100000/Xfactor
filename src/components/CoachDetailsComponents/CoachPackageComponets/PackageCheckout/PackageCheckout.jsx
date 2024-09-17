import { RiSecurePaymentLine } from "react-icons/ri"
import styles from "./PackageCheckout.module.css"
import Input from '../../../common/Input';
function PackageCheckout({ selectedPackage, coach }) {

    return (
        <div className={`d-flex flex-column `}>
            <div className={`d-flex flex-column flex-sm-row justify-content-around align-items-center ${styles.navInfo}`}>
                <div className={`d-flex justify-content-center align-items-center py-1 ${styles.notActive}`}>
                    <span className={`fs-4 mx-2 px-3 rounded-5 ${styles.notActiveBorder}`}>1</span>
                    <p className="fs-2 mb-0">Package Info</p>
                </div>
                <div className={`d-flex justify-content-center align-items-center text-white py-1`}>
                    <span className={`fs-4 mx-2 px-3 border border-2 rounded-5 `}>2</span>
                    <p className={`fs-2 mb-0`}>Checkout</p>
                </div>
            </div>
            <div className={`${styles.container} px-3 px-sm-5`}>
                <div className='d-flex flex-column flex-md-row justify-content-between align-items-center my-3'>
                    <h3 className='fw-bold fs-1'>Order Summary
                    </h3>
                </div>
                <div className="d-felx flex-column">
                    <div className="d-flex justify-content-between">
                        <p>{selectedPackage?.sessionSalary}</p>
                        <p>${selectedPackage?.salary}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Service fee</p>
                        <p>${selectedPackage?.feeSalary}</p>
                    </div>     <div className="d-flex justify-content-between">
                        <p className="text-start">One-time fee (does not apply to rebooking)</p>
                        <p>$24</p>
                    </div>
                    <div className="d-flex justify-content-between fw-bold">
                        <p>Total</p>
                        <p>${selectedPackage?.salary + selectedPackage?.feeSalary + 24}</p>
                    </div>
                    <p className="text-danger">View other package options from Coach Demario.</p>
                </div>
                <span className={`${styles.line} w-100`}></span>
                <div className='d-flex flex-column flex-md-row justify-content-between align-items-center mb-3'>
                    <h2 className='fw-bold fs-3'>Message Coach {coach?.name || "name"}</h2>
                    <p className='mb-0'>Fast Response Rate: {coach?.responseRate || "100"}%</p>
                </div>
                <div>
                    <p className="mb-4">We'll collect your email when you submit your message, and your coach's response will be sent directly to your email.</p>
                </div>
                <div className="mb-3">
                    <textarea className={`${styles.input}`} rows="5" placeholder="Example: My 11 year old son is trying out for his school team and needs to improve his speed and conditioning. Do you offer an indoor facility option? Thanks!"></textarea>
                </div>
                <span className={`${styles.line} w-100`}></span>
                <div className="my-1">
                    <h3 className='fw-bold fs-3 mb-3 text-center text-sm-start'> <RiSecurePaymentLine size={30} className="mb-1" />
                        Payment Information</h3>
                    <p>Enter your credit card information below. CoachUp uses industry standard, 256-bit SSL encryption to process payments.</p>
                </div>
                <div className={`${styles.boxContainer} mb-2`}>
                    <h3 className='fw-bold fs-2 mb-3'>Select Credit Card</h3>
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
                <span className={`${styles.line} w-100`}></span>
                <p className="fw-bold">Enroll & Accomplish Your Goal!</p>
                <div className="d-flex mb-1">
                    <input type="checkbox" id="1" className=" mx-3 " />
                    <label htmlFor="1">Enroll me in CoachUp’s Ongoing Training Program.</label>
                </div>
                <span className={`${styles.line} w-100`}></span>
                <div className="my-1">
                    <h3 className='fw-bold fs-3 mb-3 text-center text-sm-start'>Cancellation Policy
                    </h3>
                    <p><span className="fw-bold">Free cancellation within 90 days.</span> Receive account credit to book with a different coach after 90 days.</p>
                    <p>Also covered by CoachUp Good-Fit Guarantee </p>
                </div>
                <span className={`${styles.line} w-100`}></span>

                <button className={`${styles.messageBtn} mb-5`}>Book Now!</button>
            </div >
        </div>
    )
}

export default PackageCheckout