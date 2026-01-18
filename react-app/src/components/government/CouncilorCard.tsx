interface CouncilorCardProps {
  name: string
  badge: string
  committees: string
  badgeVariant?: 'default' | 'liga' | 'sk' | 'ipmr'
}

export default function CouncilorCard({ name, badge, committees, badgeVariant = 'default' }: CouncilorCardProps) {
  return (
    <div className={`councilor-card${badgeVariant !== 'default' ? ` councilor-card--${badgeVariant}` : ''}`}>
      <h4 className="councilor-name">{name}</h4>
      <span className={`councilor-badge${badgeVariant !== 'default' ? ` councilor-badge--${badgeVariant}` : ''}`}>{badge}</span>
      <p className="councilor-committees">{committees}</p>
    </div>
  )
}
