import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Toast from 'react-bootstrap/Toast'
import ToastBody from 'react-bootstrap/ToastBody'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'

const ToastsTinyWithIconDemo = () => {
  const code = `import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Toast from 'react-bootstrap/Toast'
import ToastBody from 'react-bootstrap/ToastBody'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'

export default function ToastsTinyWithIconDemo() {
  return (
    <Row className="g-4 g-md-5">
      <Col sm={6} xl={5} className="vstack gap-3">

        {/* Default toast */}
        <Toast className="d-flex">
          <i className="ci-settings fs-base mt-1 me-2"/>
          <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
          <CloseButton className="ms-auto" />
        </Toast>

        {/* Background color variants */}
        {[
          { variant: 'primary', icon: 'bell' },
          { variant: 'secondary', icon: 'clock' },
          { variant: 'success', icon: 'check-circle' },
          { variant: 'danger', icon: 'banned' },
          { variant: 'warning', icon: 'alert-triangle' },
          { variant: 'info', icon: 'info' },
          { variant: 'light', icon: 'unlock' },
          { variant: 'dark', icon: 'map-pin' },
        ].map(({ variant, icon }) => (
          <Toast
            key={variant}
            className={\`d-flex text-bg-\${variant} border-0\`}
            data-bs-theme={variant === 'light' ? 'light' : 'dark'}
          >
            <i className={\`ci-\${icon} fs-base mt-1 me-2\`}/>
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

        {/* Border color variants */}
        {[
          { variant: 'primary', icon: 'bell' },
          { variant: 'secondary', icon: 'clock' },
          { variant: 'success', icon: 'check-circle' },
          { variant: 'danger', icon: 'banned' },
          { variant: 'warning', icon: 'alert-triangle' },
          { variant: 'info', icon: 'info' },
          { variant: 'dark', icon: 'map-pin' },
        ].map(({ variant, icon }) => (
          <Toast key={variant} className={\`d-flex border-\${variant}\`}>
            <i className={\`ci-\${icon} fs-base mt-1 me-2\`}/>
            <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
            <CloseButton className="ms-auto" />
          </Toast>
        ))}
      </Col>
    </Row>
  )
}`

  return (
    <section id="toasts-tiny-icon" className="docs-section pb-sm-2 mb-5">
      <h4>Tiny with icon</h4>
      <DocsComponentDemo code={code}>
        <Row className="g-4 g-md-5">
          <Col sm={6} xl={5} className="vstack gap-3">
            <Toast className="d-flex">
              <i className="ci-settings fs-base mt-1 me-2" />
              <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
              <CloseButton className="ms-auto" />
            </Toast>
            {[
              { variant: 'primary', icon: 'bell' },
              { variant: 'secondary', icon: 'clock' },
              { variant: 'success', icon: 'check-circle' },
              { variant: 'danger', icon: 'banned' },
              { variant: 'warning', icon: 'alert-triangle' },
              { variant: 'info', icon: 'info' },
              { variant: 'light', icon: 'unlock' },
              { variant: 'dark', icon: 'map-pin' },
            ].map(({ variant, icon }) => (
              <Toast
                key={variant}
                className={`d-flex text-bg-${variant} border-0`}
                data-bs-theme={variant === 'light' ? 'light' : 'dark'}
              >
                <i className={`ci-${icon} fs-base mt-1 me-2`} />
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
            {[
              { variant: 'primary', icon: 'bell' },
              { variant: 'secondary', icon: 'clock' },
              { variant: 'success', icon: 'check-circle' },
              { variant: 'danger', icon: 'banned' },
              { variant: 'warning', icon: 'alert-triangle' },
              { variant: 'info', icon: 'info' },
              { variant: 'dark', icon: 'map-pin' },
            ].map(({ variant, icon }) => (
              <Toast key={variant} className={`d-flex border-${variant}`}>
                <i className={`ci-${icon} fs-base mt-1 me-2`} />
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

export default ToastsTinyWithIconDemo
