import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryListProps extends CommonComponentProps {
  image: {
    src: string
    alt?: string
    square?: boolean
    bg?: string
    style?: React.CSSProperties
  }
  title: string
  href: string
  subtitle?: string
}

const CategoryList = ({ image, title, href, subtitle, className, ...props }: CategoryListProps) => (
  <div
    {...props}
    className={`nav position-relative flex-nowrap min-w-0 align-items-center${className ? ` ${className}` : ''}`}
  >
    <div
      className={`d-flex flex-shrink-0 align-items-center justify-content-center ${
        image.bg === 'none' ? '' : image.bg ? `bg-${image.bg}` : 'bg-body-tertiary'
      } ${image.square ? 'rounded' : 'rounded-circle'}`}
      style={image.style ? { ...image.style, width: 56, height: 56 } : { width: 56, height: 56 }}
    >
      <div className="ratio ratio-1x1" style={{ width: 40 }}>
        <Image src={image.src} width={80} height={80} alt={image.alt || title} />
      </div>
    </div>
    <div className="min-w-0 ps-3">
      <Link href={href} className="nav-link animate-underline stretched-link fs-base fw-semibold p-0">
        <span className="animate-target text-truncate">{title}</span>
      </Link>
      {subtitle && <div className="fs-xs fw-normal text-body-secondary mt-1">{subtitle}</div>}
    </div>
  </div>
)

export default CategoryList
