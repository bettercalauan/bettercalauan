'use client'

interface InfoCardProps {
  icon: string
  title: string
  description: string
}

export default function LegislativeInfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="leg-info-card">
      <div className="leg-info-card-icon"><i className={`bi ${icon}`}></i></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
