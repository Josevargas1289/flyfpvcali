type DividerProps = {
  label?: string
}

export default function Divider({ label }: DividerProps) {
  return (
    <div className="relative flex items-center justify-center my-12">
      {/* Línea izquierda */}
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neon-green/60 to-transparent" />

      {/* Texto opcional */}
      {label && (
        <span className="px-4 text-sm font-semibold uppercase tracking-wider text-neon-green drop-shadow-[0_0_8px_#39FF14]">
          {label}
        </span>
      )}

      {/* Línea derecha */}
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neon-green/60 to-transparent" />
    </div>
  )
}
