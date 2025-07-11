import DocsComponentDemo from '@/components/docs/docs-component-demo'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import DropdownItem from 'react-bootstrap/DropdownItem'

const InputGroupButtonAddonDemo = () => {
  const code = `import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import DropdownItem from 'react-bootstrap/DropdownItem'

export default function InputGroupButtonAddonDemo() {
  return (
    <>
      {/* Button addon on the left */}
      <InputGroup className="mb-3">
        <Button id="button-addon-left">Button</Button>
        <FormControl
          placeholder="Button on the left"
          aria-label="Text input with button addon"
          aria-describedby="button-addon-left"
        />
      </InputGroup>

      {/* Button addon on the right */}
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Button on the right"
          aria-label="Text input with button addon"
          aria-describedby="button-addon-right"
        />
        <Button variant="dark" id="button-addon-right">Button</Button>
      </InputGroup>

      {/* Dropdown addon on the left */}
      <InputGroup className="mb-3">
        <DropdownButton variant="outline-primary" id="dropdown-addon-left" title="Dropdown">
          <DropdownItem href="#link-1">Action</DropdownItem>
          <DropdownItem href="#link-2">Another action</DropdownItem>
          <DropdownItem href="#link-3">Something else here</DropdownItem>
        </DropdownButton>
        <FormControl
          placeholder="Dropdown on the left"
          aria-label="Text input with dropdown addon"
          aria-describedby="dropdown-addon-left"
        />
      </InputGroup>

      {/* Dropdown addon on the right */}
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Dropdown on the right"
          aria-label="Text input with dropdown addon"
          aria-describedby="dropdown-addon-right"
        />
        <DropdownButton variant="outline-dark" id="dropdown-addon-right" title="Dropdown">
          <DropdownItem href="#link-1">Action</DropdownItem>
          <DropdownItem href="#link-2">Another action</DropdownItem>
          <DropdownItem href="#link-3">Something else here</DropdownItem>
        </DropdownButton>
      </InputGroup>

      {/* Multiple button addons */}
      <InputGroup>
        <FormControl placeholder="Buttons on the right" aria-label="multiple button addons" />
        <Button variant="outline-success" className="btn-icon" aria-label="Confirm">
          <i className="ci-check"/>
        </Button>
        <Button variant="outline-danger" className="btn-icon" aria-label="Delete">
          <i className="ci-trash"/>
        </Button>
      </InputGroup>
    </>
  )
}`

  return (
    <section id="input-group-addon-button" className="docs-section pb-sm-2 mb-5">
      <h4>Button addons</h4>
      <DocsComponentDemo code={code}>
        <InputGroup className="mb-3" style={{ maxWidth: 400 }}>
          <Button id="button-addon-left">Button</Button>
          <FormControl
            placeholder="Button on the left"
            aria-label="Text input with button addon"
            aria-describedby="button-addon-left"
          />
        </InputGroup>
        <InputGroup className="mb-3" style={{ maxWidth: 400 }}>
          <FormControl
            placeholder="Button on the right"
            aria-label="Text input with button addon"
            aria-describedby="button-addon-right"
          />
          <Button variant="dark" id="button-addon-right">
            Button
          </Button>
        </InputGroup>
        <InputGroup className="mb-3" style={{ maxWidth: 400 }}>
          <DropdownButton variant="outline-primary" id="dropdown-addon-left" title="Dropdown">
            <DropdownItem href="#link-1">Action</DropdownItem>
            <DropdownItem href="#link-2">Another action</DropdownItem>
            <DropdownItem href="#link-3">Something else here</DropdownItem>
          </DropdownButton>
          <FormControl
            placeholder="Dropdown on the left"
            aria-label="Text input with dropdown addon"
            aria-describedby="dropdown-addon-left"
          />
        </InputGroup>
        <InputGroup className="mb-3" style={{ maxWidth: 400 }}>
          <FormControl
            placeholder="Dropdown on the right"
            aria-label="Text input with dropdown addon"
            aria-describedby="dropdown-addon-right"
          />
          <DropdownButton variant="outline-dark" id="dropdown-addon-right" title="Dropdown">
            <DropdownItem href="#link-1">Action</DropdownItem>
            <DropdownItem href="#link-2">Another action</DropdownItem>
            <DropdownItem href="#link-3">Something else here</DropdownItem>
          </DropdownButton>
        </InputGroup>
        <InputGroup style={{ maxWidth: 400 }}>
          <FormControl placeholder="Buttons on the right" aria-label="multiple button addons" />
          <Button variant="outline-success" className="btn-icon" aria-label="Confirm">
            <i className="ci-check" />
          </Button>
          <Button variant="outline-danger" className="btn-icon" aria-label="Delete">
            <i className="ci-trash" />
          </Button>
        </InputGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default InputGroupButtonAddonDemo
