import { ReactNode, useState } from 'react'

export default function Tooltip({ content, children }: { content: ReactNode; children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <span className="relative" onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
      {children}
      {open && <span role="tooltip" className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-xs bg-base-card border border-white/10 rounded-lg px-2 py-1">{content}</span>}
    </span>
  )
}
