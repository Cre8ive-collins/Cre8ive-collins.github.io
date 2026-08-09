import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="footer shell">
      <p>Built by Collins Wilson</p>
      <p>© {new Date().getFullYear()} Collins Wilson</p>
      <div className="footer-links" aria-label="Social links">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.socials.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  );
}
