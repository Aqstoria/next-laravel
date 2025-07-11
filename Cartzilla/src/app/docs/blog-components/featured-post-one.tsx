import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Image from 'next/image'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Lightbox from '@/components/lightbox'

const FeaturedPostVariantOneDemo = () => {
  const code = `import Image from 'next/image'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Lightbox from '@/components/lightbox'

export default function FeaturedPostVariantOneDemo() {
  return (
    <Row xs={1} md={2} className="g-0 overflow-hidden rounded-5">
      <Col className="position-relative">
        <div className="ratio ratio-4x3" />
        <Image
          src="/img/blog/grid/v2/video01.jpg"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-fit-cover"
          alt="Image"
        />
        <div className="position-absolute start-0 bottom-0 d-flex align-items-end w-100 h-100 z-2 p-4">
          <Lightbox
            href="https://www.youtube.com/watch?v=X7lCwxswYnE"
            gallery="video"
            className="btn btn-lg btn-light rounded-pill m-md-2"
          >
            <i className="ci-play fs-lg ms-n1 me-2"/>
            Play
          </Lightbox>
        </div>
      </Col>
      <Col className="bg-dark py-5 px-4 px-xl-5" data-bs-theme="dark">
        <div className="py-md-2 py-xl-4 px-md-3 px-xl-4">
          <Nav className="mb-3">
            <NavLink as={Link} href="#" className="text-body fs-xs text-uppercase p-0">
              Home decoration
            </NavLink>
          </Nav>
          <h2>Decorate your home in easy steps</h2>
          <p className="text-body pb-sm-2 pb-lg-0 mb-4 mb-lg-5">
            Decorating your home can be a fun and creative process that transforms your living space.
          </p>
          <Link href="#" className="btn btn-lg btn-outline-light rounded-pill">
            Learn more
          </Link>
        </div>
      </Col>
    </Row>
  )
}`

  return (
    <section id="post-featured-1" className="docs-section pb-sm-2 mb-5">
      <h4>Featured post: Variant 1</h4>
      <DocsComponentDemo code={code}>
        <Row xs={1} md={2} className="g-0 overflow-hidden rounded-5">
          <Col className="position-relative">
            <div className="ratio ratio-4x3" />
            <Image
              src="/img/blog/grid/v2/video01.jpg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-fit-cover"
              alt="Image"
            />
            <div className="position-absolute start-0 bottom-0 d-flex align-items-end w-100 h-100 z-2 p-4">
              <Lightbox
                href="https://www.youtube.com/watch?v=X7lCwxswYnE"
                gallery="video1"
                className="btn btn-lg btn-light rounded-pill m-md-2"
              >
                <i className="ci-play fs-lg ms-n1 me-2" />
                Play
              </Lightbox>
            </div>
          </Col>
          <Col className="bg-dark py-5 px-4 px-xl-5" data-bs-theme="dark">
            <div className="py-md-2 py-xl-4 px-md-3 px-xl-4">
              <Nav className="mb-3">
                <NavLink as={Link} href="#" className="text-body fs-xs text-uppercase p-0">
                  Home decoration
                </NavLink>
              </Nav>
              <h2>Decorate your home in easy steps</h2>
              <p className="text-body pb-sm-2 pb-lg-0 mb-4 mb-lg-5">
                Decorating your home can be a fun and creative process that transforms your living space.
              </p>
              <Link href="#" className="btn btn-lg btn-outline-light rounded-pill">
                Learn more
              </Link>
            </div>
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default FeaturedPostVariantOneDemo
