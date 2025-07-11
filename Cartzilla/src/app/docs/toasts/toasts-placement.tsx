'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormLabel from 'react-bootstrap/FormLabel'
import FormSelect from 'react-bootstrap/FormSelect'
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'
import ToastBody from 'react-bootstrap/ToastBody'
import ToastContainer, { type ToastPosition } from 'react-bootstrap/ToastContainer'

const ToastsPlacementDemo = () => {
  const [position, setPosition] = useState<ToastPosition>('top-start')

  const code = `'use client'

import { useState } from 'react'
import FormLabel from 'react-bootstrap/FormLabel'
import FormSelect from 'react-bootstrap/FormSelect'
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'
import ToastBody from 'react-bootstrap/ToastBody'
import ToastContainer, { type ToastPosition } from 'react-bootstrap/ToastContainer'

export default function ToastsPlacementDemo() {
  const [position, setPosition] = useState<ToastPosition>('top-start')

  return (
    <>
      <div className="mb-3" style={{ maxWidth: 300 }}>
        <FormLabel htmlFor="selectToastPlacement">Toast placement</FormLabel>
        <FormSelect id="selectToastPlacement" onChange={(e) => setPosition(e.currentTarget.value as ToastPosition)}>
          {[
            'top-start',
            'top-center',
            'top-end',
            'middle-start',
            'middle-center',
            'middle-end',
            'bottom-start',
            'bottom-center',
            'bottom-end',
          ].map((position) => (
            <option key={position} value={position}>
              {position.charAt(0).toUpperCase() + position.slice(1).replace('-', ' ')}
            </option>
          ))}
        </FormSelect>
      </div>
      <div
        className="position-relative bg-dotted rounded"
        aria-live="polite"
        aria-atomic="true"
        style={{ height: 240 }}
      >
        <ToastContainer position={position} className="p-3">
          <Toast>
            <ToastHeader closeButton={false}>
              <i className="ci-bell text-primary fs-base mt-1 me-2"/>
              <span className="fw-semibold me-auto">Toast title</span>
              <small className="text-body-secondary">11 mins ago</small>
            </ToastHeader>
            <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
          </Toast>
        </ToastContainer>
      </div>
    </>
  )
}`

  return (
    <section id="toasts-placement" className="docs-section pb-sm-2 mb-5">
      <h4>Placement</h4>
      <DocsComponentDemo code={code}>
        <div className="mb-3" style={{ maxWidth: 300 }}>
          <FormLabel htmlFor="selectToastPlacement">Toast placement</FormLabel>
          <FormSelect id="selectToastPlacement" onChange={(e) => setPosition(e.currentTarget.value as ToastPosition)}>
            {[
              'top-start',
              'top-center',
              'top-end',
              'middle-start',
              'middle-center',
              'middle-end',
              'bottom-start',
              'bottom-center',
              'bottom-end',
            ].map((position) => (
              <option key={position} value={position}>
                {position.charAt(0).toUpperCase() + position.slice(1).replace('-', ' ')}
              </option>
            ))}
          </FormSelect>
        </div>
        <div
          className="position-relative bg-dotted rounded"
          aria-live="polite"
          aria-atomic="true"
          style={{ height: 240 }}
        >
          <ToastContainer position={position} className="p-3">
            <Toast>
              <ToastHeader closeButton={false}>
                <i className="ci-bell text-primary fs-base mt-1 me-2" />
                <span className="fw-semibold me-auto">Toast title</span>
                <small className="text-body-secondary">11 mins ago</small>
              </ToastHeader>
              <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
            </Toast>
          </ToastContainer>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default ToastsPlacementDemo
