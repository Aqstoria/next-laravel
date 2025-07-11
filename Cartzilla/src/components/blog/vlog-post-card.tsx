import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Link from 'next/link'

interface VlogPostCardProps extends CommonComponentProps {
  image: {
    src: string
    width: number
    height: number
    alt: string
  }
  href: string
  title: string
  time: string
}

const VlogPostCard = ({ image, href, title, time, className, ...props }: VlogPostCardProps) => (
  <article {...props} className={`hover-effect-scale position-relative${className ? ` ${className}` : ''}`}>
    <div className="bg-body-tertiary rounded overflow-hidden">
      <div className="btn btn-icon btn-light position-absolute top-50 start-50 translate-middle z-2 rounded-circle pe-none">
        <i className="ci-play fs-base" />
      </div>
      <Image
        src={image.src}
        className="hover-effect-target"
        width={image.width}
        height={image.height}
        alt={image.alt}
      />
    </div>
    <div className="pt-3 mt-1">
      <div className="text-body-tertiary fs-xs mb-2">{time}</div>
      <h3 className="h6 mb-0">
        <Link href={href} className="hover-effect-underline stretched-link">
          {title}
        </Link>
      </h3>
    </div>
  </article>
)

export default VlogPostCard
