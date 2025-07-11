import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Alert from 'react-bootstrap/Alert'

const AlertsWithIconDemo = () => {
  const code = `import Alert from 'react-bootstrap/Alert'

export default function AlertsWithIconDemo() {
  return (
    <>
      {[
        { variant: 'primary', icon: 'bell' },
        { variant: 'secondary', icon: 'clock' },
        { variant: 'success', icon: 'check-circle' },
        { variant: 'danger', icon: 'banned' },
        { variant: 'warning', icon: 'alert-triangle' },
        { variant: 'info', icon: 'info' },
        { variant: 'light', icon: 'unlock' },
        { variant: 'dark', icon: 'map-pin' },
      ].map((alert) => (
        <Alert key={alert.variant} variant={alert.variant} className="d-flex">
          <i className={\`ci-\${alert.icon} fs-lg pe-1 mt-1 me-2\`}/>
          <div>
            A simple {alert.variant} alert with{' '}
            <a href="#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
        </Alert>
      ))}
    </>
  )
}`

  return (
    <section id="alerts-icon" className="docs-section pb-sm-2 mb-5">
      <h4>Alert with icon</h4>
      <DocsComponentDemo code={code}>
        <div className="mb-n3">
          {[
            { variant: 'primary', icon: 'bell' },
            { variant: 'secondary', icon: 'clock' },
            { variant: 'success', icon: 'check-circle' },
            { variant: 'danger', icon: 'banned' },
            { variant: 'warning', icon: 'alert-triangle' },
            { variant: 'info', icon: 'info' },
            { variant: 'light', icon: 'unlock' },
            { variant: 'dark', icon: 'map-pin' },
          ].map((alert) => (
            <Alert key={alert.variant} variant={alert.variant} className="d-flex">
              <i className={`ci-${alert.icon} fs-lg pe-1 mt-1 me-2`} />
              <div>
                A simple {alert.variant} alert with{' '}
                <a href="#" className="alert-link">
                  an example link
                </a>
                . Give it a click if you like.
              </div>
            </Alert>
          ))}
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default AlertsWithIconDemo
