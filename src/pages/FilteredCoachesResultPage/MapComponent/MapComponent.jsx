import React, { useEffect } from 'react';
import { mapStyles } from '../../../utils/mapStyles';

const center = {
    lat: 40.782865,
    lng: -73.965355
};

const MapComponent = ({ isLoaded }) => {
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

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div className="mapContainer" id="map" style={{ height: '400px', width: '100%' }}></div>
    );
};

export default MapComponent;