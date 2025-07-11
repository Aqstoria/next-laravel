import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'

const BadgesWithIconDemo = () => {
  const code = `import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'

export default function BadgesWithIconDemo() {
  return (
    <Stack direction="horizontal" gap={2}>
      <Badge bg="primary" className="d-inline-flex align-items-center">
        <i className="ci-home fs-sm me-1"/>
        Home
      </Badge>
      <Badge
        bg="transparent"
        text="primary"
        className="d-inline-flex align-items-center border border-primary"
      >
        Favorite
        <i className="ci-heart fs-sm ms-1"/>
      </Badge>
      <Badge bg="primary-subtle" text="primary">
        <i className="ci-trash fs-sm"/>
      </Badge>
    </Stack>
  )
}`

  return (
    <section id="badges-icon" className="docs-section pb-sm-2 mb-5">
      <h4>Badge with icon</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2}>
          <Badge bg="primary" className="d-inline-flex align-items-center me-1 mb-1">
            <i className="ci-home fs-sm me-1" />
            Home
          </Badge>
          <Badge
            bg="transparent"
            text="primary"
            className="d-inline-flex align-items-center border border-primary me-1 mb-1"
          >
            Favorite
            <i className="ci-heart fs-sm ms-1" />
          </Badge>
          <Badge bg="primary-subtle" text="primary" className="mb-1">
            <i className="ci-trash fs-sm" />
          </Badge>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default BadgesWithIconDemo
