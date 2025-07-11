import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

const NavLinksUnderlineDemo = () => {
  const code = `import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function NavLinksUnderlineDemo() {
  return (
    <Navbar className="p-0">
      <Nav as="ul" className="flex-wrap" defaultActiveKey="#link-1">
        <NavItem as="li">
          <NavLink href="#link-1" className="fs-sm">
            Active
          </NavLink>
        </NavItem>
        <NavItem as="li">
          <NavLink href="#link-2" className="fs-sm">
            Link
          </NavLink>
        </NavItem>
        <NavItem as="li">
          <NavLink href="#link-3" className="fs-sm">
            Link
          </NavLink>
        </NavItem>
        <NavItem as="li">
          <NavLink href="#link-4" className="fs-sm" disabled>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}`

  return (
    <section id="nav-links-underline" className="docs-section pb-sm-2 mb-5">
      <h4>Underline effect</h4>
      <DocsComponentDemo code={code}>
        <Navbar className="p-0">
          <Nav as="ul" className="flex-wrap" defaultActiveKey="#link-1">
            <NavItem as="li">
              <NavLink href="#link-1" className="fs-sm">
                Active
              </NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink href="#link-2" className="fs-sm">
                Link
              </NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink href="#link-3" className="fs-sm">
                Link
              </NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink href="#link-4" className="fs-sm" disabled>
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </DocsComponentDemo>
    </section>
  )
}

export default NavLinksUnderlineDemo
