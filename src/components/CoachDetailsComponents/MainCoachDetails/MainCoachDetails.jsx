import CoachPackages from "./CoachPackages/CoachPackages";
import styles from "./MainCoachDetails.module.css"
import coachImage from "@assets/user.webp"
import { MdOutlineVerifiedUser } from "react-icons/md";

const MainCoachDetails = () => {
    return (
        <div className={styles.container}>
            <div className="d-flex flex-column justify-content-center">
                <div className={styles.coachCard}>
                    <div className={styles.coachMain}>
                        <div className='d-flex gap-3'>
                            <img src={coachImage} alt="John Doe" className={styles.coachImage} />
                            <div className="px-3">
                                <h2 className={styles.coachName}>John Doe</h2>
                                <div className={styles.rating}>
                                    <span className={styles.stars}>{'★'.repeat(5)}{'☆'.repeat(5 - 3)}</span>
                                    <span className={styles.reviews}>120 reviews</span>
                                </div>
                                <select
                                    className={styles.dropdown}
                                >
                                    <option value="" style={{ display: 'none' }}>Select...</option>
                                    <option value="1">1</option>
                                    <option value="2-4">2-4</option>
                                </select>
                            </div>
                        </div>
                        <div className='d-flex flex-column'>
                            <p className={styles.summary}>Professional trainer, experience with athletes ranging from pro to youth. As a former pro athlete, I understand what it takes to reach your fitness goals. Sports Science degree</p>
                            <div className={styles.verifiedUser}>
                                <div>
                                    <MdOutlineVerifiedUser size={40} />
                                </div>
                                <div className={styles.verified}>
                                    <p className={styles.distance}>Background Check verified</p>
                                    <p className={styles.textLink}>Learn More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CoachPackages />
            </div>
        </div>
    );
}

export default MainCoachDetails;