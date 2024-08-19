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
  const [sortCriteria, setSortCriteria] = useState('');
  const [distanceRange, setDistanceRange] = useState(30);

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
      .filter(coach => {
        return coach.distance <= distanceRange;
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
    setPriceRange([0, parseInt(event.target.value)]);
    setCurrentPage(1);
  };

  const handleDistanceRangeChange = (event) => {
    setDistanceRange(parseInt(event.target.value));
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
      <div className={styles.pageContainer}>
        <div className={styles.sidebar}>
          <h3 className='mb-4 fs-4'>Find Your Coach</h3>
          <p className={styles.filterTitle}>Location: {address}</p>
          <p className={styles.filterTitle}>Sport: {sport}</p>
          <p className={styles.editLink}>Edit Sport And Location</p>
          <span className={styles.line}></span>
          <h3 className='mb-4 fs-4'>Distance</h3>
          <input
            type="range"
            min="1"
            max="30"
            value={distanceRange}
            onChange={handleDistanceRangeChange}
            className={`${styles.rangeSlider} custom-range-slider`}
          />
          <div className={styles.rangeLabels}>
            <span>1 mi</span>
            <span>30 mi</span>
          </div>
          <span className={styles.line}></span>

          <h3 className='mb-4 fs-4'>Travel To Me</h3>
          <label>
            <input type="checkbox" /> Show Only Coaches Willing To Travel
          </label>
          <span className={styles.line}></span>

          <h3 className='mb-4 fs-4'>Price Range</h3>
          <input
            type="range"
            min="0"
            max="75"
            value={priceRange[1]}
            onChange={handlePriceRangeChange}
            className={styles.rangeSlider}
          />
          <div className={styles.rangeLabels}>
            <span>$0</span>
            <span>$75+</span>
          </div>
          <span className={styles.line}></span>
          <h3 className='mb-4 fs-4'>Coach's Gender</h3>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
              <p
                onClick={() => setGenderFilter('Male')}
                className={`${genderFilter === 'Male' ? styles.checkedActive : styles.checked}`}
              ></p>
              <span>Male</span>
            </div>
            <div className='d-flex'>
              <p
                onClick={() => setGenderFilter('Female')}
                className={`${genderFilter === 'Female' ? styles.checkedActive : styles.checked}`}
              ></p>
              <span>Female</span>
            </div>
            <div className='d-flex'>
              <p
                onClick={() => setGenderFilter('Any')}
                className={`${genderFilter === 'Any' ? styles.checkedActive : styles.checked}`}
              ></p>
              <span>Any</span>
            </div>
          </div>
          <span className={styles.line}></span>
          <h3 className='mb-4'>Position(s)</h3>
          <div className={styles.positionGrid}>
            <label><input type="checkbox" /> Defensive Back</label>
            <label><input type="checkbox" /> Defensive Line</label>
            <label><input type="checkbox" /> Kicker</label>
            <label><input type="checkbox" /> Linebacker</label>
            <label><input type="checkbox" /> Offensive Line</label>
            <label><input type="checkbox" /> Punter</label>
            <label><input type="checkbox" /> Quarterback</label>
            <label><input type="checkbox" /> Running Back</label>
            <label><input type="checkbox" /> Tight End</label>
            <label><input type="checkbox" /> Wide Receiver</label>
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className="row mb-4">
            <div className="col d-flex flex-column flex-sm-row gap-4 justify-content-between align-items-center">
              <div>
                <button
                  className={`btn ${trainingType === 'In-Person' ? 'btn-danger' : 'btn-outline-danger'} me-1 fs-5`}
                  onClick={() => handleTrainingTypeChange({ target: { value: 'In-Person' } })}
                >
                  In-Person
                </button>
                <button
                  className={`btn fs-5 ${trainingType === 'Online' ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => handleTrainingTypeChange({ target: { value: 'Online' } })}
                >
                  Online
                </button>
              </div>
              <div className="d-flex align-items-center ">
                <label className="me-2 fs-5">Sort by:</label>
                <select className="form-select d-inline-block w-auto fs-5" onChange={handleSortChange} value={sortCriteria}>
                  <option value="" style={{ display: 'none' }}>Select...</option>
                  <option value="Recommended">Recommended</option>
                  <option value="Price">Price</option>
                </select>
              </div>
            </div>
          </div>

          {filteredAndSortedCoaches.length > 0 ? (
            filteredAndSortedCoaches.slice((currentPage - 1) * coachesPerPage, currentPage * coachesPerPage).map((coach) => (
              <div key={coach.id} className={`${styles.coachColumn}`}>
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
          <div className={styles.pagination}>
            {renderPagination()}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilteredCoachesResultPage;