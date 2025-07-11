import Image from 'next/image'
import type { CommonComponentProps } from '@/types/common-component-props'

interface ImageWithCaptionProps extends CommonComponentProps {
  src: string
  width: number
  height: number
  caption: string
  large?: boolean
}

const ImageWithCaption = ({ src, width, height, caption, large, className, ...props }: ImageWithCaptionProps) => (
  <figure className={`figure${className ? ` ${className}` : ''}`} {...props}>
    <Image
      src={src}
      width={width}
      height={height}
      alt={caption}
      className={`figure-img bg-body-tertiary ${large ? 'rounded-4' : 'rounded'}`}
    />
    <figcaption className={`figure-caption${large ? ' fs-sm pt-2' : ''}`}>{caption}</figcaption>
  </figure>
)

export default ImageWithCaption
