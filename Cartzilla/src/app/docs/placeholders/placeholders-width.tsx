'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Placeholder from 'react-bootstrap/Placeholder'

const PlaceholdersWidthDemo = () => {
  const code = `'use client'

import Placeholder from 'react-bootstrap/Placeholder'

export default function PlaceholdersWidthDemo() {
  return (
    <>
      <Placeholder xs={6} />
      <Placeholder className="w-75" />
      <Placeholder style={{ width: '33%' }} />
    </>
  )
}`

  return (
    <section id="placeholders-width" className="docs-section pb-sm-2 mb-5">
      <h4>Width</h4>
      <DocsComponentDemo code={code}>
        <Placeholder xs={6} />
        <Placeholder className="w-75" />
        <Placeholder style={{ width: '33%' }} />
      </DocsComponentDemo>
    </section>
  )
}

export default PlaceholdersWidthDemo
