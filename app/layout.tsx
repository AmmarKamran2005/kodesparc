import React from "react"
import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const SITE_URL = 'https://kodesparc.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Kodesparc — Premium Software Development Agency | Web, Mobile & SaaS',
    template: '%s | Kodesparc',
  },
  description:
    'Kodesparc is a premium software development agency building high-performance web apps, mobile apps, APIs, SaaS platforms, dashboards, and cloud integrations with Next.js, React, Flutter, and .NET.',
  applicationName: 'Kodesparc',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Kodesparc',
    'software development agency',
    'web development',
    'mobile app development',
    'SaaS development',
    'Next.js agency',
    'React development',
    'Flutter development',
    'ASP.NET development',
    '.NET Core development',
    'API development',
    'cloud integration',
    'AWS',
    'Azure',
    'custom software',
    'full-stack development',
    'hire developers',
  ],
  authors: [{ name: 'Kodesparc', url: SITE_URL }],
  creator: 'Kodesparc',
  publisher: 'Kodesparc',
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      { url: '/icon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Kodesparc',
    title: 'Kodesparc — Premium Software Development Agency',
    description:
      'Igniting ideas into digital reality. Modern web, mobile, API, and SaaS development built with Next.js, React, Flutter, and .NET.',
    images: [
      {
        url: '/Ksparc_logo.png',
        width: 1200,
        height: 630,
        alt: 'Kodesparc — Premium Software Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kodesparc — Premium Software Development Agency',
    description:
      'Modern web, mobile, API, and SaaS development. We build high-performance digital products with Next.js, React, Flutter, and .NET.',
    images: ['/Ksparc_logo.png'],
    creator: '@kodesparc',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kodesparc',
  url: SITE_URL,
  logo: `${SITE_URL}/Ksparc_logo.png`,
  description:
    'Premium software development agency building modern web apps, mobile apps, APIs, dashboards, cloud integrations, and SaaS platforms.',
  sameAs: [
    'https://github.com/kodesparc',
    'https://www.linkedin.com/company/kodesparc',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kodesparc',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  )
}
