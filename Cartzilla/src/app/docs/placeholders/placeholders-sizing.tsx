'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Placeholder from 'react-bootstrap/Placeholder'

const PlaceholdersSizingDemo = () => {
  const code = `'use client'

import Placeholder from 'react-bootstrap/Placeholder'

export default function PlaceholdersSizingDemo() {
  return (
    <>
      <Placeholder xs={12} size="lg" />
      <Placeholder xs={12} />
      <Placeholder xs={12} size="sm" />
      <Placeholder xs={12} size="xs" />
    </>
  )
}`

  return (
    <section id="placeholders-sizing" className="docs-section pb-sm-2 mb-5">
      <h4>Sizing</h4>
      <DocsComponentDemo code={code}>
        <Placeholder xs={12} size="lg" />
        <Placeholder xs={12} />
        <Placeholder xs={12} size="sm" />
        <Placeholder xs={12} size="xs" />
      </DocsComponentDemo>
    </section>
  )
}

export default PlaceholdersSizingDemo
