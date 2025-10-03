import ImageWithGlow from '@/components/media/ImageWithGlow'

const list = [
  { id: 1, logo: '/sponsors/gemfan.png', url: 'https://gemfanhobby.com/' },
  { id: 2, logo: '/sponsors/flycolor.gif', url: 'https://www.flycolor.net/' },
  { id: 3, logo: '/sponsors/hdzero.webp', url: 'https://www.hd-zero.com/' },
  { id: 4, logo: '/sponsors/tattu.jpg', url: 'https://www.genstattu.com/' },
]

export default function SponsorMarquee() {
  return (
    <div className="relative overflow-hidden rounded-2xl glass border border-white/10">
      {/* Overlay verde suave */}
      <div className="absolute inset-0 bg-neon-green/5 pointer-events-none" />

      <div className="flex gap-16 py-8 animate-marquee">
        {list.concat(list).map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 opacity-80 hover:opacity-100 transition-all transform hover:scale-110"
          >
            <ImageWithGlow
              src={s.logo}
              alt={`Sponsor ${s.id}`}
              className="h-14 w-auto object-contain drop-shadow-[0_0_10px_rgba(57,255,20,0.4)]"
            />
          </a>
        ))}
      </div>
    </div>
  )
}
