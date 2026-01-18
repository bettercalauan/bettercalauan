'use client'

interface ProcessStepProps {
  num: string
  icon: string
  title: string
  desc: string
  final?: boolean
}

export default function ProcessStep({ num, icon, title, desc, final }: ProcessStepProps) {
  return (
    <div className={`leg-flow-step ${final ? 'leg-flow-final' : ''}`}>
      <div className={`leg-flow-card ${final ? 'leg-flow-card-final' : ''}`}>
        <div className="leg-flow-number">{num}</div>
        <div className="leg-flow-icon"><i className={`bi ${icon}`}></i></div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  )
}
