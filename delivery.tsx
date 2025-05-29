// pages/delivery.tsx
import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const DeliveryPage = () => {
  useEffect(() => {
    let lat = 12.9716;
    let lng = 77.5946;

    const interval = setInterval(() => {
      lat += Math.random() * 0.001;
      lng += Math.random() * 0.001;
      socket.emit('locationUpdate', { lat, lng });
    }, 3000); // update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return <div><h1>Delivery Dashboard - Tracking Started</h1></div>;
};

export default DeliveryPage;
