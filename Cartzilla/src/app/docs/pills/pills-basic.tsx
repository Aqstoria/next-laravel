'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

const PillsBasicDemo = () => {
  const code = `'use client'

import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function PillsBasicDemo() {
  return (
    <Nav variant="pills" defaultActiveKey="link-1" onSelect={(eventKey) => alert(\`Selected \${eventKey}\`)}>
      <NavItem>
        <NavLink eventKey="link-1" href="#link-1">
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink eventKey="link-2" href="#link-2">
          Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as="button" eventKey="button">
          Button
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as="button" eventKey="disabled" disabled>Disabled</NavLink>
      </NavItem>
    </Nav>
  )
}`

  return (
    <section id="pills-basic" className="docs-section pb-sm-2 mb-5">
      <h4>Basic example</h4>
      <DocsComponentDemo code={code}>
        <Nav variant="pills" defaultActiveKey="link-1" onSelect={(eventKey) => alert(`Selected ${eventKey}`)}>
          <NavItem>
            <NavLink eventKey="link-1" href="#link-1">
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="link-2" href="#link-2">
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as="button" eventKey="button">
              Button
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as="button" eventKey="disabled" disabled>
              Disabled
            </NavLink>
          </NavItem>
        </Nav>
      </DocsComponentDemo>
    </section>
  )
}

export default PillsBasicDemo
