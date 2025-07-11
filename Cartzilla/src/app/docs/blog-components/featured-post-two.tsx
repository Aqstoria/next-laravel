import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Image from 'next/image'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Lightbox from '@/components/lightbox'

const FeaturedPostVariantTwoDemo = () => {
  const code = `import Image from 'next/image'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Lightbox from '@/components/lightbox'

export default function FeaturedPostVariantTwoDemo() {
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <div className="position-relative h-100">
          <div className="ratio ratio-16x9" />
          <Image
            src="/img/about/v1/video-cover.jpg"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-fit-cover rounded-5"
            alt="Image"
          />
          <div className="position-absolute start-0 bottom-0 d-flex align-items-end w-100 h-100 z-2 p-4">
            <Lightbox
              href="https://www.youtube.com/watch?v=Sqqj_14wBxU"
              gallery="video"
              className="btn btn-lg btn-light rounded-pill m-md-2"
            >
              <i className="ci-play fs-lg ms-n1 me-2"/>
              Play
            </Lightbox>
          </div>
        </div>
      </Col>
      <Col>
        <div className="bg-body-tertiary rounded-5 py-5 px-4 px-sm-5">
          <div className="py-md-3 py-lg-4 py-xl-5 px-lg-4 px-xl-5">
            <h2 className="h3 pb-sm-1 pb-lg-2">The role of philanthropy in building a better world</h2>
            <p className="pb-sm-2 pb-lg-0 mb-4 mb-lg-5">
              Charitable contributions are a vital aspect of building a better world. These contributions come in
              various forms, including monetary donations...
            </p>
            <Link href="#" className="btn btn-lg btn-outline-dark">
              Learn more
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  )
}`

  return (
    <section id="post-featured-2" className="docs-section pb-sm-2 mb-5">
      <h4>Featured post: Variant 2</h4>
      <DocsComponentDemo code={code}>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <div className="position-relative h-100">
              <div className="ratio ratio-16x9" />
              <Image
                src="/img/about/v1/video-cover.jpg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-fit-cover rounded-5"
                alt="Image"
              />
              <div className="position-absolute start-0 bottom-0 d-flex align-items-end w-100 h-100 z-2 p-4">
                <Lightbox
                  href="https://www.youtube.com/watch?v=Sqqj_14wBxU"
                  gallery="video2"
                  className="btn btn-lg btn-light rounded-pill m-md-2"
                >
                  <i className="ci-play fs-lg ms-n1 me-2" />
                  Play
                </Lightbox>
              </div>
            </div>
          </Col>
          <Col>
            <div className="bg-body-tertiary rounded-5 py-5 px-4 px-sm-5">
              <div className="p-xxl-2">
                <h2 className="h3 pb-sm-1 pb-lg-2">The role of philanthropy in building a better world</h2>
                <p className="pb-sm-2 pb-lg-0 mb-4 mb-lg-5">
                  Charitable contributions are a vital aspect of building a better world. These contributions come in
                  various forms, including monetary donations...
                </p>
                <Link href="#" className="btn btn-lg btn-outline-dark">
                  Learn more
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default FeaturedPostVariantTwoDemo
