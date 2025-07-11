import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ImageWithCaption from '@/components/image/image-with-caption'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FiguresWithCaptionsDemo = () => {
  const code = `import ImageWithCaption from '@/components/image/image-with-caption'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function FiguresWithCaptionsDemo() {
  return (
    <Row xs={1} sm={3} className="gy-4 gx-3 gx-md-4">
      <Col>
        <ImageWithCaption
          src="/img/shop/furniture/product/06.jpg"
          width={290}
          height={290}
          caption="Caption on the left"
        />
      </Col>
      <Col>
        <ImageWithCaption
          src="/img/blog/list/02.jpg"
          width={290}
          height={290}
          caption="Caption in the center"
          className="text-center"
        />
      </Col>
      <Col>
        <ImageWithCaption
          src="/img/blog/list/03.jpg"
          width={290}
          height={290}
          caption="Caption on the right"
          className="text-end"
        />
      </Col>
    </Row>
  )
}`

  return (
    <section id="figures" className="docs-section pb-sm-2 mb-5">
      <h4>Figures with caption</h4>
      <DocsComponentDemo code={code}>
        <Row xs={1} sm={3} className="gy-4 gx-3 gx-md-4">
          <Col>
            <ImageWithCaption
              src="/img/shop/furniture/product/06.jpg"
              width={290}
              height={290}
              caption="Caption on the left"
            />
          </Col>
          <Col>
            <ImageWithCaption
              src="/img/blog/list/02.jpg"
              width={290}
              height={290}
              caption="Caption in the center"
              className="text-center"
            />
          </Col>
          <Col>
            <ImageWithCaption
              src="/img/blog/list/03.jpg"
              width={290}
              height={290}
              caption="Caption on the right"
              className="text-end"
            />
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default FiguresWithCaptionsDemo
