import React from 'react'
import styles from "./Reviews.module.css"

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


function Reviews() {
    return (
        <>
            <div className={`d-flex flex-column my-5 ${styles.coachCard}`}>
                <div className={`${styles.cardHeader} p-3 py-3 fw-bold`}>
                    <p className='mb-0 fs-5 text-white'>Reviews & Testimonials</p>
                </div>
                <div className={`p-3  ${styles.cardBody}`}>
                    <div className='d-flex flex-column justify-content-between'>
                        <p className={styles.supText}>Enter any testimonials you have collected from prior clients, athletes, teammates, colleagues, or coaches. These testimonials will be published on your profile. Additionally, any clients who book you through CoachUp will be able to leave a review for your profile.</p>
                        <div className="d-flex flex-column my-2"><h5 className="mt-1">Testimonial Quote</h5>
                            <textarea className="_input_1v580_1" rows="5" placeholder="Enter Your Quote....."></textarea>
                        </div>
                        <div className="d-flex flex-column my-2">
                            <h5 className="mt-1">Name / Title of Provider</h5>
                            <input
                                type="text"
                                placeholder="Name / Title...... "
                                className={`mx-auto mx-md-0 ${styles.input}`}
                            />
                        </div>
                        <div className='mx-auto mx-sm-1'>
                            <button className={`btn btn-danger mt-3 ${styles.savebtn}`}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`d-flex flex-column my-5 ${styles.coachCard}`}>
                <div className={`${styles.cardHeader} p-3 py-3 fw-bold`}>
                    <p className='mb-0 fs-5 text-white'>Client Reviews</p>

                </div>
                <div className={`p-1  ${styles.cardBody}`}>
                    <div className='d-flex flex-column'>
                        {reviews.map((review) => (
                            <div className={`p-3 `} key={review.id}>
                                <div className={`${styles.reviewsCard} d-flex justify-content-between`}>
                                    <p className='m-0'>{review.name}</p>
                                    <div className={styles.rating}>
                                        {'★'.repeat(review.rating)}
                                        {'☆'.repeat(5 - review.rating)}
                                    </div>
                                </div>
                                <div className={styles.reviewCardContainer}>
                                    <p className={`${styles.supText} p-2`}>{review.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews