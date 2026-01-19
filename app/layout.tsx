import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Kodesparc - Igniting Ideas Into Digital Reality',
  description: 'Kodesparc builds modern web apps, mobile apps, APIs, dashboards, cloud integrations, and SaaS platforms. Premium software development agency.',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: '/icon.ico',
    apple: '/apple-icon.png',
  },
  keywords: 'web development, mobile apps, API development, SaaS, cloud integration, Next.js, React, Flutter, .net, asp.net',
  authors: [{ name: 'Kodesparc' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kodesparc.com',
    title: 'Kodesparc - Premium Software Development',
    description: 'Igniting ideas into digital reality with modern web, mobile, and cloud solutions',
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
        <Analytics />
      </body>
    </html>
  )
}
