interface ExecutiveCardProps {
  title: string
  name: string
  email: string
  phone: string
  hours: string
}

export default function ExecutiveCard({ title, name, email, phone, hours }: ExecutiveCardProps) {
  return (
    <div className="executive-card">
      <div className="executive-card-header">
        <span className="executive-badge">{title}</span>
        <h4 className="executive-name">{name}</h4>
      </div>
      <div className="executive-card-body">
        <div className="executive-contacts">
          <a href={`mailto:${email}`}><i className="bi bi-envelope"></i> {email}</a>
          <a href={`tel:${phone}`}><i className="bi bi-telephone"></i> {phone}</a>
          <span><i className="bi bi-clock"></i> {hours}</span>
        </div>
      </div>
    </div>
  )
}
