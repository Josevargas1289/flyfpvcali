import { motion } from "framer-motion"

const stats = [
  { value: "+20", label: "Pilotos" },
  { value: "+100", label: "Eventos" },
  { value: "+5k", label: "Vueltas" },
]

export default function StatsStrip() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center my-12">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          className="flex flex-col items-center justify-center p-4 rounded-xl 
                     bg-[rgba(18,24,38,0.6)] backdrop-blur-md border border-white/10 
                     shadow-[0_0_15px_rgba(57,255,20,0.2)] hover:shadow-[0_0_25px_rgba(57,255,20,0.4)] 
                     transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-4xl font-extrabold text-neon-green drop-shadow-[0_0_10px_#39FF14]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          >
            {s.value}
          </motion.div>
          <div className="mt-1 text-sm tracking-wide text-base-text/70 uppercase">
            {s.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
