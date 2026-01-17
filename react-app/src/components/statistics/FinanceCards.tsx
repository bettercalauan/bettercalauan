import { financeMetrics, povertyStats } from '@/data/statistics'

export default function FinanceCards() {
  return (
    <>
      <div className="finance-card finance-card-primary">
        <div className="finance-card-header">
          <i className="bi bi-graph-up-arrow"></i>
          <span>Annual Income</span>
        </div>
        <div className="finance-card-value">{financeMetrics.annualIncomeFull}</div>
        <div className="finance-card-detail">{financeMetrics.annualIncome}</div>
      </div>
      <div className="finance-card">
        <div className="finance-card-header">
          <i className="bi bi-bank"></i>
          <span>IRA Share</span>
        </div>
        <div className="finance-card-value">{financeMetrics.iraShare}</div>
        <div className="finance-card-detail">Internal Revenue Allotment</div>
      </div>
      <div className="finance-card">
        <div className="finance-card-header">
          <i className="bi bi-pie-chart-fill"></i>
          <span>IRA Dependency</span>
        </div>
        <div className="finance-card-value">{financeMetrics.iraDependency}</div>
        <div className="finance-card-detail">{financeMetrics.iraDependencyLabel}</div>
      </div>
    </>
  )
}
