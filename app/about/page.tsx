'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Zap, Code, Rocket, Users } from 'lucide-react'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* About Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                About <span className="gradient-text">Kodesparc</span>
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Transforming ideas into high-performance digital products since day one
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Text Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    We transform ideas into high-performance digital products. By combining cutting-edge technology with thoughtful design, we help businesses scale and innovate in the digital landscape.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Who We Are</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                    Kodesparc is a team of passionate full-stack developers and engineers dedicated to building scalable, performant web and mobile applications. We specialize in modern technologies and bring expertise across the entire development stack.
                  </p>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    With over 3 years of combined experience, we've worked on diverse projects ranging from early-stage startups to enterprise solutions. We're committed to delivering excellence in every project we undertake.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Our Expertise</h2>
                  <div className="space-y-3">
                    <p className="text-foreground/70 flex items-start gap-3">
                      <span className="text-primary font-bold text-xl mt-1">•</span>
                      <span><strong className="text-foreground">Frontend:</strong> Next.js, React, TypeScript, Tailwind CSS, modern UI frameworks</span>
                    </p>
                    <p className="text-foreground/70 flex items-start gap-3">
                      <span className="text-primary font-bold text-xl mt-1">•</span>
                      <span><strong className="text-foreground">Backend:</strong> Node.js, ASP.NET Core, PostgreSQL, MongoDB, Prisma, Drizzle ORM</span>
                    </p>
                    <p className="text-foreground/70 flex items-start gap-3">
                      <span className="text-primary font-bold text-xl mt-1">•</span>
                      <span><strong className="text-foreground">Mobile:</strong> Flutter, Dart, Firebase, cross-platform development</span>
                    </p>
                    <p className="text-foreground/70 flex items-start gap-3">
                      <span className="text-primary font-bold text-xl mt-1">•</span>
                      <span><strong className="text-foreground">Integrations:</strong> Stripe, Twilio, Mailgun, Firebase, AWS services</span>
                    </p>
                    <p className="text-foreground/70 flex items-start gap-3">
                      <span className="text-primary font-bold text-xl mt-1">•</span>
                      <span><strong className="text-foreground">DevOps:</strong> Docker, CI/CD, Linux, cloud deployment, server management</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Our Approach</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    We believe in building lasting partnerships with our clients. Through collaborative discovery, rapid prototyping, and iterative development, we create solutions that not only meet but exceed expectations. Performance, scalability, and user experience are at the core of everything we build.
                  </p>
                </div>
              </div>

              {/* Right: Visual Cards */}
              <div className="space-y-6">
                {/* Stats Card */}
                <div className="glass-card p-8 rounded-xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-foreground mb-6">By The Numbers</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-foreground/70">Projects Delivered</span>
                      <span className="text-3xl font-bold text-primary">50+</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-foreground/70">Years Experience</span>
                      <span className="text-3xl font-bold text-primary">3+</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-foreground/70">Happy Clients</span>
                      <span className="text-3xl font-bold text-primary">100+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/70">Team Members</span>
                      <span className="text-3xl font-bold text-accent">5+</span>
                    </div>
                  </div>
                </div>

                {/* Core Values */}
                <div className="glass-card p-8 rounded-xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Core Values</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Code,
                        title: 'Excellence',
                        description: 'We deliver high-quality, maintainable code',
                      },
                      {
                        icon: Rocket,
                        title: 'Innovation',
                        description: 'We stay ahead with latest technologies',
                      },
                      {
                        icon: Users,
                        title: 'Collaboration',
                        description: 'We work closely with our clients',
                      },
                      {
                        icon: Zap,
                        title: 'Performance',
                        description: 'Speed and efficiency matter always',
                      },
                    ].map((value, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <value.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {value.title}
                          </h4>
                          <p className="text-sm text-foreground/60">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spark Visual */}
                <div className="glass-card p-8 rounded-xl backdrop-blur-sm text-center h-32 flex flex-col items-center justify-center">
                  <Zap className="w-12 h-12 text-accent mb-3 animate-pulse" />
                  <p className="text-foreground/70 font-medium">Spark of Innovation</p>
                  <p className="text-sm text-foreground/50 mt-1">
                    Igniting digital transformation
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-20 text-center">
              <div className="glass-card p-12 rounded-xl max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Let's Work Together
                </h2>
                <p className="text-foreground/70 mb-8">
                  Have an idea? Let's talk about how we can help bring it to life.
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
