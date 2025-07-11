import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Alert from 'react-bootstrap/Alert'

const AlertsBasicDemo = () => {
  const code = `import Alert from 'react-bootstrap/Alert'

export default function AlertsBasicDemo() {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          A simple {variant} with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
        </Alert>
      ))}
    </>
  )
}`

  return (
    <section id="alerts-basic" className="docs-section pb-sm-2 mb-5">
      <h4>Basic example</h4>
      <DocsComponentDemo code={code}>
        <div className="mb-n3">
          {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((variant) => (
            <Alert key={variant} variant={variant}>
              A simple {variant} with{' '}
              <a href="#" className="alert-link">
                an example link
              </a>
              . Give it a click if you like.
            </Alert>
          ))}
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default AlertsBasicDemo
