import Section from '@/components/ui/Section'
import PageTitle from '@/components/layout/PageTitle'
import events from '@/data/events'
import Card from '@/components/ui/Card'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

export default function Events() {
  return (
    <>
      <PageTitle title="Eventos — FlyFPVCali" />
      <Section title="Calendario">
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((e) => (
            <Card
              key={e.id}
              className="flex flex-col overflow-hidden"
            >
              {/* Imagen con proporción fija */}
              {e.imagen && (
                <div className="w-full aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={e.imagen}
                    alt={e.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Info */}
              <div className="flex-1 p-4 flex flex-col">
                <div className="font-semibold text-lg">{e.titulo}</div>
                <div className="text-sm text-base-text/70 mt-1">
                  {format(new Date(e.fechaISO), 'yyyy-MM-dd')} • {e.lugar} • {e.tipo}
                </div>

                {/* Botón abajo con efecto neón */}
                <div className="mt-4">
                  <Link
                    to="/contacto"
                    className="inline-block text-sm px-5 py-2 rounded-lg 
                               bg-neon-green/20 text-neon-green font-semibold
                               shadow-[0_0_10px_#39FF14,0_0_20px_#39FF14] 
                               hover:bg-neon-green/30 hover:shadow-[0_0_15px_#39FF14,0_0_30px_#39FF14]
                               transition-all"
                  >
                    Inscribirme
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
