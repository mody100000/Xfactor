import React from 'react'
import styles from "./ProgressCards.module.css"
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { HiOutlinePlayCircle } from 'react-icons/hi2';
import { CiCirclePlus } from 'react-icons/ci';
function ProgressCards() {
    return (
        <div className="mt-5 px-3 px-sm-4 ">
            <h2 className="fw-bold mb-4">Progress</h2>
            <div className="row">
                {progressCards.map(card => (
                    <div className="col-lg-6 mb-3" key={card.id}>
                        <div className={`card ${styles.progressCard}`}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className={styles.iconWrapper}>
                                    {card.icon}
                                </div>
                                <span className={styles.progressNumbers}>{card.progressNumbers}</span>
                            </div>
                            <h4 className={styles.progressTitle}>{card.title}</h4>
                            <div className={`progress my-3 ${styles.progress}`}>
                                <div
                                    className={styles.progressBar}
                                    role="progressbar"
                                    style={{ width: `${card.progressPercentage}%` }}
                                    aria-valuenow={card.progressPercentage}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>{card.progressPercentage}% complete</span>
                                <span>{card.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
const progressCards = [
    {
        id: 1,
        icon: <BsArrowUpRightCircle size={30} />,
        progressNumbers: "7/15",
        title: "Progress by course",
        progressPercentage: 72,
        date: "2 Feb, 2024",
    },
    {
        id: 2,
        icon: <HiOutlinePlayCircle size={35} />,
        progressNumbers: "10/25",
        title: "Score for today",
        progressPercentage: 95,
        date: "Grade A",
    },
    {
        id: 3,
        icon: <HiOutlinePlayCircle size={35} />,
        progressNumbers: "5/10",
        title: "Video Review",
        progressPercentage: 60,
        date: "12 Jan, 2024",
    },
    {
        id: 4,
        icon: <CiCirclePlus size={35} />,
        progressNumbers: "12/20",
        title: "Completed texts",
        progressPercentage: 60,
        date: "20 Apr, 2024",
    },
];

export default ProgressCards