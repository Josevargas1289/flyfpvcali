type SectionProps = {
  title?: string
  subtitle?: string
  children: React.ReactNode
}

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="my-12 px-4 text-center">
      {title && (
        <h2 className="text-2xl font-bold text-neon-green mb-3">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base-text/80 mb-20 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </section>
  )
}
