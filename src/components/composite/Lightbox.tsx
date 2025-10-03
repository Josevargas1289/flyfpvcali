import { useState } from 'react'

export default function Lightbox({ src, alt, thumbClass }: { src: string; alt: string; thumbClass?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <img src={src} alt={alt} loading="lazy" className={thumbClass} onClick={()=>setOpen(true)} />
      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" role="dialog" aria-modal="true" onClick={()=>setOpen(false)}>
          <img src={src} alt={alt} className="max-h-[85vh] max-w-[90vw] rounded-2xl" />
        </div>
      )}
    </>
  )
}
