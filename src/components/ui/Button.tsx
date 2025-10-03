import { cn } from '@/lib/cn'
import { ComponentProps } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface Props extends ComponentProps<'button'> {
  variant?: Variant
  size?: Size
}

export default function Button({ className, variant='primary', size='md', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-2xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/80'
  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-5',
    lg: 'h-12 px-6 text-lg',
  }[size]
  const variants = {
    primary: 'bg-neon-purple/30 text-base-text backdrop-blur border border-white/10 hover:shadow-neon',
    outline: 'border border-neon-cyan/40 hover:shadow-neon',
    ghost: 'bg-transparent hover:bg-white/5',
  }[variant]
  return <button className={cn(base, sizes, variants, className)} {...props} />
}
