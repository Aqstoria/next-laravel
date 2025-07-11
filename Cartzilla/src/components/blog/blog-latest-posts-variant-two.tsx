import { Suspense } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BlogPostCard from './blog-post-card'
import { data } from '@/lib/data'

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
}

const RenderPosts = async ({ dataUrl }: { dataUrl: string }) => {
  const posts = await data<BlogPost[]>(dataUrl)
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <Row className="gy-5 pb-5">
      <BlogPostCard
        key={posts[0].id}
        image={{ src: posts[0].image, width: 954, height: 750, alt: 'Image' }}
        title={posts[0].title}
        href={posts[0].href}
        category={{ label: posts[0].category.label, href: posts[0].category.href }}
        date={posts[0].date}
        rounded={4}
        className="col-md-6"
      />
      <Col md={6}>
        <Row xs={1} sm={2} className="gy-5">
          {posts.slice(1, 3).map(({ id, image, title, href, category, date }: BlogPost) => (
            <Col key={id}>
              <BlogPostCard
                image={{ src: image, width: 480, height: 480, alt: 'Image' }}
                title={title}
                href={href}
                category={{ label: category.label, href: category.href }}
                date={date}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

const Loading = () => (
  <Row className="gy-5 pb-5">
    <Col md={6}>
      <div className="position-relative placeholder-wave mb-3">
        <div
          className="placeholder rounded ratio"
          style={{ '--cz-aspect-ratio': 'calc(750 / 954 * 100%)' } as React.CSSProperties}
        />
        <i className="ci-image position-absolute top-50 start-50 translate-middle display-4 opacity-40 mb-0" />
      </div>
      <p className="placeholder-glow mb-2">
        <span className="placeholder placeholder-xs col-3 col-lg-2 me-3"></span>
        <span className="placeholder placeholder-xs col-3 col-lg-2"></span>
      </p>
      <h5 className="placeholder-glow mb-0">
        <span className="placeholder placeholder-sm col-12"></span>
        <span className="placeholder placeholder-sm col-8"></span>
      </h5>
    </Col>
    <Col md={6}>
      <Row xs={1} sm={2} className="gy-5">
        {Array.from({ length: 2 }, (_, index) => (
          <Col key={index}>
            <div className="position-relative placeholder-wave mb-3">
              <div className="placeholder rounded ratio ratio-1x1" />
              <i className="ci-image position-absolute top-50 start-50 translate-middle display-4 opacity-40 mb-0" />
            </div>
            <p className="placeholder-glow mb-2">
              <span className="placeholder placeholder-xs col-3 col-lg-2 me-3"></span>
              <span className="placeholder placeholder-xs col-3 col-lg-2"></span>
            </p>
            <h5 className="placeholder-glow mb-0">
              <span className="placeholder placeholder-sm col-12"></span>
              <span className="placeholder placeholder-sm col-8"></span>
            </h5>
          </Col>
        ))}
      </Row>
    </Col>
  </Row>
)

const BlogLatestPostsVariantTwo = ({ dataUrl }: { dataUrl: string }) => (
  <Suspense fallback={<Loading />}>
    <RenderPosts dataUrl={dataUrl} />
  </Suspense>
)

export default BlogLatestPostsVariantTwo
