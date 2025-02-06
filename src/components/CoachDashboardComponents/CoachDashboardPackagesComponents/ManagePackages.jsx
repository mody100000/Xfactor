import React, { useState } from "react";
import { MdOnlinePrediction } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "./ManagePackages.module.css";
import { MdGroups } from "react-icons/md";

const ManagePackages = () => {
    const [packages, setPackages] = useState([
        { id: 1, title: "Light Package", type: "In-Person Training", description: "1 session package with Coach Arbi. 60 minute session length", recommended: false, SessionLength: "1 hour", ofSessions: 1, MaxAthletes: 4, totalPrice: 100 },
        { id: 2, title: "Elite Package", type: "In-Person Training", description: "10 session package with Coach Arbi. 60 minute session length", recommended: true, SessionLength: "1 hour", ofSessions: 10, MaxAthletes: 4, totalPrice: 800 },
        { id: 3, title: "Team Session -3 Players", type: "Online Training", description: "1 session package with Coach Arbi. 60 minute session length", recommended: false, SessionLength: "1 hour", ofSessions: 1, MaxAthletes: 4, totalPrice: 200 },
        { id: 4, title: "Team Session -5 Players", type: "Campus", description: "1 session package with Coach Arbi. 60 minute session length", recommended: false, SessionLength: "1 hour", ofSessions: 1, MaxAthletes: 4, totalPrice: 400 },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newPackage, setNewPackage] = useState({
        title: "",
        type: "In-Person Training",
        description: "",
        SessionLength: "",
        ofSessions: "",
        MaxAthletes: "",
        totalPrice: "",
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPackage({ ...newPackage, [name]: value });
    };

    // Handle package submission
    const handleAddPackage = () => {
        if (!newPackage.title || !newPackage.description || !newPackage.totalPrice) {
            alert("Please fill in all required fields!");
            return;
        }

        const newPkg = {
            id: packages.length + 1,
            ...newPackage,
        };

        setPackages([...packages, newPkg]);
        setShowModal(false);
        setNewPackage({ title: "", type: "In-Person Training", description: "", SessionLength: "", ofSessions: "", MaxAthletes: "", totalPrice: "" });
    };

    return (
        <div>
            <div className={styles.packagesContainer}>
                <div className={styles.packageRow}>
                    {packages.map((pkg) => (
                        <div className={styles.packageCard} key={pkg.id}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                                {pkg.recommended && (
                                    <div className="d-flex justify-content-center align-items-center gap-1">
                                        <FaStar size={19} color="#bf1e2e" />
                                        <p className="m-0">Recommended</p>
                                        <FaStar size={19} color="#bf1e2e" />
                                    </div>
                                )}
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.coachDetails}>
                                    <div className="d-flex align-items-center">
                                        {(() => {
                                            if (pkg.type === "In-Person Training") {
                                                return <IoPerson className={styles.trainingType} />;
                                            } else if (pkg.type === "Online Training") {
                                                return <MdOnlinePrediction className={styles.trainingType} />;
                                            }
                                            return <MdGroups className={styles.trainingType} />;
                                        })()}
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
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add New Package Card */}
                    <div className={styles.packageCard} onClick={() => setShowModal(true)} style={{ cursor: "pointer" }}>
                        <div className={styles.cardHeader}>
                            <AiOutlinePlus size={40} className="text-danger" />
                        </div>
                        <div className={styles.cardBody}>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <AiOutlinePlus size={40} />
                                <h4 className="text-center">Add New Package</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bootstrap Modal */}
            {showModal && (
                <div className={`modal ${styles.modalOverlay}`}>
                    <div className="modal-dialog">
                        <div className={`modal-content ${styles.mainCard}`}>
                            <div className="modal-header">
                                <h5 className="modal-title">Add New Package</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-2">
                                        <label className="form-label mb-0 mt-2">Title</label>
                                        <input type="text" className={`form-control ${styles.input}`} name="title" value={newPackage.title} onChange={handleInputChange} required />
                                    </div>
                                    <div className="mb-2">
                                        <label className={`form-label mb-0 mt-2`}>Type</label>
                                        <select className={`form-select ${styles.input}`} name="type" value={newPackage.type} onChange={handleInputChange}>
                                            <option value="In-Person Training">In-Person Training</option>
                                            <option value="Online Training">Online Training</option>
                                            <option value="Campus">Campus</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label mb-0 mt-2">Description</label>
                                        <input type="text" className={`form-control ${styles.input}`} name="description" value={newPackage.description} onChange={handleInputChange} required />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label mb-0 mt-2">Session Length</label>
                                        <input type="text" className={`form-control ${styles.input}`} name="SessionLength" value={newPackage.SessionLength} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label mb-0 mt-2">Number of Sessions</label>
                                        <input type="number" className={`form-control ${styles.input}`} name="ofSessions" value={newPackage.ofSessions} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label mb-0 mt-2">Max Athletes</label>
                                        <input type="number" className={`form-control ${styles.input}`} name="MaxAthletes" value={newPackage.MaxAthletes} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label mb-0 mt-2">Total Price</label>
                                        <input type="number" className={`form-control ${styles.input}`} name="totalPrice" value={newPackage.totalPrice} onChange={handleInputChange} required />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                                <button type="button" className="btn btn-danger" onClick={handleAddPackage}>Add Package</button>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </div >
    );
};

export default ManagePackages;