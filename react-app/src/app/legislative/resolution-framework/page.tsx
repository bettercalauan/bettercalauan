import Link from 'next/link';

export const metadata = {
  title: 'Resolution Framework | BetterCalauan.org',
  description: 'Browse resolutions passed by the Sangguniang Bayan of Calauan, Calauan.',
};

const resolutionTypes = [
  { icon: 'bi-award', label: 'Commendation' },
  { icon: 'bi-envelope-paper', label: 'Request/Appeal' },
  { icon: 'bi-hand-thumbs-up', label: 'Support/Endorsement' },
  { icon: 'bi-exclamation-circle', label: 'Condolence' },
  { icon: 'bi-clipboard-check', label: 'Authorization' },
];

const resolutions2025 = [
  { no: '163-12-2025', title: 'A Resolution Approving Resolution No. 44 Series of 2025 and Appropriation Ordinance No. 66 Series of 2025 of the Sangguniang Barangay of Lamot 2, Calauan, Laguna "An Ordinance Authorizing the Annual Budget of Barangay Lamot 2, Calauan, Laguna for Fiscal Year 2026 in the Amount of Eleven Million Seven Hundred Ninety-One Thousand Three Hundred Fifty-Nine Pesos (PHP 11,791,359.00)."', date: 'December 22, 2025' },
  { no: '147-12-2025', title: 'A Resolution Approving Appropriation Ordinance No. 01 Series of 2025 of the Sangguniang Barangay of Barangay Silangan, Calauan, Laguna "An Ordinance Authorizing the Annual Budget of Barangay Silangan, Calauan, Laguna for Fiscal Year 2026 in the Amount of Five Million One Hundred Fifteen Thousand Ninety-Two Pesos (PHP 5,115,092.00)".', date: 'December 01, 2025' },
  { no: '141-12-2025', title: 'A Resolution Adopting and Approving the FY 2025-2028 Farm-to-Market Road Network Plan (FMRNP) of the Municipality of Calauan, Laguna', date: 'November 24, 2025' },
  { no: '118-12-2025', title: 'A Resolution Approving the FY 2026 Peace and Order and Public Safety (POPS) Plan Amounting to Seven Million Pesos (Php 7,000,000.00) Integrating Therein the FY 2026 Local Anti-Drug Plan of Action (LADPA) of the Municipality of Calauan, Laguna.', date: 'November 03, 2025' },
  { no: '102-12-2025', title: 'A Resolution Requesting to Honorable Mayor Roseller G. Caraithan to Create a Municipal Veterinary Office in the Municipality of Calauan', date: 'October 20, 2025' },
  { no: '106-12-2025', title: 'A Resolution Approving the Priority Programs and Projects Funded Under the 20% Development Fund for Fiscal Year 2026 of the Municipal Government of Calauan, Laguna Embodied Under Municipal Development Council Resolution No. 09-2025 Amounting to Seventy-Three Million Three Hundred Fifty-Six Thousand Fifty-Four Pesos and Sixty Centavos (Php 73,356,054.60).', date: 'October 20, 2025' },
];

export default function ResolutionFrameworkPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/legislative">Legislative</Link>
          <span>/</span>
          <span aria-current="page">Resolution Framework</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-file-earmark-text"></i> Legislative</span>
            <h1>Resolution Framework</h1>
            <p className="page-header-desc">Resolutions passed by the Sangguniang Bayan ng Calauan</p>
          </div>
        </div>
      </section>

      {/* About Resolutions */}
      <section className="section">
        <div className="container">
          <div className="info-card">
            <div className="info-card-icon"><i className="bi bi-info-circle"></i></div>
            <div className="info-card-content">
              <h3>What is a Resolution?</h3>
              <p>A resolution is a formal expression of the opinion or will of the Sangguniang Bayan. Unlike ordinances, resolutions do not have the force and effect of law but serve as official statements of the legislative body.</p>
              <p>Resolutions are commonly used for: commendations, requests to higher government agencies, expressions of support or opposition, and administrative matters of the Sangguniang Bayan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resolution Types */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>Types of Resolutions</h2>
          </div>
          <div className="grid grid-3" style={{ gap: 'var(--spacing-sm)' }}>
            {resolutionTypes.map((type) => (
              <div key={type.label} className="category-tag">
                <i className={`bi ${type.icon}`}></i> {type.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Resolutions Table */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>2025 Resolutions</h2>
            <p style={{ color: 'var(--color-text-light)' }}>Official resolutions passed by the Sangguniang Bayan ng Calauan in 2025</p>
          </div>
          <div className="table-responsive">
            <table className="data-table resolution-table">
              <caption className="sr-only">List of 2025 Resolutions from Sangguniang Bayan ng Calauan</caption>
              <thead>
                <tr>
                  <th scope="col" style={{ width: '130px' }}>Resolution No.</th>
                  <th scope="col">Title</th>
                  <th scope="col" style={{ width: '120px' }}>Session Date</th>
                </tr>
              </thead>
              <tbody>
                {resolutions2025.map((res) => (
                  <tr key={res.no}>
                    <td>{res.no}</td>
                    <td>{res.title}</td>
                    <td>{res.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center" style={{ marginTop: 'var(--spacing-lg)' }}>
            <a
              href="https://sb.calauanlaguna.gov.ph/osp/records?set_doc_type=resolution&set_year=2025&set_month="
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-box-arrow-up-right"></i> View All Resolutions on SB Website
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
