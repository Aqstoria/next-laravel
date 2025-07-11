import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
        image={{ src: posts[0].image, width: 1070, height: 694, alt: 'Image' }}
        title={posts[0].title}
        href={posts[0].href}
        category={{ label: posts[0].category.label, href: posts[0].category.href }}
        date={posts[0].date}
        rounded={4}
        className="col-md-6 col-lg-7"
      />
      <Col md={6} lg={5} className="d-flex flex-column align-content-between gap-4">
        {posts.slice(1, 4).map(({ id, image, title, href, date }: BlogPost) => (
          <article key={id} className="hover-effect-scale position-relative d-flex align-items-center ps-xl-4 mb-xl-1">
            <div className="w-100 pe-3 pe-sm-4 pe-lg-3 pe-xl-4">
              <div className="text-body-tertiary fs-xs pb-2 mb-1">{date}</div>
              <h3 className="h6 mb-2">
                <Link href={href} className="hover-effect-underline stretched-link">
                  {title}
                </Link>
              </h3>
            </div>
            <div className="w-100 rounded overflow-hidden" style={{ maxWidth: 196 }}>
              <Image src={image} width={294} height={210} className="hover-effect-target" alt="Image" />
            </div>
          </article>
        ))}
      </Col>
    </Row>
  )
}

const Loading = () => (
  <Row className="gy-5 pb-5">
    <Col md={6} lg={7}>
      <div className="position-relative placeholder-wave mb-3">
        <div
          className="placeholder rounded ratio"
          style={{ '--cz-aspect-ratio': 'calc(484 / 746 * 100%)' } as React.CSSProperties}
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
    <Col md={6} lg={5} className="d-flex flex-column align-content-between gap-4">
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="d-flex align-items-center ps-xl-4 mb-xl-1">
          <div className="w-100 pe-3 pe-sm-4 pe-lg-3 pe-xl-4">
            <div className="placeholder-glow mb-2">
              <span className="placeholder placeholder-xs col-4"></span>
            </div>
            <h6 className="placeholder-glow mb-0">
              <span className="placeholder placeholder-sm col-12"></span>
              <span className="placeholder placeholder-sm col-8"></span>
            </h6>
          </div>
          <div className="placeholder-wave w-100 rounded overflow-hidden" style={{ maxWidth: 196 }}>
            <div
              className="placeholder rounded ratio"
              style={{ '--cz-aspect-ratio': 'calc(140 / 196 * 100%)' } as React.CSSProperties}
            />
            <i className="ci-image position-absolute top-50 start-50 translate-middle fs-2 opacity-40" />
          </div>
        </div>
      ))}
    </Col>
  </Row>
)

const BlogLatestPostsVariantOne = ({ dataUrl }: { dataUrl: string }) => (
  <Suspense fallback={<Loading />}>
    <RenderPosts dataUrl={dataUrl} />
  </Suspense>
)

export default BlogLatestPostsVariantOne
