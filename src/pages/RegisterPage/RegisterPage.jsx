import Register from "../../components/Register/Register";
import styles from "./RegisterPage.module.css"; // Ensure the correct import path
import imgBackground from "../../assets/Train Qualification.webp";

const RegisterPage = () => {
  return (
    <div className={styles.registerPage}>
      <img src={imgBackground} className={styles.backgroundImage} alt="Background" />
      <div className={styles.content}>
        <Register />
      </div>
    </div>
  );
}

export default RegisterPage;
