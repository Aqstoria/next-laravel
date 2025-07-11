'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import AlertHeading from 'react-bootstrap/AlertHeading'
import Button from 'react-bootstrap/Button'

const AlertsDismissibleDemo = () => {
  const [show, setShow] = useState(true)

  const code = `'use client'

import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import AlertHeading from 'react-bootstrap/AlertHeading'
import Button from 'react-bootstrap/Button'

export default function AlertsDismissibleDemo() {
  const [show, setShow] = useState(true)

  return (
    <>
      {show ? (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <AlertHeading>Oh snap! You got an error!</AlertHeading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      ) : (
        <Button variant="outline-dark" onClick={() => setShow(true)}>
          Show Alert
        </Button>
      )}
    </>
  )
}`

  return (
    <section id="alerts-dismissible" className="docs-section pb-sm-2 mb-5">
      <h4>Dismissible alert</h4>
      <DocsComponentDemo code={code}>
        <div className="mb-n3">
          {show ? (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <AlertHeading>Oh snap! You got an error!</AlertHeading>
              <p>
                Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
              </p>
            </Alert>
          ) : (
            <Button variant="outline-dark" onClick={() => setShow(true)}>
              Show Alert
            </Button>
          )}
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default AlertsDismissibleDemo
