export type ProjectStatus = "live" | "historical" | "development";

export type ProjectSection = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  shortDescription: string;
  role: string;
  status: ProjectStatus;
  statusLabel: string;
  categories: string[];
  featured: boolean;
  builtSolo?: boolean;
  externalUrl?: string;
  externalLabel?: string;
  technologies: string[];
  capabilities: string[];
  heroImage?: string;
  imageAlt?: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "fundziq",
    name: "FundzIQ",
    eyebrow: "Money planner · iOS + Android",
    shortDescription:
      "A personal money-planning app that helps people organise recurring financial commitments and understand their monthly spending.",
    role: "Creator / Product Engineer",
    status: "live",
    statusLabel: "Available on iOS & Android",
    categories: ["Fintech", "Mobile"],
    featured: true,
    builtSolo: true,
    technologies: ["React Native", "Expo", "TypeScript", "SQLite"],
    capabilities: [
      "Product definition",
      "UX decisions",
      "Mobile architecture",
      "Recurring financial logic",
      "Local persistence",
      "App Store release",
    ],
    sections: [
      {
        title: "Overview",
        body: "FundzIQ is a focused money-planning product for recurring commitments. It gives people a clearer view of what their month already contains before they make their next spending decision.",
      },
      {
        title: "The problem",
        body: "Recurring expenses are easy to remember individually and difficult to understand collectively. The product turns those commitments into a practical monthly picture without asking users to connect a bank account.",
      },
      {
        title: "My role",
        body: "I own the complete product journey: defining the problem, shaping the experience, making the architecture decisions, building the mobile application, preparing its privacy requirements and taking it through production release on iOS and Android.",
      },
      {
        title: "Engineering decisions",
        body: "The app uses a local-first data model and recurring-date logic designed for a fast, private experience. React Native and Expo provide the delivery foundation while SQLite keeps user data available on-device.",
      },
      {
        title: "Outcome",
        body: "FundzIQ shipped as a production mobile product on iOS and Android and remains the clearest demonstration of my ability to take an idea through product decisions, engineering and release.",
      },
    ],
  },
  {
    slug: "proinvoice",
    name: "ProInvoice",
    eyebrow: "Invoicing · SaaS",
    shortDescription:
      "A professional invoicing product I designed and engineered independently, owning the product experience and technical implementation.",
    role: "Solo Product Engineer",
    status: "live",
    statusLabel: "Live product",
    categories: ["SaaS", "Business tools"],
    featured: true,
    builtSolo: true,
    externalUrl: "https://proinvoice.co/",
    externalLabel: "Visit live product",
    technologies: ["React", "Node.js", "APIs", "Cloud deployment"],
    capabilities: [
      "Product design",
      "Frontend engineering",
      "Application architecture",
      "Backend integration",
      "Deployment",
    ],
    heroImage: "/images/projects/proinvoice.png",
    imageAlt: "ProInvoice application interface",
    sections: [
      {
        title: "Overview",
        body: "ProInvoice helps independent professionals create and send polished invoices through a straightforward web experience.",
      },
      {
        title: "The problem",
        body: "Small businesses need an invoicing workflow that looks credible to customers without adding unnecessary operational complexity.",
      },
      {
        title: "My role",
        body: "I designed and engineered the product independently from end to end. That included shaping the scope, designing the user journey, building the interface and application logic, integrating the supporting systems and deploying the product.",
      },
      {
        title: "Engineering decisions",
        body: "The implementation keeps the core invoicing journey direct: define the customer and line items, produce a clear document, and complete the workflow with minimal friction. Product and engineering decisions were made together rather than handed between separate teams.",
      },
      {
        title: "Outcome",
        body: "The live product demonstrates independent ownership across product definition, interface engineering, backend integration and production delivery.",
      },
    ],
  },
  {
    slug: "kouture-konnect",
    name: "Kouture Konnect",
    eyebrow: "Marketplace · E-commerce",
    shortDescription:
      "A fashion marketplace experience bringing designers, products and customer journeys together in a responsive commerce platform.",
    role: "Product Engineering Contributor",
    status: "live",
    statusLabel: "Live product",
    categories: ["Marketplace", "E-commerce"],
    featured: true,
    externalUrl: "https://staging-v2.kouturekonect.com/",
    externalLabel: "Visit product",
    technologies: ["React", "TypeScript", "REST APIs", "Responsive UI"],
    capabilities: [
      "Marketplace interfaces",
      "Product discovery",
      "Customer workflows",
      "API integration",
      "Responsive architecture",
    ],
    heroImage: "/images/projects/kouture-konnect.png",
    imageAlt: "Kouture Konnect fashion marketplace interface",
    sections: [
      {
        title: "Overview",
        body: "Kouture Konnect is a fashion marketplace designed around discovering designers, fabrics and products through a cohesive commerce experience.",
      },
      {
        title: "The problem",
        body: "Marketplace products have to connect rich browsing experiences with practical customer actions while remaining clear across desktop and mobile devices.",
      },
      {
        title: "My role",
        body: "I contributed product engineering work across the customer-facing application, translating marketplace requirements into reusable interfaces and integrated product flows.",
      },
      {
        title: "Engineering decisions",
        body: "The work centred on responsive application structure, predictable state and API-backed journeys that could support a growing catalogue without sacrificing usability.",
      },
      {
        title: "Outcome",
        body: "The project demonstrates experience contributing to a complex, multi-workflow product rather than an isolated marketing website.",
      },
    ],
  },
  {
    slug: "book-with-fig",
    name: "Book With FIG",
    eyebrow: "Business operations · SaaS",
    shortDescription:
      "A SaaS platform for cleaning businesses that brought operational workflows together across web and mobile.",
    role: "Full Stack Software Developer",
    status: "historical",
    statusLabel: "Historical · Company closed",
    categories: ["SaaS", "Web + Mobile"],
    featured: true,
    technologies: ["React", "Vue", "React Native", "Node.js", "APIs"],
    capabilities: [
      "Web application engineering",
      "Mobile engineering",
      "Operational workflows",
      "Dashboard interfaces",
      "API integrations",
    ],
    heroImage: "/images/projects/book-with-fig.png",
    imageAlt: "Book With FIG business operations dashboard",
    sections: [
      {
        title: "Overview",
        body: "Book With FIG was a SaaS platform for cleaning businesses. During my time there, I worked across web and mobile experiences that supported day-to-day business operations.",
      },
      {
        title: "The problem",
        body: "Service businesses often coordinate bookings, customers and internal operations across disconnected tools. FIG brought those workflows into a single product environment.",
      },
      {
        title: "My role",
        body: "I contributed as a full stack software developer within the product team. My work covered application features, dashboard experiences, mobile delivery and integrations; this was a team product, not a solo build.",
      },
      {
        title: "Engineering decisions",
        body: "Working across React, Vue and React Native required shared product thinking across different delivery surfaces while respecting the constraints of each application.",
      },
      {
        title: "Outcome",
        body: "Although the company is no longer operating, the work remains an important example of professional SaaS engineering across substantial business workflows.",
      },
    ],
  },
  {
    slug: "weblaunchhub",
    name: "WebLaunchHub",
    eyebrow: "Website builder · SaaS",
    shortDescription:
      "A platform I’m building to help small businesses launch professional websites and online stores without managing the underlying technology.",
    role: "Founder / Product Engineer",
    status: "development",
    statusLabel: "In development",
    categories: ["SaaS", "E-commerce"],
    featured: true,
    builtSolo: true,
    technologies: ["React", "TypeScript", "Node.js", "Cloudflare"],
    capabilities: [
      "Product strategy",
      "Platform architecture",
      "Website-builder UX",
      "E-commerce foundations",
      "Deployment systems",
    ],
    sections: [
      {
        title: "Vision",
        body: "WebLaunchHub is being shaped around a simple goal: make a credible web presence easier for small businesses that should not have to become technology experts first.",
      },
      {
        title: "The problem",
        body: "Launching a useful business website still involves too many disconnected decisions around design, content, commerce, payments and deployment.",
      },
      {
        title: "My role",
        body: "As founder and Product Engineer, I am defining the requirements, shaping the experience and building the platform architecture and core product.",
      },
      {
        title: "Current build",
        body: "The product is in active development. Current work focuses on the platform foundation and the workflows required to create, configure and publish a business website.",
      },
      {
        title: "Planned direction",
        body: "The broader direction includes commerce, payments and carefully scoped AI-assisted workflows. These are product plans, not claims about currently shipped functionality.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
