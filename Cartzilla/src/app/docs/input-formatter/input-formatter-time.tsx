'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormControl from 'react-bootstrap/FormControl'
import FormLabel from 'react-bootstrap/FormLabel'
import Cleave from 'cleave.js/react'

const InputFormatterTimeDemo = () => {
  const code = `'use client'

import FormControl from 'react-bootstrap/FormControl'
import FormLabel from 'react-bootstrap/FormLabel'
import Cleave from 'cleave.js/react'

export default function InputFormatterTimeDemo() {
  return (
    <>
      <FormLabel htmlFor="time">Time</FormLabel>
      <FormControl
        as={Cleave}
        id="time"
        options={{ time: true, timePattern: ['h', 'm'] }}
        placeholder="hh:mm"
      />
    </>
  )
}`

  return (
    <section id="input-formatter-time" className="docs-section pb-sm-2 mb-5">
      <h4>Time</h4>
      <DocsComponentDemo code={code}>
        <FormLabel htmlFor="time">Time</FormLabel>
        <FormControl
          as={Cleave}
          id="time"
          options={{ time: true, timePattern: ['h', 'm'] }}
          placeholder="hh:mm"
          style={{ maxWidth: 400 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default InputFormatterTimeDemo
