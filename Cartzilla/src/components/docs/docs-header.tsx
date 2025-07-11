'use client'

import Link from 'next/link'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import Logo from '../logo'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import ThemeSwitcher from '../theme-switcher'

const DocsHeader = ({ version }: { version: string }) => {
  const offcanvasId = 'docs-sidebar'
  const { openOffcanvas } = useOffcanvas()

  return (
    <Navbar as="header" expand="lg" bg="dark" className="navbar-dark sticky-top z-fixed px-0" data-bs-theme="dark">
      <Container className="py-1 py-lg-2">
        {/* Docs sidebar offcanvas toggle that is visible on screens < 992px wide (lg breakpoint) */}
        <button onClick={() => openOffcanvas(offcanvasId)} className="navbar-toggler me-3">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo */}
        <Logo className="mx-auto mx-lg-0">
          Cartzilla
          <Badge bg="primary" text="primary" className="bg-opacity-10 fs-xs rounded-pill d-none d-lg-inline-block ms-2">
            v{version}
          </Badge>
        </Logo>

        {/* Header navigation (navbar) that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
        <Navbar.Offcanvas
          id="navbarNav"
          className="navbar align-items-start p-0"
          placement="end"
          aria-labelledby="navbarNavLabel"
        >
          <Offcanvas.Header closeButton className="w-100 py-3">
            <Offcanvas.Title id="navbarNavLabel">Cartzilla</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="pt-0 ms-lg-auto">
            <Nav as="ul">
              <Nav.Item as="li">
                <Nav.Link as={Link} href="installation">
                  Docs
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link as={Link} href="typography">
                  Components
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link as={Link} href="/">
                  Live demo
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="https://createx.studio/contact" target="_blank" rel="noreferrer">
                  Support
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
          <Offcanvas.Header className="w-100 border-top">
            <Button
              href="https://themes.getbootstrap.com/product/cartzilla-multipurpose-e-commerce-template-react"
              className="w-100"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ci-shopping-cart fs-base ms-n1 me-2" />
              Buy now
            </Button>
          </Offcanvas.Header>
        </Navbar.Offcanvas>

        {/* Theme (Color mode) selector */}
        <ThemeSwitcher dropdownMenuPosition="end" dropdownMenuOffset=".625rem" className="pe-lg-1 ms-lg-3" />

        {/* Mobile menu toggle */}
        <Navbar.Toggle
          className="btn btn-icon btn-outline-secondary border-0 d-lg-none ms-2 me-n2"
          aria-controls="navbarNav"
          style={{ width: '40px', height: '40px' }}
        >
          <i className="ci-more-horizontal fs-3" />
        </Navbar.Toggle>

        {/* CTA button */}
        <Button
          href="https://themes.getbootstrap.com/product/cartzilla-multipurpose-e-commerce-template-react"
          className="animate-slide-end d-none d-lg-inline-flex ms-4"
          target="_blank"
          rel="noreferrer"
        >
          <i className="ci-shopping-cart animate-target fs-base ms-n1 me-2" />
          Buy now
        </Button>
      </Container>
    </Navbar>
  )
}

export default DocsHeader
