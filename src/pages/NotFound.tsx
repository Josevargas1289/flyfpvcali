import Section from '@/components/ui/Section'
import PageTitle from '@/components/layout/PageTitle'

export default function NotFound(){
  return (
    <>
      <PageTitle title="404 — Página no encontrada" />
      <Section title="404">
        <p>No encontramos lo que buscas.</p>
      </Section>
    </>
  )
}
