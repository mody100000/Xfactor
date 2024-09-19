import CoachProfile from "../../../components/Register/CoachProfile/CoachProfile";
import styles from "./CoachProfilePage.module.css"; // Ensure the correct import path
import imgBackground from "@assets/Train Qualification.webp";

const CoachProfilePage = () => {
    return (
        <div className={styles.registerPage}>
            <img src={imgBackground} className={styles.backgroundImage} alt="Background" />
            <div className={styles.content}>
                <CoachProfile />
            </div>
        </div>
    );
}

export default CoachProfilePage;
