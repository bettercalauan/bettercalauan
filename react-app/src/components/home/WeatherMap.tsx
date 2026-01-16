'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Leaflet to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

const CALAUAN_COORDS: [number, number] = [14.14649, 121.31451];

export default function WeatherMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="section weather-map-section">
      <div className="container">
        <div className="home-stats-v2-header">
          <h2>Weather and Map of Calauan</h2>
        </div>
        <div className="weather-map-grid">
          <div className="weather-column">
            <div id="weather-container" aria-live="polite">
              {/* Weather widget - implement with actual API */}
              <div className="weather-card">
                <div className="weather-main">
                  <i className="bi bi-cloud-sun weather-icon" />
                  <span className="weather-temp">28°C</span>
                </div>
                <div className="weather-details">
                  <p className="weather-desc">Partly Cloudy</p>
                  <p className="weather-location">Calauan, Laguna</p>
                </div>
              </div>
            </div>
          </div>

          <div className="map-column">
            <div className="map-card">
              <div id="map-container" role="application" aria-label="Interactive map of Calauan, Laguna">
                {mounted && (
                  <MapContainer
                    center={CALAUAN_COORDS}
                    zoom={15}
                    style={{ height: '300px', width: '100%' }}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={CALAUAN_COORDS}>
                      <Popup>Calauan Municipal Hall</Popup>
                    </Marker>
                  </MapContainer>
                )}
              </div>
              <p className="map-attribution">
                <i className="bi bi-geo-alt" aria-hidden="true" /> Calauan Municipal Hall, Laguna 4012
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
