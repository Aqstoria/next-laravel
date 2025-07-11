import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Link from 'next/link'
import Badge from 'react-bootstrap/Badge'

interface ProductCardMarketplaceProps extends CommonComponentProps {
  large?: boolean
  image: {
    src: string
    width: number
    height: number
    alt?: string
  }
  title: string
  href: string
  price: {
    current: number
    original?: number
    prefix?: string | false
    suffix?: string
  }
  author: {
    avatar: string
    name: string
    href: string
  }
  category: {
    label: string
    href: string
    leadingText?: string
  }
  sales: {
    count: number
    label?: string
  }
  badge?: {
    label: string
    bg?: string
    color?: string
  }
  wishlistButton?: { active?: boolean; labelAdd?: string; labelRemove?: string; onClick?: () => void } | false
}

const ProductCardMarketplace = ({
  large,
  image,
  title,
  href,
  price,
  author,
  category,
  sales,
  badge,
  wishlistButton,
  className,
  ...props
}: ProductCardMarketplaceProps) => (
  <article {...props} className={`h-100${className ? ` ${className}` : ''}`}>
    <div className="card h-100 animate-underline hover-effect-opacity hover-effect-scale rounded-4 overflow-hidden">
      <div className="card-img-top position-relative bg-body-tertiary overflow-hidden">
        {badge && (
          <Badge
            bg={badge.bg}
            text={badge.color}
            className="position-absolute top-0 start-0 z-2 mt-2 ms-2 mt-lg-3 ms-lg-3"
          >
            {badge.label}
          </Badge>
        )}
        <Link href={href} className="d-block hover-effect-target">
          <Image src={image.src} width={image.width} height={image.height} alt={image.alt || title} />
        </Link>
        {wishlistButton !== false && (
          <div
            className={`position-absolute top-0 end-0 z-2 ${!wishlistButton?.active ? 'hover-effect-target opacity-0' : ''} pt-1 pt-sm-0 pe-1 pe-sm-0 mt-2 mt-sm-3 me-2 me-sm-3`}
          >
            <button
              type="button"
              className="btn btn-sm btn-icon btn-light bg-light border-0 rounded-circle animate-pulse"
              aria-label={
                wishlistButton?.active
                  ? wishlistButton?.labelRemove || 'Remove from Wishlist'
                  : wishlistButton?.labelAdd || 'Add to Wishlist'
              }
              onClick={wishlistButton?.onClick}
            >
              <i className={`${wishlistButton?.active ? 'ci-heart-filled' : 'ci-heart'} fs-sm animate-target`} />
            </button>
          </div>
        )}
      </div>
      <div className="card-body p-3">
        <div className="d-flex min-w-0 justify-content-between gap-2 gap-sm-3 mb-2">
          <h3 className="nav min-w-0 mb-0">
            <Link href={href} className={`nav-link text-truncate p-0${large ? ' fs-base' : ''}`}>
              <span className="text-truncate animate-target">{title}</span>
            </Link>
          </h3>
          <div className={`${large ? 'h5' : 'h6'} text-nowrap mb-0`}>
            {price.prefix === false ? '' : price.prefix || '$'}
            {price.current.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            {price.suffix || ''}{' '}
            {price.original && (
              <del className={`text-body-tertiary ${large ? 'fs-base' : 'fs-sm'} fw-normal`}>
                {price.prefix === false ? '' : price.prefix || '$'}
                {price.original.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                {price.suffix || ''}
              </del>
            )}
          </div>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
          <div className="nav align-items-center gap-1 fs-xs">
            <Link href={author.href} className="nav-link fs-xs text-body gap-1 p-0">
              <div className="flex-shrink-0 border rounded-circle" style={{ width: 22 }}>
                <Image src={author.avatar} width={20} height={20} className="rounded-circle" alt={author.name} />
              </div>
              {author.name}
            </Link>
            <div className="text-body-secondary">{category.leadingText || 'in'}</div>
            <Link href={category.href} className="nav-link fs-xs text-body p-0">
              {category.label}
            </Link>
          </div>
          <div className="fs-xs text-body-secondary">
            {sales.count} {sales.label || 'sales'}
          </div>
        </div>
      </div>
    </div>
  </article>
)

export default ProductCardMarketplace
