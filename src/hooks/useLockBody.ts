import { useEffect } from 'react'

export function useLockBody(lock: boolean) {
  useEffect(() => {
    if (!lock) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = original }
  }, [lock])
}
