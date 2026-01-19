'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    name: 'Hotelire',
    description: 'Full hotel booking system with owner and admin dashboards. Complete property management solution with real-time analytics.',
    techs: ['Next.js', 'Stripe', 'Twilio', 'Firebase', 'PostgreSQL'],
    links: {
      live: 'https://hotelire.ca',
      github: '#',
    },
    features: ['Booking System', 'Payment Processing', 'SMS Notifications', 'Analytics'],
  },
  {
    name: 'Hotelire Owner Dashboard',
    description: 'Property management and analytics platform for hotel owners. Track bookings, revenue, and guest data in real-time.',
    techs: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    links: {
      live: 'https://hotelire.ca/owner',
      github: '#',
    },
    features: ['Property Management', 'Revenue Analytics', 'Guest Management', 'Booking Calendar'],
  },
  {
    name: 'Hotelire Admin Panel',
    description: 'Comprehensive admin CMS with super admin features. System-wide management and monitoring capabilities.',
    techs: ['Next.js', 'TypeScript', 'PostgreSQL', 'Shadcn/UI'],
    links: {
      live: 'https://hotelire.ca/admin',
      github: '#',
    },
    features: ['CMS System', 'User Management', 'Reporting', 'Moderation'],
  },
  {
    name: 'Flutter BookShop',
    description: 'Cross-platform mobile application for book management and discovery. Built with Flutter and Firebase.',
    techs: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
    links: {
      live: '#',
      github: 'https://github.com',
    },
    features: ['Book Discovery', 'User Library', 'Real-time Sync', 'Ratings & Reviews'],
  },
  {
    name: 'Devtrios',
    description: 'Professional agency website showcasing portfolio and services. Premium design with smooth animations.',
    techs: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    links: {
      live: 'https://devtrios.com',
      github: '#',
    },
    features: ['Portfolio Showcase', 'Case Studies', 'Service Pages', 'Contact System'],
  },
  {
    name: 'College ERP System',
    description: 'Comprehensive enterprise resource planning system for educational institutions. Manage departments, attendance, and student data.',
    techs: ['ASP.NET Core', 'SQL Server', 'C#', 'Entity Framework'],
    links: {
      live: '#',
      github: '#',
    },
    features: ['Department Management', 'Attendance Tracking', 'Student Records', 'Reporting'],
  },
]

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Projects Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                Our <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Showcase of high-performance applications built for real-world challenges
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group glass-card rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 flex flex-col"
                >
                  {/* Project Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl">📱</span>
                        </div>
                        <p className="text-sm text-foreground/60">Project Preview</p>
                      </div>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-primary text-primary-foreground hover:shadow-lg transition-all duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-primary text-primary-foreground hover:shadow-lg transition-all duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {project.name}
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.techs.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-white/10 text-primary border border-primary/30 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
                      >
                        View Live
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-primary/50 text-foreground font-medium hover:bg-primary/10 transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
                      >
                        GitHub
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
