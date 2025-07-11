import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ImageZoom from '@/components/image/image-zoom'
import StarRating from '@/components/reviews/star-rating'

const ImageZoomExternalPaneDemo = () => {
  const code = `import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ImageZoom from '@/components/image/image-zoom'
import StarRating from '@/components/reviews/star-rating'

export default function ImageZoomExternalPaneDemo() {
  return (
    <Row className="align-items-md-center justify-content-center g-0">
      <Col xs={10} sm={6}>
        <ImageZoom
          src="/img/shop/electronics/product/gallery/01.png"
          zoomSrc="/img/shop/electronics/product/gallery/01.png"
          paneContainerId="zoomPane"
          hoverDelay={300}
          width={636}
          height={636}
          alt="Image"
        />
      </Col>
      <Col sm={6} lg={5}>
        <div className="position-relative p-2" id="zoomPane">
          <div className="d-none d-md-flex align-items-center gap-2 text-decoration-none mb-3">
            <StarRating rating={4.5} className="fs-sm" />
            <span className="text-body-tertiary fs-xs">68 reviews</span>
          </div>
          <h2 className="h4">Apple iPhone 14 Plus 128GB</h2>
          <ul className="list-unstyled">
            <li className="form-label fw-semibold m-0">
              Model:{' '}
              <span className="text-body fw-normal" id="colorOption">
                128GB
              </span>
            </li>
            <li className="form-label fw-semibold m-0">
              Color:{' '}
              <span className="text-body fw-normal" id="colorOption">
                Gray blue
              </span>
            </li>
            <li className="form-label fw-semibold m-0">
              Capacity:{' '}
              <span className="text-body fw-normal" id="colorOption">
                128GB
              </span>
            </li>
          </ul>
          <div className="h4 mb-4">$940.00</div>
          <Button size="lg" className="animate-slide-end order-sm-2 order-md-4 order-lg-2">
            <i className="ci-shopping-cart fs-lg animate-target me-2"/>
            Add to cart
          </Button>
        </div>
      </Col>
    </Row>
  )
}`

  return (
    <section id="img-zoom-external-pane" className="docs-section pb-sm-2 mb-5">
      <h4>External zoom pane</h4>
      <DocsComponentDemo code={code}>
        <Row className="align-items-md-center justify-content-center g-0">
          <Col xs={10} sm={6}>
            <ImageZoom
              src="/img/shop/electronics/product/gallery/01.png"
              zoomSrc="/img/shop/electronics/product/gallery/01.png"
              paneContainerId="zoomPane"
              hoverDelay={300}
              width={636}
              height={636}
              alt="Image"
            />
          </Col>
          <Col sm={6} lg={5}>
            <div className="position-relative p-2" id="zoomPane">
              <div className="d-none d-md-flex align-items-center gap-2 text-decoration-none mb-3">
                <StarRating rating={4.5} className="fs-sm" />
                <span className="text-body-tertiary fs-xs">68 reviews</span>
              </div>
              <h2 className="h4">Apple iPhone 14 Plus 128GB</h2>
              <ul className="list-unstyled">
                <li className="form-label fw-semibold m-0">
                  Model:{' '}
                  <span className="text-body fw-normal" id="colorOption">
                    128GB
                  </span>
                </li>
                <li className="form-label fw-semibold m-0">
                  Color:{' '}
                  <span className="text-body fw-normal" id="colorOption">
                    Gray blue
                  </span>
                </li>
                <li className="form-label fw-semibold m-0">
                  Capacity:{' '}
                  <span className="text-body fw-normal" id="colorOption">
                    128GB
                  </span>
                </li>
              </ul>
              <div className="h4 mb-4">$940.00</div>
              <Button size="lg" className="animate-slide-end order-sm-2 order-md-4 order-lg-2">
                <i className="ci-shopping-cart fs-lg animate-target me-2" />
                Add to cart
              </Button>
            </div>
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default ImageZoomExternalPaneDemo
