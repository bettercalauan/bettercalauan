import DepartmentCard from './DepartmentCard'
import { departmentsData } from '@/data/government'

export default function DepartmentList() {
  return (
    <div className="grid grid-3" style={{ gap: 'var(--spacing-md)' }}>
      {departmentsData.map((dept) => {
        if (dept.id === 'peso') {
          return (
            <div key={dept.id} className="dept-card">
              <div className="dept-card-icon"><i className={`bi ${dept.icon}`}></i></div>
              <div className="dept-card-content">
                <h4 className="dept-card-title">{dept.title}</h4>
                <p className="dept-card-desc">{dept.description}</p>
                <div className="dept-card-contacts">
                  <a href={`tel:${dept.phone.replace(/\s/g, '')}`}>
                    <i className="bi bi-telephone"></i> {dept.phone}
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61564916854423" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook"></i> View Job Vacancies
                  </a>
                </div>
              </div>
            </div>
          )
        }
        return (
          <DepartmentCard
            key={dept.id}
            id={dept.id}
            title={dept.title}
            icon={dept.icon}
            description={dept.description}
            phone={dept.phone}
            email={dept.email}
            link={dept.link}
          />
        )
      })}
    </div>
  )
}
