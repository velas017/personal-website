import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.role}`,
    description: site.tagline,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.tagline,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0a0d13",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.employer.title,
  worksFor: {
    "@type": "Organization",
    name: site.employer.company,
    url: site.employer.url,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.locality,
    addressRegion: site.region,
    addressCountry: "US",
  },
  sameAs: [site.links.linkedin, site.links.github],
  knowsAbout: ["Java", "TypeScript", "React", "Next.js", "PostgreSQL", "Software testing"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} dark h-full scroll-pt-20 antialiased`}
    >
      <body className="scanlines flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-amber focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
