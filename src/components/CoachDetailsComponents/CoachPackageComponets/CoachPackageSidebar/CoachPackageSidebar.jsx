import React, { useState } from 'react';
import styles from "./CoachPackageSidebar.module.css";
import { MdKeyboardArrowUp, MdKeyboardArrowDown, MdOutlineMailOutline, MdOutlineVerifiedUser } from 'react-icons/md';
import logo from "@assets/goodFit.png"

function CoachPackageSidebar({ coach }) {
    const [expandedIndexes, setExpandedIndexes] = useState([false, false, false]); // Array to track expanded state

    const faqData = [
        {
            question: "What are your rates?",
            answer: "Demario offers 1-on-1 sessions for $100 (discounts may apply when booking multiple sessions). Sessions last 60 minutes. All sessions with Demario are covered by CoachUp's Good Fit Guarantee."
        },
        {
            question: "How does the scheduling work?",
            answer: "Once you book a session, you can schedule it at a time that works for both you and the coach. Flexible rescheduling options are available."
        },
        {
            question: "Can I get a refund?",
            answer: "Yes, you are eligible for a full refund if you are not satisfied after the first session as part of CoachUp's Good Fit Guarantee."
        }
    ];

    const toggleExpansion = (index) => {
        const newExpandedIndexes = [...expandedIndexes];
        newExpandedIndexes[index] = !newExpandedIndexes[index];
        setExpandedIndexes(newExpandedIndexes);
    };

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className={`d-flex flex-column ${styles.coachCard}`}>
                <h3>Your Coach</h3>
                <div className={`d-flex gap-3 my-3 mb-4`}>
                    <div>
                        <img src={coach?.image} alt="" className={styles.coachImage} />
                    </div>
                    <div className='d-flex flex-column gap-1 mx-2'>
                        <h4 className='m-0 text-start'>{coach?.name}</h4>
                        <p className='m-0 text-start'>{coach?.category}</p>
                        <p className='m-0 text-start'>{coach?.location}</p>
                        <span className={styles.stars}>{'★'.repeat(coach?.rating)}{'☆'.repeat(5 - coach?.rating)}</span>
                    </div>
                </div>

                {coach?.verified ?
                    <div className={styles.verifiedUser}>
                        <div>
                            <MdOutlineVerifiedUser size={40} />
                        </div>
                        <div className={styles.verified}>
                            <p className={styles.distance}>Background Check verified</p>
                            <p className={`${styles.textLink} mb-0`}>Learn More</p>
                        </div>
                    </div> : null}
            </div>
            <span className={`${styles.line} w-100`}></span>
            <p className={styles.title}>Frequently asked questions</p>
            {faqData.map((faq, index) => (
                <div key={index} className={`w-100 mb-3`}>
                    <div className={`d-flex justify-content-between ${styles.boxContainer}`}>
                        <p className='m-0'>{faq.question}</p>
                        <span className={`cursor-pointer ${styles.arrow}`} onClick={() => toggleExpansion(index)}>
                            {expandedIndexes[index] ? (
                                <MdKeyboardArrowDown size={25} />
                            ) : (
                                <MdKeyboardArrowUp size={25} />
                            )}
                        </span>
                    </div>
                    {expandedIndexes[index] && (
                        <div className={styles.boxContant}>
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
            <span className={`${styles.line} w-100`}></span>
            <div className='d-flex flex-column justify-content-start my-2 w-100'>
                <p className='mb-1'>Questions about CoachUp?</p>
                <p>Need help finding or booking a coach?</p>
                <p className='text-danger mb-1'>(888) 680-4750</p>
                <p className='mb-1'>Monday - Friday</p>
                <p className='mb-3'>9:30 AM - 5:30 PM EST</p>
                <p className='text-danger mb-0'><MdOutlineMailOutline size={23} />Send Us A Message</p>
            </div>
            <span className={`${styles.line} w-100`}></span>
            <img src={logo} alt="logo" className={styles.logo} />

        </div >
    );
}

export default CoachPackageSidebar;
