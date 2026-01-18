import BarangayBarRow from './BarangayBarRow'
import { barangaysPopulation } from '@/data/statistics'

export default function AllBarangaysList() {
  return (
    <div className="distribution-list distribution-list-full">
      {barangaysPopulation.slice(10).map((brgy) => (
        <BarangayBarRow
          key={brgy.name}
          rank={brgy.rank}
          name={brgy.name}
          pop={brgy.pop}
          width={brgy.width}
        />
      ))}
    </div>
  )
}
