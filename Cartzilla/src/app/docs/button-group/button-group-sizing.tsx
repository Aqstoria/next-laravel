import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const ButtonGroupSizingDemo = () => {
  const code = `import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

export default function ButtonGroupSizingDemo() {
  return (
    <Stack direction="vertical" gap={3}>
      <ButtonGroup size="lg" aria-label="Large button group">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>

      <ButtonGroup aria-label="Normal button group">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>

      <ButtonGroup size="sm" aria-label="Small button group">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </Stack>
  )
}`

  return (
    <section id="btn-group-sizing" className="docs-section pb-sm-2 mb-5">
      <h4>Sizing</h4>
      <DocsComponentDemo code={code}>
        <Row xs={1} sm={2} className="g-3">
          <Col className="vstack align-items-start gap-3">
            <ButtonGroup size="lg" aria-label="Large button group">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Normal button group">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
            <ButtonGroup size="sm" aria-label="Small button group">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </Col>
          <Col className="vstack align-items-start gap-3">
            <ButtonGroup size="lg" aria-label="Large button group">
              <Button variant="outline-secondary">Left</Button>
              <Button variant="outline-secondary">Middle</Button>
              <Button variant="outline-secondary">Right</Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Normal button group">
              <Button variant="outline-secondary">Left</Button>
              <Button variant="outline-secondary">Middle</Button>
              <Button variant="outline-secondary">Right</Button>
            </ButtonGroup>
            <ButtonGroup size="sm" aria-label="Small button group">
              <Button variant="outline-secondary">Left</Button>
              <Button variant="outline-secondary">Middle</Button>
              <Button variant="outline-secondary">Right</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default ButtonGroupSizingDemo
