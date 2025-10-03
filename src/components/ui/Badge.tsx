import { cn } from '@/lib/cn'
import { ComponentProps } from 'react'

export default function Badge({ className, ...props }: ComponentProps<'span'>) {
  return <span className={cn('inline-flex items-center rounded-full border border-white/10 px-2 py-0.5 text-xs text-base-text/90', className)} {...props} />
}
