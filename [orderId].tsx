import dynamic from 'next/dynamic';

const MapTracker = dynamic(() => import('../../components/MapTracker'), { ssr: false });

const TrackPage = () => (
  <div>
    <h1>Track Your Order</h1>
    <MapTracker />
  </div>
);

export default TrackPage;
