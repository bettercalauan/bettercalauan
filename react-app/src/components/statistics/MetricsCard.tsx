export default function MetricsCard({ icon, value, label, source }: { icon: string; value: string; label: string; source: string }) {
  return (
    <div className="metric-card" data-delay="0">
      <div className="metric-icon"><i className={`bi ${icon}`}></i></div>
      <div className="metric-value">{value}</div>
      <div className="metric-label">{label}</div>
      <div className="metric-source">{source}</div>
    </div>
  )
}
