import React, { useEffect, useState } from 'react'
import styles from "./TrainingLocations.module.css"
import { MdMenu } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { useLoadScript } from '@react-google-maps/api';
import { mapStyles } from '../../../../utils/mapStyles';

const locationsAddress = [
    {
        id: 1,
        name: "3600 N Harrison St",
        address: "3600 North Harrison Street, Arlington, VA",
    },
    {
        id: 2,
        name: "Stuart High School",
        address: "3301 Peace Valley Lane, Falls Church, VA",
    },
    {
        id: 3,
        name: "Long Bridge Park",
        address: "Arlington, VA",
    },
    {
        id: 4,
        name: "Thomas Jefferson Middle School",
        address: "125 S Old Glebe Rd, Arlington, VA",
    },
    {
        id: 5,
        name: "5801 Franconia Rd",
        address: "5801 Franconia Road, Alexandria, VA",
    },
    {
        id: 6,
        name: "9537 Courthouse Rd",
        address: "Vienna, VA",
    },
    {
        id: 7,
        name: "7550 Reservation Dr",
        address: "7550 Reservation Drive, Springfield, VA",
    },
    {
        id: 8,
        name: "3301 Peace Valley Ln",
        address: "3301 Peace Valley Lane, Falls Church, VA",
    },
];

const center = {
    lat: 40.782865,
    lng: -73.965355
};

const libraries = ['places'];

function TrainingLocations() {
    const [locations, setLocations] = useState(locationsAddress)
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        version: 'weekly',
        libraries,
    });
    useEffect(() => {
        if (!isLoaded || !google.maps) return;

        const map = new google.maps.Map(document.getElementById('map'), {
            center,
            zoom: 14,
            styles: mapStyles,
        });

        if (google.maps.marker && google.maps.marker.AdvancedMarkerElement) {
            new google.maps.marker.AdvancedMarkerElement({
                map,
                position: center,
            });
        } else {
            new google.maps.Marker({
                map,
                position: center,
            });
        }
    }, [isLoaded]);
    const deleteLocation = (id) => {
        const updatedLocations = locations.filter(location => location.id !== id);
        setLocations(updatedLocations); // Update the state with the filtered array
    };
    return (
        <div>
            <div className={`d-flex flex-column my-5 ${styles.coachCard}`}>
                <div className={`${styles.cardHeader} p-3 py-3 fw-bold`}>
                    <p className='mb-0 fs-5 text-white'>Training Locations</p>
                </div>
                <div className={`p-3  ${styles.cardBody}`}>
                    <div className='d-flex flex-column justify-content-between'>
                        <p className={`${styles.supText}`}>You can add most locations (e.g. facilities, parks, or schools) by name or by address. Please choose your location from the auto-suggestion list that appears when you begin typing.</p>
                        <p className={`${styles.supText}`}>The top 3 locations will appear on your profile. You can drag and drop to reorder your locations.</p>
                        <p className='fw-bold fs-5'>Soccer Locations</p>
                        {locations.map((location) => (
                            <div className={styles.locationCard} key={location.id}>
                                <div className='d-flex flex-column flex-sm-row justify-content-cente align-items-center p-3'>
                                    <MdMenu size={30} />
                                    <p className=' mb-0 fs-5 px-3'> {location.name}-{location.address}</p>
                                    <p className='text-danger mb-0 cursor-pointer' onClick={() => deleteLocation(location.id)}>
                                        <CiCircleRemove size={30} /> Delete
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className='mx-auto mx-sm-1'>
                        </div>
                    </div>
                    <div className='d-flex flex-column flex-sm-row gap-3 py-5 px-0 px-sm-3'>
                        <div className='col-12 col-sm-6'>
                            <p className='fs-5'>Location Name / Address and City</p>
                            <input
                                type="text"
                                placeholder="Falls Church, VA"
                                className={`mx-auto mx-md-0 ${styles.input}`}
                            />
                            <div>
                                <div className='mx-auto mx-sm-1'>
                                    <button className={`btn btn-danger mt-3 ${styles.savebtn}`}>Update Location</button>
                                </div>

                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className={styles.mapContainer} id="map"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TrainingLocations