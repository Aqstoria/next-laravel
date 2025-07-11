import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Stack from 'react-bootstrap/Stack'

const ButtonsStatesDemo = () => {
  const code = `import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Stack from 'react-bootstrap/Stack'

export default function ButtonsStatesDemo() {
  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      <Button active>Active</Button>
      <Button disabled>Disabled</Button>
      <Button className="pe-none">
        <Spinner animation="border" size="sm" role="status" className="ms-n1 me-2"></Spinner>
        Loading...
      </Button>
    </Stack>
  )
}`

  return (
    <section id="buttons-states" className="docs-section">
      <h4>States</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          <Button active className="me-1 mb-1">
            Active
          </Button>
          <Button variant="secondary" active className="me-1 mb-1">
            Active
          </Button>
          <Button disabled className="me-1 mb-1">
            Disabled
          </Button>
          <Button variant="secondary" disabled className="me-1 mb-1">
            Disabled
          </Button>
          <Button className="pe-none me-1 mb-1">
            <Spinner animation="border" size="sm" role="status" className="ms-n1 me-2"></Spinner>
            Loading...
          </Button>
          <Button variant="secondary" className="pe-none me-1 mb-1">
            <Spinner animation="grow" size="sm" role="status" className="ms-n1 me-2"></Spinner>
            Loading...
          </Button>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default ButtonsStatesDemo
