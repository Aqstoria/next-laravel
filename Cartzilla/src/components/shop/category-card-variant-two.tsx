import type { PropsWithChildren, CSSProperties } from 'react'
import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryCardVariantTwoProps extends CommonComponentProps {
  image: {
    src: string
    alt?: string
  }
  title: string
  href: string
  buttonLabel?: string
  list?: { label: string; href: string }[]
}

const CategoryCardVariantTwo = ({
  image,
  title,
  href,
  buttonLabel,
  list,
  children,
  className,
  ...props
}: PropsWithChildren<CategoryCardVariantTwoProps>) => (
  <div
    {...props}
    className={`hover-effect-opacity position-relative rounded-5 overflow-hidden${className ? ` ${className}` : ''}`}
  >
    <div className="d-flex justify-content-between position-relative z-2 ps-2 ps-xl-3">
      <div className="d-flex flex-column min-w-0 p-3">
        <h2 className="h5 text-nowrap pt-2 pt-xl-3">{title}</h2>
        {list && (
          <ul className="nav flex-column gap-2 mt-n1">
            {list.map((item, index) => (
              <li key={index} className="d-flex w-100 pt-1">
                <Link
                  href={item.href}
                  className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="nav hover-effect-target opacity-0 pb-2 pb-xl-3 mt-auto">
          <Link href={href} className="nav-link animate-underline text-body-emphasis text-nowrap p-0">
            <span className="animate-target">{buttonLabel ? buttonLabel : 'Shop now'}</span>
            <i className="ci-arrow-up-right fs-base ms-1" />
          </Link>
        </div>
      </div>
      <div
        className="ratio w-100 align-self-end"
        style={{ maxWidth: 220, '--cz-aspect-ratio': 'calc(305 / 220 * 100%)' } as CSSProperties}
      >
        <Image src={image.src} fill sizes="440px" className="object-fit-cover" alt={image.alt || title} />
      </div>
    </div>
    {children}
  </div>
)

export default CategoryCardVariantTwo
