import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface DeveloperCardProps {
  name: string
  avatar: string
  experience: string
  skills: string[]
  highlight: string
  profileUrl: string
}

export function DeveloperCard({
  name,
  avatar,
  experience,
  skills,
  highlight,
  profileUrl,
}: DeveloperCardProps) {
  return (
    <div className="group glass-card p-6 rounded-xl border border-white/20 transition-smooth hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      {/* Avatar */}
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent/50 flex items-center justify-center text-white text-2xl font-bold neon-glow">
          {avatar}
        </div>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-foreground text-center mb-2">{name}</h3>

      {/* Experience Badge */}
      <div className="flex justify-center mb-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/50">
          {experience}
        </span>
      </div>

      {/* Highlight Text */}
      <p className="text-sm text-foreground/70 text-center mb-4 line-clamp-2">
        {highlight}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="text-xs px-2 py-1 rounded bg-primary/10 text-primary/80 border border-primary/20"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* CTA Button */}
      <Link
        href={profileUrl}
        className="block w-full px-4 py-3 rounded-lg bg-primary/20 text-primary font-medium border border-primary/50 text-center hover:bg-primary/30 transition-all duration-300 group-hover:border-primary/80 flex items-center justify-center gap-2"
      >
        Read Full Profile
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  )
}
