import Hero from '@/components/composite/Hero'
import Section from '@/components/ui/Section'
import FeatureGrid from '@/components/composite/FeatureGrid'
import StatsStrip from '@/components/composite/StatsStrip'
import SponsorMarquee from '@/components/composite/SponsorMarquee'
import PageTitle from '@/components/layout/PageTitle'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0B0F14] overflow-hidden">
      {/* Contenido principal */}
      <div className="relative z-10 m-4 ">
        {/* ✅ Page Title con estilo uniforme */}
        <PageTitle title="FlyFPVCali — FPV Racing Club" />

        {/* ✅ Hero ya tiene diseño unificado */}
        <Hero />

        {/* ✅ Sección 1 */}
        <Section
          title="¿Qué es FPV Racing?"
          subtitle="Las carreras de drones son una competencia en la que pilotos controlan drones en primera persona (FPV), usando gafas especiales que transmiten la visión de la cámara del dron. 
          Se trata de un deporte que mezcla velocidad, tecnología y reflejos, donde los participantes recorren circuitos llenos de giros y obstáculos, poniendo a prueba su destreza y precisión en cada vuelo."
        >
          <FeatureGrid />
        </Section>

        {/* ✅ Sección 2 */}
        <Section>
          <StatsStrip />
        </Section>

        {/* ✅ Sponsors */}
        <Section title="Sponsors">
          <SponsorMarquee />
        </Section>
      </div>
    </main>
  )
}
