import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SkillBadge } from '@/components/skill-badge'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Ammar Kamran - Cloud Architect & Full Stack Developer | Kodesparc',
  description:
    'Cloud architect and full-stack developer with 4+ years in AWS, Azure, Next.js, React, and SaaS platforms. Certified AWS Solution Architect. Expert in CI/CD pipelines and scalable infrastructure.',
}

export default function AmmarDeveloperPage() {
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
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-accent to-primary/50 flex items-center justify-center text-white text-4xl font-bold neon-glow">
                AK
              </div>

              {/* Info */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                  Ammar Kamran
                </h1>
                <p className="text-xl text-foreground/70 mb-4">
                  Cloud Architect & Full-Stack Developer
                </p>
                <div className="flex gap-3">
                  <span className="inline-block px-4 py-2 rounded-lg bg-accent/20 text-accent border border-accent/50 font-semibold">
                    4+ Years Experience
                  </span>
                  <span className="inline-block px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/50 font-semibold">
                    AWS Certified
                  </span>
                </div>
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
                Ammar is a cloud architect and full-stack developer with deep expertise in building scalable,
                production-grade applications. With 4+ years of experience and AWS Solution Architect certification,
                he specializes in designing cloud infrastructure, implementing CI/CD pipelines, and leading SaaS
                platform development.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                His expertise spans multiple cloud platforms (AWS, Azure, Google Cloud) and modern web technologies.
                Ammar is passionate about building robust backend systems, optimizing cloud deployments, and creating
                seamless frontend experiences with React and Next.js.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Beyond traditional web development, Ammar has experience integrating game development (Unity) with
                web technologies and leading enterprise-scale digital transformations.
              </p>
            </div>
          </div>
        </section>

        {/* Cloud & Infrastructure */}
        <section className="py-16 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Cloud Architecture & Infrastructure</h2>
            <div className="glass-card p-8 rounded-xl border border-white/20 mb-6">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Ammar designs and deploys enterprise-grade cloud infrastructure. With AWS Solution Architect
                certification, he expertly designs systems leveraging EC2, RDS, Lambda, S3, CloudFront, and other AWS
                services. His expertise extends to multi-cloud environments with Azure and Google Cloud Platform.
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2">
                <li>AWS - EC2, RDS, Lambda, S3, CloudFront, VPC, IAM, Route53</li>
                <li>Azure - App Services, SQL Database, Azure DevOps, Azure Functions</li>
                <li>Google Cloud - Compute Engine, Cloud SQL, Cloud Storage, Cloud CDN</li>
                <li>Infrastructure as Code - Terraform, CloudFormation for reproducible deployments</li>
                <li>Containerization - Docker for consistent development and production environments</li>
                <li>Orchestration - Kubernetes basics and container scaling strategies</li>
                <li>Security & Compliance - SSL/TLS, DDoS protection, data encryption, regulatory compliance</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <SkillBadge label="AWS" variant="primary" />
              <SkillBadge label="Azure" variant="primary" />
              <SkillBadge label="Google Cloud" variant="primary" />
              <SkillBadge label="AWS Solution Architect" variant="primary" />
              <SkillBadge label="Lambda" variant="accent" />
              <SkillBadge label="RDS" variant="accent" />
              <SkillBadge label="S3" variant="accent" />
              <SkillBadge label="Terraform" variant="secondary" />
              <SkillBadge label="Docker" variant="secondary" />
            </div>
          </div>
        </section>

        {/* Backend Stack */}
        <section className="py-16 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Backend & API Development</h2>
            <div className="glass-card p-8 rounded-xl border border-white/20 mb-6">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Ammar builds scalable backend systems and APIs using modern Node.js frameworks and cloud-native
                approaches. He specializes in designing RESTful and GraphQL APIs, implementing authentication/
                authorization, and optimizing database performance for high-traffic applications.
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2">
                <li>Node.js & Express.js - Fast, scalable API servers</li>
                <li>REST API Design - Versioning, rate limiting, pagination</li>
                <li>GraphQL - Query language for flexible API interactions</li>
                <li>Authentication & Authorization - JWT, OAuth2, session management</li>
                <li>NoSQL Databases - MongoDB, DynamoDB for flexible schemas</li>
                <li>SQL Databases - PostgreSQL, MySQL for structured data</li>
                <li>Caching Strategies - Redis, CDN caching for performance</li>
                <li>Microservices - Distributed systems architecture and messaging</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <SkillBadge label="Node.js" variant="primary" />
              <SkillBadge label="Express.js" variant="primary" />
              <SkillBadge label="REST APIs" variant="accent" />
              <SkillBadge label="GraphQL" variant="accent" />
              <SkillBadge label="MongoDB" variant="accent" />
              <SkillBadge label="DynamoDB" variant="accent" />
              <SkillBadge label="PostgreSQL" variant="secondary" />
              <SkillBadge label="Redis" variant="secondary" />
              <SkillBadge label="Microservices" variant="secondary" />
            </div>
          </div>
        </section>

        {/* Frontend Stack */}
        <section className="py-16 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Frontend Development</h2>
            <div className="glass-card p-8 rounded-xl border border-white/20 mb-6">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Ammar is skilled in modern frontend technologies, with expertise in Next.js and React for building
                responsive, performant web applications. He understands SSR, static generation, and client-side
                rendering patterns for optimal performance.
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2">
                <li>Next.js - Full-stack React with server components and API routes</li>
                <li>React - Hooks, component composition, advanced state management</li>
                <li>TypeScript - Strong typing for scalable frontend codebases</li>
                <li>Tailwind CSS - Utility-first responsive design system</li>
                <li>Component Libraries - shadcn/ui, Radix UI for accessible components</li>
                <li>Performance Optimization - Code splitting, lazy loading, image optimization</li>
                <li>Testing - Unit and integration testing for frontend reliability</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <SkillBadge label="Next.js" variant="primary" />
              <SkillBadge label="React" variant="primary" />
              <SkillBadge label="TypeScript" variant="primary" />
              <SkillBadge label="Tailwind CSS" variant="accent" />
              <SkillBadge label="App Router" variant="accent" />
              <SkillBadge label="shadcn/ui" variant="secondary" />
              <SkillBadge label="CSS" variant="secondary" />
            </div>
          </div>
        </section>

        {/* CI/CD & DevOps */}
        <section className="py-16 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">CI/CD & DevOps</h2>
            <div className="glass-card p-8 rounded-xl border border-white/20 mb-6">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Ammar designs and implements robust CI/CD pipelines enabling fast, reliable deployments. He automates
                testing, builds, and deployment processes to reduce manual errors and accelerate time-to-market.
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2">
                <li>GitHub Actions - Automated workflows for testing and deployment</li>
                <li>Azure Pipelines - Enterprise CI/CD for complex deployments</li>
                <li>Jenkins - Advanced pipeline orchestration and automation</li>
                <li>Docker - Containerization for consistency across environments</li>
                <li>Monitoring & Logging - CloudWatch, ELK stack for observability</li>
                <li>Deployment Strategies - Blue-green, canary, rolling deployments</li>
                <li>Infrastructure Automation - Automated scaling, load balancing</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <SkillBadge label="GitHub Actions" variant="primary" />
              <SkillBadge label="Azure Pipelines" variant="primary" />
              <SkillBadge label="Jenkins" variant="accent" />
              <SkillBadge label="Docker" variant="accent" />
              <SkillBadge label="Kubernetes" variant="accent" />
              <SkillBadge label="CloudWatch" variant="secondary" />
              <SkillBadge label="Monitoring" variant="secondary" />
            </div>
          </div>
        </section>

        {/* Game & Unity Integration */}
        <section className="py-16 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Game Development & Unity Integration</h2>
            <div className="glass-card p-8 rounded-xl border border-white/20 mb-6">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Ammar has experience integrating Unity game development with web backends, enabling seamless
                connections between game clients and web services for multiplayer, leaderboards, and data
                persistence.
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2">
                <li>Unity Integration - Connecting games to web APIs and backends</li>
                <li>Real-time Sync - Player data, game state, and multiplayer synchronization</li>
                <li>Backend Services - User authentication, leaderboards, matchmaking</li>
                <li>Analytics - Game telemetry and player behavior tracking</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <SkillBadge label="Unity" variant="primary" />
              <SkillBadge label="C#" variant="accent" />
              <SkillBadge label="Game APIs" variant="secondary" />
              <SkillBadge label="Multiplayer" variant="secondary" />
            </div>
          </div>
        </section>

        {/* SaaS Expertise */}
        <section className="py-16 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">SaaS Platform Development</h2>
            <div className="glass-card p-8 rounded-xl border border-white/20 mb-6">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Ammar specializes in building scalable SaaS platforms from inception to production. His expertise
                includes multi-tenancy architecture, subscription management, user authentication, and cloud-based
                deployments.
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2">
                <li>Multi-Tenancy Architecture - Secure isolation and data separation</li>
                <li>Subscription Systems - Stripe integration for billing and payments</li>
                <li>User Management - Authentication, authorization, role-based access</li>
                <li>Analytics Dashboard - Real-time metrics and KPIs</li>
                <li>Scalability - Auto-scaling infrastructure for growing user bases</li>
                <li>Data Security - Encryption, compliance (GDPR, SOC 2)</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <SkillBadge label="Multi-Tenancy" variant="primary" />
              <SkillBadge label="Stripe" variant="accent" />
              <SkillBadge label="Subscriptions" variant="accent" />
              <SkillBadge label="GDPR Compliance" variant="secondary" />
              <SkillBadge label="SOC 2" variant="secondary" />
            </div>
          </div>
        </section>

        {/* Core Strengths */}
        <section className="py-16 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Core Strengths</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl border border-white/20">
                <h3 className="font-semibold text-primary mb-3">Cloud Expertise</h3>
                <p className="text-foreground/70 text-sm">
                  Certified AWS Solution Architect with deep experience designing cost-effective, scalable cloud
                  solutions. Multi-cloud proficiency across AWS, Azure, and GCP.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl border border-white/20">
                <h3 className="font-semibold text-primary mb-3">DevOps & Automation</h3>
                <p className="text-foreground/70 text-sm">
                  Expert in CI/CD pipelines and infrastructure automation. Reduces deployment friction and enables
                  rapid, reliable releases.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl border border-white/20">
                <h3 className="font-semibold text-primary mb-3">Full Stack Mastery</h3>
                <p className="text-foreground/70 text-sm">
                  Competent across entire technology stack from cloud infrastructure to responsive UIs. Able to lead
                  cross-functional teams and bridge frontend/backend collaboration.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl border border-white/20">
                <h3 className="font-semibold text-primary mb-3">Scalability & Performance</h3>
                <p className="text-foreground/70 text-sm">
                  Designs systems built for growth. Expertise in load balancing, caching, database optimization, and
                  monitoring for high-performance applications.
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
              Let's discuss how Ammar can help architect and build your next project.
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
