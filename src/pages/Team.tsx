import Section from '@/components/ui/Section'
import PageTitle from '@/components/layout/PageTitle'
import Card from '@/components/ui/Card'
import ImageWithGlow from '@/components/media/ImageWithGlow'
import pilots from '@/data/pilots'

export default function Team() {
  return (
    <>
      <PageTitle title="Equipo — FlyFPVCali" />
      <Section title="Pilotos">
        {/* Contenedor centrado con márgenes */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pilots.map((p) => (
              <Card
                key={p.id}
                className="relative flex flex-col p-4 space-y-3 text-left text-sm rounded-xl overflow-hidden
                           bg-[url('/images/textures/carbon.png')] bg-cover bg-center
                           border border-white/10 shadow-lg
                           transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_#39FF14]"
              >
                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

                {/* Vector de dron (marca de agua) */}
                <div className="absolute right-2 top-2 opacity-10 text-neon-green pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2a1 1 0 0 1 .894.553l1.382 2.764 3.057.444a1 1 0 0 1 .554 1.707l-2.21 2.156.522 3.048a1 1 0 0 1-1.451 1.054L12 12.347l-2.748 1.449a1 1 0 0 1-1.451-1.054l.522-3.048-2.21-2.156a1 1 0 0 1 .554-1.707l3.057-.444L11.106 2.553A1 1 0 0 1 12 2z"/>
                  </svg>
                </div>

                {/* Contenido */}
                <div className="relative z-10">
                  {/* Avatar + nombre */}
                  <div className="flex items-center gap-3">
                    <ImageWithGlow
                      src={p.avatarUrl}
                      alt={p.alias}
                      className="h-12 w-12 object-cover rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-base text-neon-green">{p.alias}</div>
                      <div className="text-xs text-base-text/70">{p.nombre}</div>
                    </div>
                  </div>

                  {/* Setup */}
                  <div className="mt-2">
                    <h4 className="text-xs font-semibold text-neon-green mb-1">Setup</h4>
                    <ul className="text-xs text-base-text/80 space-y-0.5">
                      <li><span className="font-medium">Frame:</span> {p.setup.frame}</li>
                      <li><span className="font-medium">Motores:</span> {p.setup.motors}</li>
                      <li><span className="font-medium">FC:</span> {p.setup.fc}</li>
                      <li><span className="font-medium">ESC:</span> {p.setup.esc}</li>
                      <li><span className="font-medium">VTX:</span> {p.setup.vtx}</li>
                      <li><span className="font-medium">Cam:</span> {p.setup.cam}</li>
                    </ul>
                  </div>

                  {/* Instagram link */}
                  <div className="mt-3">
                    <a
                      className="inline-block text-neon-cyan text-xs font-medium hover:underline"
                      href={p.instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver perfil en Instagram
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
