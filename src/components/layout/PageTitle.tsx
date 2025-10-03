import { Helmet } from 'react-helmet-async'
import { buildMeta } from '@/lib/seo'

export default function PageTitle({ title, description, canonical }: { title?: string; description?: string; canonical?: string }){
  const m = buildMeta({ title, description, canonical })
  return (
    <Helmet>
      <title>{m.title}</title>
      <meta name="description" content={m.description} />
      <meta property="og:title" content={m.title} />
      <meta property="og:description" content={m.description} />
      <meta property="og:image" content={m.image} />
      <link rel="canonical" href={m.canonical} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
