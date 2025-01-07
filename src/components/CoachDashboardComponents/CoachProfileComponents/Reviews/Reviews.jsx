// Reviews.jsx
import React, { useState } from 'react';
import styles from './Reviews.module.css';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Abdalla (CoachUp client)",
            review: "My 17 years old son’s first session was great, my son is happy with coach Arbi's approach. Coach is working on a plan to prepare my son for his tryouts, looking forward to more great sessions.",
            rating: 5
        },
        {
            id: 2,
            name: "Jennifer (CoachUp client)",
            review: "Just what my daughter and her teammates needed. Coach Arbi was great! Look forward to working with him again.",
            rating: 4
        },
        {
            id: 3,
            name: "Kaikham (CoachUp client)",
            review: "Coach Arbi is a really great coach and cares about his students' progress. He is very attentive and provides additional training recommendations outside of his sessions. My 13-year-old has learned so much already with only a few sessions. He is also a very nice person. Would highly recommend him.",
            rating: 5
        },
        {
            id: 4,
            name: "Jevon (CoachUp client)",
            review: "My son just had his first session with Coach Arbi. Wow! Talk about immediate impact. We walked away with a much better understanding of prep, technique, and the path to becoming a better player. Already looking forward to future sessions.",
            rating: 5
        },
        {
            id: 5,
            name: "Seth (CoachUp client)",
            review: "Coach Arbi led a great first session. I would recommend him to anyone!",
            rating: 4
        },
        {
            id: 6,
            name: "Kendra (CoachUp client)",
            review: "(no details provided)",
            rating: 3
        },
        {
            id: 7,
            name: "Janice (CoachUp client)",
            review: "(no details provided)",
            rating: 3
        },
        {
            id: 8,
            name: "Kalah (CoachUp client)",
            review: "Great coaching session for my 11-year-old son. We will be doing more!",
            rating: 5
        },
        {
            id: 9,
            name: "Robert (CoachUp client)",
            review: "Outstanding soccer skills coach and rigorous conditioning workout! My son has had three wonderful personal soccer coaches, but Coach Arbi brings the best of each together.",
            rating: 5
        },
        {
            id: 10,
            name: "Iven (CoachUp client)",
            review: "Super flexible and very knowledgeable/skilled coach! Our son always looks forward to his sessions. Highly recommended.",
            rating: 5
        },
        {
            id: 11,
            name: "Molly (CoachUp client)",
            review: "(no details provided)",
            rating: 3
        }
    ];

    return (
        <div className={`mt-5 ${styles.reviewsContainer}`}>
            {/* Client Reviews Card */}
            <div className={styles.card}>
                <div className={styles.cardHeaderNew}>
                    <h4 className="mb-0">
                        <i className="bi bi-star-fill me-2"></i>
                        Client Reviews
                    </h4>
                    <div className={styles.overallRating}>
                        <span className={styles.ratingNumber}>4.5</span>
                        <div className={styles.stars}>★★★★½</div>
                        <span className={styles.reviewCount}>{reviews.length} reviews</span>
                    </div>
                </div>
                <div className={`${styles.cardBodyNew} ${styles.reviewsList}`}>
                    {reviews.map((review) => (
                        <div key={review.id} className={styles.reviewItem}>
                            <div className={styles.reviewHeader}>
                                <div className={styles.reviewerInfo}>
                                    <div className={styles.avatarCircle}>
                                        {review.name.charAt(0)}
                                    </div>
                                    <div className={styles.reviewerDetails}>
                                        <h5 className={styles.reviewerName}>{review.name}</h5>
                                        <div className={styles.reviewRating}>
                                            <span className={styles.stars}>
                                                {'★'.repeat(review.rating)}
                                                {'☆'.repeat(5 - review.rating)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className={styles.reviewText}>
                                {review.review === "(no details provided)"
                                    ? "Verified Review"
                                    : review.review
                                }
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;