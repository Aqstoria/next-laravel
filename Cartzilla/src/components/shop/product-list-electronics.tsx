import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Link from 'next/link'
import Badge from 'react-bootstrap/Badge'
import StarRating from '../reviews/star-rating'

interface ProductListElectronicsProps extends CommonComponentProps {
  image: {
    src: string
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
  reviews?: {
    rating: number
    count: number
  }
  badge?: {
    label: string
    bg?: string
    color?: string
  }
}

const ProductListElectronics = ({
  image,
  title,
  href,
  price,
  reviews,
  badge,
  ...props
}: ProductListElectronicsProps) => (
  <article {...props}>
    <div className="position-relative animate-underline d-flex align-items-center">
      <div className="position-relative flex-shrink-0" style={{ width: 110 }}>
        {badge && (
          <Badge bg={badge.bg} text={badge.color} className="position-absolute top-0 start-0 mt-n1 ms-n1">
            {badge.label}
          </Badge>
        )}
        <div className="ratio ratio-1x1 rounded overflow-hidden">
          <Image
            src={image.src}
            fill
            sizes="(min-resolution: 2dppx) 220px, 170px"
            className="object-fit-cover"
            alt={image.alt || title}
          />
        </div>
      </div>
      <div className="w-100 min-w-0 ps-2 ps-sm-3">
        {reviews && (
          <div className="d-flex align-items-center gap-2 mb-2">
            <StarRating rating={reviews.rating} className="fs-xs" />
            <span className="text-body-tertiary fs-xs">({reviews.count})</span>
          </div>
        )}
        <h4 className="mb-2">
          <Link href={href} className="stretched-link d-block fs-sm fw-medium text-truncate">
            <span className="animate-target">{title}</span>
          </Link>
        </h4>
        <div className="h5 mb-0">
          {price.prefix === false ? '' : price.prefix || '$'}
          {price.current.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          {price.suffix || ''}{' '}
          {price.original && (
            <del className="text-body-tertiary fs-sm fw-normal">
              {price.prefix === false ? '' : price.prefix || '$'}
              {price.original.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              {price.suffix || ''}
            </del>
          )}
        </div>
      </div>
    </div>
  </article>
)

export default ProductListElectronics
