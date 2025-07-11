import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'

const BadgesShapesDemo = () => {
  const code = `import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'

export default function BadgesShapesDemo() {
  return (
    <Stack direction="horizontal" gap={2}>
      <Badge bg="primary">Rounded</Badge>
      <Badge bg="primary" pill>Pill badge</Badge>
      <Badge bg="primary" className="rounded-0">Square</Badge>
    </Stack>
  )
}`

  return (
    <section id="badges-shapes" className="docs-section pb-sm-2 mb-5">
      <h4>Shapes</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2}>
          <Badge bg="primary" className="me-1 mb-1">
            Rounded
          </Badge>
          <Badge bg="primary" pill className="me-1 mb-1">
            Pill badge
          </Badge>
          <Badge bg="primary" className="rounded-0 mb-1">
            Square
          </Badge>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default BadgesShapesDemo
