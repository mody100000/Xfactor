import styles from "./CoachBackgroundPage.module.css"; // Ensure the correct import path
import imgBackground from "@assets/Train Qualification.webp";
import CoachBackground from "../../../components/Register/CoachBackground/CoachBackground";

const CoachBackgroundPage = () => {
    return (
        <div className={styles.registerPage}>
            <img src={imgBackground} className={styles.backgroundImage} alt="Background" />
            <div className={styles.content}>
                <CoachBackground />
            </div>
        </div>
    );
}

export default CoachBackgroundPage;
