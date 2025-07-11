import { useId } from 'react'
import type { CommonComponentProps } from '@/types/common-component-props'
import Link from 'next/link'
import Badge from 'react-bootstrap/Badge'
import ImageSwapOnHover from '../image/image-swap-on-hover'

interface ProductCardFurnitureProps extends CommonComponentProps {
  image: {
    src: [string, string]
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
  colors?: {
    toggles: { value: string; hex: string }[]
    onChange?: (color: string) => void
  }
  badge?: {
    label: string
    bg?: string
    color?: string
  }
  active?: boolean
  outOfStock?: boolean
  cartButton?: { label?: string; onClick?: () => void } | false
  notifyButton?: { label?: string; onClick?: () => void } | false
  wishlistButton?: { active?: boolean; labelAdd?: string; labelRemove?: string; onClick?: () => void } | false
}

const ProductCardFurniture = ({
  image,
  title,
  href,
  price,
  colors,
  badge,
  cartButton,
  notifyButton,
  wishlistButton,
  active,
  outOfStock,
  className,
  ...props
}: ProductCardFurnitureProps) => {
  const id = useId()
  const colorGroupId = `color-${id}`

  return (
    <article {...props} className={`animate-underline${className ? ` ${className}` : ''}`}>
      <Link
        href={href}
        className={`hover-effect-opacity position-relative d-block mb-3${outOfStock ? ' opacity-50 pe-none' : ''}`}
      >
        {badge && (
          <div className="position-absolute top-0 start-0 z-2 mt-2 mt-sm-3 ms-2 ms-sm-3">
            <Badge bg={badge.bg} text={badge.color}>
              {badge.label}
            </Badge>
          </div>
        )}
        <ImageSwapOnHover
          imageSwapFrom={{
            src: image.src[0],
            width: image.width,
            height: image.height,
            alt: image.alt || title,
          }}
          imageSwapTo={{
            src: image.src[1],
            width: image.width,
            height: image.height,
            alt: image.alt || title,
          }}
          active={active}
          className="rounded-4"
        />
      </Link>
      {colors && colors.toggles.length > 0 && (
        <div className="d-flex gap-2 mb-3">
          {colors.toggles.map(({ value, hex }, index) => {
            const uniqueId = `${colorGroupId}-${index}`
            return (
              <div key={index}>
                <input
                  type="radio"
                  className="btn-check"
                  name={colorGroupId}
                  id={uniqueId}
                  defaultChecked={index === 0}
                  onChange={() => colors.onChange?.(value)}
                />
                <label htmlFor={uniqueId} className="btn btn-color fs-base" style={{ color: hex }}>
                  <span className="visually-hidden">{value}</span>
                </label>
              </div>
            )
          })}
        </div>
      )}
      <h3 className="mb-2">
        <Link href={href} className="d-block fs-sm fw-medium text-truncate">
          <span className="animate-target">{title}</span>
        </Link>
      </h3>
      <div className="h6 mb-0">
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
      {(cartButton !== false || wishlistButton !== false) && (
        <div className="d-flex gap-2 pt-3">
          {outOfStock ? (
            <>
              {notifyButton !== false && (
                <button
                  type="button"
                  className="btn btn-secondary min-w-0 w-100 rounded-pill px-3"
                  onClick={notifyButton?.onClick}
                >
                  <span className="text-truncate">{notifyButton?.label || 'Notify of availability'}</span>
                </button>
              )}
            </>
          ) : (
            <>
              {cartButton !== false && (
                <button type="button" className="btn btn-dark w-100 rounded-pill px-3" onClick={cartButton?.onClick}>
                  {cartButton?.label || 'Add to Cart'}
                </button>
              )}
            </>
          )}
          {wishlistButton !== false && (
            <button
              type="button"
              className="btn btn-icon btn-secondary rounded-circle animate-pulse"
              aria-label={
                wishlistButton?.active
                  ? wishlistButton?.labelRemove || 'Remove from Wishlist'
                  : wishlistButton?.labelAdd || 'Add to Wishlist'
              }
              onClick={wishlistButton?.onClick}
            >
              <i className={`${wishlistButton?.active ? 'ci-heart-filled' : 'ci-heart'} fs-base animate-target`} />
            </button>
          )}
        </div>
      )}
    </article>
  )
}

export default ProductCardFurniture
