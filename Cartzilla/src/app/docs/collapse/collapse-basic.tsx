'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const CollapseBasicDemo = () => {
  const [open, setOpen] = useState(false)

  const code = `'use client'

import { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function CollapseBasicDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant="outline-secondary"
        onClick={() => setOpen(!open)}
        aria-controls="collapse-example"
        aria-expanded={open}
      >
        Toggle collapse
      </Button>

      <Collapse in={open}>
        <div id="collapse-example">
          <Card body className="mt-3">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
          </Card>
        </div>
      </Collapse>
    </>
  )
}`

  return (
    <section id="collapse-basic" className="docs-section pb-sm-2 mb-5">
      <h4>Basic example</h4>
      <DocsComponentDemo code={code}>
        <Button
          variant="outline-secondary"
          onClick={() => setOpen(!open)}
          aria-controls="collapse-basic-example"
          aria-expanded={open}
        >
          Toggle collapse
        </Button>
        <Collapse in={open}>
          <div id="collapse-basic-example">
            <Card body className="mt-3">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </Card>
          </div>
        </Collapse>
      </DocsComponentDemo>
    </section>
  )
}

export default CollapseBasicDemo
