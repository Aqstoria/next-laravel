'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Pagination from 'react-bootstrap/Pagination'
import PageItem, { Ellipsis, Prev, Next, First, Last } from 'react-bootstrap/PageItem'

const PaginationWithIconsDemo = () => {
  const code = `'use client'

import Pagination from 'react-bootstrap/Pagination'
import PageItem, { Ellipsis, Prev, Next, First, Last } from 'react-bootstrap/PageItem'

export default function PaginationWithIconsDemo() {
  return (
    <>
      <Pagination className="mb-4">
        <PageItem disabled linkClassName="d-flex align-items-center h-100 fs-lg px-2" aria-label="Previous page">
          <i className="ci-chevron-left"/>
        </PageItem>
        <PageItem active aria-current="page">1</PageItem>
        <PageItem>2</PageItem>
        <Ellipsis className="d-sm-none" />
        <PageItem className="d-none d-sm-block">3</PageItem>
        <PageItem className="d-none d-sm-block">4</PageItem>
        <PageItem>5</PageItem>
        <PageItem linkClassName="d-flex align-items-center h-100 fs-lg px-2" aria-label="Next page">
          <i className="ci-chevron-right"/>
        </PageItem>
      </Pagination>

      <Pagination className="mb-4">
        <PageItem disabled linkClassName="d-flex align-items-center h-100 ps-2" aria-label="Previous page">
          <i className="ci-chevron-left fs-lg me-1 ms-n1"/>
          Prev
        </PageItem>
        <PageItem active aria-current="page">1</PageItem>
        <PageItem>2</PageItem>
        <Ellipsis className="d-sm-none" />
        <PageItem className="d-none d-sm-block">3</PageItem>
        <PageItem className="d-none d-sm-block">4</PageItem>
        <PageItem>5</PageItem>
        <PageItem linkClassName="d-flex align-items-center h-100 pe-2" aria-label="Next page">
          Next
          <i className="ci-chevron-right fs-lg me-n1 ms-1"/>
        </PageItem>
      </Pagination>

      <Pagination>
        <First linkClassName="fs-base" aria-label="First page" />
        <Prev linkClassName="fs-base" aria-label="Previous page" />
        <PageItem active aria-current="page">1</PageItem>
        <PageItem>2</PageItem>
        <Ellipsis className="d-sm-none" />
        <PageItem className="d-none d-sm-block">3</PageItem>
        <PageItem className="d-none d-sm-block">4</PageItem>
        <PageItem>5</PageItem>
        <Next linkClassName="fs-base" aria-label="Next page" />
        <Last linkClassName="fs-base" aria-label="Last page" />
      </Pagination>
    </>
  )
}`

  return (
    <section id="pagination-icons" className="docs-section pb-sm-2 mb-5">
      <h4>With icons</h4>
      <DocsComponentDemo code={code}>
        <Pagination className="mb-4">
          <PageItem disabled linkClassName="d-flex align-items-center h-100 fs-lg px-2" aria-label="Previous page">
            <i className="ci-chevron-left" />
          </PageItem>
          <PageItem active aria-current="page">
            1
          </PageItem>
          <PageItem>2</PageItem>
          <Ellipsis className="d-sm-none" />
          <PageItem className="d-none d-sm-block">3</PageItem>
          <PageItem className="d-none d-sm-block">4</PageItem>
          <PageItem>5</PageItem>
          <PageItem linkClassName="d-flex align-items-center h-100 fs-lg px-2" aria-label="Next page">
            <i className="ci-chevron-right" />
          </PageItem>
        </Pagination>
        <Pagination className="mb-4">
          <PageItem disabled linkClassName="d-flex align-items-center h-100 ps-2" aria-label="Previous page">
            <i className="ci-chevron-left fs-lg me-1 ms-n1" />
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
          <PageItem linkClassName="d-flex align-items-center h-100 pe-2" aria-label="Next page">
            Next
            <i className="ci-chevron-right fs-lg me-n1 ms-1" />
          </PageItem>
        </Pagination>
        <Pagination>
          <First linkClassName="fs-base" aria-label="First page" />
          <Prev linkClassName="fs-base" aria-label="Previous page" />
          <PageItem active aria-current="page">
            1
          </PageItem>
          <PageItem>2</PageItem>
          <Ellipsis className="d-sm-none" />
          <PageItem className="d-none d-sm-block">3</PageItem>
          <PageItem className="d-none d-sm-block">4</PageItem>
          <PageItem>5</PageItem>
          <Next linkClassName="fs-base" aria-label="Next page" />
          <Last linkClassName="fs-base" aria-label="Last page" />
        </Pagination>
      </DocsComponentDemo>
    </section>
  )
}

export default PaginationWithIconsDemo
