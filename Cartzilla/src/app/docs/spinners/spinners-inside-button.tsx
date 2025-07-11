import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const SpinnersInsideButtonDemo = () => {
  const code = `import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

export default function SpinnersInsideButtonDemo() {
  return (
    <Stack direction="horizontal" gap={4} className="flex-wrap">
      <Stack direction="horizontal" gap={2}>
        <Button variant="primary" className="btn-icon pe-none">
          <Spinner animation="border" size="sm" role="status" aria-hidden="true">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Button>
        <Button variant="primary" className="pe-none">
          <Spinner animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
          Loading...
        </Button>
      </Stack>

      <Stack direction="horizontal" gap={2}>
        <Button variant="outline-secondary" className="btn-icon pe-none">
          <Spinner animation="grow" size="sm" role="status" aria-hidden="true">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Button>
        <Button variant="outline-secondary" className="pe-none">
          <Spinner animation="grow" size="sm" role="status" aria-hidden="true" className="me-2" />
          Loading...
        </Button>
      </Stack>
    </Stack>
  )
}`

  return (
    <section id="spinners-button" className="docs-section">
      <h4>Inside button</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={4} className="flex-wrap">
          <Stack direction="horizontal" gap={2}>
            <Button variant="primary" className="btn-icon pe-none">
              <Spinner animation="border" size="sm" role="status" aria-hidden="true">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Button>
            <Button variant="primary" className="pe-none">
              <Spinner animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
              Loading...
            </Button>
          </Stack>
          <Stack direction="horizontal" gap={2}>
            <Button variant="outline-secondary" className="btn-icon pe-none">
              <Spinner animation="grow" size="sm" role="status" aria-hidden="true">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Button>
            <Button variant="outline-secondary" className="pe-none">
              <Spinner animation="grow" size="sm" role="status" aria-hidden="true" className="me-2" />
              Loading...
            </Button>
          </Stack>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default SpinnersInsideButtonDemo
