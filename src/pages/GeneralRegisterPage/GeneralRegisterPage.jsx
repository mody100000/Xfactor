import GeneralRegister from "@components/Register/GeneralRegisterComponent/GeneralRegister";
import styles from "./GeneralRegisterPage.module.css"; // Ensure the correct import path
import imgBackground from "../../assets/Train Qualification.webp"
const GeneralRegisterPage = () => {

  return (
    <div className={`d-flex jusfiy-content-center flex-column ${styles.registerPage}`}>
      <img src={imgBackground} className={styles.backgroundImage} alt="Background" />
      <div className={styles.content}>
        <GeneralRegister />
      </div>
    </div>
  );
}

export default GeneralRegisterPage;
