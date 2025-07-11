'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ScrollSpy from '@/components/scrollspy'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import DropdownDivider from 'react-bootstrap/DropdownDivider'

const ScrollspyNavbarDemo = () => {
  const code = `'use client'

import ScrollSpy from '@/components/scrollspy'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import DropdownDivider from 'react-bootstrap/DropdownDivider'

export default function ScrollspyNavbarDemo() {
  return (
    <>

      {/* Navbar with navigation wrapped in ScrollSpy  */}
      <Navbar as="nav" expand="md" className="bg-body-tertiary rounded px-3 pe-md-2 mb-4">
        <NavbarBrand href="#">Cartzilla</NavbarBrand>
        <NavbarToggle>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggle>
        <NavbarCollapse id="scrollspy-navbar-nav">
          <ScrollSpy activeClass="active" rootMargin="-60px 0px 0px 0px">
            <Nav as="ul" className="ms-auto">
              <NavItem as="li">
                <NavLink href="#scrollspySection1" active={false} className="fs-sm">
                  First
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink href="#scrollspySection2" active={false} className="fs-sm">
                  Second
                </NavLink>
              </NavItem>
              <Dropdown as="li" className="nav-item">
                <DropdownToggle as={NavLink} active={false} className="fs-sm">
                  Dropdown
                </DropdownToggle>
                <DropdownMenu as="ul" renderOnMount={true}>
                  <NavItem as="li">
                    <DropdownItem href="#scrollspySection3" active={false}>
                      Third
                    </DropdownItem>
                  </NavItem>
                  <NavItem as="li">
                    <DropdownItem href="#scrollspySection4" active={false}>
                      Fourth
                    </DropdownItem>
                  </NavItem>
                  <DropdownDivider />
                  <NavItem as="li">
                    <DropdownItem href="#scrollspySection5" active={false}>
                      Fifth
                    </DropdownItem>
                  </NavItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </ScrollSpy>
        </NavbarCollapse>
      </Navbar>

      {/* The content with anchors */}
      <div className="overflow-auto px-3" style={{ maxHeight: 130 }}>
        <div id="scrollspySection1" className="pb-3">
          <h5>First heading</h5>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
        </div>
        <div id="scrollspySection2" className="pb-3">
          <h5>Second heading</h5>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
        </div>
        <div id="scrollspySection3" className="pb-3">
          <h5>Third heading</h5>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
        </div>
        <div id="scrollspySection4" className="pb-3">
          <h5>Fourth heading</h5>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
        </div>
        <div id="scrollspySection5">
          <h5>Fifth heading</h5>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
        </div>
      </div>
    </>
  )
}`

  return (
    <section id="scrollspy-navbar" className="docs-section pb-sm-2 mb-5">
      <h4>Navbar</h4>
      <DocsComponentDemo code={code}>
        <Navbar as="nav" expand="md" className="bg-body-tertiary rounded px-3 pe-md-2 mb-4">
          <NavbarBrand href="#">Cartzilla</NavbarBrand>
          <NavbarToggle>
            <span className="navbar-toggler-icon"></span>
          </NavbarToggle>
          <NavbarCollapse id="scrollspy-navbar-nav">
            <ScrollSpy activeClass="active" rootMargin="-60px 0px 0px 0px">
              <Nav as="ul" className="ms-auto">
                <NavItem as="li">
                  <NavLink href="#scrollspySection1" active={false} className="fs-sm">
                    First
                  </NavLink>
                </NavItem>
                <NavItem as="li">
                  <NavLink href="#scrollspySection2" active={false} className="fs-sm">
                    Second
                  </NavLink>
                </NavItem>
                <Dropdown as="li" className="nav-item">
                  <DropdownToggle as={NavLink} active={false} className="fs-sm">
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu as="ul" renderOnMount={true}>
                    <NavItem as="li">
                      <DropdownItem href="#scrollspySection3" active={false}>
                        Third
                      </DropdownItem>
                    </NavItem>
                    <NavItem as="li">
                      <DropdownItem href="#scrollspySection4" active={false}>
                        Fourth
                      </DropdownItem>
                    </NavItem>
                    <DropdownDivider />
                    <NavItem as="li">
                      <DropdownItem href="#scrollspySection5" active={false}>
                        Fifth
                      </DropdownItem>
                    </NavItem>
                  </DropdownMenu>
                </Dropdown>
              </Nav>
            </ScrollSpy>
          </NavbarCollapse>
        </Navbar>
        <div className="overflow-auto px-3" style={{ maxHeight: 130 }}>
          <div id="scrollspySection1" className="pb-3">
            <h5>First heading</h5>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep
              adding some more example copy here to emphasize the scrolling and highlighting.
            </p>
          </div>
          <div id="scrollspySection2" className="pb-3">
            <h5>Second heading</h5>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep
              adding some more example copy here to emphasize the scrolling and highlighting.
            </p>
          </div>
          <div id="scrollspySection3" className="pb-3">
            <h5>Third heading</h5>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep
              adding some more example copy here to emphasize the scrolling and highlighting.
            </p>
          </div>
          <div id="scrollspySection4" className="pb-3">
            <h5>Fourth heading</h5>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep
              adding some more example copy here to emphasize the scrolling and highlighting.
            </p>
          </div>
          <div id="scrollspySection5">
            <h5>Fifth heading</h5>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep
              adding some more example copy here to emphasize the scrolling and highlighting.
            </p>
          </div>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default ScrollspyNavbarDemo
