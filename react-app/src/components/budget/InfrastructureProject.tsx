'use client'

interface InfrastructureProjectProps {
  year: string
  category: string
  categoryIcon: string
  title: string
  location: string
  typeOfWork: string
  contractor: string
  contractCost: string
  source: string
  mapLink: string
}

export default function InfrastructureProject({
  year,
  category,
  categoryIcon,
  title,
  location,
  typeOfWork,
  contractor,
  contractCost,
  source,
  mapLink
}: InfrastructureProjectProps) {
  return (
    <div className="infra-project-v5">
      <div className="infra-project-main">
        <div className="infra-project-tags">
          <span className="infra-tag-year">{year}</span>
          <span className="infra-tag-category"><i className={`bi ${categoryIcon}`}></i> {category}</span>
        </div>
        <h3>{title}</h3>
        <p className="infra-location"><i className="bi bi-geo-alt"></i> {location}</p>
      </div>
      <div className="infra-project-details">
        <div className="infra-detail-row">
          <div className="infra-detail-col">
            <span className="infra-detail-label">Type of Work</span>
            <span className="infra-detail-value">{typeOfWork}</span>
          </div>
          <div className="infra-detail-col">
            <span className="infra-detail-label">Contractor</span>
            <span className="infra-detail-value">{contractor}</span>
          </div>
          <div className="infra-detail-col infra-detail-cost">
            <span className="infra-detail-label">Contract Cost</span>
            <span className="infra-detail-value">{contractCost}</span>
          </div>
        </div>
      </div>
      <div className="infra-project-footer">
        <span className="infra-source"><i className="bi bi-info-circle"></i> Source: {source}</span>
        <a href={mapLink} target="_blank" rel="noopener noreferrer" className="infra-link">
          View on Map <i className="bi bi-arrow-up-right"></i>
        </a>
      </div>
    </div>
  )
}
