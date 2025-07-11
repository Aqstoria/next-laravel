import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const UtilitiesDottedBgDemo = () => {
  const code = `import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Ratio from 'react-bootstrap/Ratio'

export default function UtilitiesDottedBgDemo() {
  return (
    <Row xs={1} sm={2} md={3} className="g-3 g-md-4">
      {['default', 'primary', 'success', 'danger', 'warning', 'info', 'dark'].map((color) => (
        <Col key={color}>
          <Ratio
            aspectRatio="16x9"
            className="bg-dotted rounded"
            style={
              color === 'default'
                ? undefined
                : ({
                    '--cz-bg-color': \`var(--cz-\${color}-bg-subtle)\`,
                    '--cz-dot-color': \`var(--cz-\${color})\`,
                  } as React.CSSProperties)
            }
          >
            <div className="h5 d-flex align-items-center justify-content-center position-absolute w-100 h-100 mb-0">
              {color.charAt(0).toUpperCase() + color.slice(1).toLowerCase()}
            </div>
          </Ratio>
        </Col>
      ))}
    </Row>
  )
}`

  return (
    <section id="utilities-dotted-bg" className="docs-section pb-sm-2 mb-5">
      <h4>Dotted background</h4>
      <DocsComponentDemo code={code}>
        <div className="position-relative bg-dotted rounded mb-3 mb-md-4">
          <div className="ratio ratio-21x9 d-none d-sm-block"></div>
          <div className="ratio ratio-16x9 d-sm-none"></div>
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
            <div className="h5 mb-0">.bg-dotted</div>
          </div>
        </div>
        <Row xs={1} sm={2} md={3} className="g-3 g-md-4">
          {['primary', 'success', 'danger', 'warning', 'info', 'dark'].map((color) => (
            <Col key={color}>
              <div
                className="position-relative bg-dotted rounded"
                style={
                  {
                    '--cz-bg-color': `var(--cz-${color}-bg-subtle)`,
                    '--cz-dot-color': `var(--cz-${color})`,
                  } as React.CSSProperties
                }
              >
                <div className="ratio ratio-4x3 d-none d-sm-block"></div>
                <div className="ratio ratio-16x9 d-sm-none"></div>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                  <div className="h5 mb-0">{color.charAt(0).toUpperCase() + color.slice(1).toLowerCase()}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default UtilitiesDottedBgDemo
