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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pilots.map((p) => (
            <Card key={p.id} className="flex flex-col items-start p-4">
              {/* Avatar + nombre */}
              <div className="flex items-center gap-4">
                <ImageWithGlow
                  src={p.avatarUrl}
                  alt={p.alias}
                  className="h-16 w-16 object-cover rounded-full"
                />
                <div>
                  <div className="font-semibold text-lg">{p.alias}</div>
                  <div className="text-xs text-base-text/70">{p.nombre}</div>
                </div>
              </div>

              {/* Setup */}
              <ul className="mt-3 text-sm text-base-text/80 space-y-1">
                <li>
                  <strong>Frame:</strong> {p.setup.frame}
                </li>
                <li>
                  <strong>Motores:</strong> {p.setup.motors}
                </li>
                <li>
                  <strong>FC:</strong> {p.setup.fc}
                </li>
                <li>
                  <strong>ESC:</strong> {p.setup.esc}
                </li>
                <li>
                  <strong>VTX:</strong> {p.setup.vtx}
                </li>
                <li>
                  <strong>Cam:</strong> {p.setup.cam}
                </li>
              </ul>

              {/* Instagram link */}
              <a
                className="mt-4 inline-block text-neon-cyan text-sm font-medium hover:underline"
                href={p.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Ver perfil en Instagram
              </a>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
