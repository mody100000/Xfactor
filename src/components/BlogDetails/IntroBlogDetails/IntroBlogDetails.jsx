import styles from "./IntroBlogDetails.module.css";

const IntroBlogDetails = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.overlay}>
                <div className={styles.leftColumn}>
                    <h1 className="fw-bold">6 Ways To Help Athletes Grow Confidence In Themselves</h1>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.suptitle}>
                        <span>Theresa</span>
                        <span>June 3, 2024</span>
                        <span>2 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroBlogDetails;
