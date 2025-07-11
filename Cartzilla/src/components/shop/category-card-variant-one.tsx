import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryCardVariantOneProps extends CommonComponentProps {
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
  list?: { label: string; href: string }[]
}

const CategoryCardVariantOne = ({ image, title, href, list, className, ...props }: CategoryCardVariantOneProps) => (
  <div {...props} className={`hover-effect-scale${className ? ` ${className}` : ''}`}>
    <Link
      href={href}
      className={`d-block ${
        image.bg === 'none' ? '' : image.bg ? `bg-${image.bg}` : 'bg-body-tertiary'
      } rounded p-4 mb-4`}
      style={image.style}
    >
      <Image
        src={image.src}
        className="hover-effect-target"
        width={image.width}
        height={image.height}
        alt={image.alt || title}
      />
    </Link>
    <h2 className={`h6 d-flex w-100 ${list ? 'pb-2 mb-1' : 'justify-content-center mb-0'}`}>
      <Link href={href} className="animate-underline animate-target d-inline text-truncate">
        {title}
      </Link>
    </h2>
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
  </div>
)

export default CategoryCardVariantOne
