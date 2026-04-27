import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Contact Kodesparc — Hire a Premium Software Development Team',
  description:
    'Ready to ignite your idea? Contact Kodesparc for web, mobile, API, and SaaS development. Get a free project consultation and detailed estimate from our engineering team.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Kodesparc — Start Your Project',
    description:
      'Contact our team for a free consultation. Web, mobile, API, and SaaS development by Kodesparc.',
    url: '/contact',
    type: 'website',
    images: [{ url: '/Ksparc_logo.png', width: 1200, height: 630, alt: 'Contact Kodesparc' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Kodesparc — Start Your Project',
    description:
      'Free consultation for web, mobile, API, and SaaS projects. Talk to Kodesparc today.',
    images: ['/Ksparc_logo.png'],
  },
}

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Kodesparc',
  url: 'https://kodesparc.com/contact',
  about: {
    '@type': 'Organization',
    name: 'Kodesparc',
    url: 'https://kodesparc.com',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['English'],
      areaServed: 'Global',
    },
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="ld-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  )
}
