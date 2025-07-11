'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import type { CommonComponentProps } from '@/types/common-component-props'
import Drift from 'drift-zoom'
import 'drift-zoom/dist/drift-basic.min.css'

interface ImageZoomProps extends Drift.Options, CommonComponentProps {
  src: string
  zoomSrc: string
  width: number
  height: number
  alt: string
  paneContainerId?: string
  touchDisable?: boolean
  imageClassName?: string
  priority?: boolean
}

const ImageZoom = ({
  src,
  zoomSrc,
  width,
  height,
  alt,
  paneContainerId,
  inlinePane,
  hoverDelay,
  touchDelay,
  touchDisable,
  onShow,
  onHide,
  imageClassName,
  priority,
  ...props
}: ImageZoomProps) => {
  const imageRef = useRef<HTMLImageElement | null>(null)
  const driftRef = useRef<Drift | null>(null)

  useEffect(() => {
    if (!imageRef.current) return

    const options: Drift.Options = {
      paneContainer: paneContainerId ? document.getElementById(paneContainerId) || undefined : undefined,
      inlinePane,
      hoverDelay,
      touchDelay,
      onShow,
      onHide,
    }

    const drift = new Drift(imageRef.current, options)
    driftRef.current = drift

    // Disable on touch devices if specified
    if (touchDisable && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
      drift.destroy()
    }

    return () => {
      driftRef.current?.destroy()
    }
  }, [paneContainerId, inlinePane, hoverDelay, touchDelay, onShow, onHide, touchDisable])

  return (
    <div {...props}>
      <Image
        ref={imageRef}
        data-zoom={zoomSrc}
        src={src}
        width={width}
        height={height}
        className={imageClassName}
        alt={alt}
        priority={priority}
      />
    </div>
  )
}

export default ImageZoom
