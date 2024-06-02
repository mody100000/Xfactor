import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './FilteredCoachesResultPage.module.css';
import coachImage from '../../assets/s3.jpg';

const FilteredCoachesResultPage = () => {
  const sport = useSelector((state) => state.coach.sport);
  const address = useSelector((state) => state.coach.address);
  const coaches = useSelector((state) => state.coaches.list);
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [coachesPerPage] = useState(4);
  const [priceRange, setPriceRange] = useState([0, 75]);
  const [genderFilter, setGenderFilter] = useState('Any');
  const [trainingType, setTrainingType] = useState(location.state?.trainingType || 'All');
  const [sortCriteria, setSortCriteria] = useState('Recommended');

  const getBadgeClass = (badge) => {
    switch (badge.toLowerCase()) {
      case 'gold':
        return styles.goldBadge;
      case 'silver':
        return styles.silverBadge;
      case 'bronze':
        return styles.bronzeBadge;
      default:
        return styles.defaultBadge;
    }
  };

  const filteredCoaches = coaches
    .filter(coach => {
      return coach.salary >= priceRange[0] && coach.salary <= priceRange[1];
    })
    .filter(coach => {
      return genderFilter === 'Any' || coach.gender === genderFilter;
    })
    .filter(coach => {
      return trainingType === 'All' || coach.trainingType === trainingType;
    });

  const sortedCoaches = filteredCoaches.sort((a, b) => {
    if (sortCriteria === 'Recommended') {
      return b.recommended - a.recommended;
    } else if (sortCriteria === 'Price') {
      return a.salary - b.salary;
    }
    return 0;
  });

  const indexOfLastCoach = currentPage * coachesPerPage;
  const indexOfFirstCoach = indexOfLastCoach - coachesPerPage;
  const currentCoaches = sortedCoaches.slice(indexOfFirstCoach, indexOfLastCoach);

  const totalPages = Math.ceil(sortedCoaches.length / coachesPerPage);

  const handlePageClick = (event, number) => {
    event.preventDefault();
    setCurrentPage(number);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map(number => (
      <button
        key={number}
        onClick={(event) => handlePageClick(event, number)}
        className={`${styles.paginationButton} ${currentPage === number ? styles.active : ''}`}
      >
        {number}
      </button>
    ));
  };

  const handlePriceRangeChange = (event) => {
    const value = event.target.value.split('-').map(Number);
    setPriceRange(value);
  };

  const handleGenderFilterChange = (event) => {
    setGenderFilter(event.target.value);
  };

  const handleTrainingTypeChange = (event) => {
    setTrainingType(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>Recommended {sport} coaches near {address}</h1>
        <div className={styles.filters}>
          <label>
            Price Range:
            <select onChange={handlePriceRangeChange}>
              <option value="0-25">0 - 25</option>
              <option value="26-50">26 - 50</option>
              <option value="51-75">51 - 75</option>
              <option value="76-100">76 - 100</option>
              <option value="101-9999">100+</option>
            </select>
          </label>
          <label>
            Gender:
            <select onChange={handleGenderFilterChange}>
              <option value="Any">Any</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
          <label>
            Training Type:
            <select onChange={handleTrainingTypeChange}>
              <option value="All">All</option>
              <option value="In-Person">In-Person</option>
              <option value="Online">Online</option>
            </select>
          </label>
          <label>
            Sort By:
            <select onChange={handleSortChange}>
              <option value="Recommended">Recommended</option>
              <option value="Price">Price</option>
            </select>
          </label>
        </div>
      </div>
      <div className={styles.coachesContainer}>
        {currentCoaches.length > 0 ? (
          currentCoaches.map((coach) => (
            <div key={coach.id} className={`${styles.coachCard} ${coach.recommended ? styles.recommended : ''}`}>
              <img src={coach.image || coachImage} alt={coach.name} className={styles.coachImage} />
              <h2 className={styles.coachName}>{coach.name}</h2>
              <p className={styles.recommendedText}>{coach.recommended?"recommended":null}</p>
              <p className={styles.coachCategory}>{coach.category}</p>
              <div className={styles.rating}>
                <span className={styles.stars}>{'★'.repeat(coach.rating)}{'☆'.repeat(5 - coach.rating)}</span>
                <span className={styles.reviews}>{coach.reviews} reviews</span>
              </div>
              <span className={`${styles.badge} ${getBadgeClass(coach.badge)}`}>{coach.badge}</span>
              <p className={styles.summary}>{coach.summary}</p>
              <p className={styles.distance}>{coach.distance} miles away from {address}</p>
              <p className={styles.salary}>${coach.salary}/session</p>
              <Link to={`/coach/${coach.id}`} className={styles.viewProfileButton}>View Profile</Link>
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No coaches found matching your criteria.</p>
        )}
      </div>
      <div className={styles.pagination}>
        {renderPagination()}
      </div>
    </div>
  );
};

export default FilteredCoachesResultPage;
