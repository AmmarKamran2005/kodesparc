import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Projects & Case Studies — Kodesparc Portfolio',
  description:
    'Explore Kodesparc’s portfolio: Medocs.ai clinical documentation, Rehabdox rehabilitation management, Hotelire booking platform, and more web, mobile, and SaaS case studies.',
  keywords: [
    'Kodesparc portfolio',
    'software development case studies',
    'SaaS projects',
    'Medocs.ai',
    'Rehabdox',
    'Hotelire',
    'Next.js projects',
    'Flutter projects',
    'ASP.NET projects',
  ],
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Kodesparc Projects — Portfolio & Case Studies',
    description:
      'Real-world web, mobile, and SaaS projects built by Kodesparc — from healthcare AI to hotel booking platforms.',
    url: '/projects',
    type: 'website',
    images: [{ url: '/Ksparc_logo.png', width: 1200, height: 630, alt: 'Kodesparc Projects' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kodesparc Projects — Portfolio & Case Studies',
    description:
      'Web, mobile, and SaaS projects delivered by Kodesparc.',
    images: ['/Ksparc_logo.png'],
  },
}

const projectsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Kodesparc Projects',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'CreativeWork',
        name: 'Medocs.ai',
        description:
          'AI-powered medical documentation platform streamlining clinical workflows and automating patient record generation.',
        url: 'https://medocs.ai',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'CreativeWork',
        name: 'Rehabdox',
        description:
          'Rehabilitation management platform for clinics and therapists to manage treatment plans and progress tracking.',
        url: 'https://rehabdox.com',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'CreativeWork',
        name: 'Hotelire',
        description:
          'Hotel booking platform with owner and admin dashboards and real-time analytics.',
        url: 'https://hotelire.ca',
      },
    },
  ],
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="ld-projects"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      {children}
    </>
  )
}
