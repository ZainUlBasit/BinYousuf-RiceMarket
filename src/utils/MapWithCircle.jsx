import React, { useEffect, useRef } from "react";

const MapWithCircle = ({ latLng, radius, onRadiusChange }) => {
  const mapRef = useRef(null);
  const circleRef = useRef(null);
  const markerRef = useRef(null);
  const polygonRef = useRef(null); // Ref for the polygon

  useEffect(() => {
    // Initialize the map
    const map = new google.maps.Map(mapRef.current, {
      center: latLng,
      zoom: 12,
    });

    // Place a marker at the selected location
    const marker = new google.maps.Marker({
      position: latLng,
      map,
    });
    markerRef.current = marker;

    // Draw a circle around the location with the given radius
    // const circle = new google.maps.Circle({
    //   map,
    //   center: latLng,
    //   radius, // Radius in meters
    //   strokeColor: "#FF0000",
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: "#FF0000",
    //   fillOpacity: 0.35,
    // });
    // circleRef.current = circle;

    // // Fit the map to the circle
    // map.fitBounds(circle.getBounds());

    // Draw a polygon around the circle
    const polygon = new google.maps.Polygon({
      paths: getPolygonPath(latLng, radius),
      strokeColor: "#000",
      strokeOpacity: 0.4,
      strokeWeight: 2,
      fillColor: "#000",
      fillOpacity: 0.35,
      map,
    });
    polygonRef.current = polygon;

    return () => {
      // Cleanup: Remove marker, circle, and polygon when component unmounts
      if (markerRef.current) markerRef.current.setMap(null);
      if (circleRef.current) circleRef.current.setMap(null);
      if (polygonRef.current) polygonRef.current.setMap(null);
    };
  }, [latLng, radius]);

  useEffect(() => {
    // Update circle radius dynamically
    if (circleRef.current) {
      circleRef.current.setRadius(radius);
      // Update polygon path when radius changes
      polygonRef.current.setPaths(getPolygonPath(latLng, radius));
    }
  }, [radius, latLng]);

  // Function to calculate polygon path based on center and radius
  const getPolygonPath = (center, radius) => {
    const paths = [];
    const numSides = 30; // Number of sides for the polygon
    for (let i = 0; i < numSides; i++) {
      const angle = (i / numSides) * 2 * Math.PI; // Angle in radians
      const dx = radius * Math.cos(angle); // Calculate x offset
      const dy = radius * Math.sin(angle); // Calculate y offset
      const newLat = center.lat + dy / 111320; // Convert meters to degrees
      const newLng =
        center.lng + dx / (111320 * Math.cos((center.lat * Math.PI) / 180)); // Convert meters to degrees
      paths.push({ lat: newLat, lng: newLng });
    }
    return paths;
  };

  return <div ref={mapRef} style={{ height: "200px", width: "100%" }}></div>;
};

export default MapWithCircle;
