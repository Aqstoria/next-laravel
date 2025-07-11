import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const ButtonsShapesDemo = () => {
  const code = `import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

export default function ButtonsShapesDemo() {
  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      <Button>Rounded</Button>
      <Button className="rounded-pill">Pill button</Button>
      <Button className="rounded-0">Square</Button>
    </Stack>
  )
}`

  return (
    <section id="buttons-shapes" className="docs-section pb-sm-2 mb-5">
      <h4>Shapes</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap mb-3">
          <Button className="me-1 mb-1">Rounded</Button>
          <Button className="rounded-pill me-1 mb-1">Pill button</Button>
          <Button className="rounded-0 mb-1">Square</Button>
        </Stack>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          <Button variant="outline-primary" className="me-1 mb-1">
            Rounded
          </Button>
          <Button variant="outline-primary" className="rounded-pill me-1 mb-1">
            Pill button
          </Button>
          <Button variant="outline-primary" className="rounded-0 mb-1">
            Square
          </Button>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default ButtonsShapesDemo
