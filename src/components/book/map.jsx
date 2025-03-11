import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const Map = () => {
  const [map, setMap] = useState(null);

  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const marker = {
    lat: -33.9291935020159,
    lng: 18.448706535582417,
  };

  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (map) {
      map.panTo({ lat: -33.9291935020159, lng: 18.448706535582417 });
      window.google?.maps?.event.trigger(map, "resize");
    }
  }, [map]); // Dependency on map instance

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={marker}
        onLoad={onLoad}
      >
        <Marker position={marker} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
