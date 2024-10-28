import React, { useState } from 'react';
import styles from "./MyServices.module.css";

const agesType = [{
    id: 1, age: "Adults", picked: true, icon: "👥"
}, {
    id: 2, age: "Teenagers", picked: true, icon: "🧑‍🤝‍🧑"
}, {
    id: 3, age: "Kids", picked: true, icon: "👶"
}];

const positionsType = [
    { id: 1, position: "Defense", picked: true, icon: "🛡️" },
    { id: 2, position: "Forward", picked: true, icon: "⚡" },
    { id: 3, position: "Goalkeeper", picked: false, icon: "🧤" },
    { id: 4, position: "Midfield", picked: true, icon: "⚽" },
];

const specialtiesType = [
    { id: 1, name: "Agility", picked: true },
    { id: 2, name: "Corner Kicks", picked: false },
    { id: 3, name: "Crossing", picked: false },
    { id: 4, name: "Dribbling", picked: true },
    { id: 5, name: "First Touch", picked: true },
    { id: 6, name: "Free Kicks", picked: true },
    { id: 7, name: "Goal Kicks", picked: true },
    { id: 8, name: "Heading", picked: true },
    { id: 9, name: "One-Touch", picked: true },
    { id: 10, name: "One-on-Ones", picked: false },
    { id: 11, name: "Passing", picked: false },
    { id: 12, name: "Penalty Kicks", picked: false },
    { id: 13, name: "Shooting", picked: true },
    { id: 14, name: "Throw-Ins", picked: false }
];

function MyServices() {
    const [ages, setAges] = useState(agesType);
    const [positions, setPositions] = useState(positionsType);
    const [specialties, setSpecialties] = useState(specialtiesType);
    const [activeTab, setActiveTab] = useState('ages');

    const handleCheckboxChange = (id, type) => {
        if (type === 'age') {
            setAges(ages.map(age => age.id === id ? { ...age, picked: !age.picked } : age));
        } else if (type === 'position') {
            setPositions(positions.map(position => position.id === id ? { ...position, picked: !position.picked } : position));
        } else if (type === "specialtie") {
            setSpecialties(specialties.map(specialtie => specialtie.id === id ? { ...specialtie, picked: !specialtie.picked } : specialtie));
        }
    };

    return (
        <div className={`mt-5 ${styles.servicesContainer}`}>
            <div className={`${styles.mainCard}`}>
                <div className={`${styles.cardHeader} p-4`}>
                    <h2 className="text-white fw-bold mb-3 d-flex align-items-center">
                        <i className={`bi bi-gear-fill fw-bold`}></i>
                        My Coaching Services
                    </h2>
                    <p className="text-white mb-0 mt-2 small">
                        Customize your coaching profile by selecting your specialties
                    </p>
                </div>

                <div className={`${styles.cardBody} p-4`}>
                    <div className={styles.tabNavigation}>
                        <button
                            className={`${styles.tabItem} ${activeTab === 'ages' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('ages')}
                        >
                            <span className={styles.tabIcon}>👥</span>
                            Ages
                        </button>
                        <button
                            className={`${styles.tabItem} ${activeTab === 'positions' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('positions')}
                        >
                            <span className={styles.tabIcon}>⚽</span>
                            Positions
                        </button>
                        <button
                            className={`${styles.tabItem} ${activeTab === 'specialties' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('specialties')}
                        >
                            <span className={styles.tabIcon}>🎯</span>
                            Specialties
                        </button>
                    </div>


                    <div className="tab-content">
                        <div className={`tab-pane fade ${activeTab === 'ages' ? 'show active' : ''}`}>
                            <div className="row g-3">
                                {ages.map((age) => (
                                    <div className="col-md-4" key={age.id}>
                                        <div className={`${styles.serviceCard} ${age.picked ? styles.selected : ''}`}>
                                            <div className="form-check d-flex align-items-center">
                                                <input
                                                    type="checkbox"
                                                    className={`form-check-input ${styles.checkbox}`}
                                                    onChange={() => handleCheckboxChange(age.id, 'age')}
                                                    checked={age.picked}
                                                    id={`age-${age.id}`}
                                                />
                                                <label className="form-check-label ms-2" htmlFor={`age-${age.id}`}>
                                                    <span className={styles.icon}>{age.icon}</span>
                                                    {age.age}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`tab-pane fade ${activeTab === 'positions' ? 'show active' : ''}`}>
                            <div className="row g-3">
                                {positions.map((position) => (
                                    <div className="col-md-3" key={position.id}>
                                        <div className={`${styles.serviceCard} ${position.picked ? styles.selected : ''}`}>
                                            <div className="form-check d-flex align-items-center">
                                                <input
                                                    type="checkbox"
                                                    className={`form-check-input ${styles.checkbox}`}
                                                    onChange={() => handleCheckboxChange(position.id, 'position')}
                                                    checked={position.picked}
                                                    id={`position-${position.id}`}
                                                />
                                                <label className="form-check-label ms-2" htmlFor={`position-${position.id}`}>
                                                    <span className={styles.icon}>{position.icon}</span>
                                                    {position.position}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`tab-pane fade ${activeTab === 'specialties' ? 'show active' : ''}`}>
                            <div className="row g-3">
                                {specialties.map((specialty) => (
                                    <div className="col-md-4" key={specialty.id}>
                                        <div className={`${styles.serviceCard} ${specialty.picked ? styles.selected : ''}`}>
                                            <div className="form-check d-flex align-items-center">
                                                <input
                                                    type="checkbox"
                                                    className={`form-check-input ${styles.checkbox}`}
                                                    onChange={() => handleCheckboxChange(specialty.id, 'specialtie')}
                                                    checked={specialty.picked}
                                                    id={`specialty-${specialty.id}`}
                                                />
                                                <label className="form-check-label ms-2" htmlFor={`specialty-${specialty.id}`}>
                                                    {specialty.name}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <button className={`btn ${styles.saveButton}`}>
                            <i className="bi bi-check2-circle me-2"></i>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyServices;