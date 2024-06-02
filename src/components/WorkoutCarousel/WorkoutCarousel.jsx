import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./WorkoutCarousel.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome

const WorkoutCarousel = () => {
  const videos = [
    { id: 1, url: "https://www.youtube.com/embed/eMjyvIQbn9M?si" },
    { id: 2, url: "https://www.youtube.com/embed/XIYuxAeKSM0?si" },
    { id: 3, url: "https://www.youtube.com/embed/EKUNGQ4LmH8?si" },
    { id: 4, url: "https://www.youtube.com/embed/3sEeVJEXTfY?si" },
    { id: 5, url: "https://www.youtube.com/embed/korOpibkm6g?si" },
  ];

  return (
    <div className={styles.workoutCarouselContainer}>
      <h2 className="text-center my-4 fw-bolder fs-1">See All Workouts</h2>
      <Carousel>
        {videos.map((video) => (
          <Carousel.Item key={video.id}>
            <div className={styles.videoContainer}>
              <iframe
                src={video.url}
                title={`Video ${video.id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default WorkoutCarousel;
