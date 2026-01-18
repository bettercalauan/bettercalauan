import Link from 'next/link';

export const metadata = {
  title: 'Ordinance Framework | BetterCalauan.org',
  description: 'Browse municipal ordinances enacted by the Sangguniang Bayan of Calauan, Laguna.',
};

const ordinanceCategories = [
  { icon: 'bi-cash-coin', label: 'Revenue & Taxation' },
  { icon: 'bi-shop', label: 'Business & Trade' },
  { icon: 'bi-shield-check', label: 'Public Safety' },
  { icon: 'bi-tree', label: 'Environment' },
  { icon: 'bi-signpost-2', label: 'Traffic & Transportation' },
  { icon: 'bi-building', label: 'Zoning & Land Use' },
];

const ordinances2025 = [
  { no: 'MO-10-12-2025', title: 'An Ordinance Reclassifying Parcels of Land Applied by Borland Development Corporation with a Total Land Area of Two Hundred Forty-Eight Thousand Four Hundred Eleven (248,411) Square Meters Located at Barangay Limao, Calauan, Laguna from Agricultural to Residential.', date: 'December 09, 2025' },
  { no: 'MO-09-12-2025', title: 'An Ordinance Institutionalizing Environmental, Social, and Governance Management System (ESGMS) of the Municipality of Calauan, Laguna, with Focus on Hydrological, Geological, Biodiversity and Social Frameworks for Comprehensive Environmental and Spatial Capacity Planning and Creating the Municipal Technical Working Group for Its Formulation, Implementation, Monitoring and for Other Purposes.', date: 'December 09, 2025' },
  { no: 'MO-08-12-2025', title: 'An Ordinance Approving the Issuance of Development Permit for the Residential Subdivision Project (Phirst Sights Calauan West) of Phirst Park Homes Inc. Located at Barangay Masiit, Calauan, Laguna.', date: 'December 09, 2025' },
  { no: 'MO-07-12-2025', title: 'An Ordinance Reclassifying Parcels of Land Applied by Phirst Park Homes Inc. with a Total Land Area of Sixty Thousand Seven Hundred Twenty-Seven (60,727) Square Meters Located at Barangay Masiit, Calauan, Laguna from Agricultural to Residential.', date: 'November 17, 2025' },
  { no: 'MO-03-12-2025', title: 'An Ordinance Renaming Dayap National Integrated High School to Calauan National High School and Separating It from Its Mother School, the Dayap National High School.', date: 'September 02, 2025' },
];

export default function OrdinanceFrameworkPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/legislative">Legislative</Link>
          <span>/</span>
          <span aria-current="page">Ordinance Framework</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-journal-text"></i> Legislative</span>
            <h1>Ordinance Framework</h1>
            <p className="page-header-desc">Municipal ordinances enacted by the Sangguniang Bayan ng Calauan</p>
          </div>
        </div>
      </section>

      {/* About Ordinances */}
      <section className="section">
        <div className="container">
          <div className="info-card">
            <div className="info-card-icon"><i className="bi bi-info-circle"></i></div>
            <div className="info-card-content">
              <h3>What is an Ordinance?</h3>
              <p>A municipal ordinance is a local law enacted by the Sangguniang Bayan (Municipal Council) that governs the municipality and its residents. Ordinances have the force and effect of law within the territorial jurisdiction of the municipality.</p>
              <p>Ordinances may cover various subjects including but not limited to: taxation, business regulations, public safety, environmental protection, traffic management, and zoning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ordinance Categories */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>Ordinance Categories</h2>
          </div>
          <div className="grid grid-3" style={{ gap: 'var(--spacing-sm)' }}>
            {ordinanceCategories.map((cat) => (
              <div key={cat.label} className="category-tag">
                <i className={`bi ${cat.icon}`}></i> {cat.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Ordinances Table */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>2025 Ordinances</h2>
            <p style={{ color: 'var(--color-text-light)' }}>Official ordinances enacted by the Sangguniang Bayan ng Calauan in 2025</p>
          </div>
          <div className="table-responsive">
            <table className="data-table ordinance-table">
              <caption className="sr-only">List of 2025 Ordinances from Sangguniang Bayan ng Calauan</caption>
              <thead>
                <tr>
                  <th scope="col" style={{ width: '120px' }}>Ordinance No.</th>
                  <th scope="col">Title</th>
                  <th scope="col" style={{ width: '120px' }}>Session Date</th>
                </tr>
              </thead>
              <tbody>
                {ordinances2025.map((ord) => (
                  <tr key={ord.no}>
                    <td>{ord.no}</td>
                    <td>{ord.title}</td>
                    <td>{ord.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center" style={{ marginTop: 'var(--spacing-lg)' }}>
            <a
              href="https://sb.calauanlaguna.gov.ph/osp/records?set_doc_type=ordinance&set_year=2025&set_month="
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-box-arrow-up-right"></i> View All Ordinances on SB Website
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
