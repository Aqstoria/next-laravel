import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'

const BadgesOutlineDemo = () => {
  const code = `import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'

export default function BadgesOutlineDemo() {
  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      <Badge bg="transparent" text="primary" className="border border-primary">
        Primary
      </Badge>
      <Badge bg="transparent" text="body-emphasis" className="border">
        Secondary
      </Badge>
      <Badge bg="transparent" text="success" className="border border-success">
        Success
      </Badge>
      <Badge bg="transparent" text="danger" className="border border-danger">
        Danger
      </Badge>
      <Badge bg="transparent" text="warning" className="border border-warning">
        Warning
      </Badge>
      <Badge bg="transparent" text="info" className="border border-info">
        Info
      </Badge>
      <Badge bg="transparent" text="light" className="border border-light">
        Light
      </Badge>
      <Badge bg="transparent" text="dark" className="border border-dark">
        Dark
      </Badge>
    </Stack>
  )
}`

  return (
    <section id="badges-outline" className="docs-section pb-sm-2 mb-5">
      <h4>Outline</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          <Badge bg="transparent" text="primary" className="border border-primary me-1 mb-1">
            Primary
          </Badge>
          <Badge bg="transparent" text="body-emphasis" className="border me-1 mb-1">
            Secondary
          </Badge>
          <Badge bg="transparent" text="success" className="border border-success me-1 mb-1">
            Success
          </Badge>
          <Badge bg="transparent" text="danger" className="border border-danger me-1 mb-1">
            Danger
          </Badge>
          <Badge bg="transparent" text="warning" className="border border-warning me-1 mb-1">
            Warning
          </Badge>
          <Badge bg="transparent" text="info" className="border border-info me-1 mb-1">
            Info
          </Badge>
          <div className="d-inline-block bg-dark p-2 mb-1 me-1">
            <Badge bg="transparent" text="light" className="border border-light">
              Light
            </Badge>
          </div>
          <div className="d-inline-block bg-light p-2 mb-1">
            <Badge bg="transparent" text="dark" className="border border-dark">
              Dark
            </Badge>
          </div>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default BadgesOutlineDemo
