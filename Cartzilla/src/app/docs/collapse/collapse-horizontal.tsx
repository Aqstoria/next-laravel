'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const CollapseHorizontalDemo = () => {
  const [open, setOpen] = useState(false)

  const code = `'use client'

import { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function CollapseHorizontalDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant="outline-secondary"
        onClick={() => setOpen(!open)}
        aria-controls="collapse-example"
        aria-expanded={open}
      >
        Toggle width collapse
      </Button>

      <Collapse in={open} dimension="width">
        <div id="collapse-example">
          <Card body className="mt-3" style={{ width: '32rem' }}>
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
    <section id="collapse-horizontal" className="docs-section pb-sm-2 mb-5">
      <h4>Horizontal</h4>
      <DocsComponentDemo code={code}>
        <Button
          variant="outline-secondary"
          onClick={() => setOpen(!open)}
          aria-controls="collapse-horizontal-example"
          aria-expanded={open}
        >
          Toggle width collapse
        </Button>
        <Collapse in={open} dimension="width">
          <div id="collapse-horizontal-example">
            <Card body className="mt-3" style={{ width: '32rem' }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa officia.
            </Card>
          </div>
        </Collapse>
      </DocsComponentDemo>
    </section>
  )
}

export default CollapseHorizontalDemo
