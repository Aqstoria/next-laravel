import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const ButtonGroupBasicDemo = () => {
  const code = `import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

export default function ButtonGroupBasicDemo() {
  return (
    <Stack direction="vertical" gap={3}>
      <ButtonGroup aria-label="Solid button group">
        <Button variant="primary">Left</Button>
        <Button variant="primary">Middle</Button>
        <Button variant="primary">Right</Button>
      </ButtonGroup>

      <ButtonGroup aria-label="Outline button group">
        <Button variant="outline-primary">Left</Button>
        <Button variant="outline-primary">Middle</Button>
        <Button variant="outline-primary">Right</Button>
      </ButtonGroup>

      <ButtonGroup aria-label="Pill solid button group">
        <Button variant="secondary" className="rounded-pill rounded-end-0">Left</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary" className="rounded-pill rounded-start-0">Right</Button>
      </ButtonGroup>

      <ButtonGroup aria-label="Pill outline button group">
        <Button variant="outline-secondary" className="rounded-pill rounded-end-0">Left</Button>
        <Button variant="outline-secondary">Middle</Button>
        <Button variant="outline-secondary" className="rounded-pill rounded-start-0">Right</Button>
      </ButtonGroup>
    </Stack>
  )
}`

  return (
    <section id="btn-group-basic" className="docs-section pb-sm-2 mb-5">
      <h4>Basic example</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={3} className="flex-wrap">
          <ButtonGroup aria-label="Solid button group">
            <Button variant="primary">Left</Button>
            <Button variant="primary">Middle</Button>
            <Button variant="primary">Right</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Outline button group">
            <Button variant="outline-primary">Left</Button>
            <Button variant="outline-primary">Middle</Button>
            <Button variant="outline-primary">Right</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction="horizontal" gap={3} className="flex-wrap mt-3">
          <ButtonGroup aria-label="Pill solid button group">
            <Button variant="secondary" className="rounded-pill rounded-end-0">
              Left
            </Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary" className="rounded-pill rounded-start-0">
              Right
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Pill outline button group">
            <Button variant="outline-secondary" className="rounded-pill rounded-end-0">
              Left
            </Button>
            <Button variant="outline-secondary">Middle</Button>
            <Button variant="outline-secondary" className="rounded-pill rounded-start-0">
              Right
            </Button>
          </ButtonGroup>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default ButtonGroupBasicDemo
