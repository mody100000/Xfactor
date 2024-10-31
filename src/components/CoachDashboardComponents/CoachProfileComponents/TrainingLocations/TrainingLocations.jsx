import React, { useEffect, useState, useRef } from 'react';
import styles from "./TrainingLocations.module.css";
import { MdMenu, MdLocationOn, MdAdd } from "react-icons/md";
import { useLoadScript } from '@react-google-maps/api';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { mapStyles } from '../../../../utils/mapStyles';

const locationsAddress = [
    {
        id: "1",
        name: "3600 N Harrison St",
        address: "3600 North Harrison Street, Arlington, VA",
    },
    {
        id: "2",
        name: "Stuart High School",
        address: "3301 Peace Valley Lane, Falls Church, VA",
    },
    {
        id: "3",
        name: "Long Bridge Park",
        address: "Arlington, VA",
    },
    {
        id: "4",
        name: "Thomas Jefferson Middle School",
        address: "125 S Old Glebe Rd, Arlington, VA",
    },
    {
        id: "5",
        name: "5801 Franconia Rd",
        address: "5801 Franconia Road, Alexandria, VA",
    },
    {
        id: "6",
        name: "9537 Courthouse Rd",
        address: "Vienna, VA",
    },
    {
        id: "7",
        name: "7550 Reservation Dr",
        address: "7550 Reservation Drive, Springfield, VA",
    },
    {
        id: "8",
        name: "3301 Peace Valley Ln",
        address: "3301 Peace Valley Lane, Falls Church, VA",
    },
];

const libraries = ['places'];
const center = { lat: 38.8977, lng: -77.0365 }; // Centered around Arlington, VA

function TrainingLocations() {
    const [locations, setLocations] = useState(locationsAddress);
    const [searchValue, setSearchValue] = useState('');
    const [mapInstance, setMapInstance] = useState(null);
    const [markers, setMarkers] = useState([]);
    const autocompleteRef = useRef(null);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        version: 'weekly',
        libraries,
    });

    useEffect(() => {
        if (!isLoaded || !google.maps) return;

        const map = new google.maps.Map(document.getElementById('map'), {
            center,
            zoom: 11,
            styles: mapStyles,
        });
        setMapInstance(map);

        // Initialize Google Places Autocomplete
        const autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('location-search'),
            { types: ['establishment', 'geocode'] }
        );

        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (!place.geometry) return;

            // Add marker for the new location
            addMarkerToMap(place);

            // Add location to the list
            const newLocation = {
                id: Date.now(),
                name: place.name || place.formatted_address.split(',')[0],
                address: place.formatted_address,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            };

            setLocations(prev => [...prev, newLocation]);
            setSearchValue('');
        });

        autocompleteRef.current = autocomplete;

        // Add markers for initial locations
        addInitialMarkers(map);
    }, [isLoaded]);

    const addInitialMarkers = async (map) => {
        const geocoder = new google.maps.Geocoder();
        const bounds = new google.maps.LatLngBounds();

        for (const location of locations) {
            try {
                const result = await geocodeAddress(geocoder, location.address);
                const marker = new google.maps.Marker({
                    map,
                    position: result.geometry.location,
                    title: location.name
                });
                bounds.extend(result.geometry.location);
                setMarkers(prev => [...prev, marker]);
            } catch (error) {
                console.error('Geocoding error:', error);
            }
        }

        map.fitBounds(bounds);
    };

    const geocodeAddress = (geocoder, address) => {
        return new Promise((resolve, reject) => {
            geocoder.geocode({ address }, (results, status) => {
                if (status === 'OK') {
                    resolve(results[0]);
                } else {
                    reject(status);
                }
            });
        });
    };

    const addMarkerToMap = (place) => {
        if (!mapInstance) return;

        const marker = new google.maps.Marker({
            map: mapInstance,
            position: place.geometry.location,
            animation: google.maps.Animation.DROP,
            title: place.name
        });

        mapInstance.panTo(place.geometry.location);
        mapInstance.setZoom(15);

        setMarkers(prev => [...prev, marker]);
    };

    const deleteLocation = (id) => {
        setLocations(prev => prev.filter(location => location.id !== id));
    };

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(locations);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setLocations(items);
    };

    const handleAddLocation = () => {
        const searchInput = document.getElementById('location-search');
        searchInput.focus();
    };

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps...</div>;
    }

    return (
        <div className="py-5">
            <div className={styles.mainCard}>
                <div className={styles.headerSection}>
                    <h2 className="fs-2 fw-bold mb-3">Training Locations</h2>
                    <p className="mb-0 mt-2">
                        Manage and organize your training venues
                    </p>
                </div>

                <div className="row p-4 g-4">
                    <div className="col-12 col-md-6">
                        <div className={`${styles.infoBox} mb-4`}>
                            <MdLocationOn className="text-danger" size={50} />
                            <p className="small mb-0">
                                Add locations by name or address. Drag and drop to reorder.
                                The top 3 locations will be featured on your profile.
                            </p>
                        </div>

                        <DragDropContext onDragEnd={handleDragEnd}>
                            <Droppable droppableId="droppable-locations">
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className={styles.locationsList}
                                    >
                                        {locations.map((location, index) => (
                                            <Draggable
                                                key={location.id.toString()}
                                                draggableId={location.id.toString()}
                                                index={index}
                                            >
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        className={`${styles.locationItem} mb-2 ${snapshot.isDragging ? styles.dragging : ''}`}
                                                    >
                                                        <div className="d-flex  align-items-center gap-1">
                                                            <div
                                                                {...provided.dragHandleProps}
                                                                className={styles.dragHandle}
                                                            >
                                                                <MdMenu className="text-secondary" />
                                                            </div>
                                                            <div>
                                                                <h3 className="fw-semibold mb-2 fs-6">{location.name}</h3>
                                                                <p className="small text-secondary text-start mb-0">{location.address}</p>
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={() => deleteLocation(location.id)}
                                                            className={`${styles.deleteBtn} btn btn-link text-danger p-0`}
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>

                        <div className="mt-4">
                            <div className="mb-3 position-relative">
                                <input
                                    id="location-search"
                                    type="text"
                                    placeholder="Search location or enter address..."
                                    className={styles.searchInput}
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                />
                            </div>
                            <button
                                className={`${styles.addButton} d-flex align-items-center justify-content-center gap-2`}
                                onClick={handleAddLocation}
                            >
                                <MdAdd size={20} />
                                Add Location
                            </button>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className={styles.mapSection}>
                            <div id="map" className={styles.map}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainingLocations;