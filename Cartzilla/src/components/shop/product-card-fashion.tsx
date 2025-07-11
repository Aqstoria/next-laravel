import { useId } from 'react'
import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Link from 'next/link'
import Badge from 'react-bootstrap/Badge'

interface ProductCardFashionProps extends CommonComponentProps {
  image: {
    src: string
    width: number
    height: number
    alt?: string
    bg?: string
    style?: React.CSSProperties
  }
  title: string
  href: string
  price: {
    current: number
    original?: number
    prefix?: string | false
    suffix?: string
  }
  sizes?: string[]
  colors?: {
    toggles: { value: string; hex: string }[]
    label?: string
    onChange?: (color: string) => void
  }
  badge?: {
    label: string
    bg?: string
    color?: string
  }
  wishlistButton?: { active?: boolean; labelAdd?: string; labelRemove?: string; onClick?: () => void } | false
}

const ProductCardFashion = ({
  image,
  title,
  href,
  price,
  sizes,
  colors,
  badge,
  wishlistButton,
  ...props
}: ProductCardFashionProps) => {
  const id = useId()
  const colorGroupId = `color-${id}`

  return (
    <article {...props}>
      <div className="animate-underline hover-effect-opacity">
        <div className="position-relative mb-3">
          {badge && (
            <Badge
              bg={badge.bg}
              text={badge.color}
              className="position-absolute top-0 start-0 z-2 mt-2 ms-2 mt-sm-3 ms-sm-3"
            >
              {badge.label}
            </Badge>
          )}
          {wishlistButton !== false && (
            <button
              type="button"
              className="btn btn-icon btn-secondary animate-pulse fs-base bg-transparent border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
              aria-label={
                wishlistButton?.active
                  ? wishlistButton?.labelRemove || 'Remove from Wishlist'
                  : wishlistButton?.labelAdd || 'Add to Wishlist'
              }
              onClick={wishlistButton?.onClick}
            >
              <i className={`${wishlistButton?.active ? 'ci-heart-filled' : 'ci-heart'} animate-target`} />
            </button>
          )}
          <Link
            href={href}
            className={`d-flex ${
              image.bg === 'none' ? '' : image.bg ? `bg-${image.bg}` : 'bg-body-tertiary'
            } rounded p-3`}
            style={image.style}
          >
            <Image src={image.src} width={image.width} height={image.height} alt={image.alt || title} />
          </Link>
          {sizes && sizes.length > 0 && (
            <div className="hover-effect-target position-absolute start-0 bottom-0 w-100 z-2 opacity-0 pb-2 pb-sm-3 px-2 px-sm-3">
              <div className="d-flex align-items-center justify-content-center gap-2 gap-xl-3 bg-body rounded-2 p-2">
                {sizes.slice(0, 4).map((size) => (
                  <span key={size} className="fs-xs fw-medium text-secondary-emphasis py-1 px-sm-2">
                    {size}
                  </span>
                ))}
                {sizes.length > 4 && (
                  <div className="nav">
                    <Link href={href} className="nav-link fs-xs text-body-tertiary py-1 px-2">
                      +{sizes.length - 4}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="nav mb-2">
          <Link href={href} className="nav-link animate-target min-w-0 text-dark-emphasis p-0">
            <span className="text-truncate">{title}</span>
          </Link>
        </div>
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
        {colors && colors.toggles.length > 0 && (
          <div className="position-relative pt-2">
            <div className="hover-effect-target fs-xs text-body-secondary opacity-100">
              +{colors.toggles.length - 1} {colors.label || 'colors'}
            </div>
            <div className="hover-effect-target d-flex gap-2 position-absolute top-0 start-0 opacity-0">
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
          </div>
        )}
      </div>
    </article>
  )
}

export default ProductCardFashion
