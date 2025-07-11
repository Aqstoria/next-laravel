'use client'

import { useEffect, useRef } from 'react'

const ScrollTopButton = ({ scrollOffset }: { scrollOffset: number }) => {
  const buttonRef = useRef<HTMLAnchorElement | null>(null)
  const progressRef = useRef<SVGRectElement | null>(null)

  useEffect(() => {
    const button = buttonRef.current
    const progress = progressRef.current

    if (!button || !progress) return

    const length = progress.getTotalLength()

    progress.style.strokeDasharray = String(length)
    progress.style.strokeDashoffset = String(length)

    const showProgress = () => {
      const scrollPosition = window.pageYOffset
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercent = scrollPosition / scrollHeight || 0
      const draw = length * scrollPercent

      progress.style.strokeDashoffset = String(length - draw)
    }

    const handleScroll = () => {
      if (window.pageYOffset > scrollOffset) {
        button.classList.add('show')
      } else {
        button.classList.remove('show')
      }
      showProgress()
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollOffset])

  return (
    <a
      ref={buttonRef}
      className="btn-scroll-top btn btn-sm bg-body border-0 rounded-pill shadow animate-slide-end"
      href="#top"
    >
      Top
      <i className="ci-arrow-right fs-base ms-1 me-n1 animate-target" />
      <span className="position-absolute top-0 start-0 w-100 h-100 border rounded-pill z-0"></span>
      <svg
        className="position-absolute top-0 start-0 w-100 h-100 z-1"
        viewBox="0 0 62 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          ref={progressRef}
          x=".75"
          y=".75"
          width="60.5"
          height="30.5"
          rx="15.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
      </svg>
    </a>
  )
}

export default ScrollTopButton
