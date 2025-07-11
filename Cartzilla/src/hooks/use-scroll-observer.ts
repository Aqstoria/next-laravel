/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'

interface ScrollObserverProps {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  onChangeActiveId?: (currentId: string, prevId: string | null) => void
}

interface ScrollObserverReturn {
  idsRef: React.MutableRefObject<{ id: string; ratio: number }[]>
  activeLink: string | null
}

export const useScrollObserver = ({
  root,
  rootMargin,
  threshold,
  onChangeActiveId,
}: ScrollObserverProps): ScrollObserverReturn => {
  const [activeLink, setActiveLink] = useState<string | null>(null)
  const idsRef = useRef<{ id: string; ratio: number }[]>([])

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        const ref = idsRef.current.find((el) => el.id === id)
        if (ref) {
          ref.ratio = entry.isIntersecting ? entry.intersectionRatio : 0
        }
      })

      const maxRatio = Math.max(...idsRef.current.map((el) => el.ratio), 0.1)
      const entry = idsRef.current.find((el) => el.ratio === maxRatio)

      setActiveLink(entry && entry.id ? entry.id : null)

      if (entry && entry.id && activeLink !== entry.id && typeof onChangeActiveId === 'function') {
        onChangeActiveId(entry.id, activeLink)
      }
    }

    const observerOptions = { root, rootMargin, threshold }
    const observer = new IntersectionObserver(handleIntersection, observerOptions)

    idsRef.current.forEach(({ id }) => {
      const content = document.getElementById(id)
      content && observer.observe(content)
    })

    return () => {
      observer.disconnect()
    }
  }, [idsRef, root, rootMargin, threshold])

  return { idsRef, activeLink }
}
