import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const BadgesButtonDemo = () => {
  const code = `import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

export default function BadgesButtonDemo() {
  return (
    <Stack direction="horizontal" gap={3} className="flex-wrap">
      <Button>
        Notifications
        <Badge bg="light" text="dark" className="ms-2 me-n1">
          4
        </Badge>
      </Button>
      <Button variant="dark" className="rounded-pill">
        Comments
        <Badge bg="success" pill className="ms-2 me-n1">
          9
        </Badge>
      </Button>
      <Button variant="outline-secondary" className="position-relative">
        Inbox
        <Badge bg="info" pill className="position-absolute top-0 start-100 translate-middle">
          50+
        </Badge>
      </Button>
    </Stack>
  )
}`

  return (
    <section id="badges-button" className="docs-section pb-sm-2 mb-5">
      <h4>Inside button</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={3} className="flex-wrap">
          <Button className="me-1 mb-1">
            Notifications
            <Badge bg="light" text="dark" className="ms-2 me-n1">
              4
            </Badge>
          </Button>
          <Button variant="dark" className="rounded-pill me-1 mb-1">
            Comments
            <Badge bg="success" pill className="ms-2 me-n1">
              9
            </Badge>
          </Button>
          <Button variant="outline-secondary" className="position-relative mb-1">
            Inbox
            <Badge bg="info" pill className="position-absolute top-0 start-100 translate-middle">
              50+
            </Badge>
          </Button>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default BadgesButtonDemo
