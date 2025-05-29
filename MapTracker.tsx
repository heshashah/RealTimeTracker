// src/components/MapTracker.tsx
'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const MapTracker = () => {
  const [position, setPosition] = useState<[number, number]>([12.9716, 77.5946]); // default Bangalore

  useEffect(() => {
    socket.on('locationUpdate', (data) => {
      setPosition([data.lat, data.lng]);
    });

    return () => {
      socket.off('locationUpdate');
    };
  }, []);

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='Map data &copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Delivery Partner</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapTracker;
