'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function WeatherMap() {
  const { t } = useLanguage();

  return (
    <section className="section weather-map-section">
      <div className="container">
        <div className="home-stats-v2-header">
          <h2>{t('home-weather-map')}</h2>
        </div>
        <div className="weather-map-grid">
          <div className="weather-column">
            <div id="weather-container" aria-live="polite">
              <div className="weather-widget" role="region" aria-label="Current weather in Calauan">
                <div className="weather-current">
                  <div className="weather-current-icon">
                    <i className="bi bi-cloud-sun-fill"></i>
                  </div>
                  <div className="weather-current-info">
                    <div className="weather-current-temp">__°C</div>
                    <div className="weather-current-condition">______ _____</div>
                    <div className="weather-current-location">
                      <i className="bi bi-geo-alt"></i> Calauan, Laguna
                    </div>
                  </div>
                </div>
                <div className="weather-stats">
                  <div className="weather-stat">
                    <i className="bi bi-droplet"></i>
                    <span>__%</span>
                  </div>
                  <div className="weather-stat">
                    <i className="bi bi-wind"></i>
                    <span>__ km/h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="map-column">
            <div className="map-card">
              <div
                id="map-container"
                role="application"
                aria-label="Interactive map of Calauan, Laguna"
                className="map-container-iframe"
              >
                <iframe
                  width="100%"
                  height="300"
                  frameBorder="0"
                  scrolling="no"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=121.28871917724611%2C14.129715337310271%2C121.35086059570312%2C14.167458790750569"
                  className="map-iframe"
                  title="Map of Calauan"
                  loading="lazy"
                />
              </div>
              <p className="map-attribution">
                <i className="bi bi-geo-alt" aria-hidden="true"></i> Calauan Municipal Hall, Laguna 4012
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}