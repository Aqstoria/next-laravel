'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormControl from 'react-bootstrap/FormControl'
import FormLabel from 'react-bootstrap/FormLabel'
import Cleave from 'cleave.js/react'

const InputFormatterDateDemo = () => {
  const code = `'use client'

import FormControl from 'react-bootstrap/FormControl'
import FormLabel from 'react-bootstrap/FormLabel'
import Cleave from 'cleave.js/react'

export default function InputFormatterDateDemo() {
  return (
    <>
      <FormLabel htmlFor="date">Date</FormLabel>
      <FormControl
        as={Cleave}
        id="date"
        options={{ date: true, delimiter: '-', datePattern: ['Y', 'm', 'd'] }}
        placeholder="yyyy-mm-dd"
        className="mb-3"
      />

      <FormLabel htmlFor="date-short">Date short</FormLabel>
      <FormControl
        as={Cleave}
        id="date-short"
        options={{ date: true, datePattern: ['m', 'y'] }}
        placeholder="mm/yy"
      />
    </>
  )
}`

  return (
    <section id="input-formatter-date" className="docs-section pb-sm-2 mb-5">
      <h4>Date</h4>
      <DocsComponentDemo code={code}>
        <FormLabel htmlFor="date">Date</FormLabel>
        <FormControl
          as={Cleave}
          id="date"
          options={{ date: true, delimiter: '-', datePattern: ['Y', 'm', 'd'] }}
          placeholder="yyyy-mm-dd"
          className="mb-3"
          style={{ maxWidth: 400 }}
        />
        <FormLabel htmlFor="date-short">Date short</FormLabel>
        <FormControl
          as={Cleave}
          id="date-short"
          options={{ date: true, datePattern: ['m', 'y'] }}
          placeholder="mm/yy"
          style={{ maxWidth: 400 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default InputFormatterDateDemo
