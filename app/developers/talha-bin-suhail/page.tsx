import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SkillBadge } from '@/components/skill-badge'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Talha Bin Suhail - Full Stack Developer | Kodesparc',
  description:
    'Full-stack developer with 4+ years specializing in .NET Core, Next.js, Flutter, and cloud solutions. Backend architecture, mobile development, and API design.',
}

export default function TalhaDeveloperPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-16 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary to-accent/50 flex items-center justify-center text-white text-4xl font-bold neon-glow">
                TB
              </div>

              {/* Info */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                  Talha Bin Suhail
                </h1>
                <p className="text-xl text-foreground/70 mb-4">
                  Full-Stack Developer & Backend Architect
                </p>
                <span className="inline-block px-4 py-2 rounded-lg bg-accent/20 text-accent border border-accent/50 font-semibold">
                  4+ Years Experience
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">About</h2>
            <div className="glass-card p-8 rounded-xl border border-white/20">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Talha is a passionate full-stack developer turning complex problems into elegant, scalable
                solutions. With 4+ years of professional experience, he specializes in building robust backend systems
                using modern technologies and creating seamless cross-platform applications.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                His expertise spans from enterprise-grade backend architecture with .NET Core and Node.js to modern
                frontend development with Next.js and TypeScript. Talha has deep knowledge of database design,
                authentication systems, and cloud integration.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Beyond web development, Talha excels in cross-platform mobile development with Flutter + Dart,
                enabling fast delivery of iOS and Android applications with a single codebase.
              </p>
            </div>
          </div>
        </section>

        {/* Backend Stack */}
        <section className="py-16 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Backend & API Development</h2>
            <div className="glass-card p-8 rounded-xl border border-white/20 mb-6">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Talha builds high-performance backend systems with expertise in multiple frameworks and
                architectures. His experience includes designing RESTful and GraphQL APIs, implementing secure
                authentication/authorization mechanisms, and optimizing database performance.
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2">
                <li>ASP.NET & .NET Core MVC - Enterprise applications with EF Core</li>
                <li>Node.js & Express.js - Lightweight, scalable REST APIs</li>
                <li>REST API Design - Versioning, documentation, and best practices</li>
                <li>Authentication & Authorization - JWT, OAuth, session management</li>
                <li>Database Architecture - SQL Server, PostgreSQL, MySQL</li>
                <li>ORMs & Query Builders - Prisma, Drizzle, Entity Framework</li>
                <li>Performance Optimization - Indexing, query optimization, caching</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <SkillBadge label="ASP.NET Core" variant="primary" />
              <SkillBadge label=".NET MVC" variant="primary" />
              <SkillBadge label="Express.js" variant="primary" />
              <SkillBadge label="REST APIs" variant="primary" />
              <SkillBadge label="SQL Server" variant="accent" />
              <SkillBadge label="PostgreSQL" variant="accent" />
              <SkillBadge label="MySQL" variant="accent" />
              <SkillBadge label="Prisma" variant="secondary" />
              <SkillBadge label="Drizzle ORM" variant="secondary" />
              <SkillBadge label="JWT" variant="secondary" />
            </div>
          </div>
        </section>

        {/* Frontend Stack */}
        <section className="py-16 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Frontend Development</h2>
            <div className="glass-card p-8 rounded-xl border border-white/20 mb-6">
              <p className="text-foreground/80 leading-relaxed mb-4">
                On the frontend, Talha builds modern, responsive user interfaces with Next.js and React. He excels
                at state management, server-side rendering, and creating performant web applications that deliver
                excellent user experiences.
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2">
                <li>Next.js - Full-stack React with App Router & server components</li>
                <li>React - Modern hooks, component patterns, state management</li>
                <li>TypeScript - Strong typing for scalable codebases</li>
                <li>HTML & CSS - Semantic markup and advanced styling techniques</li>
                <li>Tailwind CSS - Utility-first responsive design</li>
                <li>UI Libraries - shadcn/ui, Radix UI component systems</li>
                <li>State Management - Context, Redux, Zustand patterns</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <SkillBadge label="Next.js" variant="primary" />
              <SkillBadge label="React" variant="primary" />
              <SkillBadge label="TypeScript" variant="primary" />
              <SkillBadge label="Tailwind CSS" variant="accent" />
              <SkillBadge label="App Router" variant="accent" />
              <SkillBadge label="SSR" variant="accent" />
              <SkillBadge label="shadcn/ui" variant="secondary" />
              <SkillBadge label="CSS" variant="secondary" />
              <SkillBadge label="Responsive Design" variant="secondary" />
            </div>
          </div>
        </section>

        {/* Mobile Development */}
        <section className="py-16 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Cross-Platform Mobile Development</h2>
            <div className="glass-card p-8 rounded-xl border border-white/20 mb-6">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Talha specializes in Flutter + Dart for building beautiful, high-performance mobile applications
                for both iOS and Android from a single codebase. He integrates Firebase for authentication, real-time
                data, and cloud messaging.
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2">
                <li>Flutter & Dart - Cross-platform native performance apps</li>
                <li>Firebase Integration - Auth, Firestore, real-time sync, cloud messaging</li>
                <li>Native Features - Device sensors, notifications, local storage</li>
                <li>Performance - App optimization, battery efficiency, memory management</li>
                <li>UI/UX Patterns - Material Design, iOS design guidelines</li>
                <li>State Management - Provider, Riverpod, GetX patterns</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <SkillBadge label="Flutter" variant="primary" />
              <SkillBadge label="Dart" variant="primary" />
              <SkillBadge label="Firebase" variant="accent" />
              <SkillBadge label="Firestore" variant="accent" />
              <SkillBadge label="Cloud Messaging" variant="accent" />
              <SkillBadge label="Provider" variant="secondary" />
              <SkillBadge label="iOS & Android" variant="secondary" />
            </div>
          </div>
        </section>

        {/* Tools & Integrations */}
        <section className="py-16 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Tools & Integrations</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-xl border border-white/20">
                <h3 className="font-semibold text-foreground mb-4">Payment & Communication</h3>
                <div className="space-y-2">
                  <SkillBadge label="Stripe" variant="primary" />
                  <SkillBadge label="Twilio" variant="primary" />
                  <SkillBadge label="Mailgun" variant="primary" />
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl border border-white/20">
                <h3 className="font-semibold text-foreground mb-4">Development Tools</h3>
                <div className="space-y-2">
                  <SkillBadge label="Git & GitHub" variant="accent" />
                  <SkillBadge label="VS Code" variant="accent" />
                  <SkillBadge label="Docker" variant="accent" />
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl border border-white/20">
                <h3 className="font-semibold text-foreground mb-4">Deployment & CI/CD</h3>
                <div className="space-y-2">
                  <SkillBadge label="Vercel" variant="secondary" />
                  <SkillBadge label="GitHub Actions" variant="secondary" />
                  <SkillBadge label="Azure Pipelines" variant="secondary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Strengths */}
        <section className="py-16 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Core Strengths</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl border border-white/20">
                <h3 className="font-semibold text-primary mb-3">Architecture & Design</h3>
                <p className="text-foreground/70 text-sm">
                  Designs scalable, maintainable system architectures following SOLID principles and modern design
                  patterns. Expertise in database schema design and relational integrity.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl border border-white/20">
                <h3 className="font-semibold text-primary mb-3">Problem Solving</h3>
                <p className="text-foreground/70 text-sm">
                  Transforms complex requirements into elegant solutions. Strong debugging and optimization skills
                  for tackling performance challenges.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl border border-white/20">
                <h3 className="font-semibold text-primary mb-3">Full Stack Capability</h3>
                <p className="text-foreground/70 text-sm">
                  Competent across entire development stack from cloud infrastructure to mobile UI, enabling
                  efficient project delivery and cross-functional collaboration.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl border border-white/20">
                <h3 className="font-semibold text-primary mb-3">Security & Performance</h3>
                <p className="text-foreground/70 text-sm">
                  Deep knowledge of secure coding practices, authentication systems, and performance optimization
                  techniques for production applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to work together?</h2>
            <p className="text-foreground/70 mb-8">
              Let's discuss how Talha can help bring your project to life.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
