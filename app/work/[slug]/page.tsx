/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.shortDescription,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} — Collins Wilson`,
      description: project.shortDescription,
      url: `/work/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main id="main-content" className="case-study">
      <section className="case-hero shell">
        <Link className="back-link" href="/#work">← All work</Link>
        <div className="case-heading">
          <div>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1>{project.name}</h1>
          </div>
          <p>{project.shortDescription}</p>
        </div>
        <div className="case-meta">
          <div><span>Role</span><strong>{project.role}</strong></div>
          <div><span>Status</span><strong>{project.statusLabel}</strong></div>
          <div><span>Category</span><strong>{project.categories.join(" · ")}</strong></div>
          {project.externalUrl && <a href={project.externalUrl} target="_blank" rel="noreferrer">{project.externalLabel} ↗</a>}
        </div>
        <div className="case-visual">
          {project.heroImage ? (
            <img src={project.heroImage} alt={project.imageAlt ?? ""} />
          ) : (
            <div className={`product-placeholder product-placeholder-${project.slug}`} aria-hidden="true">
              <span className="placeholder-index">Product / Engineering</span>
              <span className="placeholder-name">{project.name}</span>
              <span className="placeholder-line" />
            </div>
          )}
        </div>
      </section>

      <section className="case-body shell">
        <div className="case-sections">
          {project.sections.map((section, index) => (
            <article key={section.title}>
              <span>0{index + 1}</span>
              <div><h2>{section.title}</h2><p>{section.body}</p></div>
            </article>
          ))}
        </div>
        <aside className="case-sidebar">
          <div><p>Capabilities</p><ul>{project.capabilities.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div><p>Stack</p><ul>{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </aside>
      </section>

      <Link className="next-project" href={`/work/${nextProject.slug}`}>
        <span>Next project</span><strong>{nextProject.name}</strong><span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
