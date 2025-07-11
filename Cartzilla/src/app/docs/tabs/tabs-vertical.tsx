'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

const TabsVerticalDemo = () => {
  const code = `'use client'

import Stack from 'react-bootstrap/Stack'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function TabsVerticalDemo() {
  return (
    <Stack direction="horizontal" gap={5}>

      {/* Button style tabs */}
      <Nav variant="tabs" defaultActiveKey="home" className="flex-column mb-3" style={{ width: 150 }}>
        <NavItem>
          <NavLink eventKey="home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="disabled" disabled>Disabled</NavLink>
        </NavItem>
      </Nav>

      {/* Underline style tabs */}
      <Nav variant="underline" defaultActiveKey="home" className="flex-column">
        <NavItem>
          <NavLink eventKey="home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="disabled" disabled>Disabled</NavLink>
        </NavItem>
      </Nav>
    </Stack>
  )
}`

  return (
    <section id="tabs-vertical" className="docs-section pb-sm-2 mb-5">
      <h4>Vertical alignment</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={5}>
          <Nav variant="tabs" defaultActiveKey="home" className="flex-column mb-3" style={{ width: 150 }}>
            <NavItem>
              <NavLink eventKey="home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="disabled" disabled>
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
          <Nav variant="underline" defaultActiveKey="home" className="flex-column">
            <NavItem>
              <NavLink eventKey="home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="disabled" disabled>
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default TabsVerticalDemo
