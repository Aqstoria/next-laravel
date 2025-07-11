import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

const PillsRoundedDemo = () => {
  const code = `import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function PillsRoundedDemo() {
  return (
    <Nav variant="pills" defaultActiveKey="#link-1">
      <NavItem>
        <NavLink href="#link-1" className="rounded">
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#link-2" className="rounded">
          Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#link-3" className="rounded">
          Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#link-4" className="rounded" disabled>Disabled</NavLink>
      </NavItem>
    </Nav>
  )
}`

  return (
    <section id="pills-rounded" className="docs-section pb-sm-2 mb-5">
      <h4>Rounded pills</h4>
      <DocsComponentDemo code={code}>
        <Nav variant="pills" defaultActiveKey="#link-1">
          <NavItem>
            <NavLink href="#link-1" className="rounded">
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#link-2" className="rounded">
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#link-3" className="rounded">
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#link-4" className="rounded" disabled>
              Disabled
            </NavLink>
          </NavItem>
        </Nav>
      </DocsComponentDemo>
    </section>
  )
}

export default PillsRoundedDemo
