import { type LucideIcon } from 'lucide-react'

interface MiniServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function MiniServiceCard({ icon: Icon, title, description }: MiniServiceCardProps) {
  return (
    <div className="p-6 rounded-lg glass-card backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-primary/50 group">
      <Icon className="w-8 h-8 text-primary mb-3 group-hover:text-accent transition-colors duration-300" />
      <h3 className="font-semibold text-foreground mb-2 text-sm">{title}</h3>
      <p className="text-xs text-foreground/60 leading-relaxed">{description}</p>
    </div>
  )
}
