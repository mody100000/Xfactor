import React from 'react';
import { MdOnlinePrediction } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai"; // Import the Plus icon
import styles from "./ManagePackages.module.css";

const packages = [
    { id: 1, title: "Light Package", type: "In-Person Training", description: "1 session package with Coach Arbi. 60 minute session length", SessionLength: "1 hour", ofSessions: 1, MaxAthletes: 4, totalPrice: 100 },
    { id: 2, title: "Elite Package", type: "In-Person Training", description: "10 session package with Coach Arbi. 60 minute session length", SessionLength: "1 hour", ofSessions: 10, MaxAthletes: 4, totalPrice: 800 },
    { id: 3, title: "Team Session -3 Players", type: "In-Person Training", description: "1 session package with Coach Arbi. 60 minute session length", SessionLength: "1 hour", ofSessions: 1, MaxAthletes: 4, totalPrice: 200 },
    { id: 4, title: "Team Session -5 Players", type: "In-Person Training", description: "1 session package with Coach Arbi. 60 minute session length", SessionLength: "1 hour", ofSessions: 1, MaxAthletes: 4, totalPrice: 400 },
];

const ManagePackages = () => {
    return (
        <div>
            <div className={styles.packagesContainer}>
                <div className={styles.packageRow}>
                    {packages.map((pkg) => (
                        <div className={styles.packageCard} key={pkg.id}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                                {pkg.id === 2 && (
                                    <div className='d-flex justify-content-center align-items-center gap-1'>
                                        <FaStar size={19} color='#bf1e2e' />
                                        <p className='m-0'>Recommended</p>
                                        <FaStar size={19} color='#bf1e2e' />
                                    </div>
                                )}
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.coachDetails}>
                                    <div className="d-flex align-items-center">
                                        {pkg.type === "In-Person Training" ?
                                            <IoPerson className={styles.trainingType} /> :
                                            <MdOnlinePrediction className={styles.trainingType} />
                                        }
                                        <h5 className={styles.title}>{pkg.type}</h5>
                                    </div>
                                    <p>{pkg.description}</p>
                                </div>
                                <div className={styles.coachInfo}>
                                    <div className={styles.packageDetail}>
                                        <span className={styles.detailLabel}>Session Length:</span>
                                        <span className={styles.detailValue}>{pkg.SessionLength}</span>
                                    </div>
                                    <div className={styles.packageDetail}>
                                        <span className={styles.detailLabel}>Number of Sessions:</span>
                                        <span className={styles.detailValue}>{pkg.ofSessions}</span>
                                    </div>
                                    <div className={styles.packageDetail}>
                                        <span className={styles.detailLabel}>Max Athletes:</span>
                                        <span className={styles.detailValue}>{pkg.MaxAthletes}</span>
                                    </div>
                                    <div className={styles.packageDetail}>
                                        <span className={styles.detailLabel}>Total Price:</span>
                                        <span className={`${styles.detailValue} ${styles.totalPrice}`}>${pkg.totalPrice}</span>
                                    </div>
                                    <div className='d-flex gap-4 mx-auto'>
                                        <button className={styles.deleteButton}>Delete Package</button>
                                        <button className={styles.viewProfileButton}>Edit Package</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add New Package Card */}
                    <div className={styles.packageCard}>
                        <div className={styles.cardHeader}>
                            <AiOutlinePlus size={40} className="text-danger" /> {/* Plus Icon */}
                        </div>
                        <div className={styles.cardBody}>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <AiOutlinePlus size={40} />
                                <h4 className='text-center'>Add New Package</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ManagePackages;
