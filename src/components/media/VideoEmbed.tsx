export default function VideoEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl" style={{paddingTop:'56.25%'}}>
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}
