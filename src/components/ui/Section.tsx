type Props = {
  title?: string
  subtitle?: string
  children: React.ReactNode
}

export default function Section({ title, subtitle, children }: Props) {
  return (
    <section className="my-12">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-neon-green text-center mb-10 ">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base md:text-lg text-base-text/80 leading-relaxed text-center max-w-3xl mx-auto mb-16">
          {subtitle}
        </p>
      )}
      <div className="mt-6">{children}</div>
    </section>
  )
}
