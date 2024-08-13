import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import styles from "./CoachPackages.module.css"
import { IoMdAdd } from "react-icons/io";
import { MdOnlinePrediction } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

const CoachPackages = ({ packages }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <div className="d-flex gap-2">
                <span className={`cursor-pointer ${styles.arrow}`} onClick={toggleExpansion}>
                    {isExpanded ?
                        <MdKeyboardArrowDown size={35} /> :
                        <MdKeyboardArrowRight size={35} />
                    }
                </span>
                <p className={styles.headTitle}>Packages</p>
            </div>
            <div className={`${styles.packagesContainer} ${isExpanded ? styles.expanded : ''}`}>
                {packages.map(coachPackage => (
                    <div className={styles.packageCard} key={coachPackage.id}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardTitle}>{coachPackage.packageType} Package</h3>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.coachDetails}>
                                <div className="d-flex">
                                    {coachPackage.trainingType === "online" ?
                                        <MdOnlinePrediction className={styles.trainingType} />
                                        : <IoPerson className={styles.trainingType} />
                                    }
                                    <h5 className={styles.title}>{coachPackage.title}</h5>
                                </div>
                                <div>
                                    <p>{coachPackage.description}</p>
                                    <p>Session Length:<span className="fw-bold"> {coachPackage.sessionLength}</span></p>
                                </div>
                            </div>
                            <div className={styles.coachInfo}>
                                <p className='my-1'><span className='fs-4'>$</span><span className={styles.salary}>{coachPackage.salary}</span>/session</p>
                                <p className="mb-0">{coachPackage.sessionSalary}</p>
                                <p className="my-1"><IoMdAdd size={25} /></p>
                                <p>Applicable Fees</p>
                                <span className={styles.viewProfileLink}>
                                    <button className={styles.viewProfileButton}>Book Now</button>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CoachPackages;