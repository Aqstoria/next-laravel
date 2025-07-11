'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import Nav from 'react-bootstrap/Nav'

const HelpArticlesSidebar = ({ heading, links }: { heading: string; links: [string, string][] }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky-md-top ps-lg-4 ms-xl-3" style={{ paddingTop: 115 }}>
      <h4 className="h5 mb-4 d-none d-lg-block">{heading}</h4>
      <div className="position-relative py-1 py-sm-2 px-3 px-sm-4 p-lg-0">
        <span className="position-absolute top-0 start-0 w-100 h-100 border rounded-4 d-lg-none" />
        <Button
          variant="outline-secondary"
          size="lg"
          className="position-relative z-1 w-100 justify-content-start border-0 px-0 d-lg-none"
          onClick={() => setOpen(!open)}
          aria-controls="help-articles-sidebar"
          aria-expanded={open}
        >
          <i className="ci-menu fs-lg me-2" />
          {heading}
          <i className="ci-chevron-down fs-lg ms-auto" />
        </Button>
        <Collapse in={open} className="position-relative z-1 d-lg-block">
          <div id="help-articles-sidebar">
            <Nav as="ul" className="flex-column gap-3 pt-2 pb-3 pt-lg-0">
              {links.map((link, index) => (
                <Nav.Item key={index} as="li">
                  <Nav.Link as={Link} href={link[1]} className="hover-effect-underline fw-normal p-0">
                    {link[0]}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default HelpArticlesSidebar
