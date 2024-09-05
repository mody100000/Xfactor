import React, { useState } from 'react';
import styles from "./MessageCoachSidebar.module.css";
import { MdKeyboardArrowUp, MdKeyboardArrowDown, MdOutlineMailOutline } from 'react-icons/md';

function MessageCoachSidebar() {
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
            <div className={`d-flex flex-column justify-content-center align-items-center w-100 ${styles.boxContainer}`}>
                <p>No More Questions?</p>
                <button className={styles.messageBtn}>Get Started</button>
            </div>
            <div className='d-flex flex-column justify-content-start my-4 w-100'>
                <p className='mb-1'>Questions about CoachUp?</p>
                <p>Need help finding or booking a coach?</p>
                <p className='text-danger mb-1'>(888) 680-4750</p>
                <p className='mb-1'>Monday - Friday</p>
                <p className='mb-3'>9:30 AM - 5:30 PM EST</p>
                <p className='text-danger'><MdOutlineMailOutline size={23} />Send Us A Message</p>
            </div>
        </div >
    );
}

export default MessageCoachSidebar;
