import DepartmentCard from './DepartmentCard'

export default function DepartmentList() {
  return (
    <div className="grid grid-3" style={{ gap: 'var(--spacing-md)' }}>
      <DepartmentCard
        id="municipal-civil-registrar"
        title="Municipal Civil Registrar"
        icon="bi-file-earmark-text-fill"
        description="Birth, death, marriage certificates, CENOMAR"
        phone="(078) 326-5011"
        email="civilreg@solano.gov.ph"
        link="/service-details/municipal-civil-registrar"
      />
      <DepartmentCard
        id="municipal-treasurer"
        title="Municipal Treasurer's Office"
        icon="bi-cash-coin"
        description="Tax payments, real property tax, revenue collection"
        phone="(078) 326-5012"
        email="treasurer@solano.gov.ph"
        link="/service-details/municipal-treasurer"
      />
      <DepartmentCard
        id="municipal-engineering"
        title="Municipal Engineering Office"
        icon="bi-building-fill-gear"
        description="Building permits, construction permits, infrastructure"
        phone="(078) 326-5013"
        email="engineer@solano.gov.ph"
        link="/service-details/municipal-engineering"
      />
      <DepartmentCard
        id="mswdo-services"
        title="MSWDO"
        icon="bi-people-fill"
        description="Social services, PWD & senior citizen IDs, financial assistance"
        phone="(078) 326-5014"
        email="mswdo@solano.gov.ph"
        link="/service-details/mswdo-services"
      />
      <DepartmentCard
        id="municipal-agriculture"
        title="Municipal Agriculture Office"
        icon="bi-tree-fill"
        description="Agricultural loans, crop insurance, fertilizer assistance"
        phone="(078) 326-5015"
        email="agri@solano.gov.ph"
        link="/service-details/municipal-agriculture"
      />
      <DepartmentCard
        id="municipal-planning"
        title="Municipal Planning & Development"
        icon="bi-clipboard-data-fill"
        description="Development planning, project monitoring, zoning"
        phone="(078) 326-5016"
        email="mpdo@solano.gov.ph"
        link="/service-details/municipal-planning"
      />
      <DepartmentCard
        id="municipal-assessor"
        title="Municipal Assessor's Office"
        icon="bi-house-door-fill"
        description="Property assessment, tax declarations, land records"
        phone="(078) 326-5017"
        email="assessor@solano.gov.ph"
        link="/service-details/municipal-assessor"
      />
      <DepartmentCard
        id="municipal-accounting"
        title="Municipal Accounting Office"
        icon="bi-calculator-fill"
        description="Financial records, disbursements, accounting services"
        phone="(078) 326-5001"
        email="accounting@solano.gov.ph"
        link="/service-details/municipal-accounting"
      />
      <DepartmentCard
        id="municipal-budget"
        title="Municipal Budget Office"
        icon="bi-piggy-bank-fill"
        description="Budget preparation, appropriations, fiscal management"
        phone="(078) 326-5001"
        email="budget@solano.gov.ph"
        link="/service-details/municipal-budget"
      />
      <DepartmentCard
        id="municipal-general-services"
        title="Municipal General Services Office"
        icon="bi-gear-fill"
        description="Property management, procurement, administration"
        phone="(078) 326-5001"
        email="gso@solano.gov.ph"
        link="/service-details/municipal-general-services"
      />
      <DepartmentCard
        id="municipal-health"
        title="Municipal Health Office"
        icon="bi-heart-pulse-fill"
        description="Vaccination, health certificates, medical assistance"
        phone="(078) 326-5010"
        email="mho@solano.gov.ph"
        link="/services/health"
      />
      <DepartmentCard
        id="business-permits-licensing"
        title="Business Permits & Licensing"
        icon="bi-shop"
        description="Business permits, Mayor's clearance, licensing"
        phone="(078) 326-5002"
        email="bpls@solano.gov.ph"
        link="/service-details/business-permits-licensing"
      />
      <DepartmentCard
        id="human-resource-management"
        title="Human Resource Management"
        icon="bi-person-badge-fill"
        description="Personnel services, recruitment, employee records"
        phone="(078) 326-5002"
        email="hrmo@solano.gov.ph"
        link="/service-details/human-resource-management"
      />
      <DepartmentCard
        id="mdrrmo"
        title="MDRRMO"
        icon="bi-exclamation-triangle-fill"
        description="Disaster preparedness, emergency response, risk reduction"
        phone="0926 383 3744"
        email="mdrrmo@solano.gov.ph"
        link="/services/public-safety"
      />
      <DepartmentCard
        id="seedo-public-market"
        title="SEEDO – Public Market"
        icon="bi-shop-window"
        description="Market clearance, entrance fees, vendor services, CTC"
        phone="(078) 326-5001"
        email={null}
        link="/service-details/seedo-public-market"
      />
      <DepartmentCard
        id="seedo-slaughterhouse"
        title="SEEDO – Slaughterhouse"
        icon="bi-box-seam"
        description="Hog, cattle, goat, carabao slaughter with meat inspection"
        phone="(078) 326-5001"
        email={null}
        link="/service-details/seedo-slaughterhouse"
      />
      <div className="dept-card">
        <div className="dept-card-icon"><i className="bi bi-briefcase-fill"></i></div>
        <div className="dept-card-content">
          <h4 className="dept-card-title">PESO</h4>
          <p className="dept-card-desc">Job placement, employment assistance, career guidance</p>
          <div className="dept-card-contacts">
            <a href="tel:09171551043"><i className="bi bi-telephone"></i> 0917-155-1043</a>
            <a href="https://www.facebook.com/profile.php?id=61564916854423" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i> View Job Vacancies</a>
          </div>
        </div>
      </div>
    </div>
  )
}
