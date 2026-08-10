/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionLink } from "@/components/section-link";
import { profile } from "@/data/profile";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const image = project.heroImage ?? "/og.png";
  return {
    title: project.name,
    description: project.shortDescription,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "website",
      title: `${project.name} — Collins Wilson`,
      description: project.shortDescription,
      url: `/work/${project.slug}`,
      siteName: "Collins Wilson",
      locale: "en_NG",
      images: [{ url: image, alt: project.imageAlt ?? `${project.name} project by Collins Wilson` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Collins Wilson`,
      description: project.shortDescription,
      creator: "@cre8ive_collins",
      images: [image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const projectUrl = `${profile.siteUrl}/work/${project.slug}`;
  const relatedUrls = [
    ...(project.externalUrl ? [project.externalUrl] : []),
    ...(project.storeLinks?.map((storeLink) => storeLink.url) ?? []),
  ];
  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${projectUrl}#project`,
        name: project.name,
        url: projectUrl,
        description: project.shortDescription,
        ...(project.heroImage
          ? { image: new URL(project.heroImage, profile.siteUrl).toString() }
          : {}),
        ...(project.builtSolo
          ? {
              creator: {
                "@type": "Person",
                "@id": `${profile.siteUrl}/#person`,
                name: profile.name,
              },
            }
          : {}),
        contributor: {
          "@type": "Person",
          "@id": `${profile.siteUrl}/#person`,
          name: profile.name,
          jobTitle: project.role,
        },
        keywords: [...project.categories, ...project.technologies].join(", "),
        ...(relatedUrls.length > 0 ? { sameAs: relatedUrls } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: profile.siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: project.name,
            item: projectUrl,
          },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="case-study">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema).replace(/</g, "\\u003c") }}
      />
      <section className="case-hero shell">
        <SectionLink className="back-link" href="/#work" sectionId="work">← All work</SectionLink>
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
          {project.storeLinks && (
            <div className="case-store-links" aria-label={`${project.name} downloads`}>
              {project.storeLinks.map((storeLink) => (
                <a className="store-download-link" href={storeLink.url} key={storeLink.url} target="_blank" rel="noreferrer">
                  {storeLink.label} ↗
                </a>
              ))}
            </div>
          )}
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
          {project.capabilities.length > 0 && (
            <div><p>Capabilities</p><ul>{project.capabilities.map((item) => <li key={item}>{item}</li>)}</ul></div>
          )}
          {project.technologies.length > 0 && (
            <div><p>Stack</p><ul>{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul></div>
          )}
        </aside>
      </section>

      <Link className="next-project" href={`/work/${nextProject.slug}`}>
        <span>Next project</span><strong>{nextProject.name}</strong><span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
