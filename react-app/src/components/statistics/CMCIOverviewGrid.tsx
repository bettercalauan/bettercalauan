import { cmciOverview } from '@/data/statistics'

export default function CMCIOverviewGrid() {
  return (
    <div className="cmci-overview-grid">
      {cmciOverview.map((pillar) => {
        const trendIcon = pillar.trend === 'Stable' ? 'bi-dash' : pillar.trend.startsWith('-') ? 'bi-arrow-down' : 'bi-arrow-up'
        const trendClass = pillar.trend === 'Stable' ? 'trend-stable' : pillar.trend.startsWith('-') ? 'trend-down' : 'trend-up'
        
        return (
          <div key={pillar.key} className="cmci-pillar-card">
            <div className="pillar-icon"><i className={`bi ${pillar.icon}`}></i></div>
            <h4>{pillar.label}</h4>
            <div className="pillar-score">{pillar.score}</div>
            <div className={`pillar-trend ${trendClass}`}>
              <i className={`bi ${trendIcon}`}></i> {pillar.trend}
            </div>
          </div>
        )
      })}
    </div>
  )
}
