import React, { useState } from 'react';
import styles from './ClientReviews.module.css';
import user from "@assets/user.webp"
import review1 from "@assets/review1.jpeg"
import review2 from "@assets/review2.jpeg"
import CustomPagination from '../../common/Pagination/Pagination';
const ClientReviews = () => {
    // Sample review data (you'd typically fetch this from an API)
    const reviews = [
        {
            id: 1,
            name: 'Ahmed Ragab',
            image: user,
            rating: 5,
            content: 'Coach Michael came well prepared, he is knowledgeable about the game and detailed about the specific positions. Looking forward to upcoming sessions.'
        },
        {
            id: 2,
            name: 'Ahmed Ragab',
            image: review1,
            rating: 4,
            content: 'Coach Michael came well prepared, he is knowledgeable about the game and detailed about the specific positions. Looking forward to upcoming sessions.'
        }, {
            id: 3,
            name: 'Ahmed Ragab',
            image: review2,
            rating: 3,
            content: 'Coach Michael came well prepared, he is knowledgeable about the game and detailed about the specific positions. Looking forward to upcoming sessions.'
        }, {
            id: 4,
            name: 'Ahmed Ragab',
            image: review2,
            rating: 5,
            content: 'Coach Michael came well prepared, he is knowledgeable about the game and detailed about the specific positions. Looking forward to upcoming sessions.'
        }, {
            id: 5,
            name: 'Ahmed Ragab',
            image: review2,
            rating: 5,
            content: 'Coach Michael came well prepared, he is knowledgeable about the game and detailed about the specific positions. Looking forward to upcoming sessions.'
        }, {
            id: 6,
            name: 'Ahmed Ragab',
            image: user,
            rating: 5,
            content: 'Coach Michael came well prepared, he is knowledgeable about the game and detailed about the specific positions. Looking forward to upcoming sessions.'
        }, {
            id: 7,
            name: 'Ahmed Ragab',
            image: user,
            rating: 5,
            content: 'Coach Michael came well prepared, he is knowledgeable about the game and detailed about the specific positions. Looking forward to upcoming sessions.'
        },

        // Add more review objects here
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 4;

    // Calculate total pages
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    // Get current reviews
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    // Change page
    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className={`${styles.reviewsContainer}`}>
            <h2 className="mb-5">Client Reviews</h2>
            <div className="row">
                {currentReviews.map((review) => (
                    <div key={review.id} className="col-md-6 mb-4">
                        <div className={styles.reviewCard}>
                            <div className={styles.reviewHeader}>
                                <img src={review.image} alt={review.name} className={styles.avatar} />
                                <div>
                                    <h5 className={styles.reviewerName}>{review.name}</h5>
                                    <div className={styles.rating}>
                                        {'★'.repeat(review.rating)}
                                        {'☆'.repeat(5 - review.rating)}
                                    </div>
                                </div>
                            </div>
                            <p className={styles.reviewContent}>{review.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default ClientReviews;