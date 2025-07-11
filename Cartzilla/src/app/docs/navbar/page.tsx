import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import NavbarContentDemo from './navbar-content'
import NavbarColorSchemesDemo from './navbar-colors'
import NavbarOffcanvasDemo from './navbar-offcanvas'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Navbar',
}

const NavbarDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/navbar"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Navbar</h1>
      <p className="text-body-secondary mb-4">
        Responsive navigation header that includes support for branding, navigation, and more.
      </p>
    </section>
    <NavbarContentDemo />
    <NavbarColorSchemesDemo />
    <NavbarOffcanvasDemo />
  </>
)

export default NavbarDocsPage
