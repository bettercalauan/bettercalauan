export default function CMCIOverviewGrid() {
  return (
    <div className="cmci-overview-grid">
      <div className="cmci-pillar-card">
        <div className="pillar-icon"><i className="bi bi-graph-up-arrow"></i></div>
        <h4>Economic Dynamism</h4>
        <div className="pillar-score">0.23</div>
        <div className="pillar-trend trend-up"><i className="bi bi-arrow-up"></i> +12%</div>
      </div>
      <div className="cmci-pillar-card">
        <div className="pillar-icon"><i className="bi bi-building-check"></i></div>
        <h4>Government Efficiency</h4>
        <div className="pillar-score">1.17</div>
        <div className="pillar-trend trend-down"><i className="bi bi-arrow-down"></i> -8%</div>
      </div>
      <div className="cmci-pillar-card">
        <div className="pillar-icon"><i className="bi bi-building-gear"></i></div>
        <h4>Infrastructure</h4>
        <div className="pillar-score">0.40</div>
        <div className="pillar-trend trend-up"><i className="bi bi-arrow-up"></i> +5%</div>
      </div>
      <div className="cmci-pillar-card">
        <div className="pillar-icon"><i className="bi bi-shield-check"></i></div>
        <h4>Resiliency</h4>
        <div className="pillar-score">1.08</div>
        <div className="pillar-trend trend-stable"><i className="bi bi-dash"></i> Stable</div>
      </div>
      <div className="cmci-pillar-card">
        <div className="pillar-icon"><i className="bi bi-lightbulb"></i></div>
        <h4>Innovation</h4>
        <div className="pillar-score">0.68</div>
        <div className="pillar-trend trend-up"><i className="bi bi-arrow-up"></i> +25%</div>
      </div>
    </div>
  )
}
