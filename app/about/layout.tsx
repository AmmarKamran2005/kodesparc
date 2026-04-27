import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'About Kodesparc — Modern Software Development Agency',
  description:
    'Learn about Kodesparc — a software development agency igniting ideas into digital reality. Meet our team, values, and the engineering philosophy behind our web, mobile, and SaaS work.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Kodesparc — Modern Software Development Agency',
    description:
      'Meet Kodesparc: the engineers, the values, and the craftsmanship behind premium web, mobile, and SaaS development.',
    url: '/about',
    type: 'website',
    images: [{ url: '/Ksparc_logo.png', width: 1200, height: 630, alt: 'About Kodesparc' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Kodesparc — Modern Software Development Agency',
    description:
      'The engineers, values, and craftsmanship behind premium web, mobile, and SaaS development.',
    images: ['/Ksparc_logo.png'],
  },
}

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Kodesparc',
  url: 'https://kodesparc.com/about',
  mainEntity: {
    '@type': 'Organization',
    name: 'Kodesparc',
    url: 'https://kodesparc.com',
    description:
      'Kodesparc is a modern software development agency specializing in web, mobile, SaaS, and cloud-integrated applications.',
    foundingDate: '2023',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="ld-about"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {children}
    </>
  )
}
