import CouncilorCard from './CouncilorCard'
import { councilorsData } from '@/data/government'

export default function CouncilorList() {
  return (
    <>
      {councilorsData.map((councilor, index) => (
        <CouncilorCard
          key={index}
          name={councilor.name}
          badge={councilor.badge}
          committees={councilor.committees}
          badgeVariant={
            councilor.badge === 'Liga ng mga Barangay President' ? 'liga' :
            councilor.badge === 'SK Federation President' ? 'sk' :
            councilor.badge === 'IPMR' ? 'ipmr' :
            undefined
          }
        />
      ))}
    </>
  )
}
