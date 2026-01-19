interface SectionHeaderProps {
  title: string
  subtitle: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      <p className="text-foreground/70 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  )
}
