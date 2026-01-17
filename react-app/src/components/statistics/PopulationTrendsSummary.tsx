export default function PopulationTrendsSummary() {
  return (
    <div className="trends-summary">
      <div className="trend-stat">
        <span className="trend-stat-label">1990</span>
        <span className="trend-stat-value">38,006</span>
      </div>
      <div className="trend-arrow"><i className="bi bi-arrow-right"></i></div>
      <div className="trend-stat trend-stat-current">
        <span className="trend-stat-label">2024</span>
        <span className="trend-stat-value">69,296</span>
      </div>
      <div className="trend-stat trend-stat-growth">
        <span className="trend-stat-label">Growth</span>
        <span className="trend-stat-value">+82.3%</span>
      </div>
    </div>
  )
}
