'use client'

import Link from 'next/link'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Pagination from 'react-bootstrap/Pagination'
import PageItem, { Ellipsis } from 'react-bootstrap/PageItem'

const PaginationNextLinkDemo = () => {
  const code = `'use client'

import Link from 'next/link'
import Pagination from 'react-bootstrap/Pagination'
import PageItem, { Ellipsis } from 'react-bootstrap/PageItem'

export default function PaginationNextLinkDemo() {
  return (
    <Pagination>
      <PageItem as={Link} href="#" disabled aria-label="Prev page">Prev</PageItem>
      <PageItem as={Link} href="#" active aria-current="page">1</PageItem>
      <PageItem as={Link} href="#">2</PageItem>
      <Ellipsis as={Link} href="#" className="d-sm-none" />
      <PageItem as={Link} href="#" className="d-none d-sm-block">3</PageItem>
      <PageItem as={Link} href="#" className="d-none d-sm-block">4</PageItem>
      <PageItem as={Link} href="#">5</PageItem>
      <PageItem as={Link} href="#" aria-label="Next page">Next</PageItem>
    </Pagination>
  )
}`

  return (
    <section id="pagination-next-link" className="docs-section pb-sm-2 mb-5">
      <h4>Next.js link example</h4>
      <DocsComponentDemo code={code}>
        <Pagination>
          <PageItem as={Link} href="#" disabled aria-label="Prev page">
            Prev
          </PageItem>
          <PageItem as={Link} href="#" active aria-current="page">
            1
          </PageItem>
          <PageItem as={Link} href="#">
            2
          </PageItem>
          <Ellipsis as={Link} href="#" className="d-sm-none" />
          <PageItem as={Link} href="#" className="d-none d-sm-block">
            3
          </PageItem>
          <PageItem as={Link} href="#" className="d-none d-sm-block">
            4
          </PageItem>
          <PageItem as={Link} href="#">
            5
          </PageItem>
          <PageItem as={Link} href="#" aria-label="Next page">
            Next
          </PageItem>
        </Pagination>
      </DocsComponentDemo>
    </section>
  )
}

export default PaginationNextLinkDemo
