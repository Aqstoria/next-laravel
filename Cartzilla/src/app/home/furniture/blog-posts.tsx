import { Suspense } from 'react'
import { data } from '@/lib/data'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BlogPostCard from '@/components/blog/blog-post-card'

interface BlogPost {
  id: string
  image: string
  title: string
  href: string
  date: string
  category: {
    label: string
    href: string
  }
  author: {
    name: string
    href: string
  }
}

const RenderPosts = async () => {
  const posts = await data<BlogPost[]>('/public/data/furniture/featured-blog-posts.json')
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <Row className="gy-5 mb-xxl-3">
      <BlogPostCard
        key={posts[0].id}
        image={{ src: posts[0].image, width: 954, height: 750, alt: 'Image' }}
        title={posts[0].title}
        href={posts[0].href}
        category={{ label: posts[0].category.label, href: posts[0].category.href }}
        author={{ name: posts[0].author.name, href: posts[0].author.href }}
        date={posts[0].date}
        rounded={4}
        className="col-md-6"
      />
      <Col md={6}>
        <Row xs={1} sm={2} className="gy-5">
          {posts.slice(1, 3).map(({ id, image, title, href, category, author, date }: BlogPost) => (
            <Col key={id}>
              <BlogPostCard
                small
                image={{ src: image, width: 480, height: 408, alt: 'Image' }}
                title={title}
                href={href}
                category={{ label: category.label, href: category.href }}
                author={{ name: author.name, href: author.href }}
                date={date}
                rounded={4}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

const Loading = () => (
  <Row className="gy-5 mb-xxl-3">
    <Col md={6}>
      <div className="position-relative placeholder-wave mb-2">
        <div
          className="placeholder rounded ratio"
          style={{ '--cz-aspect-ratio': 'calc(750 / 954 * 100%)' } as React.CSSProperties}
        />
        <i className="ci-image position-absolute top-50 start-50 translate-middle display-4 opacity-40 mb-0" />
      </div>
      <p className="placeholder-glow mb-1">
        <span className="placeholder placeholder-xs col-5" />
      </p>
      <h5 className="placeholder-glow mb-1">
        <span className="placeholder placeholder-sm col-12" />
      </h5>
      <p className="placeholder-glow mb-0">
        <span className="placeholder placeholder-xs col-4 col-lg-2 me-3" />
        <span className="placeholder placeholder-xs col-4 col-lg-2" />
      </p>
    </Col>
    <Col md={6}>
      <Row xs={1} sm={2} className="gy-5">
        {Array.from({ length: 2 }, (_, index) => (
          <Col key={index}>
            <div className="position-relative placeholder-wave mb-2">
              <div className="placeholder rounded ratio ratio-1x1" />
              <i className="ci-image position-absolute top-50 start-50 translate-middle display-5 opacity-40 mb-0" />
            </div>
            <p className="placeholder-glow mb-1">
              <span className="placeholder placeholder-xs col-5" />
            </p>
            <h6 className="placeholder-glow mb-1">
              <span className="placeholder placeholder-sm col-12" />
              <span className="placeholder placeholder-sm col-8" />
            </h6>
            <p className="placeholder-glow mb-0">
              <span className="placeholder placeholder-xs col-4 col-lg-2 me-3" />
              <span className="placeholder placeholder-xs col-4 col-lg-2" />
            </p>
          </Col>
        ))}
      </Row>
    </Col>
  </Row>
)

// Note: async means that this component will be server-side rendered
const BlogPostsFurniture = async () => (
  <Suspense fallback={<Loading />}>
    <RenderPosts />
  </Suspense>
)

export default BlogPostsFurniture
