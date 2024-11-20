import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './FilteredCoachesResultPage.module.css';
import coachImage from '../../assets/s3.jpg';
import { IoMdAdd } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdOnlinePrediction } from 'react-icons/md';
import { CiGrid2H, CiGrid2V } from "react-icons/ci";
import FilterCoachModal from './FilterCoachModal/FilterCoachModal';

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
  const [viewMode, setViewMode] = useState('grid');
  const [showFilterModal, setShowFilterModal] = useState(false);


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
        } else if (sortCriteria === 'Lowest Price') {
          return a.salary - b.salary;
        } else if (sortCriteria === "Heights Price") {
          return b.salary - a.salary; // Corrected comparison for descending order
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
  const handleGridChange = (event) => {
    setTrainingType(event.target.value);
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };
  const handleSortChange = (event) => {
    const newSortCriteria = event.target.value;
    setSortCriteria(newSortCriteria);
    setCoachesPerPage(newSortCriteria === 'Recommended' ? 6 : 4);
    setCurrentPage(1);
  };
  const getReponseRate = (rate) => {
    if (rate >= 80) return "Fast";
    else if (rate >= 50 && rate < 80) return "Good";
    return "Bad"
  }
  const handleFilterModalClose = () => {
    setShowFilterModal(false);
  };

  return (
    <>
      <div className={styles.intro}>
        <div className={styles.overlay}>
          <div className='d-flex flex-column align-items-center justify-content-center p-5'>
            <h1 className="fw-bold">Coaches</h1>
            <h3 className={`text-center ${styles.suptitle}`}>
              Recommended <span className='text-danger'>{sport}</span> coaches near <span className='text-danger'>{address}</span>
            </h3>
            <Link to="/applyToCoach">
              <p className={styles.editLink}><CiEdit className='text-danger' size={25} /> <span className='text-danger'>Edit</span> Sport And Location</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.pageContainer}>
        <div className={styles.mainContent}>
          {/* <div className='d-flex flex-column flex-sm-row p-4'> */}
          {/* <div className='d-flex gap-5 flex-grow-1 flex-column flex-sm-row '>
              <div className='w-100'>
                <h3 className='fs-4 text-center'>Price Range</h3>
                <span className='d-flex justify-content-center'>${priceRange[1]}+</span>
                <div className={`mt-2 ${styles.rangeLabels}`}>
                  <span>$0</span>
                  <input
                    type="range"
                    min="0"
                    max="75"
                    value={priceRange[1]}
                    onChange={handlePriceRangeChange}
                    className={styles.rangeSlider}
                  />
                  <span>$75+</span>
                </div>
              </div>
              <div className='w-100'>
                <h3 className='fs-4 text-center'>Distance Location</h3>
                <span className='d-flex justify-content-center'>{distanceRange} mi</span>
                <div className={`mt-2 ${styles.rangeLabels}`}>
                  <span className='d-flex justify-content-center'>{distanceRange}mi</span>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={distanceRange}
                    onChange={handleDistanceRangeChange}
                    className={`${styles.rangeSlider} custom-range-slider`} />
                  <span>30mi</span>
                </div>
              </div>
            </div> */}
          {/* </div> */}
          <div className="row mb-4 mt-4 px-4">
            <div className="col d-flex flex-lg-row flex-md-column flex-sm-column flex-column justify-content-between align-items-center gap-4 gap-sm-5">
              <div>
                <button
                  className={styles.filterBtn}
                  onClick={() => setShowFilterModal(true)}
                >
                  Filter
                </button>
              </div>
              <div className='w-100'>
                <h3 className='fs-4 text-center'>Price Range</h3>
                <span className='d-flex mb-2 justify-content-center'>${priceRange[1]}+</span>
                <div className={`${styles.rangeLabels}`}>
                  <span>$0</span>
                  <input
                    type="range"
                    min="0"
                    max="75"
                    value={priceRange[1]}
                    onChange={handlePriceRangeChange}
                    className={styles.rangeSlider}
                  />
                  <span>$75+</span>
                </div>
              </div>
              <div className={`cursor-pointer ${styles.toggleIcon}`} onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
                {viewMode === 'grid' ? (
                  <CiGrid2H size={40} />
                ) : (
                  <CiGrid2V size={40} />
                )}
              </div>
              <div className='w-100'>
                <h3 className='fs-4 text-center'>Distance Location</h3>
                <span className='d-flex mb-2 justify-content-center'>{distanceRange} mi</span>
                <div className={`${styles.rangeLabels}`}>
                  <span className='d-flex justify-content-center'>{distanceRange}mi</span>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={distanceRange}
                    onChange={handleDistanceRangeChange}
                    className={`${styles.rangeSlider} custom-range-slider`} />
                  <span>30mi</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <select className={`form-select d-inline-block w-auto fs-5 ${styles.filterInbut}`} onChange={handleSortChange} value={sortCriteria}>
                  <option value="" style={{ display: 'none' }}>Select...</option>
                  <option value="Recommended">Recommended</option>
                  <option value="Lowest Price">Lowest Price</option>
                  <option value="Heights Price">Heights Price</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.coachesContainer}>
            <FilterCoachModal
              isOpen={showFilterModal}
              onClose={handleFilterModalClose}
              genderFilter={genderFilter}
              setGenderFilter={setGenderFilter}
              trainingType={trainingType}
              setTrainingType={setTrainingType}
              sortCriteria={sortCriteria}
              setSortCriteria={setSortCriteria}
            />
            {filteredAndSortedCoaches.length > 0 ? (
              filteredAndSortedCoaches.slice((currentPage - 1) * coachesPerPage, currentPage * coachesPerPage).map((coach) => (
                <div key={coach.id} className={`${viewMode === 'grid' ? 'col-md-6' : 'col-md-12'} mb-4`}>
                  <div className={styles.coachCard}>
                    {coach.badge && (
                      <span className={`${styles.badge} ${getBadgeClass(coach.badge)}`}>
                        {coach.badge}
                      </span>
                    )}
                    <div className={styles.coachMain}>
                      <div className="d-flex gap-4">
                        <img src={coach.image || coachImage} alt={coach.name} className={styles.coachImage} />
                        <div className={styles.coachDetails}>
                          <h2 className={styles.coachName}>{coach.name}</h2>
                          <div className={styles.rating}>
                            <span className={styles.stars}>{'★'.repeat(coach.rating)}{'☆'.repeat(5 - coach.rating)}</span>
                          </div>
                          <span className={styles.reviews}>{coach.reviews} reviews</span>
                          <p className={styles.coachCategory}>{coach.category}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-column justify-content-end">
                        {coach.trainingType === "Online" ? <p className={styles.onlineOffer}> <MdOnlinePrediction size={25} className="mb-1" color="green" /> Offers Online Training</p> : ""}
                        <p className={styles.summary}>{coach.summary}</p>
                        <p className={styles.distance}><span className="fw-bold">{coach.distance}</span> miles away from {address}</p>
                        <p className={`${styles.distance} mt-2 mb-0`}> {getReponseRate(coach.responseRate)} Reponse Rate: <span className="fw-bold">{coach.responseRate}%</span></p>
                      </div>
                    </div>
                    <div className={styles.coachInfo}>
                      {coach.recommended && <span className={styles.recommendedBadge}>Recomended</span>}
                      <p className="mt-3 mb-1 fs-5">Starting At</p>
                      <p className="my-1"><span className="fs-4">$</span><span className={styles.salary}>{coach.salary}</span>/session</p>
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
      </div>
    </>
  );
};

export default FilteredCoachesResultPage;