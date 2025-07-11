import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import PillsBasicDemo from './pills-basic'
import PillsNextLinkDemo from './pills-next-link'
import PillsRoundedDemo from './pills-rounded'
import PillsFillJustifyDemo from './pills-fill-justify'
import PillsWithDropdownsDemo from './pills-dropdowns'
import PillsVerticalDemo from './pills-vertical'
import PillsTabsDemo from './pills-tabs'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Pills',
}

const PillsDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/navs#pills"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Pills</h1>
      <p className="text-body-secondary mb-4">Button-like navigation component.</p>
    </section>
    <PillsBasicDemo />
    <PillsNextLinkDemo />
    <PillsRoundedDemo />
    <PillsFillJustifyDemo />
    <PillsWithDropdownsDemo />
    <PillsVerticalDemo />
    <PillsTabsDemo />
  </>
)

export default PillsDocsPage
