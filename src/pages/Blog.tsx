import Section from '@/components/ui/Section'
import PageTitle from '@/components/layout/PageTitle'
import { useEffect, useState } from 'react'

type PostMeta = { title: string; slug: string; date: string; excerpt?: string }

function parseFrontmatter(raw: string): { meta: PostMeta; body: string } {
  const m = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/m.exec(raw)
  if (!m) return { meta: { title: 'Post', slug: 'post', date: '' }, body: raw }
  const metaLines = m[1].split('\n')
  const meta: any = {}
  for (const line of metaLines) {
    const [k, ...rest] = line.split(':')
    meta[k.trim()] = rest.join(':').trim()
  }
  const body = m[2]
  return { meta: { title: meta.title||'Post', slug: meta.slug||'post', date: meta.date||'', excerpt: meta.excerpt }, body }
}

export default function Blog(){
  const [posts, setPosts] = useState<PostMeta[]>([])
  useEffect(()=>{
    const modules = import.meta.glob('/src/content/blog/*.md', { as: 'raw' })
    Promise.all(Object.entries(modules).map(async ([path, loader]) => {
      const raw = await (loader as any)()
      const { meta } = parseFrontmatter(raw)
      return meta as PostMeta
    })).then(all => {
      setPosts(all.sort((a,b)=> (a.date < b.date ? 1 : -1)))
    })
  },[])

  return (
    <>
      <PageTitle title="Blog — FlyFPVCali" />
      <Section title="Blog">
        <ul className="grid gap-3">
          {posts.map(p => (
            <li key={p.slug} className="glass rounded-2xl p-4">
              <a className="text-neon-cyan font-semibold" href={`/blog/${p.slug}`}>{p.title}</a>
              <div className="text-xs text-base-text/70">{p.date}</div>
              {p.excerpt && <p className="text-sm mt-1 text-base-text/80">{p.excerpt}</p>}
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
