import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import NavLinksBasicDemo from './nav-links-basic'
import NavLinksUnderlineDemo from './nav-links-underline'
import NavLinksVerticalDemo from './nav-links-vertical'
import NavLinksIconsDropdownsDemo from './nav-links-icons-dropdowns'
import NavLinksSizingDemo from './nav-links-sizing'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Nav links',
}

const NavLinksDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/navs"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Nav links</h1>
      <p className="text-body-secondary mb-4">
        Horizontally or vertically stacked list links that provide a foundation for building all types of navigation
        components.
      </p>
    </section>
    <NavLinksBasicDemo />
    <NavLinksUnderlineDemo />
    <NavLinksVerticalDemo />
    <NavLinksIconsDropdownsDemo />
    <NavLinksSizingDemo />
  </>
)

export default NavLinksDocsPage
