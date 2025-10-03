import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useMemo } from 'react'

type Props = { logoSrc?: string }

export default function NeonTitle({ logoSrc = '/logo.svg' }: Props) {
  // Movimiento con el mouse (tilt 3D)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [0, 1], [10, -10])
  const rotateY = useTransform(mx, [0, 1], [-10, 10])

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = (
      e.currentTarget as HTMLDivElement
    ).getBoundingClientRect()
    const px = (e.clientX - left) / width
    const py = (e.clientY - top) / height
    mx.set(px)
    my.set(py)
  }

  // Chispas alrededor
  const sparks = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 1.5,
        dur: 1.8 + Math.random() * 1.8,
        driftX: (Math.random() - 0.5) * 20,
        driftY: 10 + Math.random() * 30,
      })),
    []
  )

  return (
    <motion.div
      onMouseMove={onMouseMove}
      style={{ perspective: 1000, rotateX, rotateY }}
      className="relative mt-10 mb-6 mx-auto inline-block select-none"
    >
      {/* Glow difuso detrás */}
      <div
        className="pointer-events-none absolute -inset-10 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 50%, rgba(57,255,20,0.25), transparent 70%)',
        }}
      />

      {/* Logo en lugar del texto */}
      <motion.img
        src={logoSrc}
        alt="FlyFPVCali"
        className="relative z-10 h-32 w-auto drop-shadow-[0_0_20px_#39FF14]"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200 }}
      />

      {/* Chispas flotantes */}
      <div className="pointer-events-none absolute inset-0">
        {sparks.map((s) => (
          <motion.span
            key={s.id}
            className="absolute block rounded-full"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: 6,
              height: 6,
              boxShadow:
                '0 0 8px rgba(57,255,20,0.9), 0 0 16px rgba(57,255,20,0.6), 0 0 32px rgba(57,255,20,0.4)',
              background:
                'radial-gradient(circle, rgba(57,255,20,1) 0%, rgba(57,255,20,0.6) 50%, rgba(57,255,20,0) 70%)',
            }}
            initial={{ opacity: 0, y: 0, x: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -s.driftY],
              x: [0, s.driftX],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: s.dur,
              delay: s.delay,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
