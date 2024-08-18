import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ActionPhotos.module.css';
import image1 from "@assets/f2.jpg";
import fitness from "@assets/fitness.webp";
import carate from "@assets/carate.avif";
import s3 from "@assets/s3.jpg";


const ActionPhotos = ({ coach }) => {
    let images = coach.actionPhotos;
    if (!images || images.length === 0) {
        images = [image1, fitness, carate, s3]
    }
    const [activeIndex, setActiveIndex] = useState(0);
    const [sliderRef, setSliderRef] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        centerPadding: '0',
        beforeChange: (current, next) => setActiveIndex(next),
        appendDots: dots => (
            <div>
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                className={`${styles.customPaging} ${i === activeIndex ? styles.activeIndex : styles.inactiveIndex}`}
            ></div>
        ),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    arrows: false
                }
            }
        ]
    };

    const handleImageClick = (index) => {
        if (sliderRef) {
            sliderRef.slickGoTo(index);
        }
    };

    return (
        <section className={styles.fitnessGallerySection}>
            <h2 className="mb-5">Fitness Gallery</h2>
            <div className={styles.fitnessGallery}>
                <Slider ref={setSliderRef} {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className={styles.imageWrapper} onClick={() => handleImageClick(index)}>
                            <div className={`${styles.imageContainer} ${index === activeIndex ? styles.active : styles.inactive}`}>
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className={styles.image}
                                />
                                {index !== activeIndex && <div className={styles.overlay}></div>}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <span className={styles.line}></span>
        </section>
    );
};

export default ActionPhotos;