import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'

const BadgesSubtleDemo = () => {
  const code = `import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'

export default function BadgesSubtleDemo() {
  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      <Badge bg="primary-subtle" text="primary">Primary</Badge>
      <Badge bg="secondary-subtle" text="body-emphasis">Secondary</Badge>
      <Badge bg="success-subtle" text="success">Success</Badge>
      <Badge bg="danger-subtle" text="danger">Danger</Badge>
      <Badge bg="warning-subtle" text="warning">Warning</Badge>
      <Badge bg="info-subtle" text="info">Info</Badge>
      <Badge bg="light" text="light" className="bg-opacity-10">Light</Badge>
      <Badge bg="dark-subtle" text="body-emphasis">Dark</Badge>
    </Stack>
  )
}`

  return (
    <section id="badges-subtle" className="docs-section pb-sm-2 mb-5">
      <h4>Subtle</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          <Badge bg="primary-subtle" text="primary" className="me-1 mb-1">
            Primary
          </Badge>
          <Badge bg="secondary-subtle" text="body-emphasis" className="me-1 mb-1">
            Secondary
          </Badge>
          <Badge bg="success-subtle" text="success" className="me-1 mb-1">
            Success
          </Badge>
          <Badge bg="danger-subtle" text="danger" className="me-1 mb-1">
            Danger
          </Badge>
          <Badge bg="warning-subtle" text="warning" className="me-1 mb-1">
            Warning
          </Badge>
          <Badge bg="info-subtle" text="info" className="me-1 mb-1">
            Info
          </Badge>
          <div className="d-inline-block bg-dark p-2 mb-1 me-1">
            <Badge bg="light" text="light" className="bg-opacity-10">
              Light
            </Badge>
          </div>
          <Badge bg="dark-subtle" text="body-emphasis" className="mb-1">
            Dark
          </Badge>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default BadgesSubtleDemo
