export default function BarangayBarRow({ rank, name, pop, width }: { rank: number; name: string; pop: string; width: string }) {
  return (
    <div className="barangay-row" data-rank={rank}>
      <span className="rank">#{rank}</span>
      <span className="name">{name}</span>
      <div className="bar-wrap"><div className="bar" style={{ width }}></div></div>
      <span className="pop">{pop}</span>
    </div>
  )
}
