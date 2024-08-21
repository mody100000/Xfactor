import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './WorkoutCarousel.module.css';

const WorkoutCarousel = () => {
  const videos = [
    { id: 1, url: 'https://www.youtube.com/embed/eMjyvIQbn9M?si' },
    { id: 2, url: 'https://www.youtube.com/embed/XIYuxAeKSM0?si' },
    { id: 3, url: 'https://www.youtube.com/embed/EKUNGQ4LmH8?si' },
    { id: 4, url: 'https://www.youtube.com/embed/3sEeVJEXTfY?si' },
    { id: 5, url: 'https://www.youtube.com/embed/eTxO5ZMxcsc?si' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = React.useRef(null);

  const handleVideoClick = (index) => {
    setActiveIndex(index);
    sliderRef.current.slickGoTo(index, true);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20%',
    beforeChange: (current, next) => setActiveIndex(next),
    ref: sliderRef,
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
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: '0',
          arrows: false
        }
      }
    ]
  };

  return (
    <div className={styles.workoutCarouselContainer}>
      <h2 className={styles.title}>See All Workouts</h2>
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={styles.videoWrapper}
            onClick={() => handleVideoClick(index)}
          >
            <div className={`${styles.videoContainer} ${index === activeIndex ? styles.active : styles.inactive}`}>
              <iframe
                src={video.url}
                title={`Video ${video.id}`}
                className={styles.videoFrame}
                allowFullScreen
              />
              {index !== activeIndex && <div className={styles.overlay}></div>}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WorkoutCarousel;
