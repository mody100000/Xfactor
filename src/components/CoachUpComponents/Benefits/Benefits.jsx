import styles from "./Benefits.module.css";
import Selection from "../../../assets/Selection.png";
import Quality from "../../../assets/Quality.png";
import Safety from "../../../assets/Safety.png";
import Training from "../../../assets/Training Resources.png";
import Good from "../../../assets/Good-Fit.png";
import Payments from "../../../assets/Payments.png";

const Benefits = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Benefits of CoachUp</h2>
            <p className={styles.text}>There are many benefits for athletes and coaches who join the CoachUp community:</p>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className={styles.item}>
                            <img src={Selection} alt="Selection" className={styles.icon} />
                            <div className={styles.info}>
                                <h2 className={styles.itemTitle}>Selection</h2>
                                <p className={styles.itemText}>The largest network of private coaches in America, across all major sports and training categories</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className={styles.item}>
                            <img src={Quality} alt="Quality" className={styles.icon} />
                            <div className={styles.info}>
                                <h2 className={styles.itemTitle}>Quality</h2>
                                <p className={styles.itemText}>We ensure high-quality coaches with verified reviews. If coaches don't perform up to our expectations, we remove them from our community</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className={styles.item}>
                            <img src={Safety} alt="Safety" className={styles.icon} />
                            <div className={styles.info}>
                                <h2 className={styles.itemTitle}>Safety</h2>
                                <p className={styles.itemText}>Peace of mind knowing we have conducted 3 distinct background checks on every coach - identification verification, sex offender check, and national criminal search</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className={styles.item}>
                            <img src={Training} alt="Training Resources" className={styles.icon} />
                            <div className={styles.info}>
                                <h2 className={styles.itemTitle}>Training Resources</h2>
                                <p className={styles.itemText}>Hundreds of curated articles to help with your training, written by CoachUp coaches and available for free.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className={styles.item}>
                            <img src={Good} alt="Good-Fit" className={styles.icon} />
                            <div className={styles.info}>
                                <h2 className={styles.itemTitle}>Good-Fit</h2>
                                <p className={styles.itemText}>Rest assured with our Good-Fit Guarantee (100% money back)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className={styles.item}>
                            <img src={Payments} alt="Payments" className={styles.icon} />
                            <div className={styles.info}>
                                <h2 className={styles.itemTitle}>Payments</h2>
                                <p className={styles.itemText}>Pay securely by credit card (no need to remember cash or checks)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
