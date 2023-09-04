import React, { useEffect } from "react";

import "leaflet/dist/leaflet.css";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";

const ShopMap = () => {
  const latitude = 59.42963755789355;
  const longitude = 24.772760569074777;
  const rimiLatitude = 59.42759342483607;
  const rimiLongitude = 24.770023226697887;

  const initialZoom = 14.5;

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.remove();
    }

    const customIcon = L.icon({
      iconUrl:
        "https://png.monster/wp-content/uploads/2021/06/png.monster-10.png",
      iconSize: [22, 32],
      iconAnchor: [11, 32],
      popupAnchor: [0, -32],
    });
    const customIconRimi = L.icon({
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Rimi_Baltic_Logo.svg/1200px-Rimi_Baltic_Logo.svg.png",
      iconSize: [42, 22],
      iconAnchor: [11, 11],
      popupAnchor: [0, -32],
    });

    const map = L.map("map").setView([latitude, longitude], initialZoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "sweet home map",
    }).addTo(map);

    // Add marker for the end point
    L.marker([rimiLatitude, rimiLongitude], { icon: customIconRimi })
      .addTo(map)
      .bindPopup("Rimi Shop")
      .openPopup();

    // Add marker for the starting point
    L.marker([latitude, longitude], { icon: customIcon })
      .addTo(map)
      .bindPopup("You are here")
      .openPopup();

    mapRef.current = map;
  }, [latitude, longitude, rimiLatitude, rimiLongitude]);

  const mapRef = React.useRef(null);

  return <div id="map"></div>;
};

export default ShopMap;
