import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const ButtonGroupVerticalDemo = () => {
  const code = `import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

export default function ButtonGroupVerticalDemo() {
  return (
    <ButtonGroup vertical aria-label="Vertical button group">
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>
  )
}`

  return (
    <section id="btn-group-vertical" className="docs-section">
      <h4>Vertical</h4>
      <DocsComponentDemo code={code}>
        <ButtonGroup vertical className="me-4" aria-label="Vertical button group">
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </ButtonGroup>
        <ButtonGroup vertical aria-label="Vertical button group">
          <Button variant="outline-secondary">Button</Button>
          <Button variant="outline-secondary">Button</Button>
          <Button variant="outline-secondary">Button</Button>
          <Button variant="outline-secondary">Button</Button>
        </ButtonGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default ButtonGroupVerticalDemo
