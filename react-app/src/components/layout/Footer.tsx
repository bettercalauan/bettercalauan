import { footerData, FooterLink } from "@/data/footer";

const LinkItem = ({ link }: { link: FooterLink }) => (
  <li>
    <a
      href={link.href}
      {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {link.label}
    </a>
  </li>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { brand, social, quickLinks, resources, contribute, copyright } = footerData;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main-new">
          <div className="footer-brand">
            <img src={brand.logo} alt={brand.logoAlt} className="footer-logo" />
            <p className="footer-tagline">{brand.tagline}</p>
            <div className="footer-social-new">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer-social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h4>{quickLinks.title}</h4>
            <ul className="footer-links-new">
              {quickLinks.links.map((link) => (
                <LinkItem key={link.href} link={link} />
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>{resources.title}</h4>
            <ul className="footer-links-new">
              {resources.links.map((link) => (
                <LinkItem key={link.href} link={link} />
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <div className="footer-cost" role="status" aria-label={`${contribute.costLabel}: Zero Pesos`}>
              {contribute.costLabel} = <span className="footer-cost-value">{contribute.costValue}</span>
            </div>
            {contribute.actions.map((action) => (
              <a
                key={action.href}
                href={action.href}
                className="footer-contribute"
                {...(action.external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                <i className={`bi ${action.icon}`}></i> {action.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom-new">
          <div className="footer-copyright">
            <span>&copy; {currentYear} {copyright.org}. {copyright.license} {copyright.disclaimer}</span>
            <span className="footer-version"><i className="bi bi-boxes"></i> Ver. {copyright.version}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}