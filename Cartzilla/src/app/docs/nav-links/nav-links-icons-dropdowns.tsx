import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownItem from 'react-bootstrap/DropdownItem'
import DropdownMenu from 'react-bootstrap/DropdownMenu'

const NavLinksIconsDropdownsDemo = () => {
  const code = `import Stack from 'react-bootstrap/Stack'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function NavLinksIconsDropdownsDemo() {
  return (
    <Stack gap={3}>
      <Nav as="ul" defaultActiveKey="#home">
        <NavItem as="li">
          <NavLink href="#home">
            <i className="ci-home opacity-75 me-2"/>
            Home
          </NavLink>
        </NavItem>
        <NavItem as="li">
          <NavLink href="#profile">
            <i className="ci-user opacity-75 me-2"/>
            Profile
          </NavLink>
        </NavItem>
        <Dropdown as="li" className="nav-item">
          <DropdownToggle as={NavLink}>Dropdown</DropdownToggle>
          <DropdownMenu as="ul">
            <li>
              <DropdownItem href="#dropdown-link-1">Action</DropdownItem>
            </li>
            <li>
              <DropdownItem href="#dropdown-link-2">Another action</DropdownItem>
            </li>
            <li>
              <DropdownItem href="#dropdown-link-3">Something else here</DropdownItem>
            </li>
          </DropdownMenu>
        </Dropdown>
      </Nav>

      {/* Underline nav links (inside navbar) example with icons and dropdown */}
      <Navbar className="p-0">
        <Nav as="ul" defaultActiveKey="#home">
          <NavItem as="li">
            <NavLink href="#home" className="fs-sm">
              <i className="ci-home opacity-75 me-2"/>
              Home
            </NavLink>
          </NavItem>
          <NavItem as="li">
            <NavLink href="#profile" className="fs-sm">
              <i className="ci-user opacity-75 me-2"/>
              Profile
            </NavLink>
          </NavItem>
          <Dropdown as="li" className="nav-item">
            <DropdownToggle as={NavLink} className="fs-sm">
              Dropdown
            </DropdownToggle>
            <DropdownMenu as="ul">
              <li>
                <DropdownItem href="#dropdown-link-1">Action</DropdownItem>
              </li>
              <li>
                <DropdownItem href="#dropdown-link-2">Another action</DropdownItem>
              </li>
              <li>
                <DropdownItem href="#dropdown-link-3">Something else here</DropdownItem>
              </li>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Navbar>
    </Stack>
  )
}`

  return (
    <section id="nav-links-icons" className="docs-section pb-sm-2 mb-5">
      <h4>With icons and dropdowns</h4>
      <DocsComponentDemo code={code}>
        <Stack gap={3}>
          <Nav as="ul" defaultActiveKey="#home">
            <NavItem as="li">
              <NavLink href="#home">
                <i className="ci-home opacity-75 me-2" />
                Home
              </NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink href="#profile">
                <i className="ci-user opacity-75 me-2" />
                Profile
              </NavLink>
            </NavItem>
            <Dropdown as="li" className="nav-item">
              <DropdownToggle as={NavLink}>Dropdown</DropdownToggle>
              <DropdownMenu as="ul">
                <li>
                  <DropdownItem href="#dropdown-link-1">Action</DropdownItem>
                </li>
                <li>
                  <DropdownItem href="#dropdown-link-2">Another action</DropdownItem>
                </li>
                <li>
                  <DropdownItem href="#dropdown-link-3">Something else here</DropdownItem>
                </li>
              </DropdownMenu>
            </Dropdown>
          </Nav>
          <Navbar className="p-0">
            <Nav as="ul" defaultActiveKey="#home">
              <NavItem as="li">
                <NavLink href="#home" className="fs-sm">
                  <i className="ci-home opacity-75 me-2" />
                  Home
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink href="#profile" className="fs-sm">
                  <i className="ci-user opacity-75 me-2" />
                  Profile
                </NavLink>
              </NavItem>
              <Dropdown as="li" className="nav-item">
                <DropdownToggle as={NavLink} className="fs-sm">
                  Dropdown
                </DropdownToggle>
                <DropdownMenu as="ul">
                  <li>
                    <DropdownItem href="#dropdown-link-1">Action</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#dropdown-link-2">Another action</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#dropdown-link-3">Something else here</DropdownItem>
                  </li>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Navbar>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default NavLinksIconsDropdownsDemo
