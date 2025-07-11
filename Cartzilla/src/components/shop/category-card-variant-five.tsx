import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryCardVariantFiveProps extends CommonComponentProps {
  image: {
    src: string
    width: number
    height: number
    alt?: string
  }
  title: string
  href: string
}

const CategoryCardVariantFive = ({ image, title, href, className, ...props }: CategoryCardVariantFiveProps) => (
  <Link
    href={href}
    className={`vstack position-relative animate-underline hover-effect-scale rounded-4 overflow-hidden text-dark-emphasis fw-medium text-decoration-none shadow${className ? ` ${className}` : ''}`}
    {...props}
  >
    <div className="position-relative z-2 overflow-hidden">
      <Image
        src={image.src}
        className="hover-effect-target"
        width={image.width}
        height={image.height}
        alt={image.alt || title}
      />
    </div>
    <div className="position-relative z-2 text-center py-3">
      <div className="animate-target d-inline">{title}</div>
    </div>
    <span className="position-absolute top-0 start-0 w-100 h-100 bg-white d-none-dark"></span>
    <span
      className="position-absolute top-0 start-0 w-100 h-100 bg-white d-none d-block-dark"
      style={{ opacity: 0.07 }}
    ></span>
  </Link>
)

export default CategoryCardVariantFive
