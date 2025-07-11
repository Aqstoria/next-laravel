'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Pagination from 'react-bootstrap/Pagination'
import PageItem, { Ellipsis } from 'react-bootstrap/PageItem'
import FormSelect from 'react-bootstrap/FormSelect'

const PaginationSelectDemo = () => {
  const code = `'use client'

import Pagination from 'react-bootstrap/Pagination'
import PageItem, { Ellipsis } from 'react-bootstrap/PageItem'
import FormSelect from 'react-bootstrap/FormSelect'

export default function PaginationSelectDemo() {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <span className="fs-sm">Show</span>
        <FormSelect className="border-0" defaultValue="12" aria-label="Items per page select">
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="24">24</option>
        </FormSelect>
      </div>
      <Pagination>
        <PageItem active aria-current="page">1</PageItem>
        <PageItem>2</PageItem>
        <Ellipsis className="d-sm-none" />
        <PageItem className="d-none d-sm-block">3</PageItem>
        <PageItem className="d-none d-sm-block">4</PageItem>
        <PageItem>5</PageItem>
      </Pagination>
    </div>
  )
}`

  return (
    <section id="pagination-select" className="docs-section pb-sm-2 mb-5">
      <h4>Items per page select</h4>
      <DocsComponentDemo code={code}>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <span className="fs-sm">Show</span>
            <FormSelect className="border-0" defaultValue="12" aria-label="Items per page select">
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="12">12</option>
              <option value="16">16</option>
              <option value="24">24</option>
            </FormSelect>
          </div>
          <Pagination>
            <PageItem active aria-current="page">
              1
            </PageItem>
            <PageItem>2</PageItem>
            <Ellipsis className="d-sm-none" />
            <PageItem className="d-none d-sm-block">3</PageItem>
            <PageItem className="d-none d-sm-block">4</PageItem>
            <PageItem>5</PageItem>
          </Pagination>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default PaginationSelectDemo
