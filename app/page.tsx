/* eslint-disable @next/next/no-img-element */
import { ProjectCard } from "@/components/project-card";
import { RotatingRole } from "@/components/rotating-role";
import { experience, toolkit } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const process = [
  ["01", "Understand the problem", "I start with the business problem, users and constraints before deciding what the software should look like."],
  ["02", "Shape the product", "I translate requirements into practical product scope, user flows and technical decisions."],
  ["03", "Engineer the solution", "I work across frontend, mobile, APIs, backend systems, integrations and data to build the product."],
  ["04", "Ship and iterate", "Production is part of engineering. I care about deployment, reliability, feedback and how the product evolves after release."],
] as const;

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero shell" id="home">
        <div className="hero-content">
          <p className="hero-name">Collins Wilson</p>
          <h1><RotatingRole /></h1>
          <p className="hero-copy">
            I build digital products from idea to production — across web, mobile, APIs, backend systems and third-party integrations.
          </p>
          <p className="experience-line"><strong>{profile.yearsEngineering} years engineering</strong><span>·</span><strong>{profile.yearsFintech} years fintech</strong><span>·</span> Web · Mobile · APIs</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View my work <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="#about">About me</a>
          </div>
        </div>
        <p className="scroll-note" aria-hidden="true">Scroll to explore <span>↓</span></p>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <p className="section-label">Featured products</p>
          <div>
            <h2>Products, not<br />just projects.</h2>
            <p>Selected work across personal products, SaaS, marketplaces and mobile applications.</p>
          </div>
        </div>
        <div className="project-list">
          {projects.filter((project) => project.featured).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="fintech-band" aria-labelledby="fintech-title">
        <div className="shell fintech-layout">
          <div className="fintech-stat"><strong>4+</strong><span>years building<br />in fintech</span></div>
          <div className="fintech-copy">
            <p className="section-label">Industry experience</p>
            <h2 id="fintech-title">Financial products demand more from engineering.</h2>
            <p>For more than four years, I’ve worked on digital banking and payment products where reliability, transaction accuracy and system integration are fundamental product requirements.</p>
            <div className="company-proof"><span>Sterling Bank</span><span>Digital banking · Financial products</span></div>
          </div>
        </div>
        <div className="capability-marquee" aria-label="Fintech capabilities">
          <div>Digital banking <span>◆</span> Payments <span>◆</span> Financial APIs <span>◆</span> Transaction workflows <span>◆</span> Production reliability</div>
        </div>
      </section>

      <section className="section shell" id="approach">
        <div className="section-heading compact-heading">
          <p className="section-label">Product process</p>
          <div><h2>From ambiguity<br />to production.</h2></div>
        </div>
        <ol className="process-grid">
          {process.map(([number, title, body]) => (
            <li key={number}>
              <span>{number}</span><h3>{title}</h3><p>{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section shell" id="experience">
        <div className="section-heading compact-heading">
          <p className="section-label">Professional experience</p>
          <div><h2>Where I’ve<br />built.</h2></div>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.company}>
              <div><p className="experience-date">{item.dates}</p><p className="experience-industry">{item.industry}</p></div>
              <div><h3>{item.company}</h3><p className="experience-role">{item.role}</p><p>{item.description}</p></div>
              <ul>{item.focus.map((focus) => <li key={focus}>{focus}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="toolkit-section">
        <div className="shell">
          <div className="section-heading compact-heading">
            <p className="section-label">Technical capabilities</p>
            <div><h2>Tools follow<br />the problem.</h2><p>Technology supports the product story. It doesn’t replace it.</p></div>
          </div>
          <div className="toolkit-grid">
            {toolkit.map((group) => (
              <div key={group.title}><h3>{group.title}</h3><p>{group.items.join(" · ")}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell about-section" id="about">
        <div className="about-image-wrap">
          <img src="/images/profile/collins-wilson.jpg" alt="Collins Wilson" loading="lazy" />
        </div>
        <div className="about-copy">
          <p className="section-label">About me</p>
          <h2>Building beyond<br />the interface.</h2>
          <p>I’m a Product Engineer with more than six years of experience turning product and business requirements into software people can actually use.</p>
          <p>My foundation is deeply rooted in frontend development, but my work increasingly extends across the entire product lifecycle — from shaping requirements and designing application architecture to building interfaces, APIs, integrations and production systems.</p>
          <p>I think beyond the ticket: why we’re building something, how it fits into the wider product, which trade-offs we’re making and how it evolves after release.</p>
          <a className="text-link" href={profile.cvUrl} target="_blank" rel="noreferrer">Download my CV <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-layout">
          <div className="contact-intro">
            <p className="section-label">Contact</p>
            <h2>Have a product<br /><em>worth building?</em></h2>
            <p>If you’re working through a product idea, a difficult engineering problem or the next stage of an existing platform, let’s talk.</p>
          </div>
          <div className="contact-card">
            <p>Start a conversation</p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              <span>Email me</span>
              <strong>{profile.email}</strong>
              <span aria-hidden="true">↗</span>
            </a>
            <div className="contact-links">
              <a href={profile.socials.linkedIn} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={profile.socials.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
