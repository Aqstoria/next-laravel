import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Toast from 'react-bootstrap/Toast'
import ToastBody from 'react-bootstrap/ToastBody'
import CloseButton from 'react-bootstrap/CloseButton'
import Button from 'react-bootstrap/Button'

const ToastsTinyDemo = () => {
  const code = `import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Toast from 'react-bootstrap/Toast'
import ToastBody from 'react-bootstrap/ToastBody'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'

export default function ToastsTinyDemo() {
  return (
    <Row className="g-4 g-md-5">
      <Col sm={6} xl={5} className="vstack gap-3">
        <Toast className="d-flex">
          <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
          <CloseButton className="ms-auto" />
        </Toast>
        {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((variant) => (
          <Toast
            key={variant}
            className={\`d-flex text-bg-\${variant} border-0\`}
            data-bs-theme={variant === 'light' ? 'light' : 'dark'}
          >
            <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
            {variant === 'light' ? (
              <Button variant="default" size="sm" className="fs-base opacity-75 border-0 p-0 ms-auto">
                <i className="ci-close"/>
              </Button>
            ) : (
              <CloseButton className="ms-auto" />
            )}
          </Toast>
        ))}
      </Col>
      <Col sm={6} xl={5} className="vstack gap-3">
        {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((variant) => (
          <Toast key={variant} className={\`d-flex border-\${variant}\`}>
            <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
            <CloseButton className="ms-auto" />
          </Toast>
        ))}
      </Col>
    </Row>
  )
}`

  return (
    <section id="toasts-tiny" className="docs-section pb-sm-2 mb-5">
      <h4>Tiny variant</h4>
      <DocsComponentDemo code={code}>
        <Row className="g-4 g-md-5">
          <Col sm={6} xl={5} className="vstack gap-3">
            <Toast className="d-flex">
              <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
              <CloseButton className="ms-auto" />
            </Toast>
            {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((variant) => (
              <Toast
                key={variant}
                className={`d-flex text-bg-${variant} border-0`}
                data-bs-theme={variant === 'light' ? 'light' : 'dark'}
              >
                <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
                {variant === 'light' ? (
                  <Button variant="default" size="sm" className="fs-base opacity-75 border-0 p-0 ms-auto">
                    <i className="ci-close" />
                  </Button>
                ) : (
                  <CloseButton className="ms-auto" />
                )}
              </Toast>
            ))}
          </Col>
          <Col sm={6} xl={5} className="vstack gap-3">
            {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((variant) => (
              <Toast key={variant} className={`d-flex border-${variant}`}>
                <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
                <CloseButton className="ms-auto" />
              </Toast>
            ))}
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default ToastsTinyDemo
