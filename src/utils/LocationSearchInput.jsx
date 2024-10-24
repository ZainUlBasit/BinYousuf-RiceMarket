import React, { useEffect, useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import MapWithCircle from "./MapWithCircle"; // Import the map component
import Slider from "@mui/material/Slider";

function getNewCoordinates(lat, lng, distanceInKm, direction) {
  const earthRadiusKm = 6371; // Radius of the Earth in kilometers
  let newLat = lat;
  let newLng = lng;

  const dLat = distanceInKm / earthRadiusKm; // Latitude change in radians
  const dLng = distanceInKm / (earthRadiusKm * Math.cos((Math.PI * lat) / 180)); // Longitude change in radians

  switch (direction) {
    case "north":
      newLat = lat + dLat * (180 / Math.PI);
      break;
    case "south":
      newLat = lat - dLat * (180 / Math.PI);
      break;
    case "east":
      newLng = lng + dLng * (180 / Math.PI);
      break;
    case "west":
      newLng = lng - dLng * (180 / Math.PI);
      break;
    default:
      console.error(
        "Invalid direction. Use 'north', 'south', 'east', or 'west'."
      );
      break;
  }

  return { newLat, newLng };
}

const LocationSearchInput = ({ onSelect, CurrentValue }) => {
  const [address, setAddress] = useState("");
  const [latLng, setLatLng] = useState(null); // Store the coordinates of the selected location
  const [radius, setRadius] = useState(1000); // Default radius in meters (1 km)
  const [newCoordinates, setNewCoordinates] = useState([]); // New coordinates array

  const handleChange = (newAddress) => {
    setAddress(newAddress);
  };

  const handleSelect = async (newAddress) => {
    const results = await geocodeByAddress(newAddress);
    const latLngResult = await getLatLng(results[0]);
    onSelect({ address: newAddress, latLng: latLngResult });
    setLatLng(latLngResult); // Set the selected location coordinates
    setAddress(newAddress);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (CurrentValue) {
          setAddress(CurrentValue);
          const results = await geocodeByAddress(CurrentValue);
          const latLngResult = await getLatLng(results[0]);
          onSelect({ address: CurrentValue, latLng: latLngResult });
          setLatLng(latLngResult); // Set the selected location coordinates
        }
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    };

    fetchData();
  }, [CurrentValue]);

  useEffect(() => {
    if (latLng) {
      const distanceInKm = radius / 1000; // Convert radius from meters to kilometers
      const newCoords = [
        getNewCoordinates(latLng.lat, latLng.lng, distanceInKm, "north"),
        getNewCoordinates(latLng.lat, latLng.lng, distanceInKm, "south"),
        getNewCoordinates(latLng.lat, latLng.lng, distanceInKm, "east"),
        getNewCoordinates(latLng.lat, latLng.lng, distanceInKm, "west"),
      ];
      setNewCoordinates(newCoords); // Set the new coordinates
    }
  }, [latLng, radius]); // Update when latLng or radius changes

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div className="relative w-[297px] maxInputWidth font-[Quicksand]">
              <p className="absolute top-[-11px] left-3 w-fit bg-white h-[13px] text-[15px] font-bold InputLabel">
                Address
              </p>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className:
                    "location-search-input px-3 py-2 border border-gray-300 rounded-[7.94px] w-full outline-none InputText",
                })}
              />
            </div>
            <div className="autocomplete-dropdown-container absolute z-10">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, i) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                    key={i}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      {/* Pass latLng, radius, and new coordinates to MapWithCircle component */}
      {latLng && (
        <MapWithCircle
          latLng={latLng}
          radius={radius}
          newCoordinates={newCoordinates} // Pass new coordinates here
        />
      )}
      <div className="mt-4">
        <Slider
          value={radius}
          min={100}
          max={10000}
          step={100}
          aria-label="Radius"
          valueLabelDisplay="auto"
          onChange={(e, newValue) => setRadius(newValue)} // Update radius state
        />
      </div>
    </div>
  );
};

export default LocationSearchInput;
