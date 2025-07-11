'use client'

import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'

const BlogPagination = () => (
  <nav aria-label="Blog pagination">
    <hr className="mt-4 mt-sm-5" />
    <Pagination size="lg" className="mb-4">
      <PageItem active aria-current="page">
        1
      </PageItem>
      <PageItem>2</PageItem>
      <PageItem>3</PageItem>
      <PageItem>4</PageItem>
      <PageItem>5</PageItem>
    </Pagination>
  </nav>
)

export default BlogPagination
