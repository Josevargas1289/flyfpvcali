import Button from '@/components/ui/Button'
import NeonTitle from './NeonTitle'

export default function Hero() {
  return (
    <section
      className="relative min-h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ backgroundColor: '#0B0F14' }} // 🔵 tu fondo azul/oscuro
    >
      {/* Contenido principal */}
      <div className="relative z-10 m-4 ">
        <NeonTitle/>
        <p className="mt-10 max-w-2xl text-lg md:text-xl text-base-text/80">
          FlyFPVCali es un club dedicado a las carreras de drones en primera persona (FPV).
          Organizamos entrenamientos y competencias en Cali, promoviendo el uso creativo del tiempo libre
          con nuevas tecnologías, fomentando la pasión por volar y el trabajo en equipo.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button onClick={() => (window.location.href = '/contacto')} className="glow">
            Únete
          </Button>
          <Button variant="outline" onClick={() => (window.location.href = '/eventos')}>
            Ver calendario
          </Button>
        </div>
      </div>
    </section>
  )
}
