import styles from "./CoachExperiencePage.module.css"; // Ensure the correct import path
import imgBackground from "@assets/Train Qualification.webp";
import CoachExperience from '../../../components/Register/CoachExperience/CoachExperience';

const CoachExperiencePage = () => {
    return (
        <div className={styles.registerPage}>
            <img src={imgBackground} className={styles.backgroundImage} alt="Background" />
            <div className={styles.content}>
                <CoachExperience />
            </div>
        </div>
    );
}

export default CoachExperiencePage;
