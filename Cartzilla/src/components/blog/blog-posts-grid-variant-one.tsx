import { Suspense } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BlogPostCard from './blog-post-card'
import { data } from '@/lib/data'

interface BlogPostsGridVariantOneProps {
  dataUrl: string
  dataSlice?: [number, number]
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
  date: string
}

const RenderPosts = async ({ dataUrl, dataSlice, className }: BlogPostsGridVariantOneProps) => {
  const posts = await data<BlogPost[]>(dataUrl)
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <Row xs={1} sm={2} className={`gy-5${className ? ` ${className}` : ''}`}>
      {(dataSlice ? posts.slice(dataSlice[0], dataSlice[1]) : posts).map(
        ({ id, image, title, href, category, date }: BlogPost) => (
          <BlogPostCard
            key={id}
            image={{ src: image, width: 624, height: 458, alt: 'Image' }}
            title={title}
            href={href}
            category={{ label: category.label, href: category.href }}
            date={date}
            className="col"
          />
        )
      )}
    </Row>
  )
}

const Loading = ({ dataSlice, className }: { dataSlice?: [number, number]; className?: string }) => (
  <Row xs={1} sm={2} className={`gy-5${className ? ` ${className}` : ''}`}>
    {Array.from({ length: dataSlice ? dataSlice[1] - dataSlice[0] : 6 }, (_, index) => (
      <Col key={index} as="article">
        <div className="position-relative placeholder-wave mb-3">
          <div
            className="placeholder rounded ratio"
            style={{ '--cz-aspect-ratio': 'calc(305 / 416 * 100%)' } as React.CSSProperties}
          />
          <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
        </div>
        <p className="placeholder-glow mb-2">
          <span className="placeholder placeholder-xs col-4 me-3"></span>
          <span className="placeholder placeholder-xs col-4"></span>
        </p>
        <h5 className="placeholder-glow mb-0">
          <span className="placeholder placeholder-sm col-12"></span>
          <span className="placeholder placeholder-sm col-8"></span>
        </h5>
      </Col>
    ))}
  </Row>
)

const BlogPostsGridVariantOne = ({ dataUrl, dataSlice, className }: BlogPostsGridVariantOneProps) => (
  <Suspense fallback={<Loading dataSlice={dataSlice} className={className} />}>
    <RenderPosts dataUrl={dataUrl} dataSlice={dataSlice} className={className} />
  </Suspense>
)

export default BlogPostsGridVariantOne
