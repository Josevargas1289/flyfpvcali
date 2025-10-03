import { useEffect, useRef, useState } from 'react'
import Card from '@/components/ui/Card'

const features = [
  { 
    title: 'Carreras locales',
    desc: 'Compite en pistas de Cali y alrededores.',
    video: '/videos/video1.mp4',
  },
  { 
    title: 'Entrenamientos',
    desc: 'Sesiones para mejorar técnica y tiempos.',
    video: '/videos/video3.mp4',
  },
  { 
    title: 'Comunidad',
    desc: 'Aprende, comparte y vuela con seguridad.',
    video: '/videos/video2.mp4',
  },
]

type LazyVideoProps = { 
  src: string
  isActive: boolean
  onPlay: () => void
}

function LazyVideo({ src, isActive, onPlay }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [])

  // Si este video NO es el activo → pausarlo
  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause()
    }
  }, [isActive])

  return (
    <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
      <video
        ref={videoRef}
        src={isVisible ? src : undefined}
        controls
        playsInline
        preload="none"
        className="w-full h-full object-contain bg-black"
        onPlay={onPlay} // cuando se reproduce, notifica al padre
      />
    </div>
  )
}

export default function FeatureGrid() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {features.map(f => (
        <Card key={f.title} className="flex flex-col items-center text-center">
          <h3 className="font-semibold mb-1">{f.title}</h3>
          <p className="text-sm text-base-text/80 mb-2">{f.desc}</p>
          {f.video && (
            <LazyVideo
              src={f.video}
              isActive={activeVideo === f.video}
              onPlay={() => setActiveVideo(f.video)}
            />
          )}
        </Card>
      ))}
    </div>
  )
}
