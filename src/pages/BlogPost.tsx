import Section from '@/components/ui/Section'
import PageTitle from '@/components/layout/PageTitle'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function mdToHtml(md: string){
  // very tiny markdown renderer for headers/paragraphs/links/lists/code
  return md
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    .replace(/\n\n/g, '<br/><br/>');
}

function parseFrontmatter(raw: string): { meta: any; body: string } {
  const m = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/m.exec(raw)
  if (!m) return { meta: {}, body: raw }
  const metaLines = m[1].split('\n')
  const meta: any = {}
  for (const line of metaLines) {
    const [k, ...rest] = line.split(':')
    meta[k.trim()] = rest.join(':').trim()
  }
  const body = m[2]
  return { meta, body }
}

export default function BlogPost(){
  const { slug } = useParams()
  const [html, setHtml] = useState('')
  const [title, setTitle] = useState('Post')

  useEffect(()=>{
    const modules = import.meta.glob('/src/content/blog/*.md', { as: 'raw' })
    const entry = Object.entries(modules).find(([p]) => p.endsWith(`${slug}.md`))
    if (!entry) return
    ;(async ()=>{
      const raw = await (entry[1] as any)()
      const { meta, body } = parseFrontmatter(raw)
      setTitle(meta.title || 'Post')
      setHtml(mdToHtml(body))
    })()
  }, [slug])

  return (
    <>
      <PageTitle title={`${title} — Blog`} />
      <Section>
        <article className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
      </Section>
    </>
  )
}
