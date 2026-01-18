import BarangayCard from './BarangayCard'
import { barangaysData } from '@/data/government'

export default function BarangayList() {
  return (
    <div className="grid grid-4" style={{ gap: 'var(--spacing-sm)' }}>
      {barangaysData.map((barangay, index) => (
        <BarangayCard
          key={index}
          name={barangay.name}
          captain={barangay.captain}
          phone={barangay.phone}
        />
      ))}
    </div>
  )
}
