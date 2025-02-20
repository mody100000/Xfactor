import React, { useState } from "react";
import { MdOnlinePrediction } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import styles from "./ManagePackages.module.css";

const ManagePackages = () => {
    const [packages, setPackages] = useState([
        { id: 1, title: "Light Package", type: "In-Person Training", description: "1 session package with Coach Arbi. 60 minute session length", recommended: false, SessionLength: "1 hour", ofSessions: 1, MaxAthletes: 4, totalPrice: 100 },
        { id: 2, title: "Elite Package", type: "In-Person Training", description: "10 session package with Coach Arbi. 60 minute session length", recommended: true, SessionLength: "1 hour", ofSessions: 10, MaxAthletes: 4, totalPrice: 800 },
        { id: 3, title: "Team Session -3 Players", type: "Online Training", description: "1 session package with Coach Arbi. 60 minute session length", recommended: false, SessionLength: "1 hour", ofSessions: 1, MaxAthletes: 4, totalPrice: 200 },
        { id: 4, title: "Team Session -5 Players", type: "Campus", description: "1 session package with Coach Arbi. 60 minute session length", recommended: false, SessionLength: "1 hour", ofSessions: 1, MaxAthletes: 4, totalPrice: 400 },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const emptyPackage = {
        title: "",
        type: "In-Person Training",
        description: "",
        SessionLength: "",
        ofSessions: "",
        MaxAthletes: "",
        totalPrice: "",
        recommended: false
    };
    const [currentPackage, setCurrentPackage] = useState(emptyPackage);

    const generateSessionBreakdown = () => {
        if (currentPackage.ofSessions && currentPackage.totalPrice) {
            const pricePerSession = currentPackage.totalPrice / currentPackage.ofSessions;
            return Array.from({ length: parseInt(currentPackage.ofSessions) }, (_, index) => ({
                session: index + 1,
                price: pricePerSession
            }));
        }
        return [];
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentPackage({ ...currentPackage, [name]: value });
    };

    const handleEditPackage = (pkg) => {
        setCurrentPackage(pkg);
        setIsEditing(true);
        setShowModal(true);
    };

    const handleSubmit = () => {
        if (!currentPackage.title || !currentPackage.description || !currentPackage.totalPrice) {
            alert("Please fill in all required fields!");
            return;
        }

        if (isEditing) {
            setPackages(packages.map(pkg =>
                pkg.id === currentPackage.id ? currentPackage : pkg
            ));
        } else {
            const newPkg = {
                id: packages.length + 1,
                ...currentPackage,
            };
            setPackages([...packages, newPkg]);
        }

        handleCloseModal();
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsEditing(false);
        setCurrentPackage(emptyPackage);
    };

    const handleAddNew = () => {
        setIsEditing(false);
        setCurrentPackage(emptyPackage);
        setShowModal(true);
    };

    return (
        <div>
            <div className={styles.packagesContainer}>
                <div className={styles.packageRow}>
                    {packages.map((pkg) => (
                        <div className={styles.packageCard} key={pkg.id}>
                            <div className={styles.cardHeader}>
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <h3 className={styles.cardTitle}>{pkg.title}</h3>
                                    <button
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => handleEditPackage(pkg)}
                                    >
                                        <FaEdit /> Update
                                    </button>
                                </div>
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
                    <div className={styles.packageCard} onClick={handleAddNew} style={{ cursor: "pointer" }}>
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

            {/* Modal for Add/Edit */}
            {showModal && (
                <div className={`modal ${styles.modalOverlay}`}>
                    <div className="modal-dialog">
                        <div className={`modal-content ${styles.mainCard}`}>
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {isEditing ? 'Update Package' : 'Add New Package'}
                                </h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-2">
                                        <label className="form-label mb-0 mt-2">Title</label>
                                        <input type="text" className={`form-control ${styles.input}`} name="title" value={currentPackage.title} onChange={handleInputChange} required />
                                    </div>
                                    <div className="mb-2">
                                        <label className={`form-label mb-0 mt-2`}>Type</label>
                                        <select className={`form-select ${styles.input}`} name="type" value={currentPackage.type} onChange={handleInputChange}>
                                            <option value="In-Person Training">In-Person Training</option>
                                            <option value="Online Training">Online Training</option>
                                            <option value="Campus">Campus</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label mb-0 mt-2">Description</label>
                                        <input type="text" className={`form-control ${styles.input}`} name="description" value={currentPackage.description} onChange={handleInputChange} required />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label mb-0 mt-2">Session Length</label>
                                        <input type="text" className={`form-control ${styles.input}`} name="SessionLength" value={currentPackage.SessionLength} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label mb-0 mt-2">Number of Sessions</label>
                                        <input type="number" className={`form-control ${styles.input}`} name="ofSessions" value={currentPackage.ofSessions} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label mb-0 mt-2">Max Athletes</label>
                                        <input type="number" className={`form-control ${styles.input}`} name="MaxAthletes" value={currentPackage.MaxAthletes} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label mb-0 mt-2">Total Price</label>
                                        <input type="number" className={`form-control ${styles.input}`} name="totalPrice" value={currentPackage.totalPrice} onChange={handleInputChange} required />
                                        {currentPackage.ofSessions && currentPackage.totalPrice && (
                                            <div className={`mt-2 p-2 ${styles.breakdown} rounded`}>
                                                <h6 className="mb-2">Price Breakdown:</h6>
                                                {generateSessionBreakdown().map((session) => (
                                                    <div key={session.session} className="d-flex align-items-center justify-content-between gap-2">
                                                        <p className="text-muted">Session {session.session}</p>
                                                        <p>${session.price.toFixed(2)}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-2">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="recommended"
                                                name="recommended"
                                                checked={currentPackage.recommended}
                                                onChange={(e) => handleInputChange({
                                                    target: {
                                                        name: 'recommended',
                                                        value: e.target.checked
                                                    }
                                                })}
                                            />
                                            <label className="form-check-label" htmlFor="recommended">
                                                Recommended Package
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancel</button>
                                <button
                                    type="button"
                                    className={`btn ${isEditing ? 'btn-danger' : 'btn-danger'}`}
                                    onClick={handleSubmit}
                                >
                                    {isEditing ? 'Update Package' : 'Add Package'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManagePackages;