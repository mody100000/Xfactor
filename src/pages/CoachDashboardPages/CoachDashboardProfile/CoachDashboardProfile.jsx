import React, { useState } from 'react';
import styles from "./CoachDashboardProfile.module.css";
import coachImg from "@assets/user.webp";
import CustomDropdownMenu from '../../../components/common/CustomDropdownMenu/CustomDropdownMenu';
import TrainingLocations from '../../../components/CoachDashboardComponents/CoachProfileComponents/TrainingLocations/TrainingLocations';
import MyServices from '../../../components/CoachDashboardComponents/CoachProfileComponents/MyServices/MyServices';
import MoreAboutYou from '../../../components/CoachDashboardComponents/CoachProfileComponents/MoreAboutYou/MoreAboutYou';
import Reviews from '../../../components/CoachDashboardComponents/CoachProfileComponents/Reviews/Reviews';
import BasicInfo from '../../../components/CoachDashboardComponents/CoachProfileComponents/BasicInfo/BasicInfo';
import TravelPreferences from '../../../components/CoachDashboardComponents/CoachProfileComponents/TravelPreferences/TravelPreferences';
import MyCredentials from '../../../components/CoachDashboardComponents/MyCredentials/MyCredentials';

function CoachDashboardProfile() {
    const [canTravel, setCanTravel] = useState(false);

    const handleToggle = (value) => {
        setCanTravel(value);
    };
    const [url, setUrl] = useState('');
    const [saved, setSaved] = useState(false);


    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };




    return (
        <div className='p-4 p-sm-5'>
            <div className={`d-flex flex-column flex-md-row justify-content-between ${styles.coachProfileCard}`}>
                <div className='d-flex flex-column flex-md-row align-items-center'>
                    <div className='d-flex flex-column'>
                        <img src={coachImg} alt="coachImg" className={styles.coachImage} />
                        <p className='text-danger text-center mt-1'>Upload photo</p>
                    </div>
                    <div className='px-4 d-flex flex-column my-4 text-center text-md-left'>
                        <h3 className='fs-1 mb-3'>Arbi H.</h3>
                        <p className='text-danger mb-2'>Coach another sport</p>
                        <p className='text-danger'>View public profile</p>
                    </div>
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex flex-column flex-md-row justify-content-around gap-3'>
                        <div className={`d-flex flex-column text-center justify-content-center align-content-center ${styles.detailsCard}`}>
                            <p className='fs-5'>Coach Score</p>
                            <p className='fs-1'>1,219</p>
                            <p className='text-danger'>What is Coach Score?</p>
                        </div>
                        <div className={`d-flex flex-column text-center justify-content-center align-content-center ${styles.detailsCard}`}>
                            <span className={styles.badge}>TIER: SILVER</span>
                            <p className='fw-bold fs-5'>Completed Sessions: 108</p>
                            <p className='fw-bold fs-5'>Client Loyalty Rate: 0%</p>
                            <p className='text-danger'>Learn more about your Coach Tier</p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='mb-3 fs-5'>Your Profile is 100% Complete</p>
                        <div className="progress">
                            <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Test */}
            <div className={`card mt-5 ${styles.mainCard}`}>
                <div className={`card-header ${styles.cardHeader}`}>
                    <div className="d-flex flex-column gap-2">
                        <i className="bi bi-link-45deg text-white"></i>
                        <h3 className="mb-2 text-white">Custom Profile URL</h3>
                        <p className="mb-0 text-white">
                            Create a memorable URL for your profile that's easy to share with others.
                            Make it unique and professional!
                        </p>
                    </div>
                </div>

                <div className={`card-body ${styles.cardBody}`}>
                    <div className={`${styles.urlInputContainer} p-4 mb-4`}>
                        <div className="row g-2 align-items-center">
                            <div className="col-12 col-sm-auto">
                                <div className={styles.baseUrl}>
                                    <span>coachup.com/me/</span>
                                </div>
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className={`form-control ${styles.urlInput}`}
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder="your-profile-name"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-end mb-4">
                        <button
                            onClick={handleSave}
                            className={`btn ${saved ? styles.btnSaved : styles.btnSave}`}
                        >
                            {saved ? (
                                <span className="d-flex align-items-center gap-2">
                                    <i className="bi bi-check-circle"></i>
                                    Saved!
                                </span>
                            ) : (
                                'Save URL'
                            )}
                        </button>
                    </div>

                    <div className={styles.previewContainer}>
                        <p className={styles.previewText}>
                            Your profile will be available at:{' '}
                            <span className={styles.previewUrl}>
                                coachup.com/me/{url || 'your-profile-name'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            {/* Test */}
            <BasicInfo />
            <TravelPreferences />
            <TrainingLocations />
            <MyCredentials />
            <MyServices />
            <div className={`d-flex flex-column my-5 ${styles.coachCard}`}>
                <div className={`${styles.cardHeader} p-3 py-3 fw-bold`}>
                    <p className='mb-0 fs-5 text-white'>My Details</p>
                </div>
                <div className={`p-3  ${styles.cardBody}`}>
                    <div className='d-flex flex-column justify-content-between'>
                        <div className="d-flex justify-content- align-items-center flex-md-row flex-column my-2 gap-3">
                            <div className='d-flex flex-column col-12 col-md-6 justify-content-center align-items-center gap-3'>
                                <label className="mx-2 fs-5">Facility Costs</label>
                                <CustomDropdownMenu
                                    options={["N/A - No Facility",
                                        "Not Included",
                                        "Included",]}
                                    placeholder="N/A - No Facility"
                                />
                            </div>
                        </div>
                        <div className='mx-auto mx-sm-1'>
                            <button className={`btn btn-danger mt-3 ${styles.savebtn}`}>Update Credentials</button>
                        </div>
                    </div>
                </div>
            </div>
            <MoreAboutYou />
            <Reviews />
        </div>
    );
}

export default CoachDashboardProfile;
