'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Pagination from 'react-bootstrap/Pagination'
import PageItem, { Ellipsis } from 'react-bootstrap/PageItem'

const PaginationSizingDemo = () => {
  const code = `'use client'

import Pagination from 'react-bootstrap/Pagination'
import PageItem, { Ellipsis } from 'react-bootstrap/PageItem'

export default function PaginationSizingDemo() {
  return (
    <>
      <Pagination size="lg" className="mb-4">
        <PageItem disabled aria-label="Prev page">
          Prev
        </PageItem>
        <PageItem active aria-current="page">
          1
        </PageItem>
        <PageItem>2</PageItem>
        <Ellipsis className="d-sm-none" />
        <PageItem className="d-none d-sm-block">3</PageItem>
        <PageItem className="d-none d-sm-block">4</PageItem>
        <PageItem>5</PageItem>
        <PageItem aria-label="Next page">Next</PageItem>
      </Pagination>

      <Pagination className="mb-4">
        <PageItem disabled aria-label="Prev page">
          Prev
        </PageItem>
        <PageItem active aria-current="page">
          1
        </PageItem>
        <PageItem>2</PageItem>
        <Ellipsis className="d-sm-none" />
        <PageItem className="d-none d-sm-block">3</PageItem>
        <PageItem className="d-none d-sm-block">4</PageItem>
        <PageItem>5</PageItem>
        <PageItem aria-label="Next page">Next</PageItem>
      </Pagination>

      <Pagination size="sm">
        <PageItem disabled aria-label="Prev page">
          Prev
        </PageItem>
        <PageItem active aria-current="page">
          1
        </PageItem>
        <PageItem>2</PageItem>
        <Ellipsis className="d-sm-none" />
        <PageItem className="d-none d-sm-block">3</PageItem>
        <PageItem className="d-none d-sm-block">4</PageItem>
        <PageItem>5</PageItem>
        <PageItem aria-label="Next page">Next</PageItem>
      </Pagination>
    </>
  )
}`

  return (
    <section id="pagination-sizing" className="docs-section pb-sm-2 mb-5">
      <h4>Sizing</h4>
      <DocsComponentDemo code={code}>
        <Pagination size="lg" className="mb-4">
          <PageItem disabled aria-label="Prev page">
            Prev
          </PageItem>
          <PageItem active aria-current="page">
            1
          </PageItem>
          <PageItem>2</PageItem>
          <Ellipsis className="d-sm-none" />
          <PageItem className="d-none d-sm-block">3</PageItem>
          <PageItem className="d-none d-sm-block">4</PageItem>
          <PageItem>5</PageItem>
          <PageItem aria-label="Next page">Next</PageItem>
        </Pagination>
        <Pagination className="mb-4">
          <PageItem disabled aria-label="Prev page">
            Prev
          </PageItem>
          <PageItem active aria-current="page">
            1
          </PageItem>
          <PageItem>2</PageItem>
          <Ellipsis className="d-sm-none" />
          <PageItem className="d-none d-sm-block">3</PageItem>
          <PageItem className="d-none d-sm-block">4</PageItem>
          <PageItem>5</PageItem>
          <PageItem aria-label="Next page">Next</PageItem>
        </Pagination>
        <Pagination size="sm">
          <PageItem disabled aria-label="Prev page">
            Prev
          </PageItem>
          <PageItem active aria-current="page">
            1
          </PageItem>
          <PageItem>2</PageItem>
          <Ellipsis className="d-sm-none" />
          <PageItem className="d-none d-sm-block">3</PageItem>
          <PageItem className="d-none d-sm-block">4</PageItem>
          <PageItem>5</PageItem>
          <PageItem aria-label="Next page">Next</PageItem>
        </Pagination>
      </DocsComponentDemo>
    </section>
  )
}

export default PaginationSizingDemo
