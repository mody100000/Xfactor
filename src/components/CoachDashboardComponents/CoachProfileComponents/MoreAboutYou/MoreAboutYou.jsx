import React, { useState, useRef, useEffect } from 'react';
import styles from './MoreAboutYou.module.css';
import img1 from "@assets/introCoach.webp";
import img2 from "@assets/coachIntro.webp";

const actionImages = [{
    id: 1,
    img: img1,
    alt: "actionImage1"
},
{
    id: 2,
    img: img2,
    alt: "actionImage2"
}];

function MoreAboutYou() {
    const [activeSection, setActiveSection] = useState('experience');
    const [isDragging, setIsDragging] = useState(false);
    const [showLeftScroll, setShowLeftScroll] = useState(false);
    const [showRightScroll, setShowRightScroll] = useState(false);
    const scrollContainerRef = useRef(null);

    const checkScroll = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setShowLeftScroll(container.scrollLeft > 0);
            setShowRightScroll(
                container.scrollLeft < container.scrollWidth - container.clientWidth - 1
            );
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = direction === 'left' ? -200 : 200;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        checkScroll();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    return (
        <div className={`mt-5 ${styles.profileContainer}`}>
            <div className={`${styles.mainCard}`}>
                <div className={`${styles.cardHeader}`}>
                    <h2 className="text-white mb-0 d-flex align-items-center">
                        <i className="bi bi-person-lines-fill"></i>
                        Coach Profile Details
                    </h2>
                    <p className="text-white mb-0 mt-3 small">
                        Share your experience and expertise with potential clients
                    </p>
                </div>

                <div className={`${styles.cardBody}`}>
                    <div className={styles.tabNavigationWrapper}>
                        {showLeftScroll && (
                            <button
                                className={`${styles.scrollButton} ${styles.scrollLeft}`}
                                onClick={() => scroll('left')}
                            >
                                <i className="bi bi-chevron-left"></i>
                            </button>
                        )}

                        <div
                            ref={scrollContainerRef}
                            className={styles.tabNavigation}
                            onScroll={handleScroll}
                        >
                            <button
                                className={`${styles.tabItem} ${activeSection === 'experience' ? styles.activeTab : ''}`}
                                onClick={() => setActiveSection('experience')}
                            >
                                <i className="bi bi-trophy"></i>
                                Experience
                            </button>

                            <button
                                className={`${styles.tabItem} ${activeSection === 'highlights' ? styles.activeTab : ''}`}
                                onClick={() => setActiveSection('highlights')}
                            >
                                <i className="bi bi-star"></i>
                                Highlights
                            </button>

                            <button
                                className={`${styles.tabItem} ${activeSection === 'plan' ? styles.activeTab : ''}`}
                                onClick={() => setActiveSection('plan')}
                            >
                                <i className="bi bi-calendar-check"></i>
                                Session Plan
                            </button>
                        </div>

                        {showRightScroll && (
                            <button
                                className={`${styles.scrollButton} ${styles.scrollRight}`}
                                onClick={() => scroll('right')}
                            >
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        )}
                    </div>

                    <div className={styles.formSection}>
                        <div className={`${styles.textareaWrapper} ${activeSection === 'experience' ? styles.active : ''}`}>
                            <label className={styles.textareaLabel}>
                                <i className="bi bi-briefcase me-2"></i>
                                Coaching Experience
                            </label>
                            <textarea
                                className={styles.textarea}
                                rows="5"
                                placeholder="Share your coaching journey, certifications, and experience working with different age groups and skill levels..."
                            ></textarea>
                        </div>

                        <div className={`${styles.textareaWrapper} ${activeSection === 'highlights' ? styles.active : ''}`}>
                            <label className={styles.textareaLabel}>
                                <i className="bi bi-award me-2"></i>
                                Athletic Highlights
                            </label>
                            <textarea
                                className={styles.textarea}
                                rows="5"
                                placeholder="Share your personal achievements, playing history, and notable moments in your athletic career..."
                            ></textarea>
                        </div>

                        <div className={`${styles.textareaWrapper} ${activeSection === 'plan' ? styles.active : ''}`}>
                            <label className={styles.textareaLabel}>
                                <i className="bi bi-list-check me-2"></i>
                                Session Plan
                            </label>
                            <textarea
                                className={styles.textarea}
                                rows="5"
                                placeholder="Describe your coaching methodology, session structure, and how you adapt to different skill levels..."
                            ></textarea>
                        </div>

                        <button className={styles.saveButton}>
                            <i className="bi bi-check2-circle me-2"></i>
                            Save Profile Changes
                        </button>
                    </div>

                    <div className={styles.photoSection}>
                        <h5 className={styles.photoTitle}>
                            <i className="bi bi-camera me-2"></i>
                            Action Photos
                        </h5>

                        <div className={styles.photoGrid}>
                            {actionImages.map((image) => (
                                <div className={styles.photoCard} key={image.id}>
                                    <div className={styles.photoWrapper}>
                                        <img src={image.img} alt={image.alt} className={styles.actionPhoto} />
                                        <div className={styles.photoOverlay}>
                                            <button className={styles.photoAction}>
                                                <i className="bi bi-pencil"></i>
                                            </button>
                                            <button className={styles.photoAction}>
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div
                                className={`${styles.uploadBox} ${isDragging ? styles.dragging : ''}`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDragLeave}
                            >
                                <i className="bi bi-cloud-upload"></i>
                                <p>Drag & Drop or Click to Upload</p>
                                <button className={styles.uploadButton}>
                                    <i className="bi bi-plus-circle me-2"></i>
                                    Add New Photo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreAboutYou;