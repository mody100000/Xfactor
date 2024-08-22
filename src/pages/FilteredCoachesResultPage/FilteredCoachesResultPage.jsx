import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './FilteredCoachesResultPage.module.css';
import coachImage from '../../assets/s3.jpg';
import { IoMdAdd } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdOnlinePrediction } from 'react-icons/md';
import { mapStyles } from '../../utils/mapStyles';
import { useLoadScript } from '@react-google-maps/api';
import { FaQuoteLeft } from "react-icons/fa";
import img7 from "@assets/review2.jpeg";
import { CiGrid2H, CiGrid2V } from "react-icons/ci";

const center = {
  lat: 40.782865,
  lng: -73.965355
};


const libraries = ['places'];
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
  const [viewMode, setViewMode] = useState('list');


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
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    version: 'weekly',
    libraries, // Use the constant array here
  });

  useEffect(() => {
    if (!isLoaded || !google.maps) return;

    const map = new google.maps.Map(document.getElementById('map'), {
      center,
      zoom: 14,
      styles: mapStyles,
    });

    // Check if the AdvancedMarkerElement is available
    if (google.maps.marker && google.maps.marker.AdvancedMarkerElement) {
      new google.maps.marker.AdvancedMarkerElement({
        map,
        position: center,
      });
    } else {
      // Fallback to the old Marker if AdvancedMarkerElement is not available
      new google.maps.Marker({
        map,
        position: center,
      });
    }

  }, [isLoaded]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap"
        rel="stylesheet"
      />
      <link href="https://fonts.googleapis.com/css2?family=Seaweed+Script&family=Zen+Tokyo+Zoo&display=swap" rel="stylesheet" />
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
          <Link to="/applyToCoach">
            <p className={styles.editLink}><CiEdit /> Edit Sport And Location</p>
          </Link>
          <span className={styles.line}></span>
          <h3 className='mb-4 fs-4'>Distance</h3>
          <span className='d-flex justify-content-center'>{distanceRange} mi</span>
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
          <span className='d-flex justify-content-center'>${priceRange[1]}+</span>
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
          <span className={styles.line}></span>
          <div className={styles.mapContainer} id="map"></div>
          <span className={styles.line}></span>
          <FaQuoteLeft size={25} />
          <p className='lh-lg my-4'>New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart</p>
          <div className='d-flex justify-content-center align-items-center gap-3 mt-5'>
            <img src={img7} alt="clientImg" className={styles.clientImg} />
            <div className='d-flex flex-column'>
              <h5>Ahmed Ragab</h5>
              <p className={styles.clientTitle}>President of the Boston Bruins,Hockey legend (sports dad)</p>
            </div>
          </div>
          <span className={styles.line}></span>
          <div>
            <h3 className='mb-4'>Featured In</h3>
            <div className={styles.featured}>
              <p className={styles.firstFeatur}>Dexter</p>
              <p className={styles.secondFeatur}>Dexter</p>
              <p className={styles.thirdFeatur}>Dexter</p>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className="row mb-4 px-5">
            <div className="col d-flex flex-lg-row flex-md-column flex-sm-column flex-column gap-4 justify-content-between align-items-center">
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
              <div className={`cursor-pointer ${styles.toggleIcon}`} onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
                {viewMode === 'grid' ? (
                  <CiGrid2H size={40} />
                ) : (
                  <CiGrid2V size={40} />
                )}
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <label className="me-2 fs-5">Sort by:</label>
                <select className={`form-select d-inline-block w-auto fs-5 ${styles.filterInbut}`} onChange={handleSortChange} value={sortCriteria}>
                  <option value="" style={{ display: 'none' }}>Select...</option>
                  <option value="Recommended">Recommended</option>
                  <option value="Price">Price</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.coachesContainer}>
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