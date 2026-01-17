import Link from 'next/link'

interface DepartmentCardProps {
  id: string
  title: string
  icon: string
  description: string
  phone: string
  email: string | null
  link: string | null
}

export default function DepartmentCard({ id, title, icon, description, phone, email, link }: DepartmentCardProps) {
  if (link) {
    return (
      <Link href={link} className="dept-card dept-card-link-wrap">
        <div className="dept-card-icon"><i className={`bi ${icon}`}></i></div>
        <div className="dept-card-content">
          <h4 className="dept-card-title">{title}</h4>
          <p className="dept-card-desc">{description}</p>
          <div className="dept-card-contacts">
            <span><i className="bi bi-telephone"></i> {phone}</span>
            {email && <span><i className="bi bi-envelope"></i> {email}</span>}
          </div>
          <span className="dept-card-link">View Services <i className="bi bi-arrow-right"></i></span>
        </div>
      </Link>
    )
  }

  return (
    <div className="dept-card">
      <div className="dept-card-icon"><i className={`bi ${icon}`}></i></div>
      <div className="dept-card-content">
        <h4 className="dept-card-title">{title}</h4>
        <p className="dept-card-desc">{description}</p>
        <div className="dept-card-contacts">
          <span><i className="bi bi-telephone"></i> {phone}</span>
          {email && <span><i className="bi bi-envelope"></i> {email}</span>}
        </div>
      </div>
    </div>
  )
}
