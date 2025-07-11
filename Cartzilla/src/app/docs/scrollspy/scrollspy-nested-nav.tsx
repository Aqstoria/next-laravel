'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ScrollSpy from '@/components/scrollspy'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

const ScrollspyNestedNavDemo = () => {
  const code = `'use client'

import ScrollSpy from '@/components/scrollspy'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function ScrollspyNestedNavDemo() {
  return (
    <Row>

      {/* List Group wrapped in ScrollSpy  */}
      <Col md={3}>
        <ScrollSpy activeClass="active">
          <ListGroup as="nav" variant="borderless" className="mb-4">
            <ListGroupItem action href="#item-1" active={false}>
              Item 1
            </ListGroupItem>
            <Nav
              as="ul"
              variant="underline"
              className="flex-column border-start ms-2 my-2"
              style={{ gap: '0.25rem' }}
            >
              <NavItem as="li">
                <NavLink href="#item-1-1" active={false} className="fw-normal">
                  Item 1-1
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink href="#item-1-2" active={false} className="fw-normal">
                  Item 1-2
                </NavLink>
              </NavItem>
            </Nav>
            <ListGroupItem action href="#item-2" active={false}>
              Item 2
            </ListGroupItem>
            <ListGroupItem action href="#item-3" active={false}>
              Item 3
            </ListGroupItem>
            <Nav
              as="ul"
              variant="underline"
              className="flex-column border-start ms-2 my-2"
              style={{ gap: '0.25rem' }}
            >
              <NavItem as="li">
                <NavLink href="#item-3-1" active={false} className="fw-normal">
                  Item 3-1
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink href="#item-3-2" active={false} className="fw-normal">
                  Item 3-2
                </NavLink>
              </NavItem>
            </Nav>
          </ListGroup>
        </ScrollSpy>
      </Col>

      {/* The content with anchors */}
      <Col md={9} className="pt-4 pt-md-0">
        <div className="overflow-auto pe-2 px-md-3" style={{ maxHeight: 360 }}>
          <div id="item-1" className="pb-3">
            <h4>Item 1</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep
              adding some more example copy here to emphasize the scrolling and highlighting.
            </p>
            <p>
              Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
              Multiple visible scrollspy targets at the same time may cause some issues.
            </p>
          </div>
          <div id="item-1-1" className="pb-3">
            <h5>Item 1-1</h5>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep
              adding some more example copy here to emphasize the scrolling and highlighting.
            </p>
            <p>
              Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
              Multiple visible scrollspy targets at the same time may cause some issues.
            </p>
          </div>
          <div id="item-1-2" className="pb-3">
            <h5>Item 1-2</h5>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep
              adding some more example copy here to emphasize the scrolling and highlighting.
            </p>
            <p>
              Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
              Multiple visible scrollspy targets at the same time may cause some issues.
            </p>
          </div>
          <div id="item-2" className="pb-3">
            <h4>Item 2</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep
              adding some more example copy here to emphasize the scrolling and highlighting.
            </p>
            <p>
              Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
              Multiple visible scrollspy targets at the same time may cause some issues.
            </p>
          </div>
          <div id="item-3" className="pb-3">
            <h4>Item 3</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep
              adding some more example copy here to emphasize the scrolling and highlighting.
            </p>
            <p>
              Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
              Multiple visible scrollspy targets at the same time may cause some issues.
            </p>
          </div>
          <div id="item-3-1" className="pb-3">
            <h5>Item 3-1</h5>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep
              adding some more example copy here to emphasize the scrolling and highlighting.
            </p>
            <p>
              Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
              Multiple visible scrollspy targets at the same time may cause some issues.
            </p>
          </div>
          <div id="item-3-2">
            <h5>Item 3-2</h5>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep
              adding some more example copy here to emphasize the scrolling and highlighting.
            </p>
            <p>
              Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
              Multiple visible scrollspy targets at the same time may cause some issues.
            </p>
          </div>
        </div>
      </Col>
    </Row>
  )
}`

  return (
    <section id="scrollspy-nested" className="docs-section pb-sm-2 mb-5">
      <h4>List group with nested nav</h4>
      <DocsComponentDemo code={code}>
        <Row>
          <Col md={3}>
            <ScrollSpy activeClass="active">
              <ListGroup as="nav" variant="borderless" className="mb-4">
                <ListGroupItem action href="#item-1" active={false}>
                  Item 1
                </ListGroupItem>
                <Nav
                  as="ul"
                  variant="underline"
                  className="flex-column border-start ms-2 my-2"
                  style={{ gap: '0.25rem' }}
                >
                  <NavItem as="li">
                    <NavLink href="#item-1-1" active={false} className="fw-normal">
                      Item 1-1
                    </NavLink>
                  </NavItem>
                  <NavItem as="li">
                    <NavLink href="#item-1-2" active={false} className="fw-normal">
                      Item 1-2
                    </NavLink>
                  </NavItem>
                </Nav>
                <ListGroupItem action href="#item-2" active={false}>
                  Item 2
                </ListGroupItem>
                <ListGroupItem action href="#item-3" active={false}>
                  Item 3
                </ListGroupItem>
                <Nav
                  as="ul"
                  variant="underline"
                  className="flex-column border-start ms-2 my-2"
                  style={{ gap: '0.25rem' }}
                >
                  <NavItem as="li">
                    <NavLink href="#item-3-1" active={false} className="fw-normal">
                      Item 3-1
                    </NavLink>
                  </NavItem>
                  <NavItem as="li">
                    <NavLink href="#item-3-2" active={false} className="fw-normal">
                      Item 3-2
                    </NavLink>
                  </NavItem>
                </Nav>
              </ListGroup>
            </ScrollSpy>
          </Col>
          <Col md={9} className="pt-4 pt-md-0">
            <div className="overflow-auto pe-2 px-md-3" style={{ maxHeight: 360 }}>
              <div id="item-1" className="pb-3">
                <h4>Item 1</h4>
                <p>
                  This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                  appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We
                  keep adding some more example copy here to emphasize the scrolling and highlighting.
                </p>
                <p>
                  Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
                  Multiple visible scrollspy targets at the same time may cause some issues.
                </p>
              </div>
              <div id="item-1-1" className="pb-3">
                <h5>Item 1-1</h5>
                <p>
                  This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                  appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We
                  keep adding some more example copy here to emphasize the scrolling and highlighting.
                </p>
                <p>
                  Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
                  Multiple visible scrollspy targets at the same time may cause some issues.
                </p>
              </div>
              <div id="item-1-2" className="pb-3">
                <h5>Item 1-2</h5>
                <p>
                  This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                  appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We
                  keep adding some more example copy here to emphasize the scrolling and highlighting.
                </p>
                <p>
                  Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
                  Multiple visible scrollspy targets at the same time may cause some issues.
                </p>
              </div>
              <div id="item-2" className="pb-3">
                <h4>Item 2</h4>
                <p>
                  This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                  appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We
                  keep adding some more example copy here to emphasize the scrolling and highlighting.
                </p>
                <p>
                  Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
                  Multiple visible scrollspy targets at the same time may cause some issues.
                </p>
              </div>
              <div id="item-3" className="pb-3">
                <h4>Item 3</h4>
                <p>
                  This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                  appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We
                  keep adding some more example copy here to emphasize the scrolling and highlighting.
                </p>
                <p>
                  Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
                  Multiple visible scrollspy targets at the same time may cause some issues.
                </p>
              </div>
              <div id="item-3-1" className="pb-3">
                <h5>Item 3-1</h5>
                <p>
                  This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                  appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We
                  keep adding some more example copy here to emphasize the scrolling and highlighting.
                </p>
                <p>
                  Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
                  Multiple visible scrollspy targets at the same time may cause some issues.
                </p>
              </div>
              <div id="item-3-2">
                <h5>Item 3-2</h5>
                <p>
                  This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                  appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We
                  keep adding some more example copy here to emphasize the scrolling and highlighting.
                </p>
                <p>
                  Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
                  Multiple visible scrollspy targets at the same time may cause some issues.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default ScrollspyNestedNavDemo
