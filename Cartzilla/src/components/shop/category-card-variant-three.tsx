import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryCardVariantThreeProps extends CommonComponentProps {
  image: {
    src: string
    alt?: string
  }
  title: string
  href: string
  eyebrowText?: string
  buttonLabel?: string
}

const CategoryCardVariantThree = ({
  image,
  title,
  href,
  eyebrowText,
  buttonLabel,
  className,
  ...props
}: CategoryCardVariantThreeProps) => (
  <div
    {...props}
    className={`position-relative d-flex justify-content-between align-items-center bg-primary-subtle rounded-5 overflow-hidden ps-2 ps-xl-3${className ? ` ${className}` : ''}`}
  >
    <div className="d-flex flex-column pt-4 px-3 pb-3">
      {eyebrowText && <p className="fs-xs pb-2 mb-1">{eyebrowText}</p>}
      <h2 className="h5 mb-2 mb-xxl-3">{title}</h2>
      <div className="nav">
        <Link href={href} className="nav-link animate-underline stretched-link text-body-emphasis text-nowrap px-0">
          <span className="animate-target">{buttonLabel ? buttonLabel : 'Shop now'}</span>
          <i className="ci-chevron-right fs-base ms-1" />
        </Link>
      </div>
    </div>
    <div
      className="ratio w-100 align-self-end rtl-flip"
      style={{ maxWidth: 216, '--cz-aspect-ratio': 'calc(240 / 216 * 100%)' } as React.CSSProperties}
    >
      <Image src={image.src} fill sizes="432px" className="object-fit-cover" alt={image.alt || title} />
    </div>
  </div>
)

export default CategoryCardVariantThree
