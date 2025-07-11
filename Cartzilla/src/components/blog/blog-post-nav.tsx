import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Link from 'next/link'

type Post = {
  image?: {
    src: string
    alt: string
  }
  title: string
  href: string
}

interface BlogPostNavProps extends CommonComponentProps {
  prevPost?: Post | null
  nextPost?: Post | null
}

const BlogPostNav = ({ prevPost, nextPost, ...props }: BlogPostNavProps) => (
  <div {...props}>
    <div className="nav flex-nowrap align-items-center gap-4">
      {prevPost && (
        <Link
          href={prevPost.href}
          className="nav-link flex-wrap flex-sm-nowrap justify-content-center position-relative w-50 p-0"
          style={{ maxWidth: 330 }}
        >
          <div className="d-flex align-items-center mb-2 mb-sm-0">
            <i className={`ci-chevron-left fs-xl${prevPost.image ? ' ms-n3 ms-sm-n1 me-2' : ''}`} />
            {prevPost.image && (
              <div
                className="ratio flex-shrink-0 rounded-2 overflow-hidden"
                style={{ width: 86, '--cz-aspect-ratio': 'calc(64 / 86 * 100%)' } as React.CSSProperties}
              >
                <Image
                  src={prevPost.image.src}
                  fill
                  className="object-fir-cover"
                  sizes="172px"
                  alt={prevPost.image.alt}
                />
              </div>
            )}
          </div>
          <div
            className={`h6 fs-sm hover-effect-underline stretched-link text-center text-sm-start mb-0${prevPost.image ? ' ps-3' : ''}`}
          >
            {prevPost.title}
          </div>
        </Link>
      )}
      {nextPost && (
        <Link
          href={nextPost.href}
          className="nav-link flex-wrap flex-sm-nowrap justify-content-center position-relative w-50 p-0 ms-auto"
          style={{ maxWidth: 330 }}
        >
          <div className="d-flex align-items-center order-sm-2 mb-2 mb-sm-0">
            {nextPost.image && (
              <div
                className="ratio flex-shrink-0 rounded-2 overflow-hidden"
                style={{ width: 86, '--cz-aspect-ratio': 'calc(64 / 86 * 100%)' } as React.CSSProperties}
              >
                <Image
                  src={nextPost.image.src}
                  fill
                  className="object-fir-cover"
                  sizes="172px"
                  alt={nextPost.image.alt}
                />
              </div>
            )}
            <i className={`ci-chevron-right fs-xl${nextPost.image ? ' me-n3 me-sm-n1 ms-2' : ''}`} />
          </div>
          <div
            className={`h6 fs-sm hover-effect-underline stretched-link text-center text-sm-end order-sm-1 mb-0${nextPost.image ? ' pe-3' : ''}`}
          >
            {nextPost.title}
          </div>
        </Link>
      )}
    </div>
  </div>
)

export default BlogPostNav
