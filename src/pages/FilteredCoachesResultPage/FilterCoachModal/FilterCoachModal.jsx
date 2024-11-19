import React from 'react';
import styles from './FilterCoachModal.module.css';

const FilterCoachModal = ({
    isOpen,
    onClose,
    genderFilter,
    setGenderFilter,
    trainingType,
    setTrainingType,
    sortCriteria,
    setSortCriteria
}) => {
    // Create temporary state for the filters
    const [tempGenderFilter, setTempGenderFilter] = React.useState(genderFilter);
    const [tempTrainingType, setTempTrainingType] = React.useState(trainingType);
    const [tempSortCriteria, setTempSortCriteria] = React.useState(sortCriteria);

    // Reset temporary values when modal opens
    React.useEffect(() => {
        if (isOpen) {
            setTempGenderFilter(genderFilter);
            setTempTrainingType(trainingType);
            setTempSortCriteria(sortCriteria);
        }
    }, [isOpen]);

    const handleApplyFilters = () => {
        setGenderFilter(tempGenderFilter);
        setTrainingType(tempTrainingType);
        setSortCriteria(tempSortCriteria);
        onClose();
    };

    const handleResetFilters = () => {
        setTempGenderFilter('Any');
        setTempTrainingType('All');
        setTempSortCriteria('');
    };

    if (!isOpen) return null;

    return (
        <>
            <div className={`${styles.modalBackdrop}`}></div>
            <div
                className={`modal fade show d-block ${styles.filterModal}`}
                tabIndex="-1"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className={`modal-content ${styles.modal}`}>
                        <div className="modal-header d-flex justify-content-between">
                            <h5 className="modal-title">Filter Coaches</h5>
                            <button
                                type="button"
                                className={styles.closeButton}
                                onClick={onClose}
                                aria-label="Close"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="mb-4">
                                <label className="form-label">Training Type</label>
                                <div className='d-flex justify-content-between'>
                                    <button
                                        className={`btn btn-responsive ${tempTrainingType === 'All' ? 'btn-danger' : 'btn-outline-danger'}`}
                                        onClick={() => setTempTrainingType('All')}
                                    >
                                        All
                                    </button>
                                    <button
                                        className={`btn btn-responsive ${tempTrainingType === 'In-Person' ? 'btn-danger' : 'btn-outline-danger'}`}
                                        onClick={() => setTempTrainingType('In-Person')}
                                    >
                                        In-Person
                                    </button>
                                    <button
                                        className={`btn btn-responsive ${tempTrainingType === 'Online' ? 'btn-danger' : 'btn-outline-danger'}`}
                                        onClick={() => setTempTrainingType('Online')}
                                    >
                                        Online
                                    </button>
                                    <button
                                        className={`btn btn-responsive ${tempTrainingType === 'Campus' ? 'btn-danger' : 'btn-outline-danger'}`}
                                        onClick={() => setTempTrainingType('Campus')}
                                    >
                                        Campus
                                    </button>
                                </div>
                            </div>
                            <span className={styles.line}></span>

                            <div className="mb-4">
                                <label className="form-label">Gender</label>
                                <select
                                    className={`form-select ${styles.input}`}
                                    value={tempGenderFilter}
                                    onChange={(e) => setTempGenderFilter(e.target.value)}
                                >
                                    <option value="Any">Any</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div>
                                <span className={styles.line}></span>

                                <h3 className='mb-3 fs-4'>Travel To Me</h3>
                                <label>
                                    <input type="checkbox" /> Show Only Coaches Willing To Travel
                                </label>
                            </div>
                            <div>
                                <span className={styles.line}></span>
                                <h3 className='mb-4'>Position(s)</h3>
                                <div className={styles.positionGrid}>
                                    <label><input type="checkbox" /> Defensive Back</label>
                                    <label><input type="checkbox" /> Defensive Line</label>
                                    <label><input type="checkbox" /> Kicker</label>
                                    <label><input type="checkbox" /> Linebacker</label>
                                    <label><input type="checkbox" /> Offensive Line</label>
                                    <label><input type="checkbox" /> Punter</label>
                                    <label><input type="checkbox" /> Quarterback</label>
                                    <label><input type="checkbox" /> Running Back</label>
                                    <label><input type="checkbox" /> Tight End</label>
                                    <label><input type="checkbox" /> Wide Receiver</label>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleResetFilters}
                            >
                                Reset Filters
                            </button>
                            <button
                                type="button"
                                className={`btn btn-danger`}
                                onClick={handleApplyFilters}
                            >
                                Apply Filters
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default FilterCoachModal;