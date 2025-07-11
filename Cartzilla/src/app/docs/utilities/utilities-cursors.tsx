import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const UtilitiesCursorsDemo = () => {
  const code = `import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Ratio from 'react-bootstrap/Ratio'

export default function UtilitiesCursorsDemo() {
  return (
    <Row xs={1} sm={2} md={3} className="g-3 g-md-4">
      {['pointer', 'default', 'help', 'wait', 'crosshair', 'not-allowed', 'zoom-in', 'zoom-out', 'grab'].map(
        (cursor) => (
          <Col key={cursor}>
            <Ratio aspectRatio="16x9" className={\`cursor-\${cursor} bg-body rounded shadow\`}>
              <div className="h5 d-flex align-items-center justify-content-center position-absolute w-100 h-100 mb-0">
                .cursor-{cursor}
              </div>
            </Ratio>
          </Col>
        )
      )}
    </Row>
  )
}`

  return (
    <section id="utilities-cursors" className="docs-section">
      <h4>Cursors</h4>
      <DocsComponentDemo code={code}>
        <Row xs={1} sm={2} md={3} className="g-3 g-md-4">
          {['pointer', 'default', 'help', 'wait', 'crosshair', 'not-allowed', 'zoom-in', 'zoom-out', 'grab'].map(
            (cursor) => (
              <Col key={cursor}>
                <div className={`cursor-${cursor} position-relative bg-body text-center rounded shadow`}>
                  <div className="ratio ratio-4x3 d-none d-sm-block"></div>
                  <div className="ratio ratio-16x9 d-sm-none"></div>
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-2">
                    <div className="h5 mb-0">.cursor-{cursor}</div>
                  </div>
                </div>
              </Col>
            )
          )}
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default UtilitiesCursorsDemo
