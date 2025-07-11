import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

const NavLinksVerticalDemo = () => {
  const code = `import Stack from 'react-bootstrap/Stack'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function NavLinksVerticalDemo() {
  return (
    <Stack direction="horizontal" gap={5}>
      <Nav as="ul" className="flex-column" defaultActiveKey="#link-1">
        <NavItem as="li">
          <NavLink href="#link-1">Active</NavLink>
        </NavItem>
        <NavItem as="li">
          <NavLink href="#link-2">Link</NavLink>
        </NavItem>
        <NavItem as="li">
          <NavLink href="#link-3">Link</NavLink>
        </NavItem>
        <NavItem as="li">
          <NavLink href="#link-4" disabled>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>

      {/* Vertically aligned underline nav links (inside navbar) */}
      <Navbar expand={false} className="p-0">
        <Nav as="ul" defaultActiveKey="#link-1">
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
    </Stack>
  )
}`

  return (
    <section id="nav-links-vertical" className="docs-section pb-sm-2 mb-5">
      <h4>Vertical alignment</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={5}>
          <Nav as="ul" className="flex-column" defaultActiveKey="#link-1">
            <NavItem as="li">
              <NavLink href="#link-1">Active</NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink href="#link-2">Link</NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink href="#link-3">Link</NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink href="#link-4" disabled>
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
          <Navbar expand={false} className="p-0">
            <Nav as="ul" defaultActiveKey="#link-1">
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
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default NavLinksVerticalDemo
