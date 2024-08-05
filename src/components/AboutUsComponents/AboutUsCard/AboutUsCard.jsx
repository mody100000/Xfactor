import cardImg from "../../../assets/AboutUsCard.webp"
import styles from "./AboutUsCard.module.css"
const AboutUsCard = () => {
  return (
    <div className={styles.container}>
      <div className={`row ${styles.cardContainer}`}>
        <div className="col-md-6">
          <img src={cardImg} alt="cardImg" className={styles.cardImg} />
        </div>
        <div className="col-md-6 d-flex flex-column p-4">
          <h2 className={styles.title}>
            Fitness Classes This Summer
          </h2>
          <p className={styles.text}>
            Pay Now And
          </p>
          <p className={styles.text}>
            Get <span className={styles.discount}>35%</span> Discount
          </p>
          <button className={`btn ${styles.memberBtn}`}>Become A Member</button>
        </div>
      </div>
    </div>

  );
}

export default AboutUsCard;