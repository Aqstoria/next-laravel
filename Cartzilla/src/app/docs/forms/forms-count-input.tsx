'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import CountInput from '@/components/forms/count-input'

const FormsCountInputDemo = () => {
  const code = `'use client'

import { useState } from 'react'
import Stack from 'react-bootstrap/Stack'
import CountInput from '@/components/forms/count-input'

export default function FormsCountInputDemo() {
  const [count, setCount] = useState(1)

  return (
    <Stack gap={3} className="align-items-start">
      {/* Small stateless count input */}
      <CountInput size="sm" defaultValue={1} aria-label="Count input" />

      {/* Controlled (with state) count input with min/max values and callbacks */}
      <CountInput
        value={count}
        min={1}
        max={5}
        // incrementBtnLabel="Increment quantity" // Optionally change increment button aria-label
        // decrementBtnLabel="Decrement quantity" // Optionally change decrement button aria-label
        onChange={(value) => {
          console.log('Changed to:', value)
          setCount(value)
        }}
        onIncrement={(value) => {
          console.log('Incremented to:', value)
          setCount(value)
        }}
        onDecrement={(value) => {
          console.log('Decremented to:', value)
          setCount(value)
        }}
        aria-label="Count input"
      />

      {/* Large stateless count input */}
      <CountInput size="lg" defaultValue={1} aria-label="Count input" />

      {/* Disabled count input */}
      <CountInput defaultValue={1} disabled aria-label="Disabled count input" />
    </Stack>
  )
}`

  const [count, setCount] = useState(1)

  return (
    <section id="forms-count" className="docs-section pb-sm-2 mb-5">
      <h4>Count input (+/-)</h4>
      <div className="d-sm-flex text-body-emphasis bg-info-subtle rounded py-4 px-3 mb-3">
        <i className="ci-info text-info fs-4 mb-2 mb-sm-0" />
        <div className="ps-sm-3 pe-sm-5 w-100">
          <p>The CountInput is a custom Cartzilla component.</p>
          <div className="h6 pb-1 mb-2">Available props:</div>
          <ul className="text-body mb-0">
            <li>
              <code>value={'{number}'}</code> -{' '}
              <span className="fs-sm">
                The current value of the input. Use this to control the component externally via state.
              </span>
            </li>
            <li>
              <code>defaultValue={'{number}'}</code> -{' '}
              <span className="fs-sm">The initial value of the input for uncontrolled usage.</span>
            </li>
            <li>
              <code>min={'{number}'}</code> -{' '}
              <span className="fs-sm">
                The minimum value allowed for the input. Default is <code>0</code>.
              </span>
            </li>
            <li>
              <code>max={'{number}'}</code> -{' '}
              <span className="fs-sm">
                The maximum value allowed for the input. Default is <code>Infinity</code>.
              </span>
            </li>
            <li>
              <code>size={'{"sm" | "lg"}'}</code> -{' '}
              <span className="fs-sm">
                Controls the size of the input and buttons. Use <code>&quot;sm&quot;</code> for small or{' '}
                <code>&quot;lg&quot;</code> for large sizes.
              </span>
            </li>
            <li>
              <code>disabled={'{boolean}'}</code> -{' '}
              <span className="fs-sm">
                Disables the input and buttons when set to <code>true</code>.
              </span>
            </li>
            <li>
              <code>onChange={'{(value) => void}'}</code> -{' '}
              <span className="fs-sm">
                Callback triggered whenever the input value changes (increment, decrement, or external update).
              </span>
            </li>
            <li>
              <code>onIncrement={'{(value) => void}'}</code> -{' '}
              <span className="fs-sm">
                Callback triggered when the increment button is clicked. Receives the updated value.
              </span>
            </li>
            <li>
              <code>onDecrement={'{(value) => void}'}</code> -{' '}
              <span className="fs-sm">
                Callback triggered when the decrement button is clicked. Receives the updated value.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <DocsComponentDemo code={code}>
        <Stack gap={3} className="align-items-start">
          <CountInput size="sm" defaultValue={1} aria-label="Small stateless count input" />
          <CountInput
            value={count}
            min={1}
            max={5}
            onChange={(value) => {
              console.log('Changed to:', value)
              setCount(value)
            }}
            onIncrement={(value) => {
              console.log('Incremented to:', value)
              setCount(value)
            }}
            onDecrement={(value) => {
              console.log('Decremented to:', value)
              setCount(value)
            }}
            aria-label="Controlled (with state) count input with min/max values and callbacks"
          />
          <CountInput size="lg" defaultValue={1} aria-label="Large stateless count input" />
          <CountInput defaultValue={1} disabled aria-label="Disabled count input" />
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default FormsCountInputDemo
