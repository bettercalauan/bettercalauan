import { economicSectors } from '@/data/statistics'

export default function EconomicSectorBars() {
  return (
    <div className="sector-bars">
      {economicSectors.map((sector) => (
        <div key={sector.name} className="sector-item">
          <div className="sector-info">
            <span className="sector-name">{sector.name}</span>
            <span className="sector-pct">{sector.pct}</span>
          </div>
          <div className="sector-bar-bg">
            <div className="sector-bar" style={{ width: sector.pct }}></div>
          </div>
        </div>
      ))}
    </div>
  )
}
