"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Create custom icon
const customIcon = new L.Icon({
  iconUrl: "/marker.png", // path from public folder
  iconSize: [50, 50], // width, height
  iconAnchor: [40, 40], // center bottom
  popupAnchor: [0, -40], // popup position
});

const MapClient = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto section-padding">
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">
          Locate Us
        </h1>
        <p className="text-base text-gray-600 mb-12">
          Visit our office at the location mentioned below and connect with our
          team directly.
        </p>
      </div>
      <MapContainer
        center={[25.202408513212383, 55.26804232025375]} // Dubai ,
        zoom={16}
        style={{ height: "500px", width: "100%" }}
        scrollWheelZoom={false}
        whenCreated={(map) => {
          map.on("click", () => {
            map.scrollWheelZoom.enable();
          });

          map.on("mouseout", () => {
            map.scrollWheelZoom.disable();
          });
        }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution="© OpenStreetMap contributors © CARTO"
        />

        <Marker
          position={[25.202408513212383, 55.26804232025375]}
          icon={customIcon}
        >
          <Popup>A&F Homes Real Estate Dubai</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapClient;
