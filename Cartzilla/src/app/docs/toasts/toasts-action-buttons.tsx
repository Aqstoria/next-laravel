import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'
import ToastBody from 'react-bootstrap/ToastBody'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

const ToastsActionButtonsDemo = () => {
  const code = `import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'
import ToastBody from 'react-bootstrap/ToastBody'
import Button from 'react-bootstrap/Button'

export default function ToastsActionButtonsDemo() {
  return (
    <Toast>
      <ToastHeader closeButton={false}>
        <i className="ci-bell text-primary fs-base mt-1 me-2"/>
        <span className="fw-semibold me-auto">Notification center</span>
        <small className="text-body-secondary">2 seconds ago</small>
      </ToastHeader>
      <ToastBody className="me-2">You have 10 unread messages.</ToastBody>
      <Stack direction="horizontal" gap={2} className="pt-3">
        <Button size="sm">Read all</Button>
        <Button variant="secondary" size="sm">Close</Button>
      </Stack>
    </Toast>
  )
}`

  return (
    <section id="toasts-buttons" className="docs-section pb-sm-2 mb-5">
      <h4>Action buttons</h4>
      <DocsComponentDemo code={code}>
        <Toast>
          <ToastHeader closeButton={false}>
            <i className="ci-bell text-primary fs-base mt-1 me-2" />
            <span className="fw-semibold me-auto">Notification center</span>
            <small className="text-body-secondary">2 seconds ago</small>
          </ToastHeader>
          <ToastBody className="me-2">You have 10 unread messages.</ToastBody>
          <Stack direction="horizontal" gap={2} className="pt-3">
            <Button size="sm">Read all</Button>
            <Button variant="secondary" size="sm">
              Close
            </Button>
          </Stack>
        </Toast>
      </DocsComponentDemo>
    </section>
  )
}

export default ToastsActionButtonsDemo
