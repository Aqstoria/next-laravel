import type { ElementType, ComponentPropsWithoutRef } from 'react'
import Image from 'next/image'

export type ImageSwapOnHoverProps<T extends ElementType> = {
  as?: T
  imageSwapFrom: {
    src: string
    width: number
    height: number
    alt: string
  }
  imageSwapTo: {
    src: string
    width: number
    height: number
    alt: string
  }
  active?: boolean
  className?: string
} & ComponentPropsWithoutRef<T>

const ImageSwapOnHover = <T extends ElementType>({
  as,
  imageSwapFrom,
  imageSwapTo,
  active,
  className,
  ...props
}: ImageSwapOnHoverProps<T>) => {
  const Component = as || 'div'
  return (
    <Component
      {...props}
      className={`position-relative d-flex hover-effect-opacity overflow-hidden${className ? ` ${className}` : ''}`}
    >
      <Image
        src={active ? imageSwapTo.src : imageSwapFrom.src}
        width={active ? imageSwapTo.width : imageSwapFrom.width}
        height={active ? imageSwapTo.height : imageSwapFrom.height}
        alt={active ? imageSwapTo.alt : imageSwapFrom.alt}
        className="hover-effect-target opacity-100"
      />
      <Image
        src={active ? imageSwapFrom.src : imageSwapTo.src}
        width={active ? imageSwapFrom.width : imageSwapTo.width}
        height={active ? imageSwapFrom.height : imageSwapTo.height}
        alt={active ? imageSwapFrom.alt : imageSwapTo.alt}
        className="position-absolute top-0 start-0 hover-effect-target opacity-0"
      />
    </Component>
  )
}

export default ImageSwapOnHover
