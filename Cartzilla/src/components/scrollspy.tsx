'use client'

import React, { Children } from 'react'
import { usePathname } from 'next/navigation'
import { useScrollObserver } from '@/hooks/use-scroll-observer'

interface ScrollSpyProps {
  /**
   * Enable the scroll spy feature.
   * @default true
   */
  enableScrollSpy?: boolean

  /**
   * Class name to be applied to the active link.
   * @default '' - empty string
   */
  activeClass?: string

  /**
   * If true, the active link will have an attribute `data-active` attached to it.
   * @default false
   */
  activeAttr?: boolean

  /**
   * Root element for the intersection observer.
   * @uses IntersectionObserver: IntersectionObserver()
   * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options
   * @default null
   */
  root?: HTMLElement | null

  /**
   * Root margin for the intersection observer.
   * @uses IntersectionObserver: IntersectionObserver()
   * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options
   * @default '0px 0px 0px 0px'
   */
  rootMargin?: string

  /**
   * Thresholds for the intersection observer.
   * @uses IntersectionObserver: IntersectionObserver()
   * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options
   * @default [0, 0.25, 0.5, 0.75, 1]
   */
  threshold?: number | number[]

  /** Callback function for handle the active element change event */
  onChangeActiveId?(
    /** The id of the active element */
    currentId: string | null,

    /** The id of previous active element */
    prevId: string | null
  ): void

  children?: React.ReactNode
}

const ScrollSpy = ({
  enableScrollSpy = true,
  activeClass = '',
  activeAttr = false,
  root = null,
  rootMargin = '0px',
  threshold = [0, 0.25, 0.5, 0.75, 1],
  onChangeActiveId = undefined,
  children = null,
}: ScrollSpyProps) => {
  const { idsRef, activeLink } = useScrollObserver({ root, rootMargin, threshold, onChangeActiveId })
  const pathname = usePathname()

  // If the scroll spy is disabled, return the children as is
  if (!enableScrollSpy) {
    return <>{children}</>
  }

  const modifiedChildren = (children: React.ReactNode): React.ReactNode => {
    return Children.map(children, (child) => {
      if (React.isValidElement(child) === false) {
        return child
      }

      const reactElement = child as React.ReactElement<any>

      // Let's handle the href: we need to support both relative and absolute URLs
      // For example: href="#section-1" or href="/docs#section-1" is valid.
      // That's why, in case of absolute URL, we need to check if the pathname is the same.
      const href = reactElement.props?.href
      let isValidHref = false
      if (href && href.startsWith('#')) {
        isValidHref = true
      } else if (href && href.startsWith('/')) {
        const hrefPath = href.split('#')[0]
        isValidHref = pathname.startsWith(hrefPath)
      } else {
        isValidHref = false
      }

      if (isValidHref) {
        const id = href.includes('#') ? href.split('#')[1] : ''
        if (!id) {
          const warningMessage =
            'A component looks like a valid observable component for ScrollSpy, but href does not contain a hash (#) segment.'
          console.warn(warningMessage, href, reactElement)
          return reactElement
        }

        if (!idsRef.current.find((el: { id: string; ratio: number }) => el.id === id)) {
          idsRef.current.push({ id, ratio: 0 })
        }

        const isActive = id === activeLink
        const className = reactElement.props?.className || ''
        return React.cloneElement(reactElement, {
          className: isActive ? [className, activeClass].filter(Boolean).join(' ') : className,
          ['data-active']: activeAttr ? isActive : null,
        })
      }

      if (reactElement.props?.children) {
        return React.cloneElement(reactElement, {
          ...(typeof reactElement.props === 'object' ? reactElement.props : {}),
          children: modifiedChildren(reactElement.props.children),
        })
      }

      return reactElement
    })
  }

  return <>{modifiedChildren(children)}</>
}

export default ScrollSpy
