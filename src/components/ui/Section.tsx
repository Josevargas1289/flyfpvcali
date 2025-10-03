import { ReactNode } from 'react'

export default function Section({ title, subtitle, children }: { title?: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      {title && <h2 className="text-2xl md:text-3xl font-bold mb-2 neon-text">{title}</h2>}
      {subtitle && <p className="text-base/relaxed text-base-text/80 mb-6">{subtitle}</p>}
      {children}
    </section>
  )
}
