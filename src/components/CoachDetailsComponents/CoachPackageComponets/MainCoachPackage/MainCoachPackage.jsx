import styles from "./MainCoachPackage.module.css"
function MainCoachPackage({ selectedPackage }) {

    return (
        <div className='d-flex flex-column'>
            <div className='d-flex flex-column flex-md-row justify-content-between align-items-center mb-3'>
                <h3 className='fw-bold fs-1'>Your Package Selection
                </h3>
            </div>
            <div className="px-3">
                <p className={`fs-4 ${styles.packageType}`}>{selectedPackage?.packageType} package</p>
                <p>{selectedPackage?.title}</p>
                <p className="text-danger">View other package options from Coach Demario.</p>

            </div>
            <span className={`${styles.line} w-100`}></span>
            <p className="fw-bold">Enroll & Accomplish Your Goal!</p>
            <div className="d-flex mb-1">
                <input type="checkbox" id="baseballQuestions" className=" mx-3 " />
                <label htmlFor="baseballQuestions">Enroll me in CoachUp’s Ongoing Training Program.</label>
            </div>
            <span className={`${styles.line} w-100`}></span>
            <div className="d-felx flex-column">
                <div className="d-flex justify-content-between">
                    <p>{selectedPackage?.sessionSalary}</p>
                    <p>${selectedPackage?.salary}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Service fee</p>
                    <p>${selectedPackage?.feeSalary}</p>
                </div>     <div className="d-flex justify-content-between">
                    <p>One-time fee (does not apply to rebooking)</p>
                    <p>$24</p>
                </div>
                <div className="d-flex justify-content-between fw-bold">
                    <p>Total</p>
                    <p>${selectedPackage?.salary + selectedPackage?.feeSalary + 24}</p>
                </div>
            </div>
            <span className={`${styles.line} w-100`}></span>
            <div className={`d-flex flex-column flex-md-row my-2`}>
                <h5 className="text-center mx-2 mt-2">Athlete Name:</h5><input type="number" placeholder="Enter Your Name" className={`mx-auto mx-md-0  ${styles.input}`} />
            </div>
            <span className={`${styles.line} w-100`}></span>

            <button className={`${styles.messageBtn} mb-5`}>Book Now!</button>
        </div >
    )
}

export default MainCoachPackage