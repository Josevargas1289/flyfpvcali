const list = [
  { id: 1, logo: '/sponsors/Skyline.png', url: 'https://gemfanhobby.com/' },
  { id: 2, logo: '/sponsors/abogados.jpg', url: 'https://www.flycolor.net/' },
  { id: 3, logo: '/sponsors/Skyline.png', url: 'https://gemfanhobby.com/' },
  { id: 4, logo: '/sponsors/abogados.jpg', url: 'https://www.flycolor.net/' },
  { id: 5, logo: '/sponsors/Skyline.png', url: 'https://gemfanhobby.com/' },
  { id: 6, logo: '/sponsors/abogados.jpg', url: 'https://www.flycolor.net/' },
]

export default function SponsorMarquee() {
  return (
    <div className="relative overflow-hidden rounded-2xl glass border border-white/10">
      {/* Contenedor general con estilo */}
      <div className="flex gap-16 py-8 animate-marquee">
        {list.concat(list).map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 flex items-center justify-center"
          >
            <img
              src={s.logo}
              alt={`Sponsor ${s.id}`}
              className="h-14 w-auto object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  )
}
