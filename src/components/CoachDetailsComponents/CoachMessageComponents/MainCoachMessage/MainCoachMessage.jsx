import { useState } from "react";
import styles from "./MainCoachMessage.module.css"
function MainCoachMessage({ coach }) {
    const [showMoreText, setShowMoreText] = useState(false);
    const handleLearnMoreClick = () => {
        setShowMoreText(!showMoreText);
    };
    console.log(coach)
    return (
        <div className='d-flex flex-column'>
            <div className='d-flex flex-column flex-md-row justify-content-between align-items-center mb-3'>
                <h2 className='fw-bold fs-1'>Message Coach {coach?.name || "name"}</h2>
                <p className='mb-0'>Fast Response Rate: {coach?.responseRate || "100"}%</p>
            </div>
            <div>
                <p className="mb-4">We'll collect your email when you submit your message, and your coach's response will be sent directly to your email.</p>
            </div>
            <div className="mb-3">
                <textarea className={`${styles.input}`} rows="5" placeholder="Example: My 11 year old son is trying out for his school team and needs to improve his speed and conditioning. Do you offer an indoor facility option? Thanks!"></textarea>
            </div>
            <div className={`d-flex flex-column flex-md-row mb-3 ${styles.boxContainer}`}>
                <h5 className="text-center mx-4 mt-2">Phone number (optional):</h5><input type="number" placeholder="000-000-1234" className={`mx-auto mx-md-0 ${styles.input}`} />
            </div>
            <div className={`mb-3 ${styles.boxContainer}`}>
                <div className="d-flex mb-1">
                    <input type="checkbox" id="baseballQuestions" className=" mx-3 " />
                    <label htmlFor="baseballQuestions">Send this message to additional coaches recommended by CoachUp</label>
                </div>
                <div className="mx-5">
                    <p className={`text-danger mb-1 ${styles.learnMore}`}><span className="cursor-pointer" onClick={handleLearnMoreClick}>Learn about this feature </span></p>
                    {showMoreText && (
                        <p className={styles.moreText}>
                            For the best chance of finding the perfect coach, enable this option and we'll send your message to a few other great coaches who match your needs.
                        </p>
                    )}
                </div>
            </div>
            <button className={`${styles.messageBtn} mb-5`}>Send Message</button>
        </div >
    )
}

export default MainCoachMessage