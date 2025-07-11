'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

const TabsShapesDemo = () => {
  const code = `'use client'

import Stack from 'react-bootstrap/Stack'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function TabsShapesDemo() {
  return (
    <Stack direction="vertical" gap={4} style={{ maxWidth: 450 }}>
      {/* Rounded (default) tabs */}
      <Nav variant="tabs" defaultActiveKey="home">
        <NavItem>
          <NavLink eventKey="home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="Contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="disabled" disabled>Disabled</NavLink>
        </NavItem>
      </Nav>

      {/* Pill shaped tabs */}
      <Nav variant="tabs" defaultActiveKey="home" className="rounded-pill">
        <NavItem>
          <NavLink eventKey="home" className="rounded-pill">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="profile" className="rounded-pill">
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="Contact" className="rounded-pill">
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="disabled" className="rounded-pill" disabled>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>

      {/* Square shaped tabs */}
      <Nav variant="tabs" defaultActiveKey="home" className="rounded-0">
        <NavItem>
          <NavLink eventKey="home" className="rounded-0">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="profile" className="rounded-0">
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="Contact" className="rounded-0">
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="disabled" className="rounded-0" disabled>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </Stack>
  )
}`

  return (
    <section id="tabs-shapes" className="docs-section">
      <h4>Shapes</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="vertical" gap={4} style={{ maxWidth: 450 }}>
          <Nav variant="tabs" defaultActiveKey="home" className="flex-nowrap">
            <NavItem>
              <NavLink eventKey="home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="profile">Profile</NavLink>
            </NavItem>
            <NavItem className="d-none d-sm-block">
              <NavLink eventKey="Contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="disabled" disabled>
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
          <Nav variant="tabs" defaultActiveKey="home" className="flex-nowrap rounded-pill">
            <NavItem>
              <NavLink eventKey="home" className="rounded-pill">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="profile" className="rounded-pill">
                Profile
              </NavLink>
            </NavItem>
            <NavItem className="d-none d-sm-block">
              <NavLink eventKey="Contact" className="rounded-pill">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="disabled" className="rounded-pill" disabled>
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
          <Nav variant="tabs" defaultActiveKey="home" className="flex-nowrap rounded-0">
            <NavItem>
              <NavLink eventKey="home" className="rounded-0">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="profile" className="rounded-0">
                Profile
              </NavLink>
            </NavItem>
            <NavItem className="d-none d-sm-block">
              <NavLink eventKey="Contact" className="rounded-0">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="disabled" className="rounded-0" disabled>
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default TabsShapesDemo
