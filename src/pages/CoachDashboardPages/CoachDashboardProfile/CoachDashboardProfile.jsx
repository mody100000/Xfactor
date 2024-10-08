import React, { useState } from 'react';
import styles from "./CoachDashboardProfile.module.css";
import coachImg from "@assets/user.webp";
import CustomDropdown from '../../../components/common/CustomDropdown/CustomDropdown';
import CustomDropdownMenu from '../../../components/common/CustomDropdownMenu/CustomDropdownMenu';
import TrainingLocations from '../../../components/CoachDashboardComponents/CoachProfileComponents/TrainingLocations/TrainingLocations';
import MyServices from '../../../components/CoachDashboardComponents/CoachProfileComponents/MyServices/MyServices';
import MoreAboutYou from '../../../components/CoachDashboardComponents/CoachProfileComponents/MoreAboutYou/MoreAboutYou';
import Reviews from '../../../components/CoachDashboardComponents/CoachProfileComponents/Reviews/Reviews';

function CoachDashboardProfile() {
    const [canTravel, setCanTravel] = useState(false);

    const handleToggle = (value) => {
        setCanTravel(value);
    };
    const handleSelect = (option) => {
        console.log('Selected option:', option);
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
            <div className={`d-flex flex-column my-5 ${styles.coachCard}`}>
                <div className={`${styles.cardHeader} p-3 py-3 fw-bold`}>
                    <p className='mb-0 fs-5 text-white'>Custom Profile URL</p>
                </div>
                <div className={`p-3  ${styles.cardBody}`}>
                    <div className='d-flex flex-column justify-content-between'>
                        <p className={`${styles.supText}`}>Your Custom Profile URL allows you to share or post a link to your profile that is clean and easy to type. Example: coachup.com/me/samsfitness</p>
                        <div className="d-flex flex-column flex-md-row my-2"><h5 className="text-center mx-2 mt-2">coachup.com/me/</h5>
                            <input type="number" placeholder="URL" className="mx-auto mx-md-0  _input_xdvt1_16" />
                        </div>
                        <div className='mx-auto mx-sm-1'>
                            <button className={`btn btn-danger mt-3 ${styles.savebtn}`}>save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`d-flex flex-column my-5 ${styles.coachCard}`}>
                <div className={`${styles.cardHeader} p-3 py-3 fw-bold`}>
                    <p className='mb-0 fs-5 text-white'>Basic Info</p>
                </div>
                <div className={`p-3  ${styles.cardBody}`}>
                    <div className='d-flex flex-column justify-content-between'>
                        <div className="d-flex mb-1"><input type="checkbox" id="baseballQuestions" className="mx-2" />
                            <label htmlFor="baseballQuestions"> Display full name publicly</label>
                        </div>
                        <div className="d-flex flex-column my-2"><h5 className="mt-2">One Sentence Bio</h5>
                            <textarea className="_input_1v580_1" rows="5" placeholder="To develop players to achieve their maximum potential."></textarea>
                        </div>
                        <div className='mx-auto mx-sm-1'>
                            <button className={`btn btn-danger mt-3 ${styles.savebtn}`}>save Description</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`d-flex flex-column my-5 ${styles.coachCard}`}>
                <div className={`${styles.cardHeader} p-3 py-3 fw-bold`}>
                    <p className='mb-0 fs-5 text-white'>Travel</p>
                </div>
                <div className={`p-3  ${styles.cardBody}`}>
                    <div className='d-flex flex-column justify-content-between'>
                        <p className={`${styles.supText}`}>Are you willing to meet clients at a training location near them? If so, enter your base address (typically your home or work address) and how many miles you're willing to travel from there.</p>
                        <p>Can You Travel To Sessions?</p>
                        <div className='d-flex gap-4'>
                            <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() => handleToggle(true)}
                            >
                                <p className={canTravel ? "_checkedActive_1sd20_18" : "_checked_1sd20_7"}></p>
                                <p className="_iconSearch_1sd20_1">yes</p>
                            </div>
                            <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() => handleToggle(false)}
                            >
                                <p className={!canTravel ? "_checkedActive_1sd20_18" : "_checked_1sd20_7"}></p>
                                <p className="_iconSearch_1sd20_1">no</p>
                            </div>
                        </div>
                        {canTravel && (
                            <div className="d-flex justify-content-center align-items-center flex-md-row flex-column my-2">
                                <div className='d-flex flex-column col-12 col-md-6 flex-md-row justify-content-center align-items-center'>
                                    <label className="col-12 col-md-3 text-center">From Location</label>
                                    <input
                                        type="text"
                                        placeholder="Falls Church, VA"
                                        className={`mx-auto mx-md-0 ${styles.input}`}
                                    />
                                </div>

                                <div className='d-flex flex-column flex-md-row col-12 col-md-6 justify-content-center align-items-center'>
                                    <label className="mx-2">Distance</label>
                                    <CustomDropdownMenu
                                        options={["Male", "Female", "Other"]}
                                        placeholder="Gender"
                                    />
                                </div>
                            </div>

                        )}
                        <div className='mx-auto mx-sm-1'>
                            <button className={`btn btn-danger mt-3 ${styles.savebtn}`}>Update Location</button>
                        </div>
                    </div>
                </div>
            </div>
            <TrainingLocations />
            <div className={`d-flex flex-column my-5 ${styles.coachCard}`}>
                <div className={`${styles.cardHeader} p-3 py-3 fw-bold`}>
                    <p className='mb-0 fs-5 text-white'>My Credentials</p>
                </div>
                <div className={`p-3  ${styles.cardBody}`}>
                    <div className='d-flex flex-column justify-content-between'>
                        <div className="d-flex justify-content-center align-items-center flex-md-row flex-column my-2 gap-3">
                            <div className='d-flex flex-column col-12 col-md-6 justify-content-center align-items-center gap-3'>
                                <label className="mx-2 fs-5">College Attended</label>
                                <CustomDropdownMenu
                                    options={["None",
                                        "US",
                                        "CA",
                                        "MX",
                                        "UK",
                                        "FR",
                                        "DE",
                                        "AL",
                                        "AK",
                                        "AZ",
                                        "AR",
                                        "CA",
                                        "CO",
                                        "CT",
                                        "DE",
                                        "FL",
                                        "GA",
                                        "HI",
                                        "ID",
                                        "IL",
                                        "IN",
                                        "IA",
                                        "KS",
                                        "KY",
                                        "LA",]}
                                    placeholder="Country or US State"
                                />
                            </div>

                            <div className='d-flex flex-column col-12 col-md-6 justify-content-center align-items-center gap-3'>
                                <label className="mx-2 fs-5">Years Coaching </label>
                                <CustomDropdownMenu
                                    options={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                                        "11", "12", "13", "14", "15", "16", "17", "18",
                                        "19", "20", "21", "22", "23", "24", "25"]}
                                    placeholder="15"
                                />
                            </div>
                        </div>
                        <div className='mx-auto mx-sm-1'>
                            <button className={`btn btn-danger mt-3 ${styles.savebtn}`}>Update Credentials</button>
                        </div>
                    </div>
                </div>
            </div>
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
