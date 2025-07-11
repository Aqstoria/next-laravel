'use client'

import React, { useState, useRef, Suspense } from 'react'
import { usePathname } from 'next/navigation'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import ListGroup from 'react-bootstrap/ListGroup'
import Offcanvas from 'react-bootstrap/Offcanvas'
import FormControl from 'react-bootstrap/FormControl'
import ScrollSpy from '@/components/scrollspy'
import DocsNavEvents from '@/components/docs/docs-nav-events'
import navigation from '@/app/docs/navigation'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const DocsSidebar = () => {
  const offcanvasId = 'docs-sidebar'
  const { closeOffcanvas, isOpen } = useOffcanvas()
  const [searchQuery, setSearchQuery] = useState('')
  const simpleBarRef = useRef(null)
  const pathname = usePathname()

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase())
  }

  // Clear the search input
  const clearSearch = () => setSearchQuery('')

  // Create a combined onClick handler for nav item
  const handleNavItemClick = (event: React.MouseEvent<HTMLElement>) => {
    closeOffcanvas(offcanvasId)
    clearSearch()
  }

  const isActive = (href: string) => pathname.startsWith(href)

  // Get the filtered navigation array
  const filteredNavigation =
    searchQuery === ''
      ? navigation // Show the original object structure
      : navigation
          .map((section) => ({
            ...section,
            children: (section.children || []).filter(
              (child) =>
                child.title.toLowerCase().includes(searchQuery) || // Match in title
                (child.tags && child.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery))) // Match in tags
            ),
          }))
          .filter((section) => section.children.length > 0) // Remove sections with no matching children

  return (
    <div className="docs-sidebar">
      <Offcanvas
        show={isOpen(offcanvasId)}
        onHide={() => closeOffcanvas(offcanvasId)}
        responsive="lg"
        placement="start"
        className="d-flex flex-column h-100"
      >
        <Offcanvas.Header closeButton className="py-3">
          <Offcanvas.Title>Browse docs</Offcanvas.Title>
        </Offcanvas.Header>
        <div className="position-relative mx-4 ms-lg-0 mb-4">
          <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
          <FormControl
            type="search"
            className="form-icon-start"
            placeholder="Quick search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchQuery !== '' && (
            <button
              className="btn btn-sm btn-outline-secondary w-auto border-0 p-1 position-absolute top-50 end-0 translate-middle-y me-2"
              onClick={clearSearch}
            >
              <svg className="opacity-75" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.619 5.381a.875.875 0 0 1 0 1.238l-12 12A.875.875 0 0 1 5.38 17.38l12-12a.875.875 0 0 1 1.238 0Z"></path>
                <path d="M5.381 5.381a.875.875 0 0 1 1.238 0l12 12a.875.875 0 1 1-1.238 1.238l-12-12a.875.875 0 0 1 0-1.238Z"></path>
              </svg>
            </button>
          )}
        </div>
        <Offcanvas.Body className="d-block flex-grow-1 overflow-hidden pt-0 pe-0 pb-lg-2">
          <Suspense fallback={null}>
            <SimpleBar ref={simpleBarRef} className="h-100 overflow-y-auto pe-4">
              <ListGroup as="nav" variant="borderless" className="docs-list">
                {filteredNavigation.length > 0 ? (
                  filteredNavigation.map((section, sectionIndex) => (
                    <React.Fragment key={`listGroup.section${sectionIndex}`}>
                      {searchQuery === '' && (
                        // Render section heading if search query is empty
                        <h3
                          key={`listGroup.section${sectionIndex}.heading`}
                          className={`h6 d-flex align-items-center pb-1 mb-2 ${sectionIndex > 0 ? 'border-top pt-4 mt-3' : ''}`}
                        >
                          <i className={section.icon} />
                          {section.title}
                        </h3>
                      )}
                      {(section.children || []).map((listGroupItem, listGroupItemIndex) => (
                        <div
                          key={`listGroup.section${sectionIndex}.listGroupItem${listGroupItemIndex}`}
                          className={isActive(listGroupItem.href) ? 'dropdown' : 'dropend'}
                        >
                          {isActive(listGroupItem.href) && (
                            <ListGroup.Item
                              as="span"
                              action
                              className="justify-content-between dropdown-toggle text-wrap pe-3 pe-none active"
                            >
                              {listGroupItem.title}
                              {listGroupItem.tags && listGroupItem.tags.length > 0 && (
                                <span className="visually-hidden">{listGroupItem.tags.concat(' ')}</span>
                              )}
                            </ListGroup.Item>
                          )}
                          {isActive(listGroupItem.href) &&
                            searchQuery === '' &&
                            listGroupItem.children &&
                            listGroupItem.children.length > 0 && (
                              <Nav
                                variant="underline"
                                defaultActiveKey={0}
                                as="ul"
                                className="flex-column border-start ms-2 my-2"
                                style={{ gap: '.25rem' }}
                              >
                                <ScrollSpy activeClass="active">
                                  {listGroupItem.children.map((subNavItem, subNavItemIndex) => (
                                    <Nav.Item
                                      key={`listGroup.section${sectionIndex}.listGroupItem${listGroupItemIndex}.subNavItem${subNavItemIndex}`}
                                      as="li"
                                    >
                                      <Nav.Link
                                        as={Link}
                                        href={subNavItem.href}
                                        className="fw-normal"
                                        active={false}
                                        onClick={(event) => handleNavItemClick(event)}
                                      >
                                        {subNavItem.title}
                                      </Nav.Link>
                                    </Nav.Item>
                                  ))}
                                </ScrollSpy>
                              </Nav>
                            )}
                          {!isActive(listGroupItem.href) && (
                            <ListGroup.Item
                              as={Link}
                              action
                              href={listGroupItem.href}
                              className="justify-content-between dropdown-toggle text-wrap pe-3"
                              target={listGroupItem.target}
                              rel={listGroupItem.rel}
                              onClick={(event) => handleNavItemClick(event as React.MouseEvent<HTMLElement>)}
                            >
                              {listGroupItem.title}
                              {listGroupItem.tags && listGroupItem.tags.length > 0 && (
                                <span className="visually-hidden">{listGroupItem.tags.concat(' ')}</span>
                              )}
                            </ListGroup.Item>
                          )}
                        </div>
                      ))}
                    </React.Fragment>
                  ))
                ) : (
                  <p className="text-body-secondary mb-0">No results found</p>
                )}
              </ListGroup>
            </SimpleBar>
            <DocsNavEvents simpleBarRef={simpleBarRef} />
          </Suspense>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default DocsSidebar
