import PaymentMethodForm from "../../../components/Register/CoachPaymentMethod/PaymentMethodForm";
import styles from "./CoachPaymentMethodPage.module.css"; // Ensure the correct import path
import imgBackground from "@assets/Train Qualification.webp";

const CoachPaymentMethodPage = () => {
    return (
        <div className={styles.registerPage}>
            <img src={imgBackground} className={styles.backgroundImage} alt="Background" />
            <div className={styles.content}>
                <PaymentMethodForm />
            </div>
        </div>
    );
}

export default CoachPaymentMethodPage;
