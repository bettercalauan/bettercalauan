import { economyMetrics } from '@/data/statistics'

export default function EconomyCards() {
  return (
    <div className="economy-grid">
      {economyMetrics.map((metric, index) => (
        <div key={index} className="economy-card">
          <div className="economy-icon"><i className={`bi ${metric.icon}`}></i></div>
          <div className="economy-content">
            <div className="economy-value">{metric.value}</div>
            <div className="economy-label">{metric.label}</div>
            {metric.trend && <div className="economy-trend">{metric.trend}</div>}
          </div>
        </div>
      ))}
    </div>
  )
}
