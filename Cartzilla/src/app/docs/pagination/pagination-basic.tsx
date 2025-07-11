'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Pagination from 'react-bootstrap/Pagination'
import PageItem, { Ellipsis } from 'react-bootstrap/PageItem'

const PaginationBasicDemo = () => {
  const code = `'use client'

import Pagination from 'react-bootstrap/Pagination'
import PageItem, { Ellipsis } from 'react-bootstrap/PageItem'

export default function PaginationBasicDemo() {
  return (
    <Pagination>
      <PageItem disabled aria-label="Previous page">Prev</PageItem>
      <PageItem active aria-current="page">1</PageItem>
      <PageItem>2</PageItem>
      <Ellipsis className="d-sm-none" />
      <PageItem className="d-none d-sm-block">3</PageItem>
      <PageItem className="d-none d-sm-block">4</PageItem>
      <PageItem>5</PageItem>
      <PageItem aria-label="Next page">Next</PageItem>
    </Pagination>
  )
}`

  return (
    <section id="pagination-basic" className="docs-section pb-sm-2 mb-5">
      <h4>Basic example</h4>
      <DocsComponentDemo code={code}>
        <Pagination>
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

export default PaginationBasicDemo
