import { cn } from '@/lib/cn'
import { ComponentProps } from 'react'

export default function Card({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('glass rounded-3xl p-5', className)} {...props} />
}
