'use client'

import Link from 'next/link'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Accordion from 'react-bootstrap/Accordion'
import Nav from 'react-bootstrap/Nav'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const ShopFiltersLinksDemo = () => {
  const code = `'use client'

import Link from 'next/link'
import Accordion from 'react-bootstrap/Accordion'
import Nav from 'react-bootstrap/Nav'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

export default function ShopFiltersLinksDemo() {

  // Categories (links) array
  const categories = [
    { title: 'Smartphones', quantity: 218, href: '#' },
    { title: 'Accessories', quantity: 372, href: '#' },
    { title: 'Tablets', quantity: 110, href: '#' },
    { title: 'Wearable Electronics', quantity: 142, href: '#' },
    { title: 'Computers & Laptops', quantity: 205, href: '#' },
    { title: 'Cameras, Photo & Video', quantity: 78, href: '#' },
    { title: 'TV, Video & Audio', quantity: 97, href: '#' },
    { title: 'Headphones', quantity: 121, href: '#' },
    { title: 'Video Games', quantity: 89, href: '#' },
    { title: 'Printers & Ink', quantity: 116, href: '#' },
    { title: 'Home music', quantity: 154, href: '#' },
  ]

  return (
    <Accordion defaultActiveKey="0" style={{ maxWidth: 280 }}>
      <Accordion.Item className="border-0" eventKey="0">
        <Accordion.Button as="h3" className="h6 cursor-pointer p-0" id="headingCategories">
          Categories
        </Accordion.Button>
        <Accordion.Body aria-labelledby="headingCategories">
          <SimpleBar data-simplebar-auto-hide="false" style={{ height: 190 }}>
            <ul className="list-unstyled d-block m-0 mt-n2">
              {categories.map(({ title, quantity, href }, index) => (
                <Nav key={index} as="li" className="d-block pt-2 mt-1">
                  <Nav.Link as={Link} href={href} active={false} className="animate-underline fw-normal p-0 pe-4">
                    <span className="animate-target text-truncate me-3">{title}</span>
                    <span className="text-body-secondary fs-xs ms-auto">{quantity}</span>
                  </Nav.Link>
                </Nav>
              ))}
            </ul>
          </SimpleBar>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}`

  const categories = [
    { title: 'Smartphones', quantity: 218, href: '#' },
    { title: 'Accessories', quantity: 372, href: '#' },
    { title: 'Tablets', quantity: 110, href: '#' },
    { title: 'Wearable Electronics', quantity: 142, href: '#' },
    { title: 'Computers & Laptops', quantity: 205, href: '#' },
    { title: 'Cameras, Photo & Video', quantity: 78, href: '#' },
    { title: 'TV, Video & Audio', quantity: 97, href: '#' },
    { title: 'Headphones', quantity: 121, href: '#' },
    { title: 'Video Games', quantity: 89, href: '#' },
    { title: 'Printers & Ink', quantity: 116, href: '#' },
    { title: 'Home music', quantity: 154, href: '#' },
  ]

  return (
    <section id="filter-links" className="docs-section pb-sm-2 mb-5">
      <h4>Links</h4>
      <DocsComponentDemo code={code}>
        <Accordion defaultActiveKey="0" style={{ maxWidth: 280 }}>
          <Accordion.Item className="border-0" eventKey="0">
            <Accordion.Button as="h3" className="h6 cursor-pointer p-0" id="headingCategories">
              Categories
            </Accordion.Button>
            <Accordion.Body aria-labelledby="headingCategories">
              <SimpleBar data-simplebar-auto-hide="false" style={{ height: 190 }}>
                <ul className="list-unstyled d-block m-0 mt-n2">
                  {categories.map(({ title, quantity, href }, index) => (
                    <Nav key={index} as="li" className="d-block pt-2 mt-1">
                      <Nav.Link as={Link} href={href} active={false} className="animate-underline fw-normal p-0 pe-4">
                        <span className="animate-target text-truncate me-3">{title}</span>
                        <span className="text-body-secondary fs-xs ms-auto">{quantity}</span>
                      </Nav.Link>
                    </Nav>
                  ))}
                </ul>
              </SimpleBar>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </DocsComponentDemo>
    </section>
  )
}

export default ShopFiltersLinksDemo
