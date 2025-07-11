'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Card from 'react-bootstrap/Card'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Stack from 'react-bootstrap/Stack'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const ScrollbarHorizontalDemo = () => {
  const code = `'use client'

import Card from 'react-bootstrap/Card'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Stack from 'react-bootstrap/Stack'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

export default function ScrollbarHorizontalDemo() {
  return (
    <SimpleBar data-simplebar-auto-hide="false" className="pb-4">
      <Stack direction="horizontal" gap={4}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Card key={index} body style={{ minWidth: 230 }}>
            <CardTitle as="h6">Card title</CardTitle>
            <CardText className="fs-sm">
              Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
            </CardText>
          </Card>
        ))}
      </Stack>
    </SimpleBar>
  )
}`

  return (
    <section id="scrollbar-horizontal" className="docs-section pb-sm-2 mb-5">
      <h4>Horizontal</h4>
      <DocsComponentDemo code={code}>
        <SimpleBar data-simplebar-auto-hide="false" className="pb-4">
          <Stack direction="horizontal" gap={4}>
            {Array.from({ length: 8 }).map((_, index) => (
              <Card key={index} body style={{ minWidth: 230 }}>
                <CardTitle as="h6">Card title</CardTitle>
                <CardText className="fs-sm">
                  Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                </CardText>
              </Card>
            ))}
          </Stack>
        </SimpleBar>
      </DocsComponentDemo>
    </section>
  )
}

export default ScrollbarHorizontalDemo
