import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import CollapseBasicDemo from './collapse-basic'
import CollapseHorizontalDemo from './collapse-horizontal'
import CollapseMultipleDemo from './collapse-multiple'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Collapse',
}

const CollapseDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/utilities/transitions/#collapse"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Collapse</h1>
      <p className="text-body-secondary mb-4">Toggle the visibility of content.</p>
    </section>
    <CollapseBasicDemo />
    <CollapseHorizontalDemo />
    <CollapseMultipleDemo />
  </>
)

export default CollapseDocsPage
