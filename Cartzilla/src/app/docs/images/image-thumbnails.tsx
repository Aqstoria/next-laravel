import Image from 'next/image'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ImageThumbnailsDemo = () => {
  const code = `import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ImageThumbnailsDemo() {
  return (
    <Row xs={1} sm={3} className="gy-4 gx-3 gx-md-4">
      <Col>
        <Image
          src="/img/shop/furniture/product/06.jpg"
          width={290}
          height={290}
          alt="Square thumbnail"
          className="img-thumbnail rounded-0"
        />
      </Col>
      <Col>
        <Image
          src="/img/blog/list/02.jpg"
          width={290}
          height={290}
          alt="Rounded thumbnail"
          className="img-thumbnail"
        />
      </Col>
      <Col>
        <Image
          src="/img/blog/list/03.jpg"
          width={290}
          height={290}
          alt="Circle thumbnail"
          className="img-thumbnail rounded-circle"
        />
      </Col>
    </Row>
  )
}`

  return (
    <section id="image-thumbnails" className="docs-section pb-sm-2 mb-5">
      <h4>Thumbnails</h4>
      <DocsComponentDemo code={code}>
        <Row xs={1} sm={3} className="gy-4 gx-3 gx-md-4">
          <Col>
            <Image
              src="/img/shop/furniture/product/06.jpg"
              width={290}
              height={290}
              alt="Square thumbnail"
              className="img-thumbnail rounded-0"
            />
          </Col>
          <Col>
            <Image
              src="/img/blog/list/02.jpg"
              width={290}
              height={290}
              alt="Rounded thumbnail"
              className="img-thumbnail"
            />
          </Col>
          <Col>
            <Image
              src="/img/blog/list/03.jpg"
              width={290}
              height={290}
              alt="Circle thumbnail"
              className="img-thumbnail rounded-circle"
            />
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default ImageThumbnailsDemo
