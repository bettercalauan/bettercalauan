export default function EconomicSectorBars() {
  return (
    <div className="sector-bars">
      <div className="sector-item">
        <div className="sector-info"><span className="sector-name">Agriculture</span><span className="sector-pct">45%</span></div>
        <div className="sector-bar-bg"><div className="sector-bar" style={{ width: '45%' }}></div></div>
      </div>
      <div className="sector-item">
        <div className="sector-info"><span className="sector-name">Trade & Commerce</span><span className="sector-pct">30%</span></div>
        <div className="sector-bar-bg"><div className="sector-bar" style={{ width: '30%' }}></div></div>
      </div>
      <div className="sector-item">
        <div className="sector-info"><span className="sector-name">Services</span><span className="sector-pct">20%</span></div>
        <div className="sector-bar-bg"><div className="sector-bar" style={{ width: '20%' }}></div></div>
      </div>
      <div className="sector-item">
        <div className="sector-info"><span className="sector-name">Industry</span><span className="sector-pct">5%</span></div>
        <div className="sector-bar-bg"><div className="sector-bar" style={{ width: '5%' }}></div></div>
      </div>
    </div>
  )
}
