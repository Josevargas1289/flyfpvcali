import Card from '@/components/ui/Card'

const features = [
  { 
    title: 'Carreras locales',
    desc: 'Compite en pistas de Cali y alrededores.',
    video: 'https://www.instagram.com/p/DMoOXtWxefJ/embed/' // 👈 nota el /embed/
  },
  { 
    title: 'Entrenamientos',
    desc: 'Sesiones para mejorar técnica y tiempos.',
    video: 'https://www.instagram.com/p/DNEWTySICv7/embed/' 
  },
  { 
    title: 'Comunidad',
    desc: 'Aprende, comparte y vuela con seguridad.',
    video: 'https://www.instagram.com/p/DMtuALUNCFf/embed/' 
  },
]


export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {features.map(f => (
        <Card key={f.title} className="flex flex-col items-center text-center">
          <h3 className="font-semibold mb-1">{f.title}</h3>
          <p className="text-sm text-base-text/80 mb-2">{f.desc}</p>
          {f.video && (
            <div className="w-full aspect-[9/16] overflow-hidden rounded-lg">
              <iframe
                src={f.video}
                width="100%"
                height="100%"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </div>
          )}
        </Card>
      ))}
    </div>
  )
}
