import { Suspense } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BlogPostCard from './blog-post-card'
import { data } from '@/lib/data'

interface BlogPostsListProps {
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
  excerpt: string
}

const RenderPosts = async ({ dataUrl, dataSlice, className }: BlogPostsListProps) => {
  const posts = await data<BlogPost[]>(dataUrl)
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <div className={`d-flex flex-column gap-4 mt-n3${className ? ` ${className}` : ''}`}>
      {(dataSlice ? posts.slice(dataSlice[0], dataSlice[1]) : posts).map(
        ({ id, image, title, href, category, date, excerpt }: BlogPost) => (
          <BlogPostCard
            key={id}
            horizontal
            image={{ src: image, width: 500, height: 368, alt: 'Image' }}
            title={title}
            href={href}
            category={{ label: category.label, href: category.href }}
            date={date}
            excerpt={excerpt}
            className="pt-3"
          />
        )
      )}
    </div>
  )
}

const Loading = ({ dataSlice, className }: { dataSlice?: [number, number]; className?: string }) => (
  <div className="d-flex flex-column gap-4 mt-n3">
    {Array.from({ length: dataSlice ? dataSlice[1] - dataSlice[0] : 4 }, (_, index) => (
      <Row key={index} as="article" className="align-items-start align-items-md-center gx-0 gy-3 pt-3">
        <Col sm={5} className="pe-sm-4">
          <div className="position-relative placeholder-wave">
            <div
              className="placeholder rounded ratio"
              style={{ '--cz-aspect-ratio': 'calc(226 / 306 * 100%)' } as React.CSSProperties}
            />
            <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
          </div>
        </Col>
        <Col sm={7}>
          <p className="placeholder-glow mb-2">
            <span className="placeholder placeholder-xs col-4 me-3"></span>
            <span className="placeholder placeholder-xs col-4"></span>
          </p>
          <h5 className="placeholder-glow mb-2">
            <span className="placeholder placeholder-sm col-12"></span>
          </h5>
          <p className="placeholder-glow mb-0">
            <span className="placeholder placeholder-xs col-12"></span>
            <span className="placeholder placeholder-xs col-12"></span>
            <span className="placeholder placeholder-xs col-7"></span>
          </p>
        </Col>
      </Row>
    ))}
  </div>
)

const BlogPostsList = ({ dataUrl, dataSlice, className }: BlogPostsListProps) => (
  <Suspense fallback={<Loading dataSlice={dataSlice} className={className} />}>
    <RenderPosts dataUrl={dataUrl} dataSlice={dataSlice} className={className} />
  </Suspense>
)

export default BlogPostsList
