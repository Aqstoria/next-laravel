import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

const PillsFillJustifyDemo = () => {
  const code = `import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function PillsFillJustifyDemo() {
  return (
    <>
      <Nav variant="pills" fill defaultActiveKey="#link-1" className="mb-4">
        <NavItem>
          <NavLink href="#link-1">Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#link-2">Much longer nav link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#link-3">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#link-4" disabled>Disabled</NavLink>
        </NavItem>
      </Nav>

      <Nav variant="pills" justify defaultActiveKey="#link-1">
        <NavItem>
          <NavLink href="#link-1">Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#link-2">Much longer nav link</NavLink>
        </NavItem>
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
    <section id="pills-fill-justify" className="docs-section pb-sm-2 mb-5">
      <h4>Fill and justify</h4>
      <DocsComponentDemo code={code}>
        <Nav variant="pills" fill defaultActiveKey="#link-1" className="mb-4">
          <NavItem>
            <NavLink href="#link-1">Active</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#link-2">Much longer nav link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#link-3">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#link-4" disabled>
              Disabled
            </NavLink>
          </NavItem>
        </Nav>
        <Nav variant="pills" justify defaultActiveKey="#link-1">
          <NavItem>
            <NavLink href="#link-1">Active</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#link-2">Much longer nav link</NavLink>
          </NavItem>
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

export default PillsFillJustifyDemo
