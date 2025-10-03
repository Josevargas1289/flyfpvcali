import { ComponentProps } from 'react'
export default function Input(props: ComponentProps<'input'>) {
  return <input {...props} className={`w-full rounded-xl bg-base-card/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-neon-cyan/50 ${props.className||''}`} />
}
