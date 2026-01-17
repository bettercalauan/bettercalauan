'use client'

interface QuarterToggleProps {
  activeQuarter: 'q1' | 'q2'
  onQuarterChange: (quarter: 'q1' | 'q2') => void
}

export default function QuarterToggle({ activeQuarter, onQuarterChange }: QuarterToggleProps) {
  return (
    <div className="sre-period-toggle" aria-label="Select fiscal quarter">
      <button
        type="button"
        className={`sre-period-btn ${activeQuarter === 'q1' ? 'active' : ''}`}
        onClick={() => onQuarterChange('q1')}
      >
        <span className="sre-period-q">Q1</span>
        <span className="sre-period-range">Jan - Mar</span>
      </button>
      <button
        type="button"
        className={`sre-period-btn ${activeQuarter === 'q2' ? 'active' : ''}`}
        onClick={() => onQuarterChange('q2')}
      >
        <span className="sre-period-q">Q2</span>
        <span className="sre-period-range">Apr - Jun</span>
      </button>
    </div>
  )
}
