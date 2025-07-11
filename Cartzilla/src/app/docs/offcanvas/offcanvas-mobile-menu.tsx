import DocsComponentDemo from '@/components/docs/docs-component-demo'

const OffcanvasMobileMenuDemo = () => {
  const code = `import Link from 'next/link'
import Logo from '@/components/logo'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarOffcanvas from 'react-bootstrap/NavbarOffcanvas'
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import OffcanvasTitle from 'react-bootstrap/OffcanvasTitle'
import OffcanvasBody from 'react-bootstrap/OffcanvasBody'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function NavbarOffcanvasDemo() {
  return (
    <Navbar as="header" expand="lg" className="bg-body sticky-top p-0">
      <Container className="py-3 px-4">
        <Logo href="#" className="fs-2">
          Cartzilla
        </Logo>
        <NavbarToggle aria-controls="navbarOffcanvas" />
        <NavbarOffcanvas id="navbarOffcanvas" placement="end" aria-labelledby="navbarOffcanvasLabel">
          <OffcanvasHeader closeButton className="w-100">
            <OffcanvasTitle id="navbarOffcanvasLabel">Menu</OffcanvasTitle>
          </OffcanvasHeader>
          <OffcanvasBody className="navbar align-items-start w-100 pt-0">
            <Nav as="ul" defaultActiveKey="#home" className="w-100 ms-lg-4">
              <NavItem as="li">
                <NavLink as={Link} href="#home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink as={Link} href="#services">
                  Services
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink as={Link} href="#works">
                  Our works
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink as={Link} href="#about">
                  About us
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink as={Link} href="#contact">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </OffcanvasBody>
        </NavbarOffcanvas>
      </Container>
    </Navbar>
  )
}`

  return (
    <section id="offcanvas-mobile-menu" className="docs-section">
      <h4>Mobile menu (responsive)</h4>
      <DocsComponentDemo code={code}>
        <div className="bg-dotted rounded p-3 p-sm-4">
          <iframe
            src="/navbar-offcanvas-example"
            className="w-100 bg-body shadow rounded"
            height={522}
            title="Navbar with offcanvas menu"
            style={{ maxWidth: 375 }}
          ></iframe>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default OffcanvasMobileMenuDemo
