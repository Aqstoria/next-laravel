'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormControl from 'react-bootstrap/FormControl'
import FormLabel from 'react-bootstrap/FormLabel'
import Cleave from 'cleave.js/react'

const InputFormatterCustomBlocksDemo = () => {
  const code = `'use client'

import FormControl from 'react-bootstrap/FormControl'
import FormLabel from 'react-bootstrap/FormLabel'
import Cleave from 'cleave.js/react'

export default function InputFormatterCustomBlocksDemo() {
  return (
    <>
      <FormLabel htmlFor="custom">Custom blocks</FormLabel>
      <FormControl
        as={Cleave}
        id="custom"
        options={{ blocks: [4, 3, 3, 4, 2], delimiters: ['.', ' ', '/', '-'] }}
        placeholder="blocks:[4, 3, 3, 4, 2], delimiters: ['.', ' ', '/', '-']"
        style={{ maxWidth: 400 }}
      />
    </>
  )
}`

  return (
    <section id="input-formatter-custom" className="docs-section pb-sm-2 mb-5">
      <h4>Custom blocks</h4>
      <DocsComponentDemo code={code}>
        <FormLabel htmlFor="custom">Custom blocks</FormLabel>
        <FormControl
          as={Cleave}
          id="custom"
          options={{ blocks: [4, 3, 3, 4, 2], delimiters: ['.', ' ', '/', '-'] }}
          placeholder="blocks:[4, 3, 3, 4, 2], delimiters: ['.', ' ', '/', '-']"
          style={{ maxWidth: 400 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default InputFormatterCustomBlocksDemo
