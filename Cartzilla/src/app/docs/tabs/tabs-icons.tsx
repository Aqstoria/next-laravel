'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

const TabsIconsDemo = () => {
  const code = `'use client'

import Stack from 'react-bootstrap/Stack'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function TabsIconsDemo() {
  return (
    <Stack direction="vertical" gap={4} style={{ maxWidth: 500 }}>

      {/* Button style tabs */}
      <Nav variant="tabs" defaultActiveKey="home">
        <NavItem>
          <NavLink eventKey="home">
            <i className="ci-home me-2 ms-n1"/>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="profile">
            <i className="ci-user me-2 ms-n1"/>
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="messages">
            <i className="ci-message-square me-2 ms-n1"/>
            Messages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="settings">
            <i className="ci-settings me-2 ms-n1"/>
            Settings
          </NavLink>
        </NavItem>
      </Nav>

      {/* Underline style tabs */}
      <Nav variant="underline" defaultActiveKey="home">
        <NavItem>
          <NavLink eventKey="home">
            <i className="ci-home me-2 ms-n1"/>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="profile">
            <i className="ci-user me-2 ms-n1"/>
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="messages">
            <i className="ci-message-square me-2 ms-n1"/>
            Messages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="settings">
            <i className="ci-settings me-2 ms-n1"/>
            Settings
          </NavLink>
        </NavItem>
      </Nav>
    </Stack>
  )
}`

  return (
    <section id="tabs-icons" className="docs-section pb-sm-2 mb-5">
      <h4>With icons</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="vertical" gap={4} style={{ maxWidth: 500 }}>
          <Nav variant="tabs" defaultActiveKey="home">
            <NavItem>
              <NavLink eventKey="home">
                <i className="ci-home me-2 ms-n1" />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="profile">
                <i className="ci-user me-2 ms-n1" />
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="messages">
                <i className="ci-message-square me-2 ms-n1" />
                Messages
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="settings">
                <i className="ci-settings me-2 ms-n1" />
                Settings
              </NavLink>
            </NavItem>
          </Nav>
          <Nav variant="underline" defaultActiveKey="home">
            <NavItem>
              <NavLink eventKey="home">
                <i className="ci-home me-2 ms-n1" />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="profile">
                <i className="ci-user me-2 ms-n1" />
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="messages">
                <i className="ci-message-square me-2 ms-n1" />
                Messages
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="settings">
                <i className="ci-settings me-2 ms-n1" />
                Settings
              </NavLink>
            </NavItem>
          </Nav>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default TabsIconsDemo
