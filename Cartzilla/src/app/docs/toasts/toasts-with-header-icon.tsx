import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'
import ToastBody from 'react-bootstrap/ToastBody'

const ToastsWithHeaderIconDemo = () => {
  const code = `import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'
import ToastBody from 'react-bootstrap/ToastBody'

export default function ToastsWithHeaderIconDemo() {
  return (
    <Row className="g-4 g-md-5">
      <Col sm={6} xl={5} className="vstack gap-3">
        <Toast>
          <ToastHeader>
            <i className="ci-settings text-body-secondary fs-base me-2"/>
            <span className="fw-semibold me-auto">Default toast</span>
          </ToastHeader>
          <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
        </Toast>
        {[
          { variant: 'primary', icon: 'bell' },
          { variant: 'secondary', icon: 'clock' },
          { variant: 'success', icon: 'check-circle' },
          { variant: 'danger', icon: 'banned' },
        ].map(({ variant, icon }) => (
          <Toast key={variant} className={\`border-\${variant}\`}>
            <ToastHeader>
              <i className={\`ci-\${icon} text-\${variant} fs-base mt-1 me-2\`}/>
              <span className="fw-semibold me-auto">
                {variant.charAt(0).toUpperCase() + variant.slice(1).toLowerCase()} toast
              </span>
            </ToastHeader>
            <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
          </Toast>
        ))}
      </Col>
      <Col sm={6} xl={5} className="vstack gap-3">
        {[
          { variant: 'danger', icon: 'banned' },
          { variant: 'warning', icon: 'alert-triangle' },
          { variant: 'info', icon: 'info' },
          { variant: 'dark', icon: 'map-pin' },
        ].map(({ variant, icon }) => (
          <Toast key={variant} className={\`border-\${variant}\`}>
            <ToastHeader>
              <i className={\`ci-\${icon} text-\${variant} fs-base mt-1 me-2\`}/>
              <span className="fw-semibold me-auto">
                {variant.charAt(0).toUpperCase() + variant.slice(1).toLowerCase()} toast
              </span>
            </ToastHeader>
            <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
          </Toast>
        ))}
      </Col>
    </Row>
  )
}`

  return (
    <section id="toasts-header-icon" className="docs-section pb-sm-2 mb-5">
      <h4>With header and icon</h4>
      <DocsComponentDemo code={code}>
        <Row className="g-4 g-md-5">
          <Col sm={6} xl={5} className="vstack gap-3">
            <Toast>
              <ToastHeader>
                <i className="ci-settings text-body-secondary fs-base me-2" />
                <span className="fw-semibold me-auto">Default toast</span>
              </ToastHeader>
              <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
            </Toast>
            {[
              { variant: 'primary', icon: 'bell' },
              { variant: 'secondary', icon: 'clock' },
              { variant: 'success', icon: 'check-circle' },
              { variant: 'danger', icon: 'banned' },
            ].map(({ variant, icon }) => (
              <Toast key={variant} className={`border-${variant}`}>
                <ToastHeader>
                  <i className={`ci-${icon} text-${variant} fs-base mt-1 me-2`} />
                  <span className="fw-semibold me-auto">
                    {variant.charAt(0).toUpperCase() + variant.slice(1).toLowerCase()} toast
                  </span>
                </ToastHeader>
                <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
              </Toast>
            ))}
          </Col>
          <Col sm={6} xl={5} className="vstack gap-3">
            {[
              { variant: 'danger', icon: 'banned' },
              { variant: 'warning', icon: 'alert-triangle' },
              { variant: 'info', icon: 'info' },
              { variant: 'dark', icon: 'map-pin' },
            ].map(({ variant, icon }) => (
              <Toast key={variant} className={`border-${variant}`}>
                <ToastHeader>
                  <i className={`ci-${icon} text-${variant} fs-base mt-1 me-2`} />
                  <span className="fw-semibold me-auto">
                    {variant.charAt(0).toUpperCase() + variant.slice(1).toLowerCase()} toast
                  </span>
                </ToastHeader>
                <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
              </Toast>
            ))}
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default ToastsWithHeaderIconDemo
