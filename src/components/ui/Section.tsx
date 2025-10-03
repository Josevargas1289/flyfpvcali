type SectionProps = {
  title?: string
  subtitle?: string
  children: React.ReactNode
}

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="my-12 px-4">
      {title && (
        <h2 className="text-2xl font-bold text-neon-green mb-3 text-center md:text-left">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base-text/80 mb-6 max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          {subtitle}
        </p>
      )}
      {children}
    </section>
  )
}
