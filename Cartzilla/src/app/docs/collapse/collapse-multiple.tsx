'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'

const CollapseMultipleDemo = () => {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  const handleBothCollapseElements = () => {
    setOpen1(!open1)
    setOpen2(!open2)
  }

  const code = `'use client'

import { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'

export default function CollapseMultipleDemo() {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  const handleBothCollapseElements = () => {
    setOpen1(!open1)
    setOpen2(!open2)
  }

  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <Button
          variant="outline-secondary"
          onClick={() => setOpen1(!open1)}
          aria-controls="collapse-example-1"
          aria-expanded={open1}
          className="me-1 mb-1"
        >
          Toggle first element
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => setOpen2(!open2)}
          aria-controls="collapse-example-2"
          aria-expanded={open2}
          className="me-1 mb-1"
        >
          Toggle second element
        </Button>
        <Button
          variant="outline-secondary"
          onClick={HandleBothCollapseElements}
          className="me-1 mb-1"
        >
          Toggle both elements
        </Button>
      </Stack>
      <Row xs={1} sm={2} className="g-4">
        <Col>
          <Collapse in={open1}>
            <div id="collapse-example-1">
              <Card body className="mt-3">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </Card>
            </div>
          </Collapse>
        </Col>
        <Col>
          <Collapse in={open2}>
            <div id="collapse-example-2">
              <Card body className="mt-3">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </Card>
            </div>
          </Collapse>
        </Col>
      </Row>
    </>
  )
}`

  return (
    <section id="collapse-multiple" className="docs-section">
      <h4>Multiple targets</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2}>
          <Button
            variant="outline-secondary"
            onClick={() => setOpen1(!open1)}
            aria-controls="collapse-example-1"
            aria-expanded={open1}
            className="me-1 mb-1"
          >
            Toggle first element
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => setOpen2(!open2)}
            aria-controls="collapse-example-2"
            aria-expanded={open2}
            className="me-1 mb-1"
          >
            Toggle second element
          </Button>
          <Button variant="outline-secondary" onClick={handleBothCollapseElements} className="me-1 mb-1">
            Toggle both elements
          </Button>
        </Stack>
        <Row xs={1} sm={2} className="g-4">
          <Col>
            <Collapse in={open1}>
              <div id="collapse-example-1">
                <Card body className="mt-3">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
                  anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Card>
              </div>
            </Collapse>
          </Col>
          <Col>
            <Collapse in={open2}>
              <div id="collapse-example-2">
                <Card body className="mt-3">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
                  anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Card>
              </div>
            </Collapse>
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default CollapseMultipleDemo
