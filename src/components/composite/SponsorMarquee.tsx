import ImageWithGlow from '@/components/media/ImageWithGlow'

const list = [
  { id: 1, logo: '/sponsors/gemfan.png', url: 'https://gemfanhobby.com/' },
  { id: 2, logo: '/sponsors/flycolor.gif', url: 'https://www.flycolor.net/' },
  { id: 3, logo: '/sponsors/hdzero.webp', url: 'https://www.hd-zero.com/' },
  { id: 4, logo: '/sponsors/tattu.jpg', url: 'https://www.genstattu.com/' },
]

export default function SponsorMarquee() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-base-card">
      <div className="flex gap-12 p-6 animate-marquee">
        {list.concat(list).map((s, i) => ( // 👈 duplicamos para efecto infinito
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 opacity-80 hover:opacity-100 transition-opacity"
          >
            <ImageWithGlow
              src={s.logo}
              alt={`Sponsor ${s.id}`}
              className="h-12 w-auto object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  )
}
