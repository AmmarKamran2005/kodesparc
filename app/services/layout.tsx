import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Services — Web, Mobile, API, Cloud & SaaS Development',
  description:
    'Kodesparc services: custom web app development, cross-platform mobile apps, REST and GraphQL APIs, cloud integrations (AWS, Azure), dashboards, and full SaaS platform engineering.',
  keywords: [
    'web development services',
    'mobile app development services',
    'API development',
    'SaaS platform development',
    'cloud integration services',
    'Next.js development',
    'React development',
    'Flutter development',
    'ASP.NET development',
    'dashboard development',
  ],
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Kodesparc Services — Web, Mobile, API, Cloud & SaaS',
    description:
      'End-to-end software engineering: web, mobile, APIs, cloud, and SaaS platforms delivered by Kodesparc.',
    url: '/services',
    type: 'website',
    images: [{ url: '/Ksparc_logo.png', width: 1200, height: 630, alt: 'Kodesparc Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kodesparc Services — Web, Mobile, API, Cloud & SaaS',
    description:
      'End-to-end software engineering: web, mobile, APIs, cloud, and SaaS platforms by Kodesparc.',
    images: ['/Ksparc_logo.png'],
  },
}

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Kodesparc Services',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'Web Development',
      description:
        'Modern, high-performance web apps built with Next.js, React, and ASP.NET for scale and speed.',
      provider: { '@type': 'Organization', name: 'Kodesparc', url: 'https://kodesparc.com' },
      areaServed: 'Global',
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'Mobile App Development',
      description:
        'Cross-platform mobile apps using Flutter with native performance on iOS and Android.',
      provider: { '@type': 'Organization', name: 'Kodesparc', url: 'https://kodesparc.com' },
      areaServed: 'Global',
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'API & SaaS Development',
      description:
        'Robust REST/GraphQL APIs, authentication, databases, and subscription billing for SaaS platforms.',
      provider: { '@type': 'Organization', name: 'Kodesparc', url: 'https://kodesparc.com' },
      areaServed: 'Global',
    },
    {
      '@type': 'Service',
      position: 4,
      name: 'Cloud Integration',
      description:
        'AWS and Azure cloud architecture, CI/CD pipelines, and scalable infrastructure.',
      provider: { '@type': 'Organization', name: 'Kodesparc', url: 'https://kodesparc.com' },
      areaServed: 'Global',
    },
  ],
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="ld-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {children}
    </>
  )
}
