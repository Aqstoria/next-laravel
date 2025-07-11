'use client'

import Nav from 'react-bootstrap/Nav'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const BlogGrid_V2_CategoryFilters = () => (
  <SimpleBar className="mb-3">
    <Nav as="ul" variant="pills" className="flex-nowrap text-nowrap py-3">
      {['All', 'Home decoration', 'Furniture', 'Interior design', 'Lighting', 'Design trends'].map((item, index) => (
        <Nav.Item key={index} as="li">
          <Nav.Link active={index === 0}>{item}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  </SimpleBar>
)

export default BlogGrid_V2_CategoryFilters
