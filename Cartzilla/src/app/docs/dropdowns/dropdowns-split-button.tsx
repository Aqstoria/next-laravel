import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const DropdownsSplitButtonDemo = () => {
  const code = `import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

export default function DropdownsSplitButtonDemo() {
  return (
    <Dropdown as={ButtonGroup}>
      <Button variant="outline-primary">Button</Button>
      <DropdownToggle split variant="outline-primary">
        <span className="visually-hidden">Dropdown toggle</span>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem href="#">Action</DropdownItem>
        <DropdownItem href="#">Another action</DropdownItem>
        <DropdownItem href="#">Something else here</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}`

  return (
    <section id="dropdowns-split-btn" className="docs-section">
      <h4>Split button</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={3} className="flex-wrap">
          <Dropdown as={ButtonGroup}>
            <Button>Button</Button>
            <DropdownToggle
              split
              className="position-relative z-1 border-0 border-start border-light"
              style={{ '--cz-border-opacity': 0.25 } as React.CSSProperties}
            >
              <span className="visually-hidden">Dropdown toggle</span>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#">Action</DropdownItem>
              <DropdownItem href="#">Another action</DropdownItem>
              <DropdownItem href="#">Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown as={ButtonGroup}>
            <Button variant="outline-primary">Button</Button>
            <DropdownToggle split variant="outline-primary">
              <span className="visually-hidden">Dropdown toggle</span>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#">Action</DropdownItem>
              <DropdownItem href="#">Another action</DropdownItem>
              <DropdownItem href="#">Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default DropdownsSplitButtonDemo
