import CoachAvailability from "../../../components/Register/CoachAvailability/CoachAvailability";
import styles from "./CoachAvailabilityPage.module.css"; // Ensure the correct import path
import imgBackground from "@assets/Train Qualification.webp";

const CoachAvailabilityPage = () => {
    return (
        <div className={styles.registerPage}>
            <img src={imgBackground} className={styles.backgroundImage} alt="Background" />
            <div className={styles.content}>
                <CoachAvailability />
            </div>
        </div>
    );
}

export default CoachAvailabilityPage;
