export default function ImageWithGlow({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <img loading="lazy" src={src} alt={alt} className={`rounded-2xl shadow-neon ${className||''}`} />
}
