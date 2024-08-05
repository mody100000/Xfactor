import styles from "./AssignClientPage.module.css"
import image1 from "../../../assets/fitness.jpg"; // Replace with your image paths
import image2 from "../../../assets/s3.jpg";
import image3 from "../../../assets/legGroup.webp";
import image4 from "../../../assets/sixBags.jpg";
import image5 from "../../../assets/blog1.webp";
import image6 from "../../../assets/introCoach.webp";
import image7 from "../../../assets/blog2.jpg";
import image8 from "../../../assets/blog3.jpg";
import { useState } from 'react';
import CustomPagination from "../../../components/common/Pagination/Pagination";

const AssignClientPage = () => {
  const clients = [
    {
      id: 1,
      name: "ali",
      age: 21,
      sport: "football",
      phone: "0112325366",
      plan: "gold",
      image: image1,
      children: ["hasen", "khaled", "sadat"]
    },
    {
      id: 2,
      name: "ali",
      age: 21,
      sport: "football",
      phone: "0112325366",
      plan: "gold",
      image: image2,
      children: ["hasen", "khaled", "sadat"]
    },
    {
      id: 3,
      name: "ali",
      age: 21,
      sport: "football",
      phone: "0112325366",
      plan: "gold",
      image: image3,
      children: ["hasen", "khaled", "sadat"]
    },
    {
      id: 4,
      name: "ali",
      age: 21,
      sport: "football",
      phone: "0112325366",
      plan: "gold",
      image: image4,
      children: ["hasen", "khaled", "sadat"]
    },
    {
      id: 5,
      name: "ali",
      age: 21,
      sport: "football",
      phone: "0112325366",
      plan: "gold",
      image: image5,
      children: ["hasen", "khaled", "sadat"]
    },
    {
      id: 6,
      name: "ali",
      age: 21,
      sport: "football",
      phone: "0112325366",
      plan: "gold",
      image: image6,
      children: ["hasen", "khaled", "sadat"]
    },
    {
      id: 7,
      name: "ali",
      age: 21,
      sport: "football",
      phone: "0112325366",
      plan: "gold",
      image: image7,
      children: ["hasen", "khaled", "sadat"]
    },
    {
      id: 8,
      name: "ali",
      age: 21,
      sport: "football",
      phone: "0112325366",
      plan: "gold",
      image: image8,
      children: ["hasen", "khaled", "sadat"]
    },
  ];
  const cardsPerPage = 6; // Adjust this number as needed
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(clients.length / cardsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the cards to display on the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const selectedCards = clients.slice(startIndex, startIndex + cardsPerPage);
  return (
    <div className="container my-5">
      <div className={`row ${styles.cardsContainer}`}>
        <h2 className="fw-bold text-center mb-3">Your Recoustes</h2>
        {selectedCards.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className={`card ${styles.card}`}>
              <div className={styles.imageContainer}>
                <img src={item.image} className={`card-img-top ${styles.gallary}`} alt={item.name} />
                <div className={styles.imageOverlay} style={{ backgroundColor: "rgba(14, 3, 4, 0.53)", backdropFilter: "blur(2.5rem)" }}>
                  <h5 className={styles.imageTitle}>{item.name}</h5>
                  <div className="container my-3">
                    <div className="row">
                      <div className="col-6">
                        <p className={`${styles.description}`}>Sport: {item.sport}</p>
                      </div>
                      <div className="col-6">
                        <p className={`${styles.description}`}>Age: {item.age}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <p className={`${styles.description}`}>Phone: {item.phone}</p>
                      </div>
                      <div className="col-6">
                        <p className={`${styles.description}`}>Plan: {item.plan}</p>
                      </div>
                    </div>
                  </div>
                  <span className={styles.line}></span>
                  <div className={`d-flex justify-content-between align-items-center mt-1 mb-3 px-3 ${styles.Details}`}>
                    {item.children.map((detail, index) => (
                      <span key={index} className="mt-3">{detail}</span>
                    ))}

                  </div>
                  <span className={styles.line}></span>
                  <div className={`d-flex justify-content-around align-items-center my-4`}>
                    <button className={styles.declineBtn}>Decline</button>
                    <button className={styles.readBtn}>Accept</button>
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
}

export default AssignClientPage;