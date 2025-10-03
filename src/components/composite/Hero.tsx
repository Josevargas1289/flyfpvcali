import Button from '@/components/ui/Button'
import NeonTitle from './NeonTitle'

export default function Hero() {
  return (
    <section
      className="relative min-h-[55vh] flex flex-col pb-10 items-center justify-center text-center overflow-hidden px-4 sm:px-6"
      style={{ backgroundColor: '#0B0F14' }} // 🔵 fondo oscuro
    >
      {/* Contenido principal */}
      <div className="relative z-10 max-w-3xl">
        <NeonTitle />

               <p className="mt-6 text-base sm:text-lg md:text-xl text-base-text/80 leading-relaxed">
          FlyFPVCali es un club dedicado a las carreras de drones en primera persona (FPV).
          Organizamos entrenamientos y competencias en Cali, promoviendo el uso creativo del tiempo libre
          con nuevas tecnologías, fomentando la pasión por volar y el trabajo en equipo.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => (window.location.href = '/contacto')}
            className="glow px-6 py-3 text-lg font-semibold transition-transform hover:scale-105"
          >
            Únete
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = '/eventos')}
            className="px-6 py-3 text-lg font-semibold border-neon-green text-neon-green hover:bg-neon-green/10 hover:shadow-[0_0_15px_#39FF14]"
          >
            Ver calendario
          </Button>
        </div>
      </div>
    </section>
  )
}
