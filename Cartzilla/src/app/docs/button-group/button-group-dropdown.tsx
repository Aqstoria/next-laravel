import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import DropdownItem from 'react-bootstrap/DropdownItem'

const ButtonGroupDropdownDemo = () => {
  const code = `import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import DropdownItem from 'react-bootstrap/DropdownItem'

export default function ButtonGroupDropdownDemo() {
  return (
    <ButtonGroup cla aria-label="Button group with nested dropdown">
      <Button variant="outline-secondary">1</Button>
      <Button variant="outline-secondary">2</Button>
      <DropdownButton as={ButtonGroup} variant="outline-secondary" title="Dropdown" id="bg-nested-dropdown">
        <DropdownItem eventKey="1">Dropdown link</DropdownItem>
        <DropdownItem eventKey="2">Dropdown link</DropdownItem>
        <DropdownItem eventKey="3">Dropdown link</DropdownItem>
      </DropdownButton>
    </ButtonGroup>
  )
}`

  return (
    <section id="btn-group-dropdown" className="docs-section pb-sm-2 mb-5">
      <h4>Nested dropdown</h4>
      <DocsComponentDemo code={code}>
        <Row xs={1} sm={2} className="g-3">
          <Col>
            <ButtonGroup aria-label="Button group with nested dropdown">
              <Button>1</Button>
              <Button>2</Button>
              <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                <DropdownItem eventKey="1">Dropdown link</DropdownItem>
                <DropdownItem eventKey="2">Dropdown link</DropdownItem>
                <DropdownItem eventKey="3">Dropdown link</DropdownItem>
              </DropdownButton>
            </ButtonGroup>
          </Col>
          <Col>
            <ButtonGroup aria-label="Button group with nested dropdown">
              <Button variant="outline-secondary">1</Button>
              <Button variant="outline-secondary">2</Button>
              <DropdownButton as={ButtonGroup} variant="outline-secondary" title="Dropdown" id="bg-nested-dropdown">
                <DropdownItem eventKey="1">Dropdown link</DropdownItem>
                <DropdownItem eventKey="2">Dropdown link</DropdownItem>
                <DropdownItem eventKey="3">Dropdown link</DropdownItem>
              </DropdownButton>
            </ButtonGroup>
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default ButtonGroupDropdownDemo
