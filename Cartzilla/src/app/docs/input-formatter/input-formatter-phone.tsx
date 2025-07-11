'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormControl from 'react-bootstrap/FormControl'
import FormLabel from 'react-bootstrap/FormLabel'
import Cleave from 'cleave.js/react'

const InputFormatterPhoneDemo = () => {
  const code = `'use client'

import FormControl from 'react-bootstrap/FormControl'
import FormLabel from 'react-bootstrap/FormLabel'
import Cleave from 'cleave.js/react'

export default function InputFormatterPhoneDemo() {
  return (
    <>
      <FormLabel htmlFor="phone">Phone</FormLabel>
      <FormControl
        as={Cleave}
        id="phone"
        options={{ numericOnly: true, delimiters: ['+1 ', ' ', ' '], blocks: [0, 3, 3, 2] }}
        placeholder="+1 ___ ___ __"
      />
    </>
  )
}`

  return (
    <section id="input-formatter-phone" className="docs-section pb-sm-2 mb-5">
      <h4>Phone number</h4>
      <DocsComponentDemo code={code}>
        <FormLabel htmlFor="phone">Phone</FormLabel>
        <FormControl
          as={Cleave}
          id="phone"
          options={{ numericOnly: true, delimiters: ['+1 ', ' ', ' '], blocks: [0, 3, 3, 2] }}
          placeholder="+1 ___ ___ __"
          style={{ maxWidth: 400 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default InputFormatterPhoneDemo
