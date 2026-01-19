interface SkillBadgeProps {
  label: string
  variant?: 'primary' | 'accent' | 'secondary'
}

export function SkillBadge({ label, variant = 'primary' }: SkillBadgeProps) {
  const variantStyles = {
    primary: 'bg-primary/20 text-primary border border-primary/50',
    accent: 'bg-accent/20 text-accent border border-accent/50',
    secondary: 'bg-muted text-foreground/70 border border-muted/50',
  }

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${variantStyles[variant]}`}
    >
      {label}
    </span>
  )
}
