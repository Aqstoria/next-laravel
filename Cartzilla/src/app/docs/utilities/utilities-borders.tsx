import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const UtilitiesBordersDemo = () => {
  const code = `import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Ratio from 'react-bootstrap/Ratio'

export default function UtilitiesBordersDemo() {
  return (
    <Row xs={1} sm={2} md={3} className="g-4 g-sm-3 g-md-4">
      <Col>
        <Ratio aspectRatio="16x9" className="border border-dashed border-2 rounded">
          <div className="h5 d-flex align-items-center justify-content-center position-absolute w-100 h-100 mb-0">
            .border-dashed
          </div>
        </Ratio>
      </Col>
      <Col>
        <Ratio aspectRatio="16x9" className="border border-dotted border-2 rounded">
          <div className="h5 d-flex align-items-center justify-content-center position-absolute w-100 h-100 mb-0">
            .border-dotted
          </div>
        </Ratio>
      </Col>
    </Row>
  )
}`

  return (
    <section id="utilities-borders" className="docs-section pb-sm-2 mb-5">
      <h4>Borders</h4>
      <DocsComponentDemo code={code}>
        <Row xs={1} sm={2} md={3} className="g-4 g-sm-3 g-md-4">
          <Col>
            <div className="position-relative border border-dashed border-2 rounded">
              <div className="ratio ratio-4x3 d-none d-xl-block"></div>
              <div className="ratio ratio-16x9 d-xl-none"></div>
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="h5 mb-0">.border-dashed</div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="position-relative border border-dotted border-2 rounded">
              <div className="ratio ratio-4x3 d-none d-xl-block"></div>
              <div className="ratio ratio-16x9 d-xl-none"></div>
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="h5 mb-0">.border-dotted</div>
              </div>
            </div>
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default UtilitiesBordersDemo
