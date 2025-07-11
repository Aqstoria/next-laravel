'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import CreditCardInput from '@/components/forms/credit-card-input'
import FormLabel from 'react-bootstrap/FormLabel'

const InputFormatterCardDemo = () => {
  const code = `'use client'

import CreditCardInput from '@/components/forms/credit-card-input'
import FormLabel from 'react-bootstrap/FormLabel'

export default function InputFormatterCardDemo() {
  return (
    <>
      <FormLabel htmlFor="card">Card number</FormLabel>
      <CreditCardInput
        id="card"
        placeholder="Enter card number"
        onCardTypeChange={(type) => console.log(type)}
        onCardNumberChange={(number) => console.log(number)}
      />
    </>
  )
}`

  return (
    <section id="input-formatter-card" className="docs-section pb-sm-2 mb-5">
      <h4>Payment card number</h4>
      <DocsComponentDemo code={code}>
        <FormLabel htmlFor="card">Card number</FormLabel>
        <CreditCardInput id="card" placeholder="Enter card number" style={{ maxWidth: 400 }} />
      </DocsComponentDemo>
    </section>
  )
}

export default InputFormatterCardDemo
