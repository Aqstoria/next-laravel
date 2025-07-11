import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import Stack from 'react-bootstrap/Stack'

const NavLinksSizingDemo = () => {
  const code = `import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import Stack from 'react-bootstrap/Stack'

export default function NavLinksSizingDemo() {
  return (
    <Stack gap={2}>
      {['xl', 'lg', 'base', null].map((size, index) => (
        <Nav key={index} as="ul" defaultActiveKey="link-1">
          <NavItem as="li">
            <NavLink href="#link-1" className={size !== null ? \`fs-\${size}\` : ''}>
              Active
            </NavLink>
          </NavItem>
          <NavItem as="li">
            <NavLink href="#link-2" className={size !== null ? \`fs-\${size}\` : ''}>
              Link
            </NavLink>
          </NavItem>
          <NavItem as="li">
            <NavLink href="#link-3" className={size !== null ? \`fs-\${size}\` : ''}>
              Link
            </NavLink>
          </NavItem>
          <NavItem as="li">
            <NavLink href="#link-4" className={size !== null ? \`fs-\${size}\` : ''} disabled>
              Disabled
            </NavLink>
          </NavItem>
        </Nav>
      ))}
    </Stack>
  )
}`

  return (
    <section id="nav-links-sizing" className="docs-section">
      <h4>Sizing</h4>
      <DocsComponentDemo code={code}>
        <Stack gap={2}>
          {['xl', 'lg', 'base', null].map((size, index) => (
            <Nav key={index} as="ul" defaultActiveKey="link-1">
              <NavItem as="li">
                <NavLink href="#link-1" className={size !== null ? `fs-${size}` : ''}>
                  Active
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink href="#link-2" className={size !== null ? `fs-${size}` : ''}>
                  Link
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink href="#link-3" className={size !== null ? `fs-${size}` : ''}>
                  Link
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink href="#link-4" className={size !== null ? `fs-${size}` : ''} disabled>
                  Disabled
                </NavLink>
              </NavItem>
            </Nav>
          ))}
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default NavLinksSizingDemo
