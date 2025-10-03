import Section from '@/components/ui/Section'
import PageTitle from '@/components/layout/PageTitle'
import Card from '@/components/ui/Card'
import store from '@/data/store'

export default function Store(){
  return (
    <>
      <PageTitle title="Tienda — FlyFPVCali" />
      <Section title="Productos">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {store.map(p => (
            <Card key={p.id} className="flex flex-col">
              <img src={p.imagen} alt={p.nombre} className="rounded-xl mb-2" />
              <div className="font-semibold">{p.nombre}</div>
              <div className="text-sm text-base-text/70">${"{:.2f}".format(0)}{p.precio.toFixed? '' : ''}</div>
              <button className="mt-auto text-neon-cyan text-sm" disabled>Próximamente</button>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
