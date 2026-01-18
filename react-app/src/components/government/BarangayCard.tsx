interface BarangayCardProps {
  name: string
  captain: string
  phone: string
}

export default function BarangayCard({ name, captain, phone }: BarangayCardProps) {
  const cleanPhone = phone.replace(/\s/g, '')

  return (
    <a key={name} href={`tel:${cleanPhone}`} className="barangay-card">
      <div className="barangay-card-header">
        <i className="bi bi-geo-alt-fill"></i>
        <span className="barangay-name">{name}</span>
      </div>
      <div className="barangay-card-body">
        <span className="barangay-captain">{captain}</span>
        <span className="barangay-contact"><i className="bi bi-telephone"></i> {phone}</span>
      </div>
    </a>
  )
}
