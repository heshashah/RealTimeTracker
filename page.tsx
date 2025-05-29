'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import io from 'socket.io-client';

// Dynamically import MapTracker component without SSR
const MapTracker = dynamic(() => import('../components/MapTracker'), { ssr: false });

export default function Home() {
  useEffect(() => {
    const socket = io('http://localhost:5001');
    socket.on('connect', () => console.log('Connected to socket.io'));
    return () => socket.disconnect();
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Real-Time Tracker</h1>
      <MapTracker />
    </main>
  );
}
