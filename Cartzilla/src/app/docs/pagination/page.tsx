import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import PaginationBasicDemo from './pagination-basic'
import PaginationNextLinkDemo from './pagination-next-link'
import PaginationWithIconsDemo from './pagination-icons'
import PaginationSizingDemo from './pagination-sizing'
import PaginationSelectDemo from './pagination-select'
import PaginationLoadMoreDemo from './pagination-load-more'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Pagination',
}

const PaginationDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/pagination"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Pagination</h1>
      <p className="text-body-secondary mb-4">Indicate a series of related content exists across multiple pages.</p>
    </section>
    <PaginationBasicDemo />
    <PaginationNextLinkDemo />
    <PaginationWithIconsDemo />
    <PaginationSizingDemo />
    <PaginationSelectDemo />
    <PaginationLoadMoreDemo />
  </>
)

export default PaginationDocsPage
