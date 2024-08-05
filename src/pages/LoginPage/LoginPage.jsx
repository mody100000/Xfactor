import Login from "../../components/Login/Login";
import styles from "./LoginPage.module.css"; // Ensure the correct import path
import imgBackground from "../../assets/Register.webp";

const LoginPage = () => {

  return (
    <div className={styles.loginPage}>
      <img src={imgBackground} className={styles.backgroundImage} alt="Background" />
      <div className={styles.content}>
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
