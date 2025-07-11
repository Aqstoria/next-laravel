import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Link from 'next/link'
import Badge from 'react-bootstrap/Badge'
import CountInput from '../forms/count-input'

interface ProductCardGroceryProps extends CommonComponentProps {
  image: {
    src: string
    width: number
    height: number
    alt?: string
  }
  href: string
  title: string
  description?: string
  price: {
    current: number
    original?: number
    prefix?: string | false
    suffix?: string
  }
  badge?: {
    label: string
    bg?: string
    color?: string
  }
  cartButton?:
    | {
        defaultValue?: number
        value?: number
        incrementBtnLabel?: string
        decrementBtnLabel?: string
        onChange?: (value: number) => void
        onIncrement?: (value: number) => void
        onDecrement?: (value: number) => void
      }
    | false
  wishlistButton?: { active?: boolean; labelAdd?: string; labelRemove?: string; onClick?: () => void } | false
}

const ProductCardGrocery = ({
  image,
  href,
  title,
  description,
  price,
  badge,
  cartButton,
  wishlistButton,
  ...props
}: ProductCardGroceryProps) => {
  return (
    <article {...props}>
      <div className="card product-card h-100 bg-transparent border-0 shadow-none">
        <div className="position-relative z-2">
          {badge && (
            <Badge
              bg={badge.bg}
              text={badge.color}
              className="position-absolute top-0 start-0 z-2 mt-1 mt-sm-2 ms-1 ms-sm-2"
            >
              {badge.label}
            </Badge>
          )}
          {wishlistButton !== false && (
            <button
              type="button"
              className="btn btn-icon btn-sm btn-secondary animate-pulse fs-sm bg-body border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
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
          <Link href={href} className="d-block p-2 p-lg-3">
            <Image src={image.src} width={image.width} height={image.height} alt={image.alt || title} />
          </Link>
          {cartButton !== false && (
            <div className="position-absolute w-100 start-0 bottom-0">
              <div className="d-flex justify-content-end px-2 px-lg-3 pb-2 pb-lg-3">
                <CountInput
                  collapsible
                  size="sm"
                  defaultValue={cartButton?.defaultValue}
                  value={cartButton?.value}
                  incrementBtnLabel={cartButton?.incrementBtnLabel}
                  decrementBtnLabel={cartButton?.decrementBtnLabel}
                  onChange={cartButton?.onChange}
                  onIncrement={cartButton?.onIncrement}
                  onDecrement={cartButton?.onDecrement}
                />
              </div>
            </div>
          )}
        </div>
        <div className="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2">
          <div className="h6 mb-2">
            {price.prefix === false ? '' : price.prefix || '$'}
            {price.current.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            {price.suffix || ''}{' '}
            {price.original && (
              <del className="text-body-tertiary fs-sm fw-normal ms-1">
                {price.prefix === false ? '' : price.prefix || '$'}
                {price.original.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                {price.suffix || ''}
              </del>
            )}
          </div>
          <h3 className="fs-sm lh-base mb-0">
            <Link href={href} className="hover-effect-underline fw-normal">
              {title}
            </Link>
          </h3>
        </div>
        {description && (
          <div className="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">{description}</div>
        )}
      </div>
    </article>
  )
}

export default ProductCardGrocery
