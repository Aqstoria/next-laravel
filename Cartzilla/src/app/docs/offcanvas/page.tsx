import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import OffcanvasComponentsDemo from './offcanvas-components'
import OffcanvasPlacementDemo from './offcanvas-placement'
import OffcanvasBackdropDemo from './offcanvas-backdrop-scrolling'
import OffcanvasMobileMenuDemo from './offcanvas-mobile-menu'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Offcanvas',
}

const OffcanvasDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/offcanvas/"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Offcanvas</h1>
      <p className="text-body-secondary mb-4">
        Build hidden sidebars into your project for navigation, shopping carts, widgets etc.
      </p>
    </section>
    <OffcanvasComponentsDemo />
    <OffcanvasPlacementDemo />
    <OffcanvasBackdropDemo />
    <OffcanvasMobileMenuDemo />
  </>
)

export default OffcanvasDocsPage
