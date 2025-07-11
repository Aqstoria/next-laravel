import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const ButtonsOutlineDemo = () => {
  const code = `import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

export default function ButtonsOutlineDemo() {
  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      <Button variant="outline-primary">Primary</Button>
      <Button variant="outline-secondary">Secondary</Button>
      <Button variant="outline-success">Success</Button>
      <Button variant="outline-danger">Danger</Button>
      <Button variant="outline-warning">Warning</Button>
      <Button variant="outline-info">Info</Button>
      <Button variant="outline-light">Light</Button>
      <Button variant="outline-dark">Dark</Button>
    </Stack>
  )
}`

  return (
    <section id="buttons-outline" className="docs-section pb-sm-2 mb-5">
      <h4>Outline</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          <Button variant="outline-primary" className="me-1 mb-1">
            Primary
          </Button>
          <Button variant="outline-secondary" className="me-1 mb-1">
            Secondary
          </Button>
          <Button variant="outline-success" className="me-1 mb-1">
            Success
          </Button>
          <Button variant="outline-danger" className="me-1 mb-1">
            Danger
          </Button>
          <Button variant="outline-warning" className="me-1 mb-1">
            Warning
          </Button>
          <Button variant="outline-info" className="me-1 mb-1">
            Info
          </Button>
          <div className="d-inline-block align-middle bg-dark p-2 mb-1 me-1">
            <Button variant="outline-light">Light</Button>
          </div>
          <Button variant="outline-dark" className="mb-1">
            Dark
          </Button>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default ButtonsOutlineDemo
