'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { MiniServiceCard } from '@/components/mini-service-card'
import { MiniProjectCard } from '@/components/mini-project-card'
import { SectionHeader } from '@/components/section-header'
import { ArrowRight, Code, Zap, Globe, Smartphone, Database, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { DeveloperCard } from '@/components/developer-card'

export default function Home() {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      id: i,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient Orb 1 */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
            {/* Gradient Orb 2 */}
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-30 animate-pulse" />
            
            {/* Particles */}
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 bg-primary rounded-full opacity-50"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  animation: `float ${8 + particle.id}s infinite ease-in-out`,
                  animationDelay: `${particle.id * 0.2}s`,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center mb-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <Zap size={16} className="text-accent" />
              <span className="text-sm font-medium text-foreground/80">
                Spark of Innovation
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Igniting Ideas</span>
              <br />
              <span className="text-foreground">Into Digital Reality</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Kodesparc builds modern Web Apps, Mobile Apps, APIs, Dashboards, Cloud Integrations, and SaaS Platforms that transform your vision into high-performance digital products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/projects"
                className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-lg border-2 border-primary/50 text-foreground font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                Hire Kodesparc
              </Link>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                {
                  icon: Code,
                  title: 'Full Stack',
                  description: 'Next.js, React, Node.js',
                },
                {
                  icon: Zap,
                  title: 'High Performance',
                  description: 'Optimized for speed',
                },
                {
                  icon: ArrowRight,
                  title: 'Scalable',
                  description: 'Grows with your business',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-foreground/50">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* About Overview Section */}
        <section className="py-20 px-4 border-t border-white/10 ">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              {/* Icon */}
              <div className="md:col-span-1 flex justify-center">
                <div className="w-20 h-20 rounded-xl glass-card flex items-center justify-center border border-white/20 neon-glow">
                  <Sparkles className="w-10 h-10 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                  About Kodesparc
                </h2>
                <p className="text-foreground/70 text-sm md:text-base leading-relaxed mb-6">
                  Kodesparc is a modern software development agency specializing in innovative web and mobile solutions, SaaS platforms, and cloud-integrated applications. We focus on delivering high-quality, performance-driven digital products that drive business growth and user satisfaction.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/20 text-primary font-medium border border-primary/50 hover:bg-primary/30 transition-all duration-300 group"
                >
                  Learn More
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Featured Services"
              subtitle="Explore our core expertise across web development, mobile apps, and cloud solutions"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <MiniServiceCard
                icon={Globe}
                title="Web Development"
                description="Modern web apps with Next.js, React, and ASP.NET built for scale and performance."
              />
              <MiniServiceCard
                icon={Smartphone}
                title="Mobile Apps"
                description="Cross-platform solutions using Flutter. Seamless performance on iOS and Android."
              />
              <MiniServiceCard
                icon={Database}
                title="APIs & SaaS"
                description="Robust backend systems with authentication, databases, and subscription management."
              />
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-foreground font-semibold hover:bg-primary/10 transition-all duration-300 group"
              >
                View All Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Overview Section */}
        <section className="py-20 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Featured Projects"
              subtitle="Showcase of recent work and successful client deliverables"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <MiniProjectCard
                name="Hotelire"
                description="Full hotel booking system with owner and admin dashboards. Complete property management solution with real-time analytics."
                techs={['Next.js', 'Stripe', 'Twilio', 'Firebase']}
                links={{
                  live: 'https://hotelire.ca',
                }}
              />
              <MiniProjectCard
                name="Flutter BookShop"
                description="Cross-platform mobile application for book management and discovery. Built with Flutter and Firebase."
                techs={['Flutter', 'Dart', 'Firebase']}
                links={{
                  github: 'https://github.com',
                }}
              />
              <MiniProjectCard
                name="Hotelire Owner Dashboard"
                description="Property management and analytics platform for hotel owners. Track bookings and revenue in real-time."
                techs={['Next.js', 'PostgreSQL', 'Prisma']}
                links={{
                  live: 'https://hotelire.ca/owner',
                }}
              />
              <MiniProjectCard
                name="Devtrios"
                description="Professional agency website showcasing portfolio and services with premium design and smooth animations."
                techs={['Next.js', 'React', 'Tailwind CSS']}
                links={{
                  live: 'https://devtrios.com',
                }}
              />
            </div>

            <div className="text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-foreground font-semibold hover:bg-primary/10 transition-all duration-300 group"
              >
                View All Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>
                {/* Developers Section */}
        <section className="py-20 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Meet Our Team"
              subtitle="Talented developers crafting innovative solutions with deep technical expertise"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <DeveloperCard
                name="Talha Bin Suhail"
                avatar="TB"
                experience="5+ Years Experience"
                skills={['ASP.NET', '.NET Core', 'Next.js', 'Flutter', 'PostgreSQL']}
                highlight="Full-stack developer specializing in backend systems, cross-platform mobile apps, and cloud integration with modern cloud solutions."
                profileUrl="/developers/talha-bin-suhail"
              />
              <DeveloperCard
                name="Ammar Kamran"
                avatar="AK"
                experience="4+ Years Experience"
                skills={['AWS', 'Azure', 'Next.js', 'React', 'MongoDB']}
                highlight="Cloud architect and full-stack engineer with deep AWS expertise, specializing in scalable SaaS platforms and CI/CD pipelines."
                profileUrl="/developers/ammar-kamran"
              />
            </div>

            {/* <div className="text-center">
              <Link
                href="/developers"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-foreground font-semibold hover:bg-primary/10 transition-all duration-300 group"
              >
                View All Team Members
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div> */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
