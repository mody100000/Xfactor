import image1 from "../../../assets/fitness.webp"; // Replace with your image paths
import image2 from "../../../assets/s3.jpg";
import image3 from "../../../assets/legGroup.webp";
import image4 from "../../../assets/sixBags.jpg";
import image5 from "../../../assets/blog1.webp";
import image6 from "../../../assets/introCoach.webp";
import image7 from "../../../assets/blog2.jpg";
import image8 from "../../../assets/blog3.jpg";
import styles from "./MainBlogs.module.css"
import { useState } from 'react';
import CustomPagination from "../../common/Pagination/Pagination";
import { useNavigate } from 'react-router-dom';

const MainBlogs = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/blog")
  }
  const classes = [
    {
      id: 1,
      title: "6 Ways To Help Athletes Grow Confidence In Themselves",
      image: image1,
      description: "Athletics play a critical role in developing a young person’s body and brain. There are many lifelong advantages to building healthy lifestyle habits in adolescence, both",
      supDetails: ["Theresa", "June 3, 2024", "2 Comments"]
    },
    {
      id: 2,
      title: "6 Ways To Help Athletes Grow Confidence In Themselves",
      image: image2,
      description: "Athletics play a critical role in developing a young person’s body and brain. There are many lifelong advantages to building healthy lifestyle habits in adolescence, both",
      supDetails: ["Theresa", "June 3, 2024", "2 Comments"]
    },
    {
      id: 3,
      title: "6 Ways To Help Athletes Grow Confidence In Themselves",
      image: image3,
      description: "Athletics play a critical role in developing a young person’s body and brain. There are many lifelong advantages to building healthy lifestyle habits in adolescence, both",
      supDetails: ["Theresa", "June 3, 2024", "2 Comments"]
    },
    {
      id: 4,
      title: "6 Ways To Help Athletes Grow Confidence In Themselves",
      image: image4,
      description: "Athletics play a critical role in developing a young person’s body and brain. There are many lifelong advantages to building healthy lifestyle habits in adolescence, both",
      supDetails: ["Theresa", "June 3, 2024", "2 Comments"]
    },
    {
      id: 5,
      title: "6 Ways To Help Athletes Grow Confidence In Themselves",
      image: image5,
      description: "Athletics play a critical role in developing a young person’s body and brain. There are many lifelong advantages to building healthy lifestyle habits in adolescence, both",
      supDetails: ["Theresa", "June 3, 2024", "2 Comments"]
    },
    {
      id: 6,
      title: "6 Ways To Help Athletes Grow Confidence In Themselves",
      image: image6,
      description: "Athletics play a critical role in developing a young person’s body and brain. There are many lifelong advantages to building healthy lifestyle habits in adolescence, both",
      supDetails: ["Theresa", "June 3, 2024", "2 Comments"]
    },
    {
      id: 7,
      title: "6 Ways To Help Athletes Grow Confidence In Themselves",
      image: image7,
      description: "Athletics play a critical role in developing a young person’s body and brain. There are many lifelong advantages to building healthy lifestyle habits in adolescence, both",
      supDetails: ["Theresa", "June 3, 2024", "2 Comments"]
    },
    {
      id: 8,
      title: "6 Ways To Help Athletes Grow Confidence In Themselves",
      image: image8,
      description: "Athletics play a critical role in developing a young person’s body and brain. There are many lifelong advantages to building healthy lifestyle habits in adolescence, both",
      supDetails: ["Theresa", "June 3, 2024", "2 Comments"]
    },
  ];

  const cardsPerPage = 6; // Adjust this number as needed
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(classes.length / cardsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the cards to display on the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const selectedCards = classes.slice(startIndex, startIndex + cardsPerPage);
  return (
    <div className="container my-5">
      <div className={`row ${styles.cardsContainer}`}>
        {selectedCards.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className={`card ${styles.card}`}>
              <div className={styles.imageContainer}>
                <img src={item.image} className={`card-img-top ${styles.gallary}`} alt={item.title} />
                <div className={styles.imageOverlay} style={{ backgroundColor: "rgba(14, 3, 4, 0.53)", backdropFilter: "blur(2.5rem)" }}>
                  <h5 className={styles.imageTitle}>{item.title}</h5>
                  <p className={`mb-4 ${styles.description}`}>{item.description}</p>
                  <div className={`d-flex justify-content-center align-items-center my-4 `}>
                    <button className={styles.readBtn} onClick={handleNavigate}>Read More</button>
                  </div>
                  <span className={styles.line}></span>
                  <div className={`d-flex justify-content-between align-items-center my-3 px-3 ${styles.Details}`}>
                    {item.supDetails.map((detail, index) => (
                      <span key={index} className="mt-3">{detail}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default MainBlogs;
