'use client'

import { useState, useEffect } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'
import ToastBody from 'react-bootstrap/ToastBody'
import ToastContainer from 'react-bootstrap/ToastContainer'

const ToastsLiveDemo = () => {
  const [show, setShow] = useState(false)

  // Automatically hide toast after 6 seconds
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 6000)
      return () => clearTimeout(timer)
    }
  }, [show])

  const code = `'use client'

import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'
import ToastBody from 'react-bootstrap/ToastBody'
import ToastContainer from 'react-bootstrap/ToastContainer'

export default function ToastsLiveDemo() {
  const [show, setShow] = useState(false)

  // Automatically hide toast after 6 seconds
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 6000)
      return () => clearTimeout(timer)
    }
  }, [show])

  return (
    <>
      <Button onClick={() => setShow(true)}>Show live toast</Button>
      <ToastContainer position="bottom-end" className="position-fixed p-3">
        <Toast className="border-primary" show={show} onClose={() => setShow(false)}>
          <ToastHeader>
            <i className="ci-bell text-primary fs-base me-2"/>
            <span className="fw-semibold me-auto">Toast title</span>
            <small className="text-body-secondary me-2">5 mins ago</small>
          </ToastHeader>
          <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
        </Toast>
      </ToastContainer>
    </>
  )
}`

  return (
    <section id="toasts-live" className="docs-section">
      <h4>Live demo</h4>
      <DocsComponentDemo code={code}>
        <Button onClick={() => setShow(true)}>Show live toast</Button>
        <ToastContainer position="bottom-end" className="position-fixed p-3">
          <Toast className="border-primary" show={show} onClose={() => setShow(false)}>
            <ToastHeader>
              <i className="ci-bell text-primary fs-base me-2" />
              <span className="fw-semibold me-auto">Toast title</span>
              <small className="text-body-secondary me-2">5 mins ago</small>
            </ToastHeader>
            <ToastBody className="me-2">Hello, world! This is a toast message.</ToastBody>
          </Toast>
        </ToastContainer>
      </DocsComponentDemo>
    </section>
  )
}

export default ToastsLiveDemo
