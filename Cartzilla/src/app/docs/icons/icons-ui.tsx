'use client'

import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchFilter from '@/components/search-filter'
import DocsIconDemo from '@/components/docs/docs-icon-demo'
import icons from './icons-ui.json'

const IconsUIDemo = () => {
  const [filteredIcons, setFilteredIcons] = useState(icons)

  // Function to filter icons based on the query
  const filterIcons = (icon: (typeof icons)[number], query: string): boolean => {
    return (
      icon.cssClass.toLowerCase().includes(query) || // Match cssClass
      (icon.tags?.some((tag) => tag.toLowerCase().includes(query)) ?? false) // Match tags, or default to false
    )
  }

  return (
    <section id="icons-ui" className="docs-section pb-sm-2 mb-5">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h4 className="mb-0 me-3">UI icons</h4>
        <SearchFilter
          items={icons}
          filterFn={filterIcons}
          onFilteredItems={setFilteredIcons}
          placeholder="Search icons"
        />
      </div>
      {filteredIcons.length > 0 ? (
        <Row xs={2} sm={3} md={4} className="g-3">
          {filteredIcons.map((icon, index) => (
            <Col key={index}>
              <DocsIconDemo cssClass={icon.cssClass} tags={icon.tags} />
            </Col>
          ))}
        </Row>
      ) : (
        <p className="fs-sm text-body-secondary mb-0">No icons found</p>
      )}
    </section>
  )
}

export default IconsUIDemo
