/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Project } from "@/data/projects";
import { StoreDownloadLink } from "@/components/store-download-link";

const statusClass: Record<Project["status"], string> = {
  live: "status-live",
  historical: "status-historical",
  development: "status-development",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card project-card-${(index % 2) + 1}`}>
      <div className="project-content">
        <div className="project-meta">
          <span className={`status ${statusClass[project.status]}`}>{project.statusLabel}</span>
          {project.builtSolo && <span className="ownership">End-to-end ownership</span>}
        </div>
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.name}</h3>
        <p className="project-role">{project.role}</p>
        <p className="project-description">{project.shortDescription}</p>
        {project.technologies.length > 0 && (
          <ul className="tag-list" aria-label={`${project.name} technologies`}>
            {project.technologies.slice(0, 4).map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}
        <div className="project-actions">
          <Link className="text-link" href={`/work/${project.slug}`}>
            Read case study <span aria-hidden="true">→</span>
          </Link>
          {project.externalUrl && (
            <a className="text-link muted-link" href={project.externalUrl} target="_blank" rel="noreferrer">
              {project.externalLabel} <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.storeLinks?.map((storeLink) => (
            <StoreDownloadLink key={storeLink.url} storeLink={storeLink} />
          ))}
        </div>
      </div>

      <Link className="project-visual" href={`/work/${project.slug}`} aria-label={`View ${project.name} case study`}>
        {project.heroImage ? (
          <img src={project.heroImage} alt={project.imageAlt ?? ""} loading="lazy" />
        ) : (
          <div className={`product-placeholder product-placeholder-${project.slug}`} aria-hidden="true">
            <span className="placeholder-index">0{index + 1}</span>
            <span className="placeholder-name">{project.name}</span>
            <span className="placeholder-line" />
          </div>
        )}
      </Link>
    </article>
  );
}
