import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "./CoachPackages.module.css"
import { IoMdAdd } from "react-icons/io";
const CoachPackages = () => {
    return (<div>
        <div className="d-flex gap-2">
            <span><MdKeyboardArrowDown size={30} /></span> <p className={styles.headTitle}>Packages</p>
        </div>
        <div className={styles.packageCard}>
            <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Light Package</h3>
            </div>
            <div className={styles.cardBody}>
                <div className={styles.coachDetails}>
                    <h5>In-Person Training for a single athlete</h5>
                    <p>3 session package with Coach Michael. 60 minute session length
                        Session Length: 1 hour</p>
                </div>
                <div className={styles.coachInfo}>
                    <p className='my-1'><span className='fs-4'>$</span><span className={styles.salary}>135</span>/session</p>
                    <IoMdAdd size={25} />
                    <p className={styles.fee}>Applicable Fees</p>
                    <span className={styles.viewProfileLink}>
                        <button className={styles.viewProfileButton}>View Profile</button>
                    </span>
                </div>
            </div>
        </div>
        <div className={styles.packageCard}>
            <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Light Package</h3>
            </div>
            <div className={styles.cardBody}>
                <div className={styles.coachDetails}>
                    <h5>In-Person Training for a single athlete</h5>
                    <p>3 session package with Coach Michael. 60 minute session length
                        Session Length: 1 hour</p>
                </div>
                <div className={styles.coachInfo}>
                    <p className='my-1'><span className='fs-4'>$</span><span className={styles.salary}>135</span>/session</p>
                    <IoMdAdd size={25} />
                    <p className={styles.fee}>Applicable Fees</p>
                    <span className={styles.viewProfileLink}>
                        <button className={styles.viewProfileButton}>View Profile</button>
                    </span>
                </div>
            </div>
        </div>
        <div className={styles.packageCard}>
            <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Light Package</h3>
            </div>
            <div className={styles.cardBody}>
                <div className={styles.coachDetails}>
                    <h5>In-Person Training for a single athlete</h5>
                    <p>3 session package with Coach Michael. 60 minute session length
                        Session Length: 1 hour</p>
                </div>
                <div className={styles.coachInfo}>
                    <p className='my-1'><span className='fs-4'>$</span><span className={styles.salary}>135</span>/session</p>
                    <IoMdAdd size={25} />
                    <p className={styles.fee}>Applicable Fees</p>
                    <span className={styles.viewProfileLink}>
                        <button className={styles.viewProfileButton}>View Profile</button>
                    </span>
                </div>
            </div>
        </div>
    </div>);
}

export default CoachPackages;