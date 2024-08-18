import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './FilteredCoachesResultPage.module.css';
import coachImage from '../../assets/s3.jpg';
import { IoMdAdd } from "react-icons/io";

const FilteredCoachesResultPage = () => {
  const sport = useSelector((state) => state.coach.sport);
  const address = useSelector((state) => state.coach.address);
  const coaches = useSelector((state) => state.coaches.list);
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [coachesPerPage, setCoachesPerPage] = useState(4);
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

  const getFilteredAndSortedCoaches = () => {
    return coaches
      .filter(coach => {
        return coach.salary >= priceRange[0] && coach.salary <= priceRange[1];
      })
      .filter(coach => {
        return genderFilter === 'Any' || coach.gender === genderFilter;
      })
      .filter(coach => {
        return trainingType === 'All' || coach.trainingType === trainingType;
      })
      .sort((a, b) => {
        if (sortCriteria === 'Recommended') {
          return b.recommended - a.recommended;
        } else if (sortCriteria === 'Price') {
          return a.salary - b.salary;
        }
        return 0;
      });
  };

  const filteredAndSortedCoaches = getFilteredAndSortedCoaches();
  const totalPages = Math.ceil(filteredAndSortedCoaches.length / coachesPerPage);

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
    setCurrentPage(1);
  };

  const handleGenderFilterChange = (event) => {
    setGenderFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleTrainingTypeChange = (event) => {
    setTrainingType(event.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (event) => {
    const newSortCriteria = event.target.value;
    setSortCriteria(newSortCriteria);
    setCoachesPerPage(newSortCriteria === 'Recommended' ? 6 : 4);
    setCurrentPage(1);
  };

  return (
    <>
      <div className={styles.intro}>
        <div className={styles.overlay}>
          <div className='d-flex flex-column align-items-center justify-content-center p-5'>
            <h1 className="fw-bold">Coaches</h1>
            <h3 className={`text-center ${styles.suptitle}`}>
              Recommended {sport} coaches near {address}
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.filters}>
            <label>
              <select className={styles.filterInbut}>
                <option value="" style={{ display: 'none' }}>Location:</option>
                <option value="Any">Any</option>
                <option value="Nearby">Nearby</option>
                <option value="Within 5 miles">Within 5 miles</option>
                <option value="Within 10 miles">Within 10 miles</option>
                <option value="Within 20 miles">Within 20 miles</option>
              </select>
            </label>
            <label>
              <select name='Price Range:' className={styles.filterInbut} onChange={handlePriceRangeChange}>
                <option value="" style={{ display: 'none' }}>Price Range:</option>
                <option value="0-25">0 - 25</option>
                <option value="26-50">26 - 50</option>
                <option value="51-75">51 - 75</option>
                <option value="76-100">76 - 100</option>
                <option value="101-9999">100+</option>
              </select>
            </label>
            <label>
              <select className={styles.filterInbut} onChange={handleGenderFilterChange}>
                <option value="" style={{ display: 'none' }}>Gender:</option>
                <option value="Any">Any</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
            <label>
              <select className={styles.filterInbut} onChange={handleTrainingTypeChange}>
                <option value="" style={{ display: 'none' }}>Training Type:</option>
                <option value="All">All</option>
                <option value="In-Person">In-Person</option>
                <option value="Online">Online</option>
              </select>
            </label>
            <label>
              <select className={styles.filterInbut} onChange={handleSortChange}>
                <option value="" style={{ display: 'none' }}>Sort By:</option>
                <option value="Recommended">Recommended</option>
                <option value="Price">Price</option>
              </select>
            </label>
          </div>
        </div>
        <div className='row'>
          {filteredAndSortedCoaches.length > 0 ? (
            filteredAndSortedCoaches.slice((currentPage - 1) * coachesPerPage, currentPage * coachesPerPage).map((coach) => (
              <div key={coach.id} className={`col-md-6 ${styles.coachColumn}`}>
                <div className={styles.coachCard}>
                  <div className={styles.coachMain}>
                    <div className='d-flex gap-3'>
                      <img src={coach.image || coachImage} alt={coach.name} className={styles.coachImage} />
                      <div className={styles.coachDetails}>
                        <h2 className={styles.coachName}>{coach.name}</h2>
                        <div className={styles.rating}>
                          <span className={styles.stars}>{'★'.repeat(coach.rating)}{'☆'.repeat(5 - coach.rating)}</span>
                          <span className={styles.reviews}>{coach.reviews} reviews</span>
                        </div>
                        <p className={styles.coachCategory}>{coach.category}</p>
                      </div>
                    </div>
                    <div className='d-flex flex-column justify-content-end'>
                      <p className={styles.summary}>{coach.summary}</p>
                      <p className={styles.distance}><span className='fw-bold'>{coach.distance}</span> miles away from {address}</p>
                    </div>
                  </div>
                  <div className={styles.coachInfo}>
                    <span className={`${styles.badge} ${getBadgeClass(coach.badge)}`}>{coach.badge}</span>
                    <p className='mt-3 mb-1 fs-5'>Starting At</p>
                    <p className='my-1'><span className='fs-4'>$</span><span className={styles.salary}>{coach.salary}</span>/session</p>
                    <IoMdAdd size={25} />
                    <p className={styles.fee}>Applicable Fees</p>
                    <Link to={`/coach/${coach.id}`} className={styles.viewProfileLink}>
                      <button className={styles.viewProfileButton}>View Profile</button>
                    </Link>
                  </div>
                </div>
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
    </>
  );
};

export default FilteredCoachesResultPage;