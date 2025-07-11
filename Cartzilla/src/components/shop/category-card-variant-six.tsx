import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryCardVariantSixProps extends CommonComponentProps {
  images: [[string, string], [string, string], [string, string]]
  href: string
  title: string
  subtitle?: string
  wishlistButton?: { active?: boolean; labelAdd?: string; labelRemove?: string; onClick?: () => void } | false
}

const CategoryCardVariantSix = ({
  images,
  href,
  title,
  subtitle,
  wishlistButton,
  className,
  ...props
}: CategoryCardVariantSixProps) => (
  <div {...props} className={`position-relative animate-underline${className ? ` ${className}` : ''}`}>
    <div
      className="ratio bg-body-tertiary rounded overflow-hidden mb-1"
      style={{ '--cz-aspect-ratio': 'calc(160 / 306 * 100%)' } as React.CSSProperties}
    >
      <Image
        src={images[0][0]}
        fill
        sizes="(min-resolution: 2dppx) 612px, 400px"
        className="object-fit-cover"
        alt={images[0][1]}
      />
    </div>
    <div className="d-flex gap-1">
      <div
        className="ratio bg-body-tertiary rounded overflow-hidden"
        style={{ '--cz-aspect-ratio': 'calc(160 / 151 * 100%)' } as React.CSSProperties}
      >
        <Image
          src={images[1][0]}
          fill
          sizes="(min-resolution: 2dppx) 302px, 220px"
          className="object-fit-cover"
          alt={images[1][1]}
        />
      </div>
      <div
        className="ratio bg-body-tertiary rounded overflow-hidden"
        style={{ '--cz-aspect-ratio': 'calc(160 / 151 * 100%)' } as React.CSSProperties}
      >
        <Image
          src={images[2][0]}
          fill
          sizes="(min-resolution: 2dppx) 302px, 220px"
          className="object-fit-cover"
          alt={images[2][1]}
        />
      </div>
    </div>
    <div className="d-flex min-w-0 justify-content-between gap-2 gap-sm-3 pt-3">
      <h3 className="nav min-w-0 mb-0">
        <Link href={href} className="nav-link fs-base text-truncate stretched-link p-0">
          <span className="text-truncate animate-target">{title}</span>
        </Link>
      </h3>
      {wishlistButton !== false && (
        <button
          type="button"
          className="btn btn-sm btn-icon btn-secondary bg-transparent border-0 rounded-0 animate-pulse position-relative z-3"
          aria-label={
            wishlistButton?.active
              ? wishlistButton?.labelRemove || 'Remove from Wishlist'
              : wishlistButton?.labelAdd || 'Add to Wishlist'
          }
          onClick={wishlistButton?.onClick}
        >
          <i className={`${wishlistButton?.active ? 'ci-heart-filled' : 'ci-heart'} animate-target fs-sm`} />
        </button>
      )}
    </div>
    {subtitle && <div className="fs-xs text-body-secondary">{subtitle}</div>}
  </div>
)

export default CategoryCardVariantSix
