import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

const PillsVerticalDemo = () => {
  const code = `import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function PillsVerticalDemo() {
  return (
    <Nav variant="pills" className="flex-column" style={{ maxWidth: 200 }} defaultActiveKey="#link-1">
      <NavItem>
        <NavLink href="#link-1">Active</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#link-2">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#link-3">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#link-4" disabled>Disabled</NavLink>
      </NavItem>
    </Nav>
  )
}`

  return (
    <section id="pills-vertical" className="docs-section pb-sm-2 mb-5">
      <h4>Vertical pills</h4>
      <DocsComponentDemo code={code}>
        <Nav variant="pills" className="flex-column" style={{ maxWidth: 200 }} defaultActiveKey="#link-1">
          <NavItem>
            <NavLink href="#link-1">Active</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#link-2">Link</NavLink>
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

export default PillsVerticalDemo
