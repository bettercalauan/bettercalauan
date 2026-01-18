import { barangaysPopulation } from '@/data/statistics'
import BarangayBarRow from './BarangayBarRow'

export default function BarangayList() {
  return (
    <div className="distribution-list">
      {barangaysPopulation.slice(0, 10).map((brgy) => (
        <BarangayBarRow
          key={brgy.name}
          rank={brgy.rank}
          name={brgy.name}
          pop={brgy.pop.toLocaleString()}
          width={brgy.width}
        />
      ))}
    </div>
  )
}
