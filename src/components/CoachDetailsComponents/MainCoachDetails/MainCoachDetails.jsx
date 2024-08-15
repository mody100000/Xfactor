import CoachExperience from "../CoachExperience/CoachExperience";
import CoachCredentials from "./CoachCredentials/CoachCredentials";
import CoachPackages from "./CoachPackages/CoachPackages";
import CoachServices from "./CoachServices";
import styles from "./MainCoachDetails.module.css"
import coachImage from "@assets/user.webp"
import { MdOutlineVerifiedUser } from "react-icons/md";
import ActionPhotos from "../ActionPhotos/ActionPhotos";

const MainCoachDetails = ({ coach }) => {
    const { packages } = coach
    const { credentials } = coach
    const { services } = coach
    return (
        <div className={styles.container}>
            <div className="d-flex flex-column justify-content-center">
                <div className={styles.coachCard}>
                    <div className={styles.coachMain}>
                        <div className='d-flex gap-3'>
                            <img src={coach.image || coachImage} alt={coach.name} className={styles.coachImage} />
                            <div className="px-3">
                                <h2 className={styles.coachName}>{coach.name}</h2>
                                <div className={styles.rating}>
                                    <span className={styles.stars}>{'★'.repeat(coach.rating)}{'☆'.repeat(5 - coach.rating)}</span>
                                    <span className={styles.reviews}>{coach.reviews} Reviews</span>
                                </div>
                                <select className={styles.dropdown}>
                                    {coach.categories.map((category, index) => (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>
                        <div className='d-flex flex-column'>
                            <p className={styles.summary}>{coach.summary} <span className={styles.textLink}>View All Coaching Experience</span></p>

                            {coach.verified ?
                                <div className={styles.verifiedUser}>
                                    <div>
                                        <MdOutlineVerifiedUser size={40} />
                                    </div>
                                    <div className={styles.verified}>
                                        <p className={styles.distance}>Background Check verified</p>
                                        <p className={styles.textLink}>Learn More</p>
                                    </div>
                                </div> : null}

                        </div>
                    </div>
                </div>
                <CoachPackages packages={packages} />
                <CoachCredentials credentials={credentials} />
                <CoachServices services={services} />
                <CoachExperience coach={coach} />
                <ActionPhotos coach={coach} />
            </div>
        </div>
    );
}

export default MainCoachDetails;