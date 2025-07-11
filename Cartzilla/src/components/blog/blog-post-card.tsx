import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Link from 'next/link'

interface BlogPostCardProps extends CommonComponentProps {
  horizontal?: boolean
  image: {
    src: string
    width: number
    height: number
    alt: string
  }
  href: string
  title: string
  date: string
  category?: {
    label: string
    href: string
  }
  author?: {
    name: string
    href: string
  }
  excerpt?: string
  small?: boolean
  rounded?: number
}

const BlogPostCard = ({
  horizontal,
  image,
  href,
  title,
  date,
  category,
  author,
  excerpt,
  small,
  rounded,
  ...props
}: BlogPostCardProps) => (
  <article {...props}>
    {horizontal ? (
      <div className="row align-items-start align-items-md-center gx-0 gy-4">
        <div className="col-sm-5 pe-sm-4">
          <Link
            href={href}
            className={`d-flex hover-effect-scale bg-body-tertiary ${rounded ? `rounded-${rounded}` : 'rounded'} overflow-hidden flex-md-shrink-0`}
          >
            <Image
              src={image.src}
              className="hover-effect-target"
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
          </Link>
        </div>
        <div className="col-sm-7">
          {(category || !author) && (
            <div className="nav align-items-center gap-2 pb-2 mt-n1 mb-1">
              {category && (
                <>
                  <a href={category.href} className="nav-link text-body fs-xs text-uppercase p-0">
                    {category.label}
                  </a>
                  {!author && <hr className="vr my-1 mx-1" />}
                </>
              )}
              {!author && <span className="text-body-tertiary fs-xs">{date}</span>}
            </div>
          )}
          <h3 className={`${small ? 'h6' : 'h5'} mb-0`}>
            <Link href={href} className="hover-effect-underline">
              {title}
            </Link>
          </h3>
          {excerpt && <p className="mb-0 pt-2 pt-md-3">{excerpt}</p>}
          {author && (
            <div className="nav align-items-center gap-2 fs-xs pt-3">
              <Link href={author.href} className="nav-link text-body-secondary fs-xs fw-normal p-0">
                {author.name}
              </Link>
              <hr className="vr my-1 mx-1" />
              <span className="text-body-secondary">{date}</span>
            </div>
          )}
        </div>
      </div>
    ) : (
      <>
        <Link
          href={href}
          className={`d-flex hover-effect-scale bg-body-tertiary ${rounded ? `rounded-${rounded}` : 'rounded'}  overflow-hidden`}
        >
          <Image
            src={image.src}
            className="hover-effect-target"
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        </Link>
        <div className="pt-4">
          {(category || !author) && (
            <div className="nav align-items-center gap-2 pb-2 mt-n1 mb-1">
              {category && (
                <>
                  <a href={category.href} className="nav-link text-body fs-xs text-uppercase p-0">
                    {category.label}
                  </a>
                  {!author && <hr className="vr my-1 mx-1" />}
                </>
              )}
              {!author && <span className="text-body-tertiary fs-xs">{date}</span>}
            </div>
          )}
          <h3 className={`${small ? 'h6' : 'h5'} mb-0`}>
            <Link href={href} className="hover-effect-underline">
              {title}
            </Link>
          </h3>
          {excerpt && <p className="mb-0 pt-2 pt-md-3">{excerpt}</p>}
          {author && (
            <div className="nav align-items-center gap-2 fs-xs pt-3">
              <Link href={author.href} className="nav-link text-body-secondary fs-xs fw-normal p-0">
                {author.name}
              </Link>
              <hr className="vr my-1 mx-1" />
              <span className="text-body-secondary">{date}</span>
            </div>
          )}
        </div>
      </>
    )}
  </article>
)

export default BlogPostCard
