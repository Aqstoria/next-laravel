'use client'

import Link from 'next/link'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

const NavLinksBasicDemo = () => {
  const code = `'use client'

import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function NavLinksBasicDemo() {
  return (
    <Nav as="ul" defaultActiveKey="link-1" onSelect={(eventKey) => alert(\`Selected \${eventKey}\`)}>
      <NavItem as="li">
        <NavLink eventKey="link-1" href="#link-1">
          Active
        </NavLink>
      </NavItem>
      <NavItem as="li">
        <NavLink eventKey="link-2" href="#link-2">
          Link
        </NavLink>
      </NavItem>
      <NavItem as="li">
        <NavLink as={Link} eventKey="next-link" href="#next-link">
          Next.js link
        </NavLink>
      </NavItem>
      <NavItem as="li">
        <NavLink as="button" eventKey="button">
          Button
        </NavLink>
      </NavItem>
      <NavItem as="li">
        <NavLink as="button" eventKey="disabled" disabled>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}`

  return (
    <section id="nav-links-basic" className="docs-section pb-sm-2 mb-5">
      <h4>Basic example</h4>
      <DocsComponentDemo code={code}>
        <Nav as="ul" defaultActiveKey="link-1" onSelect={(eventKey) => alert(`Selected ${eventKey}`)}>
          <NavItem as="li">
            <NavLink eventKey="link-1" href="#link-1">
              Active
            </NavLink>
          </NavItem>
          <NavItem as="li">
            <NavLink eventKey="link-2" href="#link-2">
              Link
            </NavLink>
          </NavItem>
          <NavItem as="li">
            <NavLink as={Link} eventKey="next-link" href="#next-link">
              Next.js link
            </NavLink>
          </NavItem>
          <NavItem as="li">
            <NavLink as="button" eventKey="button">
              Button
            </NavLink>
          </NavItem>
          <NavItem as="li">
            <NavLink as="button" eventKey="disabled" disabled>
              Disabled
            </NavLink>
          </NavItem>
        </Nav>
      </DocsComponentDemo>
    </section>
  )
}

export default NavLinksBasicDemo
