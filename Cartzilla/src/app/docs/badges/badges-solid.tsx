import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'

const BadgesSolidDemo = () => {
  const code = `import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'

export default function BadgesSolidDemo() {
  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      <Badge bg="primary">Primary</Badge>
      <Badge bg="secondary">Secondary</Badge>
      <Badge bg="body-secondary" text="body-emphasis">Secondary alt</Badge>
      <Badge bg="success">Success</Badge>
      <Badge bg="danger">Danger</Badge>
      <Badge bg="warning">Warning</Badge>
      <Badge bg="info">Info</Badge>
      <Badge bg="light" text="dark">Light</Badge>
      <Badge bg="dark">Dark</Badge>
    </Stack>
  )
}`

  return (
    <section id="badges-solid" className="docs-section pb-sm-2 mb-5">
      <h4>Solid</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          <Badge bg="primary" className="me-1 mb-1">
            Primary
          </Badge>
          <Badge bg="secondary" className="me-1 mb-1">
            Secondary
          </Badge>
          <Badge bg="body-secondary" text="body-emphasis" className="me-1 mb-1">
            Secondary alt
          </Badge>
          <Badge bg="success" className="me-1 mb-1">
            Success
          </Badge>
          <Badge bg="danger" className="me-1 mb-1">
            Danger
          </Badge>
          <Badge bg="warning" className="me-1 mb-1">
            Warning
          </Badge>
          <Badge bg="info" className="me-1 mb-1">
            Info
          </Badge>
          <div className="d-inline-block bg-dark p-2 mb-1 me-1">
            <Badge bg="light" text="dark">
              Light
            </Badge>
          </div>
          <Badge bg="dark" className="mb-1">
            Dark
          </Badge>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default BadgesSolidDemo
