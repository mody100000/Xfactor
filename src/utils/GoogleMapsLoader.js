import React from "react";
import { useLoadScript } from "@react-google-maps/api";

const libraries = ["places", "geometry"];

const GoogleMapsLoader = ({ children }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps: {loadError.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps...</div>;
  }

  return <>{children}</>; // Render the children only when maps are loaded
};

export default GoogleMapsLoader;
