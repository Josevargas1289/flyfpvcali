import Section from '@/components/ui/Section'
import PageTitle from '@/components/layout/PageTitle'
import { Link } from 'react-router-dom'
import SponsorMarquee from '@/components/composite/SponsorMarquee'

export default function Sponsors() {
  return (
    <>
      <PageTitle title="Sponsors — FlyFPVCali" />
      <Section title="Nuestros patrocinadores">
        {/* Marquee con logos */}
        <div className="mt-12 mb-12">
          <SponsorMarquee />
        </div>

        {/* Invitación */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-base-text/80 mb-8 leading-relaxed">
            En <span className="font-semibold text-neon-green">FlyFPVCali</span> creemos en el poder de la comunidad. 
            🚀 Únete a nosotros para impulsar el <strong>FPV Racing en Colombia</strong> y haz parte del futuro del deporte.
            <br /> Si quieres apoyar nuestro crecimiento y eventos, conviértete en patrocinador.
          </p>

          {/* Botón con resplandor verde */}
          <Link
            to="/contacto"
            className="inline-block px-6 py-3 rounded-lg 
                       bg-neon-green/20 text-neon-green font-semibold
                       shadow-[0_0_10px_#39FF14,0_0_20px_#39FF14] 
                       hover:bg-neon-green/30 hover:shadow-[0_0_15px_#39FF14,0_0_30px_#39FF14]
                       transition-all"
          >
            Quiero patrocinar
          </Link>
        </div>
      </Section>
    </>
  )
}
