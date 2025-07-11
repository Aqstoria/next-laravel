import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import ScrollspyNavbarDemo from './scrollspy-navbar'
import ScrollspyNestedNavDemo from './scrollspy-nested-nav'
import ScrollspyTabsDemo from './scrollspy-tabs'
import ScrollspyPillsDemo from './scrollspy-pills'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Scrollspy',
}

const ScrollspyDocsPage = () => {
  return (
    <>
      <section className="py-2 pb-sm-3">
        <Badge bg="info-subtle" text="info" pill className="fw-semibold py-2 px-3 mb-2">
          Cartzilla component
        </Badge>
        <h1 className="pt-1">Scrollspy</h1>
        <p className="text-body-secondary mb-4">
          Automatically update navigation or list group components based on scroll position to indicate which link is
          currently active in the viewport.
        </p>
      </section>
      <ScrollspyNavbarDemo />
      <ScrollspyNestedNavDemo />
      <ScrollspyTabsDemo />
      <ScrollspyPillsDemo />
    </>
  )
}

export default ScrollspyDocsPage
