import styles from "./RegisterOptions.module.css"
import session from "../../assets/RegisterCoach (1).jpg";
import online from "../../assets/registerTrainer.webp";
import { useNavigate } from "react-router-dom";
const RegisterOptions = () => {
  const navigate = useNavigate()

  const handelRegisterCoachNavigation = () => {
    navigate("/register")
  }

  const handelRegisterTrainerNavigation = () => {
    navigate("/trainerRegister")
  }
  return (
    <div className={styles.imageBackground}>
      <div className={styles.container}>
        <div className={styles.mainSection}>
          <h2 className='fw-bold mb-4'>Create Your Membership Now</h2>
          <h2 className={`mb-3 ${styles.registerTitle}`}>Register As!</h2>
          <div className={styles.cardsContainer}>
            <div className={`card ${styles.card}`} onClick={handelRegisterCoachNavigation}>
              <div className={styles.imageContainer}>
                <img src={session} className={`card-img-top ${styles.cardImage}`} alt="1 to 1 session" />
                <div className={styles.imageOverlay}>
                  <h5 className={styles.imageTitle}>Choach</h5>
                </div>
              </div>
            </div>
            <div className={`card ${styles.card}`} onClick={handelRegisterTrainerNavigation}>
              <div className={styles.imageContainer}>
                <img src={online} className={`card-img-top ${styles.cardImage}`} alt="Online Training" />
                <div className={styles.imageOverlay}>
                  <h5 className={styles.imageTitle}>Trainer</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterOptions