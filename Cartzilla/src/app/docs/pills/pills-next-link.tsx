import Link from 'next/link'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

const PillsNextLinkDemo = () => {
  const code = `import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function PillsNextLinkDemo() {
  return (
    <Nav variant="pills" defaultActiveKey="#link-1">
      <NavItem>
        <NavLink as={Link} href="#link-1">
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} href="#link-2">
          Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} href="#link-3">
          Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} href="#link-4" disabled>Disabled</NavLink>
      </NavItem>
    </Nav>
  )
}`

  return (
    <section id="pills-next-link" className="docs-section pb-sm-2 mb-5">
      <h4>Next.js link example</h4>
      <DocsComponentDemo code={code}>
        <Nav variant="pills" defaultActiveKey="#link-1">
          <NavItem>
            <NavLink as={Link} href="#link-1">
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} href="#link-2">
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} href="#link-3">
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} href="#link-4" disabled>
              Disabled
            </NavLink>
          </NavItem>
        </Nav>
      </DocsComponentDemo>
    </section>
  )
}

export default PillsNextLinkDemo
