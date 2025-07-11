'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import SimpleBarCore from 'simplebar-core'

interface DocsNavEventsProps {
  simpleBarRef?: React.MutableRefObject<SimpleBarCore | null>
}

const DocsNavEvents = ({ simpleBarRef }: DocsNavEventsProps) => {
  // Do not remove, even if it seems unused
  // These hooks are used to trigger the effect on pathname or searchParams change
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Scroll to active nav item
  const scrollToActiveNavItem = (scrollBehavior: ScrollBehavior = 'instant') => {
    if (!simpleBarRef) {
      console.warn('SimpleBar reference is not defined')
      return
    }

    const simpleBar = simpleBarRef.current
    if (!simpleBar) {
      console.warn('SimpleBar is not initialized')
      return
    }

    const scrollElement = simpleBar.getScrollElement()
    if (!scrollElement) {
      console.warn('scrollElement not found')
      return
    }

    const activeNavItem = scrollElement.querySelector('.list-group-item.active') as HTMLElement | null
    if (!activeNavItem) {
      console.warn('No active nav item found')
      return
    }

    const activeNavItemParent = activeNavItem.parentNode as HTMLElement | null

    simpleBar.recalculate()
    const offsetTop = activeNavItemParent ? activeNavItemParent.offsetTop : activeNavItem.offsetTop
    scrollElement.scrollTo({
      top: offsetTop,
      behavior: scrollBehavior,
    })
  }

  useEffect(() => {
    scrollToActiveNavItem()
  })

  return <></>
}

export default DocsNavEvents
