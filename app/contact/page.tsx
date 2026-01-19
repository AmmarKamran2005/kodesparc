'use client'

import React from "react"

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  } else {
    alert("Failed to send message");
  }
};


  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Contact Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Let's discuss your next project and explore how we can help you succeed
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-8">
                    Contact Information
                  </h2>

                  {/* Contact Items */}
                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        title: 'Email',
                        value: 'kodesparc@gmail.com',
                        link: 'mailto:kodesparc@gmail.com',
                      },
                      {
                        icon: Phone,
                        title: 'WhatsApp',
                        value: '+92 336 2005245 | +92 332 0264699 ',
                        link: 'https://wa.me/+923362005245',
                      },
                      {
                        icon: MapPin,
                        title: 'Location',
                        value: 'Karachi, PK',
                        link: '#',
                      },
                    ].map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/40 transition-colors">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {item.title}
                          </h3>
                          <p className="text-foreground/70 group-hover:text-primary transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Response */}
                <div className="glass-card p-6 rounded-lg backdrop-blur-sm border border-accent/30">
                  <h3 className="font-semibold text-accent mb-2">Quick Response</h3>
                  <p className="text-foreground/70">
                    We typically respond to inquiries within 24 hours. For urgent matters, reach out via WhatsApp.
                  </p>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {[
                      { name: 'GitHub', url: 'https://github.com' },
                      { name: 'LinkedIn', url: 'https://linkedin.com' },
                      { name: 'Twitter', url: 'https://twitter.com' },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-white/10 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 font-medium text-sm"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="glass-card p-8 rounded-xl backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                      <Send className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-foreground/70">
                      Thanks for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Send Message
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
