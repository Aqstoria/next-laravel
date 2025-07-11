'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormControl from 'react-bootstrap/FormControl'
import FormLabel from 'react-bootstrap/FormLabel'
import Cleave from 'cleave.js/react'

const InputFormatterPrefixUppercaseDemo = () => {
  const code = `'use client'

import FormControl from 'react-bootstrap/FormControl'
import FormLabel from 'react-bootstrap/FormLabel'
import Cleave from 'cleave.js/react'

export default function InputFormatterPrefixUppercaseDemo() {
  return (
    <>
      <FormLabel htmlFor="prefix">Prefix + uppercase</FormLabel>
      <FormControl
        as={Cleave}
        id="prefix"
        options={{ prefix: 'PREFIX', delimiter: '-', blocks: [6, 4, 5, 3], uppercase: true }}
      />
    </>
  )
}`

  return (
    <section id="input-formatter-prefix" className="docs-section">
      <h4>Prefix and uppercase</h4>
      <DocsComponentDemo code={code}>
        <FormLabel htmlFor="prefix">Prefix + uppercase</FormLabel>
        <FormControl
          as={Cleave}
          id="prefix"
          options={{ prefix: 'PREFIX', delimiter: '-', blocks: [6, 4, 5, 3], uppercase: true }}
          style={{ maxWidth: 400 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default InputFormatterPrefixUppercaseDemo
