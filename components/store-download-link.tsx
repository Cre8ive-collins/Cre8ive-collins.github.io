import type { ProjectStoreLink } from "@/data/projects";

export function StoreDownloadLink({ storeLink }: { storeLink: ProjectStoreLink }) {
  const isAppStore = storeLink.platform === "app-store";

  return (
    <a
      className="store-download-link"
      href={storeLink.url}
      target="_blank"
      rel="noreferrer"
      aria-label={storeLink.label}
    >
      <svg className="store-download-icon" viewBox="0 0 24 24" aria-hidden="true">
        {isAppStore ? (
          <path d="M16.7 12.1c0-2.7 2.2-4 2.3-4.1-1.3-1.9-3.3-2.1-4-2.1-1.7-.2-3.3 1-4.1 1-.9 0-2.2-1-3.6-1-1.8 0-3.5 1.1-4.5 2.7-1.9 3.2-.5 8 1.3 10.7.9 1.3 2 2.8 3.5 2.7 1.4-.1 2-.9 3.7-.9 1.7 0 2.2.9 3.7.8 1.5 0 2.5-1.3 3.4-2.6 1.1-1.5 1.5-3 1.5-3.1-.1 0-3.2-1.2-3.2-4.1zM13.9 4.1c.8-1 1.3-2.4 1.2-3.8-1.2.1-2.7.8-3.5 1.8-.7.8-1.4 2.2-1.2 3.5 1.3.1 2.7-.6 3.5-1.5z" />
        ) : (
          <path d="M3.5 2.4a1.5 1.5 0 0 0-.4 1v17.2c0 .4.1.7.4 1l10.2-9.6L3.5 2.4zm11.2 10.5-2.6 2.5-7.5 7 12.7-7.2-2.6-2.3zm3.8-2.2-2.8-1.6-2.9-1.7L4.6 1.6l10.1 9.5 3.8-2.2c.8-.5.8-1.7 0-2.2zm-6.4-2.1 2.6 2.5 2.6-2.3L4.6 1.6l7.5 7z" />
        )}
      </svg>
      <span className="store-download-copy">
        <small>{isAppStore ? "Download on the" : "Get it on"}</small>
        <strong>{isAppStore ? "App Store" : "Google Play"}</strong>
      </span>
    </a>
  );
}
