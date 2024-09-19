import CoachPayment from "../../../components/Register/CoachPayment/CoachPayment";
import styles from "./CoachPaymentPage.module.css"; // Ensure the correct import path
import imgBackground from "@assets/Train Qualification.webp";

const CoachPaymentPage = () => {
    return (
        <div className={styles.registerPage}>
            <img src={imgBackground} className={styles.backgroundImage} alt="Background" />
            <div className={styles.content}>
                <CoachPayment />
            </div>
        </div>
    );
}

export default CoachPaymentPage;
