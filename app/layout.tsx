import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  applicationName: "Collins Wilson Portfolio",
  title: {
    default: profile.seoTitle,
    template: "%s — Collins Wilson",
  },
  description: profile.seoDescription,
  keywords: [
    "Collins Wilson",
    "Product Engineer",
    "Software Engineer",
    "Fullstack Engineer",
    "Mobile Developer",
    "Software Engineer in Nigeria",
    "Software Engineer in Lagos",
    "Product Engineer in Nigeria",
    "Frontend Engineer",
    "React Developer",
    "React Native Developer",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "Technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "16x16 32x32 48x48" },
      { url: "/favicon.png", type: "image/png", sizes: "1024x1024" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/favicon.png", type: "image/png", sizes: "1024x1024" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: profile.siteUrl,
    title: profile.seoTitle,
    description: profile.seoDescription,
    siteName: "Collins Wilson",
    locale: "en_NG",
    images: [{ url: "/og.png", width: 1733, height: 908, alt: "Collins Wilson, Product Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seoTitle,
    description: profile.seoDescription,
    creator: "@cre8ive_collins",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const personId = `${profile.siteUrl}/#person`;
  const websiteId = `${profile.siteUrl}/#website`;
  const profileSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: profile.siteUrl,
        name: "Collins Wilson",
        alternateName: "Collins Wilson Portfolio",
        description: profile.seoDescription,
        inLanguage: "en-NG",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${profile.siteUrl}/#profile-page`,
        url: profile.siteUrl,
        name: profile.seoTitle,
        description: profile.seoDescription,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        url: profile.siteUrl,
        image: `${profile.siteUrl}/images/profile/collins-wilson.jpg`,
        jobTitle: ["Product Engineer", "Software Engineer", "Fullstack Engineer", "Mobile Developer"],
        description: profile.seoDescription,
        homeLocation: {
          "@type": "Place",
          name: `${profile.location.city}, ${profile.location.country}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: profile.location.city,
            addressCountry: "NG",
          },
        },
        knowsAbout: [
          "Product engineering",
          "Software engineering",
          "Frontend development",
          "Full-stack development",
          "Mobile application development",
          "React",
          "React Native",
          "Next.js",
          "Node.js",
          "API design and integration",
          "Fintech",
        ],
        sameAs: [profile.socials.linkedIn, profile.socials.github, profile.socials.twitter],
      },
    ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
