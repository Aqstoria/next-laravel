import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import Badge from 'react-bootstrap/Badge'
import ProgressBar from 'react-bootstrap/ProgressBar'
import StarRating from '../reviews/star-rating'

interface ProductCardElectronicsProps extends CommonComponentProps {
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
  reviews?: {
    rating: number
    count: number
  }
  badge?: {
    label: string
    bg?: string
    color?: string
  }
  specs?: Record<string, string>
  stock?: {
    initial: number
    current: number
    label?: string
    ariaLabel?: string
  }
  active?: boolean
  cartButton?: { label?: string; onClick?: () => void } | false
  wishlistButton?: { active?: boolean; labelAdd?: string; labelRemove?: string; onClick?: () => void } | false
  compareButton?: { active?: boolean; labelAdd?: string; labelRemove?: string; onClick?: () => void } | false
}

const ProductCardElectronics = ({
  image,
  title,
  href,
  price,
  reviews,
  badge,
  specs,
  stock,
  active,
  cartButton,
  wishlistButton,
  compareButton,
  ...props
}: ProductCardElectronicsProps) => (
  <article {...props}>
    <div className={`product-card animate-underline hover-effect-opacity bg-body rounded${active ? ' active' : ''}`}>
      <div className="position-relative">
        {(wishlistButton !== false || compareButton !== false) && (
          <>
            <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
              <div className="d-flex flex-column gap-2">
                {wishlistButton !== false && (
                  <button
                    type="button"
                    className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex"
                    aria-label={
                      wishlistButton?.active
                        ? wishlistButton?.labelRemove || 'Remove from Wishlist'
                        : wishlistButton?.labelAdd || 'Add to Wishlist'
                    }
                    onClick={wishlistButton?.onClick}
                  >
                    <i
                      className={`${wishlistButton?.active ? 'ci-heart-filled' : 'ci-heart'} fs-base animate-target`}
                    />
                  </button>
                )}
                {compareButton !== false && (
                  <button
                    type="button"
                    className={`btn btn-icon btn-secondary ${compareButton?.active ? 'animate-scale' : 'animate-rotate'} d-none d-lg-inline-flex`}
                    aria-label={
                      compareButton?.active
                        ? compareButton?.labelRemove || 'Remove from Comparison'
                        : compareButton?.labelAdd || 'Compare'
                    }
                    onClick={compareButton?.onClick}
                  >
                    <i
                      className={`${compareButton?.active ? 'ci-check-circle' : 'ci-refresh-cw'} fs-base animate-target`}
                    />
                  </button>
                )}
              </div>
            </div>
            <Dropdown align="end" className="d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
              <DropdownToggle variant="secondary btn-icon bg-body" size="sm" aria-label="More actions">
                <i className="ci-more-vertical fs-lg" />
              </DropdownToggle>
              <DropdownMenu className="fs-xs p-2" style={{ minWidth: 'auto' }}>
                {wishlistButton !== false && (
                  <DropdownItem as="button" onClick={wishlistButton?.onClick}>
                    <i className={`${wishlistButton?.active ? 'ci-heart-filled' : 'ci-heart'} fs-sm ms-n1 me-2`} />
                    {wishlistButton?.active
                      ? wishlistButton?.labelRemove || 'Remove from Wishlist'
                      : wishlistButton?.labelAdd || 'Add to Wishlist'}
                  </DropdownItem>
                )}
                {compareButton !== false && (
                  <DropdownItem as="button" onClick={compareButton?.onClick}>
                    <i className={`${compareButton?.active ? 'ci-check-circle' : 'ci-refresh-cw'} fs-sm ms-n1 me-2`} />
                    {compareButton?.active
                      ? compareButton?.labelRemove || 'Remove from Comparison'
                      : compareButton?.labelAdd || 'Compare'}
                  </DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
          </>
        )}
        <Link href={href} className="d-block rounded-top overflow-hidden p-3 p-sm-4">
          {badge && (
            <Badge
              bg={badge.bg}
              text={badge.color}
              className="position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3"
            >
              {badge.label}
            </Badge>
          )}
          <Image src={image.src} width={image.width} height={image.height} alt={image.alt || title} />
        </Link>
      </div>
      <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
        {reviews && (
          <div className="d-flex align-items-center gap-2 mb-2">
            <StarRating rating={reviews.rating} className="fs-xs" />
            <span className="text-body-tertiary fs-xs">({reviews.count})</span>
          </div>
        )}
        <h3 className="pb-1 mb-2">
          <Link href={href} className="d-block fs-sm fw-medium text-truncate">
            <span className="animate-target">{title}</span>
          </Link>
        </h3>
        <div className="d-flex align-items-center justify-content-between">
          <div className="h5 lh-1 mb-0">
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
          {cartButton !== false && (
            <button
              type="button"
              className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2"
              aria-label={cartButton?.label || 'Add to Cart'}
              onClick={cartButton?.onClick}
            >
              <i className="ci-shopping-cart fs-base animate-target" />
            </button>
          )}
        </div>
        {stock && (
          <div className="pt-2 mt-1">
            <ProgressBar
              now={Math.round((stock.current / stock.initial) * 100)}
              className="mb-2"
              style={{ height: 4 }}
              aria-label={stock.ariaLabel || 'Available in stock'}
            />
            <div className="text-body-secondary fs-sm">
              {stock.label || 'Available:'} <span className="text-dark-emphasis fw-medium">{stock.current}</span>
            </div>
          </div>
        )}
      </div>
      {specs && (
        <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
          <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2"></span>
          <ul className="list-unstyled d-flex flex-column gap-2 m-0">
            {Object.entries(specs).map(([key, value], index) => (
              <li key={index} className="d-flex align-items-center">
                <span className="fs-xs">{key}:</span>
                <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                <span className="text-dark-emphasis fs-xs fw-medium text-end">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </article>
)

export default ProductCardElectronics
