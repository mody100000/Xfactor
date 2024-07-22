import React, { useState } from 'react';
import CourseImg from "@assets/f2.jpg";
import styles from "./CourseDetails.module.css";
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';

const CourseDetails = () => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (rate) => {
        setRating(rate);
        console.log(`Rated with value ${rate}`);
    };

    return (
        <div className='px-1'>
            <div className={styles.imgContainer}>
                <img src={CourseImg} alt="" className={styles.img} />
            </div>
            <div className="col-auto py-4 d-flex align-items-center">
                <Rating
                    emptySymbol={<FaStar color="lightgray" size={25} />}
                    fullSymbol={<FaStar color="#BF1E2E" size={25} />}
                    onChange={handleRatingChange}
                />
                <span className='text-center px-3'>{rating}/5</span>
            </div>
            <h2 className='fw-bold'>Incorporating Abstraction</h2>
            <div className="mt-4">
                <div className="row">
                    {progressCards.map(card => (
                        <div className="col-lg-6 mb-3" key={card.id}>
                            <div className={`card ${styles.progressCard}`}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className={styles.iconWrapper}>
                                        {card.title}
                                    </div>
                                    <span className={styles.progressNumbers}>{card.progressNumbers}</span>
                                </div>
                                <span className={`mt-2 mb-1 ${styles.purchaseDate}`}>{card.dateTime1}</span>
                                <p>{card.task1}</p>
                                <span className={`mt-2 mb-1 ${styles.purchaseDate}`}>{card.dateTime2}</span>
                                <p>{card.task2}</p>
                                <span className={`mt-2 mb-1 ${styles.purchaseDate}`}>{card.dateTime3}</span>
                                <p>{card.task3}</p>
                                <div className="d-flex justify-content-between">
                                    <span className={styles.purchaseDate}>{card.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const progressCards = [
    {
        id: 1,
        title: "Transcription",
        progressNumbers: "ENG",
        dateTime1: "04:00",
        task1: "Complete three sets of squats, followed by push-ups and planks. Finish with a cardio cool-down session.",
        dateTime2: "12:00",
        task2: "Complete three sets of squats, followed by push-ups and planks. Finish with a cardio cool-down session.",
        dateTime3: "04:00",
        task3: "Complete three sets of squats, followed by push-ups and planks. Finish with a cardio cool-down session.",
        date: "2 Feb, 2024",
    },
    {
        id: 2,
        title: "Notes",
        progressNumbers: "SAVED",
        dateTime1: "04:00",
        task1: "Complete three sets of squats, followed by push-ups and planks. Finish with a cardio cool-down session.",
        dateTime2: "04:00",
        task2: "Complete three sets of squats, followed by push-ups and planks. Finish with a cardio cool-down session.",
        dateTime3: "12:00",
        task3: "Complete three sets of squats, followed by push-ups and planks. Finish with a cardio cool-down session.",
        date: "2 Feb, 2024",
    }, {
        id: 3,
        title: "Notes",
        progressNumbers: "SAVED",
        dateTime1: "04:00",
        task1: "Complete three sets of squats, followed by push-ups and planks. Finish with a cardio cool-down session.",
        dateTime2: "04:00",
        task2: "Complete three sets of squats, followed by push-ups and planks. Finish with a cardio cool-down session.",
        dateTime3: "11:00",
        task3: "Complete three sets of squats, followed by push-ups and planks. Finish with a cardio cool-down session.",
        date: "2 Feb, 2024",
    }, {
        id: 4,
        title: "Transcription",
        progressNumbers: "ENG",
        dateTime1: "04:00",
        task1: "Complete three sets of squats, followed by push-ups and planks. Finish with a cardio cool-down session.",
        dateTime2: "10:00",
        task2: "Complete three sets of squats, followed by push-ups and planks. Finish with a cardio cool-down session.",
        dateTime3: "04:00",
        task3: "Complete three sets of squats, followed by push-ups and planks. Finish with a cardio cool-down session.",
        date: "2 Feb, 2024",
    },
];

export default CourseDetails;
