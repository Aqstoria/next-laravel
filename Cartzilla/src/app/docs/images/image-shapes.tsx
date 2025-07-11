import Image from 'next/image'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ImageShapesDemo = () => {
  const code = `import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ImageShapesDemo() {
  return (
    <Row xs={1} sm={3} className="gy-4 gx-3 gx-md-4">
      <Col>
        <Image
          src="/img/shop/furniture/product/06.jpg"
          width={290}
          height={290}
          alt="Square image"
          className="bg-body-tertiary"
        />
      </Col>
      <Col>
        <Image
          src="/img/blog/list/02.jpg"
          width={290}
          height={290}
          alt="Rounded image"
          className="bg-body-tertiary rounded-4"
        />
      </Col>
      <Col>
        <Image
          src="/img/blog/list/03.jpg"
          width={290}
          height={290}
          alt="Circle image"
          className="bg-body-tertiary rounded-circle"
        />
      </Col>
    </Row>
  )
}`

  return (
    <section id="image-shapes" className="docs-section pb-sm-2 mb-5">
      <h4>Image shapes</h4>
      <DocsComponentDemo code={code}>
        <Row xs={1} sm={3} className="gy-4 gx-3 gx-md-4">
          <Col>
            <Image
              src="/img/shop/furniture/product/06.jpg"
              width={290}
              height={290}
              alt="Square image"
              className="bg-body-tertiary"
            />
          </Col>
          <Col>
            <Image
              src="/img/blog/list/02.jpg"
              width={290}
              height={290}
              alt="Rounded image"
              className="bg-body-tertiary rounded-4"
            />
          </Col>
          <Col>
            <Image
              src="/img/blog/list/03.jpg"
              width={290}
              height={290}
              alt="Circle image"
              className="bg-body-tertiary rounded-circle"
            />
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default ImageShapesDemo
