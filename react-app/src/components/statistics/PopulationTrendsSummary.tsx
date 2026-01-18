import { populationStats, PopulationStats } from '@/data/statistics'

export default function PopulationTrendsSummary() {
  return (
    <div className="trends-summary">
      <div className="trend-stat">
        <span className="trend-stat-label">2000 </span>
        <span className="trend-stat-value">{populationStats.year2000}</span>
      </div>
      <div className="trend-arrow"><i className="bi bi-arrow-right"></i></div>
      <div className="trend-stat trend-stat-current">
        <span className="trend-stat-label">2024 </span>
        <span className="trend-stat-value">{populationStats.year2024}</span>
      </div>
      <div className="trend-stat trend-stat-growth">
        <span className="trend-stat-label">Growth </span>
        <span className="trend-stat-value">{populationStats.growth}</span>
      </div>
    </div>
  )
}
