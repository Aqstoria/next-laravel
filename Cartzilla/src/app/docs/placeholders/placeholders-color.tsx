'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Placeholder from 'react-bootstrap/Placeholder'

const PlaceholdersColorsDemo = () => {
  const code = `'use client'

import Placeholder from 'react-bootstrap/Placeholder'

export default function PlaceholdersColorsDemo() {
  return (
    <>
      <Placeholder xs={12} />
      <Placeholder xs={12} bg="primary" />
      <Placeholder xs={12} bg="secondary" />
      <Placeholder xs={12} bg="success" />
      <Placeholder xs={12} bg="danger" />
      <Placeholder xs={12} bg="warning" />
      <Placeholder xs={12} bg="info" />
      <Placeholder xs={12} bg="light" />
      <Placeholder xs={12} bg="dark" />
    </>
  )
}`

  return (
    <section id="placeholders-color" className="docs-section pb-sm-2 mb-5">
      <h4>Color</h4>
      <DocsComponentDemo code={code}>
        <Placeholder xs={12} />
        <Placeholder xs={12} bg="primary" />
        <Placeholder xs={12} bg="secondary" />
        <Placeholder xs={12} bg="success" />
        <Placeholder xs={12} bg="danger" />
        <Placeholder xs={12} bg="warning" />
        <Placeholder xs={12} bg="info" />
        <div className="bg-dark p-2 my-2">
          <Placeholder xs={12} bg="light" />
        </div>
        <div className="bg-light p-2 mt-2">
          <Placeholder xs={12} bg="dark" />
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default PlaceholdersColorsDemo
