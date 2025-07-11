import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryCardVariantFourProps extends CommonComponentProps {
  image: {
    src: string
    alt?: string
    square?: boolean
    bg?: string
    style?: React.CSSProperties
  }
  title: string
  href: string
  list?: { label: string; href: string }[]
}

const CategoryCardVariantFour = ({ image, title, href, list, ...props }: CategoryCardVariantFourProps) => (
  <div {...props}>
    <div className="category-card w-100 text-center px-1 px-lg-2 px-xxl-3" style={{ minWidth: 165 }}>
      <div className="category-card-body">
        <Link href={href} className="d-block text-decoration-none">
          <div
            className={`${
              image.bg === 'none' ? '' : image.bg ? `bg-${image.bg}` : 'bg-body-tertiary'
            } ${image.square ? 'rounded' : 'rounded-pill'} mb-3 mx-auto`}
            style={image.style ? { ...image.style, maxWidth: 164 } : { maxWidth: 164 }}
          >
            <div className={`ratio ratio-1x1 ${image.square ? 'rounded' : 'rounded-pill'} overflow-hidden`}>
              <Image src={image.src} fill sizes="328px" className="object-fit-cover" alt={image.alt || title} />
            </div>
          </div>
          <h3 className="category-card-title h6 text-truncate">{title}</h3>
        </Link>
        {list && (
          <ul className="category-card-list nav w-100 flex-column gap-1 pt-3">
            {list.map((item, index) => (
              <li key={index} className="w-100">
                <Link
                  href={item.href}
                  className="nav-link justify-content-center min-w-0 w-100 fw-normal hover-effect-underline p-0"
                >
                  <span className="text-truncate">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
)

export default CategoryCardVariantFour
