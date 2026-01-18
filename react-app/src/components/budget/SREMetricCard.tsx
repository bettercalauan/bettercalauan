'use client'

import { IncomeSourcesChart, ExpenditureChart } from '@/components/charts/Charts'

interface SREMetricCardProps {
  icon: string
  label: string
  value: string
  iconClassName?: string
}

export default function SREMetricCard({ icon, label, value, iconClassName }: SREMetricCardProps) {
  return (
    <div className={`sre-metric-card ${iconClassName}`}>
      <div className="sre-metric-icon"><i className={`bi ${icon}`}></i></div>
      <div className="sre-metric-data">
        <span className="sre-metric-value">{value}</span>
        <span className="sre-metric-label">{label}</span>
      </div>
    </div>
  )
}
