import Section from '@/components/ui/Section'
import PageTitle from '@/components/layout/PageTitle'
import gallery from '@/data/galleryImages'
import Lightbox from '@/components/composite/Lightbox'

export default function Gallery() {
  return (
    <>
      <PageTitle title="Galería — FlyFPVCali" />
      <Section title="Galería">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {gallery.map((g) => (
            <Lightbox
              key={g.id}
              src={g.src}
              alt={g.alt}
              thumbClass="w-full h-48 object-cover rounded-xl hover:shadow-neon cursor-zoom-in"
            />
          ))}
        </div>
      </Section>
    </>
  )
}
