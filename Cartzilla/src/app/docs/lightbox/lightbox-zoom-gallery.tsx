import Image from 'next/image'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Lightbox from '@/components/lightbox'

const LightboxZoomGalleryDemo = () => {
  const code = `import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Lightbox from '@/components/lightbox'

export default function LightboxZoomGalleryDemo() {
  return (
    <Row xs={2} sm={3} className="g-3 g-xl-4">
      {[
        '/img/shop/fashion/product/02.png',
        '/img/shop/fashion/product/04.png',
        '/img/shop/fashion/product/05.png',
      ].map((image, index) => (
        <Col key={index}>
          <Lightbox
            href={image}
            gallery="image-gallery"
            className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded overflow-hidden"
          >
            <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2"/>
            <Image
              src={image}
              width={306}
              height={342}
              className="hover-effect-target bg-body-tertiary rounded"
              alt="Image"
            />
          </Lightbox>
        </Col>
      ))}
    </Row>
  )
}`

  return (
    <section id="lightbox-zoom" className="docs-section pb-sm-2 mb-5">
      <h4>Zoom effect gallery</h4>
      <DocsComponentDemo code={code}>
        <Row xs={2} sm={3} className="g-3 g-xl-4">
          {[
            '/img/shop/fashion/product/02.png',
            '/img/shop/fashion/product/04.png',
            '/img/shop/fashion/product/05.png',
          ].map((image, index) => (
            <Col key={index}>
              <Lightbox
                href={image}
                gallery="image-gallery"
                className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded overflow-hidden"
              >
                <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
                <Image
                  src={image}
                  width={306}
                  height={342}
                  className="hover-effect-target bg-body-tertiary rounded"
                  alt="Image"
                />
              </Lightbox>
            </Col>
          ))}
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default LightboxZoomGalleryDemo
