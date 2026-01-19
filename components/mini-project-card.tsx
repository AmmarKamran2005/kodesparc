import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

interface MiniProjectCardProps {
  name: string
  description: string
  techs: string[]
  links: {
    live?: string
    github?: string
  }
}

export function MiniProjectCard({ name, description, techs, links }: MiniProjectCardProps) {
  return (
    <div className="p-6 rounded-lg glass-card backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:bg-white/20">
      <h3 className="font-semibold text-foreground mb-2 text-sm group-hover:text-primary transition-colors duration-300">
        {name}
      </h3>
      <p className="text-xs text-foreground/60 mb-4 line-clamp-2 leading-relaxed">
        {description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {techs.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs bg-primary/20 text-primary rounded border border-primary/30 hover:bg-primary/30 transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
        {techs.length > 3 && (
          <span className="px-2 py-1 text-xs text-foreground/50">+{techs.length - 3}</span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-2">
        {links.live && links.live !== '#' && (
          <Link
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs px-3 py-2 rounded bg-primary/20 text-primary hover:bg-primary/30 transition-all duration-300"
          >
            <ExternalLink size={14} />
            View
          </Link>
        )}
        {links.github && links.github !== '#' && (
          <Link
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs px-3 py-2 rounded bg-primary/20 text-primary hover:bg-primary/30 transition-all duration-300"
          >
            <Github size={14} />
            Code
          </Link>
        )}
      </div>
    </div>
  )
}
