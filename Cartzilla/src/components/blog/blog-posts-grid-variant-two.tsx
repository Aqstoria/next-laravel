import { Suspense } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BlogPostCard from './blog-post-card'
import { data } from '@/lib/data'

interface BlogPostsGridVariantTwoProps {
  dataUrl: string
  dataSlice?: [number, number]
  columns?: 2 | 4
  className?: string
}

interface BlogPost {
  id: string
  image: string
  title: string
  href: string
  category: {
    label: string
    href: string
  }
  author: {
    name: string
    href: string
  }
  date: string
}

const RenderPosts = async ({ dataUrl, columns = 2, dataSlice, className }: BlogPostsGridVariantTwoProps) => {
  const posts = await data<BlogPost[]>(dataUrl)
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <Row
      xs={1}
      sm={2}
      md={columns === 4 ? 3 : 2}
      lg={columns === 4 ? 4 : 2}
      className={`gy-5${className ? ` ${className}` : ''}`}
    >
      {(dataSlice ? posts.slice(dataSlice[0], dataSlice[1]) : posts).map(
        ({ id, image, title, href, category, author, date }: BlogPost) => (
          <BlogPostCard
            {...(columns === 4 && { small: true })}
            key={id}
            image={{ src: image, width: columns === 4 ? 480 : 954, height: columns === 4 ? 408 : 750, alt: 'Image' }}
            title={title}
            href={href}
            category={{ label: category.label, href: category.href }}
            author={{ name: author.name, href: author.href }}
            date={date}
            rounded={4}
            className="col"
          />
        )
      )}
    </Row>
  )
}

const Loading = ({
  dataSlice,
  columns,
  className,
}: {
  dataSlice?: [number, number]
  columns?: 2 | 4
  className?: string
}) => (
  <Row
    xs={1}
    sm={2}
    md={columns === 4 ? 3 : 2}
    lg={columns === 4 ? 4 : 2}
    className={`gy-5${className ? ` ${className}` : ''}`}
  >
    {Array.from({ length: dataSlice ? dataSlice[1] - dataSlice[0] : 4 }, (_, index) => (
      <Col key={index} as="article">
        <div className="position-relative placeholder-wave mb-3">
          <div
            className="placeholder rounded-4 ratio"
            style={
              columns === 4
                ? ({ '--cz-aspect-ratio': 'calc(260 / 306 * 100%)' } as React.CSSProperties)
                : ({ '--cz-aspect-ratio': 'calc(466 / 636 * 100%)' } as React.CSSProperties)
            }
          />
          <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
        </div>
        <p className="placeholder-glow mb-2">
          <span className="placeholder placeholder-xs col-4"></span>
        </p>
        {columns === 4 ? (
          <h6 className="placeholder-glow mb-2">
            <span className="placeholder placeholder-sm col-12"></span>
            <span className="placeholder placeholder-sm col-8"></span>
          </h6>
        ) : (
          <h5 className="placeholder-glow mb-2">
            <span className="placeholder placeholder-sm col-12"></span>
          </h5>
        )}
        <p className="placeholder-glow mb-0">
          <span className="placeholder placeholder-xs col-4 me-3"></span>
          <span className="placeholder placeholder-xs col-4"></span>
        </p>
      </Col>
    ))}
  </Row>
)

const BlogPostsGridVariantTwo = ({ dataUrl, dataSlice, columns = 2, className }: BlogPostsGridVariantTwoProps) => (
  <Suspense fallback={<Loading dataSlice={dataSlice} className={className} />}>
    <RenderPosts dataUrl={dataUrl} dataSlice={dataSlice} columns={columns} className={className} />
  </Suspense>
)

export default BlogPostsGridVariantTwo
