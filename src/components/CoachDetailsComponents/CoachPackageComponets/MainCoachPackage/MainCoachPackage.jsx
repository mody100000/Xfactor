import Calendar from "../../../common/Calendar/Calendar"
import NewCalendar from "../../../DashboardCourses/CoursesSidebar/NewCalendar/NewCalendar"
import styles from "./MainCoachPackage.module.css"
function MainCoachPackage({ selectedPackage }) {

    return (
        <div className='d-flex flex-column px-3 px-sm-5'>
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
                <input type="checkbox" id="1" className=" mx-3 " />
                <label htmlFor="1">Enroll me in CoachUp’s Ongoing Training Program.</label>
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
            <div className="my-1">
                <h3 className='fw-bold fs-2 mb-3 text-center text-sm-start'>Select your preferred time
                </h3>
                <p>Please select a time from Coach Kobie's availability to indicate when you would prefer to start training. If you're unsure, just select "I'm flexible" – you can discuss scheduling with your coach after you book.</p>
            </div>
            <span className={`${styles.line} w-100`}></span>
            <div className="d-flex my-2">
                <input type="checkbox" id="2" className=" mx-3 " />
                <label htmlFor="2">I'm flexible and/or I've discussed times with my coach</label>
            </div>
            <span className={`${styles.line} w-100`}></span>
            <Calendar />
            <button className={`${styles.messageBtn} mb-5`}>Book Now!</button>
        </div >
    )
}

export default MainCoachPackage