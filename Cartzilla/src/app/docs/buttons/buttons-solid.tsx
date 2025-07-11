import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const ButtonsSolidDemo = () => {
  const code = `import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

export default function ButtonsSolidDemo() {
  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </Stack>
  )
}`

  return (
    <section id="buttons-solid" className="docs-section pb-sm-2 mb-5">
      <h4>Solid</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          <Button variant="primary" className="me-1 mb-1">
            Primary
          </Button>
          <Button variant="secondary" className="me-1 mb-1">
            Secondary
          </Button>
          <Button variant="success" className="me-1 mb-1">
            Success
          </Button>
          <Button variant="danger" className="me-1 mb-1">
            Danger
          </Button>
          <Button variant="warning" className="me-1 mb-1">
            Warning
          </Button>
          <Button variant="info" className="me-1 mb-1">
            Info
          </Button>
          <div className="d-inline-block align-middle bg-dark p-2 mb-1 me-1">
            <Button variant="light">Light</Button>
          </div>
          <Button variant="dark" className="me-1 mb-1">
            Dark
          </Button>
          <Button variant="link" className="mb-1">
            Link
          </Button>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default ButtonsSolidDemo
