import React, { useEffect } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import styles from "./CoachSidebar.module.css";
import logo from "@assets/goodFit.png"
import { mapStyles } from '../../../utils/mapStyles';
import { Link } from 'react-router-dom';

const center = {
    lat: 40.782865,
    lng: -73.965355
};


const libraries = ['places']; // Keep this array constant to avoid reloading the script

const CoachSidebar = ({ coach }) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        version: 'weekly',
        libraries, // Use the constant array here
    });
    const getReponseRate = (rate) => {
        if (rate >= 80) return "Fast";
        else if (rate >= 50 && rate < 80) return "Good";
        return "Bad"
    }
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
        <div className="px-3">
            <div className="d-flex flex-column align-items-center">
                <h3 className='text-center'>Questions For Coach {coach.name}?</h3>
                <Link to={`/coach/${coach.id}/message`}>
                    <button className={styles.messageBtn}>Message Coach</button>
                </Link>
                <p className={styles.rateText}>{getReponseRate(coach.responseRate)} Reponse Rate: <span className="fw-bold">{coach.responseRate}%</span></p>
            </div>
            <span className={styles.line}></span>
            <div className="d-flex flex-column align-items-center">
                <h3 className="mt-3 text-center">Training Locations</h3>
                <div className={styles.mapContainer} id="map"></div>
            </div>
            <ol className='d-flex flex-column mt-4 gap-2'>
                <li className='text-primary'>
                    <a target='_blank' href='https://www.google.com/maps/search/?api=1&query=40.782865,-73.96535499999999' className={styles.locationLink}>Central Park, New York, NY</a>
                </li>
                <li className='text-primary'>
                    <a target='_blank' href='https://www.google.com/maps/search/?api=1&query=40.64876689999999,-74.20692679999999' className={styles.locationLink}>Mattano Park, 360-484 5th Avenue, Elizabeth, NJ</a>
                </li>
                <li className='text-primary'>
                    <a target='_blank' href='https://www.google.com/maps/search/?api=1&query=40.64393419999999,-74.2410424' className={styles.locationLink}>Saint Marks Park, Linden, NJ</a>
                </li>
            </ol>
            <p className='fs-5 my-4'>Coach is willing to travel up to 5 miles</p>
            <span className={styles.line}></span>
            <div className={styles.info}>
                <img src={logo} alt="logo" className={styles.logo} />
                <h4 className='mb-5 mt-4 mx-4'>CoachUp's Got Your Back</h4>
                <ul className="d-flex flex-column gap-5 px-5 px-md-0 ps-md-5 mb-5">
                    <li className='fs-5'>Runs Sex Offender screening on every coach</li>
                    <li className='fs-5'>Ensures high quality coaches with verified reviews</li>
                    <li className='fs-5'>100% money back guarantee</li>
                    <li className='fs-5'>Offers 24/7 support and helpful Athlete Advisors</li>
                    <li className='fs-5'>Easy payments via credit card, no need for cash</li>
                    <li className='fs-5'>Provides convenient scheduling with calendar integration</li>
                    <li className='fs-5'>Enables automated reminders before training sessions</li>
                    <li className='fs-5'>Captures post-session feedback directly from your coach</li>
                </ul>
            </div>
        </div>
    );
}

export default CoachSidebar;
