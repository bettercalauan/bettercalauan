import { povertyStats } from '@/data/statistics'

export default function PovertyComparison() {
  return (
    <div className="poverty-comparison">
      <div className="poverty-card poverty-card-2018">
        <span className="poverty-year">2018</span>
        <div className="poverty-rate">
          <span className="rate-value">{povertyStats.year2018}</span>
          <span className="rate-symbol">%</span>
        </div>
        <div className="poverty-bar"><div className="poverty-fill" style={{ width: povertyStats.year2018 + '%' }}></div></div>
        <span className="poverty-ci">{povertyStats.year2018CI}</span>
      </div>
      <div className="poverty-arrow">
        <i className="bi bi-arrow-right"></i>
        <span className="poverty-change">{povertyStats.improvement}</span>
      </div>
      <div className="poverty-card poverty-card-2021">
        <span className="poverty-year">2021</span>
        <div className="poverty-rate">
          <span className="rate-value">{povertyStats.year2021}</span>
          <span className="rate-symbol">%</span>
        </div>
        <div className="poverty-bar"><div className="poverty-fill" style={{ width: povertyStats.year2021 + '%' }}></div></div>
        <span className="poverty-ci">{povertyStats.year2021CI}</span>
        <span className="poverty-badge"><i className="bi bi-check-circle-fill"></i> Improved</span>
      </div>
    </div>
  )
}
