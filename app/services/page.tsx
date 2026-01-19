'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Globe, Smartphone, Zap, Database, Cloud, Box } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web App Development',
    description: 'Build modern, responsive web applications with Next.js, React, and ASP.NET. Fast, scalable, and SEO-optimized.',
    techs: ['Next.js', 'React', 'ASP.NET', 'Node.js'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps with Flutter and Dart. Integrated with Firebase for real-time features.',
    techs: ['Flutter', 'Dart', 'Firebase', 'iOS/Android'],
  },
  {
    icon: Zap,
    title: 'APIs & Backend Engineering',
    description: 'RESTful and GraphQL APIs with robust authentication, databases, and cloud integration.',
    techs: ['Node.js', 'Python', '.NET', 'PostgreSQL'],
  },
  {
    icon: Database,
    title: 'SaaS Platforms',
    description: 'Complete SaaS solutions with subscription systems, user management, and analytics dashboards.',
    techs: ['Stripe', 'PostgreSQL', 'Prisma', 'Authentication'],
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Stripe, Twilio, Mailgun, and Firebase integrations. Seamless third-party service integration.',
    techs: ['Stripe', 'Twilio', 'Mailgun', 'Firebase'],
  },
  {
    icon: Box,
    title: 'Cloud Deployment',
    description: 'Deployment pipelines with Docker, Kubernetes, CI/CD, and Linux server management.',
    techs: ['Docker', 'Kubernetes', 'CI/CD', 'Linux'],
  },
]

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Services Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Comprehensive software development services to bring your ideas to life
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group glass-card p-8 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                      <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.techs.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-white/10 text-primary border border-primary/30 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Neon Border Glow on Hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-20 text-center">
              <div className="glass-card p-12 rounded-xl max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Ready to start your project?
                </h2>
                <p className="text-foreground/70 mb-8">
                  Let's discuss how we can help transform your ideas into high-performance digital products.
                </p>
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
