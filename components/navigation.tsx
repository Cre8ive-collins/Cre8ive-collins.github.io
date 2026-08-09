import Link from "next/link";
import { navigation, profile } from "@/data/profile";

export function Navigation() {
  return (
    <header className="site-header">
      <nav className="navigation shell" aria-label="Primary navigation">
        <div className="desktop-nav">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <a className="nav-cta" href={profile.cvUrl} target="_blank" rel="noreferrer">
          Download CV <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">Menu</summary>
          <div className="mobile-menu-panel">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
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
