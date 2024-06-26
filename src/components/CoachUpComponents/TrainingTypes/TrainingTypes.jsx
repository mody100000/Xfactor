import styles from "./TrainingTypes.module.css"
import user from "../../../assets/user1.png";
import users from "../../../assets/users.png";
import video from "../../../assets/video.png";

const TrainingTypes = () => {
    return ( <div className="">
        <h1 className="text-dark text-center fw-bold">TrainingTypes</h1>
        <div className={styles.icons}>
        <div className={styles.item}>
            <img src={user} alt="Total Clients" className={styles.icon} />
            <div className={styles.info}>
              <h2 className={styles.title}>1-on-1 Training</h2>
              <div className={styles.text}>Work with a private coach who will create a personalized training plan to help you reach your unique goals</div>
            </div>
          </div>
          <div className={styles.item}>
            <img src={users} alt="Total Clients" className={styles.icon} />
            <div className={styles.info}>
              <h2 className={styles.title}>Camps and Clinics</h2>
              <div className={styles.text}>Train with a small group of athletes for an educational, confidence building, affordable and fun experience</div>
            </div>
          </div>
          <div className={styles.item}>
            <img src={video} alt="Total Clients" className={styles.icon} />
            <div className={styles.info}>
              <h2 className={styles.title}>Virtual Training</h2>
              <div className={styles.text}>Connect with an online coach to receive custom training plans, video analysis, game film review and more</div>
            </div>
          </div>
        </div>
    </div> );
}
 
export default TrainingTypes;