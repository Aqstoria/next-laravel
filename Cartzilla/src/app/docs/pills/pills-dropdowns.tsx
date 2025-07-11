import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import NavDropdown from 'react-bootstrap/NavDropdown'
import DropdownItem from 'react-bootstrap/DropdownItem'

const PillsWithDropdownsDemo = () => {
  const code = `import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import NavDropdown from 'react-bootstrap/NavDropdown'
import DropdownItem from 'react-bootstrap/DropdownItem'

export default function PillsWithDropdownsDemo() {
  return (
    <>
      <Nav variant="pills" defaultActiveKey="#link-1">
        <NavItem>
          <NavLink href="#link-1">Active</NavLink>
        </NavItem>
        <Dropdown as={NavItem}>
          <DropdownToggle as={NavLink}>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#link-2-1">Action</DropdownItem>
            <DropdownItem href="#link-2-2">Another action</DropdownItem>
            <DropdownItem href="#link-2-3">Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#link-3">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#link-4" disabled>Disabled</NavLink>
        </NavItem>
      </Nav>

      {/* Using NavDropdown shorthand */}
      <Nav variant="pills" defaultActiveKey="#link-1">
        <NavItem>
          <NavLink href="#link-1">Active</NavLink>
        </NavItem>
        <NavDropdown title="Dropdown">
          <DropdownItem href="#link-2-1">Action</DropdownItem>
          <DropdownItem href="#link-2-2">Another action</DropdownItem>
          <DropdownItem href="#link-2-3">Something else here</DropdownItem>
        </NavDropdown>
        <NavItem>
          <NavLink href="#link-3">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#link-4" disabled>Disabled</NavLink>
        </NavItem>
      </Nav>
    </>
  )
}`

  return (
    <section id="pills-dropdowns" className="docs-section pb-sm-2 mb-5">
      <h4>Pills with dropdowns</h4>
      <DocsComponentDemo code={code}>
        <Nav variant="pills" defaultActiveKey="#link-1">
          <NavItem>
            <NavLink href="#link-1">Active</NavLink>
          </NavItem>
          <NavDropdown title="Dropdown">
            <DropdownItem href="#link-2-1">Action</DropdownItem>
            <DropdownItem href="#link-2-2">Another action</DropdownItem>
            <DropdownItem href="#link-2-3">Something else here</DropdownItem>
          </NavDropdown>
          <NavItem>
            <NavLink href="#link-3">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#link-4" disabled>
              Disabled
            </NavLink>
          </NavItem>
        </Nav>
      </DocsComponentDemo>
    </section>
  )
}

export default PillsWithDropdownsDemo
