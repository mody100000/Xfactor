import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, Circle } from '@react-google-maps/api';
import { mapStyles } from '../../../utils/mapStyles';

const MapDistanceSelector = ({ center, distanceRange, onDistanceChange, isLoaded }) => {
    const [map, setMap] = useState(null);
    const circleRef = useRef(null);
    const [clickedPosition, setClickedPosition] = useState(null);
    const [clickedCircleRadius, setClickedCircleRadius] = useState(0);

    const onLoad = React.useCallback((map) => {
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(() => {
        setMap(null);
    }, []);

    useEffect(() => {
        if (circleRef.current) {
            circleRef.current.setRadius(distanceRange * 1609.34); // Convert miles to meters
        }
    }, [distanceRange]);

    const handleMapClick = (e) => {
        if (map) {
            const clickedLatLng = e.latLng;
            const distance = google.maps.geometry.spherical.computeDistanceBetween(
                new google.maps.LatLng(center.lat, center.lng),
                clickedLatLng
            );
            const distanceInMiles = distance / 1609.34; // Convert meters to miles
            const newDistance = Math.min(Math.round(distanceInMiles), 30); // Limit to 30 miles
            onDistanceChange(newDistance);

            // Set the new clicked position and radius for the red circle
            setClickedPosition(clickedLatLng);
            setClickedCircleRadius(Math.min(distance, 5 * 1609.34)); // Set clicked circle radius to 5 miles or less
        }
    };

    if (!isLoaded) {
        return <div>Loading maps...</div>;
    }

    return (
        <div style={{ height: '300px', width: '100%', position: 'relative' }}>
            <GoogleMap
                mapContainerStyle={{ height: '100%', width: '100%' }}
                center={center}
                zoom={8}
                onLoad={onLoad}
                onUnmount={onUnmount}
                onClick={handleMapClick}
                options={{ styles: mapStyles }}
            >
                {map && (
                    <>
                        {/* Blue circle around the center */}
                        <Circle
                            center={center}
                            radius={distanceRange * 1609.34}
                            options={{
                                fillColor: 'rgba(66, 133, 244, 0.3)',
                                fillOpacity: 0.4,
                                strokeColor: '#4285F4',
                                strokeOpacity: 1,
                                strokeWeight: 1,
                            }}
                            onLoad={(circle) => {
                                circleRef.current = circle;
                            }}
                        />

                        {/* Red circle for the clicked position */}
                        {clickedPosition && (
                            <Circle
                                center={clickedPosition}
                                radius={clickedCircleRadius}
                                options={{
                                    fillColor: 'rgba(255, 0, 0, 0.3)',
                                    fillOpacity: 0.4,
                                    strokeColor: '#FF0000',
                                    strokeOpacity: 1,
                                    strokeWeight: 1,
                                }}
                                onLoad={(circle) => {
                                    // This will automatically remove the previous circle reference
                                    if (circleRef.current) {
                                        circleRef.current.setMap(null); // Remove the previous red circle
                                    }
                                    circleRef.current = circle; // Store the new red circle reference
                                }}
                            />
                        )}
                    </>
                )}
            </GoogleMap>
        </div>
    );
};

export default MapDistanceSelector;
