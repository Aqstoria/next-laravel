'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Placeholder from 'react-bootstrap/Placeholder'

const PlaceholdersAnimationDemo = () => {
  const code = `'use client'

import Placeholder from 'react-bootstrap/Placeholder'

export default function PlaceholdersAnimationDemo() {
  return (
    <>
      <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
    </>
  )
}`

  return (
    <section id="placeholders-animation" className="docs-section pb-sm-2 mb-5">
      <h4>Animation</h4>
      <DocsComponentDemo code={code}>
        <Placeholder as="p" animation="glow">
          <Placeholder xs={12} />
        </Placeholder>
        <Placeholder as="p" animation="wave" className="mb-0">
          <Placeholder xs={12} />
        </Placeholder>
      </DocsComponentDemo>
    </section>
  )
}

export default PlaceholdersAnimationDemo
