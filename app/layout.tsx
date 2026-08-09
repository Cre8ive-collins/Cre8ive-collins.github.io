import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: "Collins Wilson — Product Engineer",
    template: "%s — Collins Wilson",
  },
  description:
    "Product Engineer with 6+ years of experience building web, mobile and API-driven products, including 4+ years in fintech and digital banking.",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "1024x1024" }],
    apple: [{ url: "/favicon.png", type: "image/png", sizes: "1024x1024" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: profile.siteUrl,
    title: "Collins Wilson — Product Engineer",
    description:
      "I build digital products from idea to production — across web, mobile, APIs and supporting systems.",
    siteName: "Collins Wilson",
    images: [{ url: "/og.png", width: 1733, height: 908, alt: "Collins Wilson, Product Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Collins Wilson — Product Engineer",
    description: "6+ years engineering · 4+ years fintech · Web · Mobile · APIs",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: profile.siteUrl,
    sameAs: [profile.socials.linkedIn, profile.socials.github, profile.socials.twitter],
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navigation />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
