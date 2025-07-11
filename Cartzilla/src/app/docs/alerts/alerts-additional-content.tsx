import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Alert from 'react-bootstrap/Alert'
import AlertHeading from 'react-bootstrap/AlertHeading'
import Button from 'react-bootstrap/Button'

const AlertsAdditionalContentDemo = () => {
  const code = `import Alert from 'react-bootstrap/Alert'
import AlertHeading from 'react-bootstrap/AlertHeading'
import Button from 'react-bootstrap/Button'

export default function AlertsAdditionalContentDemo() {
  return (
    <Alert variant="success" className="d-sm-flex pb-4 pt-sm-4">
      <i className="ci-check-circle fs-4 mt-1 mb-2 mb-sm-0"/>
      <div className="ps-sm-3 pe-sm-4">
        <AlertHeading className="mb-2">Well done!</AlertHeading>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going to run a bit
          longer so that you can see how spacing within an alert works with this kind of content.
        </p>
        <hr className="text-success opacity-25 my-3" />
        <p className="mb-4">
          Whenever you need to, be sure to use margin and padding utilities to keep things nice and tidy.
        </p>
        <Button variant="success">Action button</Button>
      </div>
    </Alert>
  )
}`

  return (
    <section id="alerts-additional-content" className="docs-section">
      <h4>Additional content</h4>
      <DocsComponentDemo code={code}>
        <div className="mb-n3">
          <Alert variant="success" className="d-sm-flex pb-4 pt-sm-4">
            <i className="ci-check-circle fs-4 mt-1 mb-2 mb-sm-0" />
            <div className="ps-sm-3 pe-sm-4">
              <AlertHeading className="mb-2">Well done!</AlertHeading>
              <p>
                Aww yeah, you successfully read this important alert message. This example text is going to run a bit
                longer so that you can see how spacing within an alert works with this kind of content.
              </p>
              <hr className="text-success opacity-25 my-3" />
              <p className="mb-4">
                Whenever you need to, be sure to use margin and padding utilities to keep things nice and tidy.
              </p>
              <Button variant="success">Action button</Button>
            </div>
          </Alert>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default AlertsAdditionalContentDemo
