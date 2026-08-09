import { navigation, profile } from "@/data/profile";
import { SectionLink } from "@/components/section-link";

export function Navigation() {
  return (
    <header className="site-header">
      <nav className="navigation shell" aria-label="Primary navigation">
        <div className="desktop-nav">
          {navigation.map((item) => (
            <SectionLink key={item.href} href={item.href} sectionId={item.href.slice(2)}>
              {item.label}
            </SectionLink>
          ))}
        </div>

        <a className="nav-cta" href={profile.cvUrl} target="_blank" rel="noreferrer">
          Download CV <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">Menu</summary>
          <div className="mobile-menu-panel">
            {navigation.map((item) => (
              <SectionLink key={item.href} href={item.href} sectionId={item.href.slice(2)}>
                {item.label}
              </SectionLink>
            ))}
            <a href={profile.cvUrl} target="_blank" rel="noreferrer">
              Download CV ↗
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}
