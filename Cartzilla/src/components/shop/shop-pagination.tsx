'use client'

import Pagination from 'react-bootstrap/Pagination'
import PageItem, { Ellipsis } from 'react-bootstrap/PageItem'

const ShopPagination = ({ className }: { className?: string }) => (
  <nav className={className} aria-label="Shop pagination">
    <Pagination size="lg" className="pt-2 pt-md-3">
      <PageItem
        disabled
        className="me-auto"
        linkClassName="d-flex align-items-center h-100 fs-xl px-2"
        aria-label="Previous page"
      >
        <i className="ci-chevron-left" />
      </PageItem>
      <PageItem active aria-current="page">
        1
      </PageItem>
      <PageItem>2</PageItem>
      <PageItem>3</PageItem>
      <Ellipsis />
      <PageItem>16</PageItem>
      <PageItem className="ms-auto" linkClassName="d-flex align-items-center h-100 fs-xl px-2" aria-label="Next page">
        <i className="ci-chevron-right" />
      </PageItem>
    </Pagination>
  </nav>
)

export default ShopPagination
