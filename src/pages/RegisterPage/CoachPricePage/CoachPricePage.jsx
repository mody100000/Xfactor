import CoachPrice from "../../../components/Register/CoachPrice/CoachPrice";
import styles from "./CoachPricePage.module.css"; // Ensure the correct import path
import imgBackground from "@assets/Train Qualification.webp";

const CoachPricePage = () => {
    return (
        <div className={styles.registerPage}>
            <img src={imgBackground} className={styles.backgroundImage} alt="Background" />
            <div className={styles.content}>
                <CoachPrice />
            </div>
        </div>
    );
}

export default CoachPricePage;
