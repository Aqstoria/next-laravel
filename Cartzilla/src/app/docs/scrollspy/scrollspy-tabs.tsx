'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ScrollSpy from '@/components/scrollspy'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

const ScrollspyTabsDemo = () => {
  const code = `'use client'

import ScrollSpy from '@/components/scrollspy'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function ScrollspyNavbarDemo() {
  return (
    <>

      {/* Nav tabs wrapped in ScrollSpy  */}
      <ScrollSpy activeClass="active">
        <Nav variant="tabs" className="mb-4" style={{ maxWidth: 350 }}>
          <NavItem>
            <NavLink href="#scrollspyTabsSection1" active={false}>
              First
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#scrollspyTabsSection2" active={false}>
              Second
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#scrollspyTabsSection3" active={false}>
              Third
            </NavLink>
          </NavItem>
        </Nav>
      </ScrollSpy>

      {/* The content with anchors */}
      <div className="overflow-auto px-2" style={{ maxHeight: 130 }}>
        <div id="scrollspyTabsSection1" className="pb-3">
          <h5>First heading</h5>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
        </div>
        <div id="scrollspyTabsSection2" className="pb-3">
          <h5>Second heading</h5>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
        </div>
        <div id="scrollspyTabsSection3">
          <h5>Third heading</h5>
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
    <section id="scrollspy-tabs" className="docs-section pb-sm-2 mb-5">
      <h4>Tabs</h4>
      <DocsComponentDemo code={code}>
        <ScrollSpy activeClass="active">
          <Nav variant="tabs" className="mb-4" style={{ maxWidth: 350 }}>
            <NavItem>
              <NavLink href="#scrollspyTabsSection1" active={false}>
                First
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#scrollspyTabsSection2" active={false}>
                Second
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#scrollspyTabsSection3" active={false}>
                Third
              </NavLink>
            </NavItem>
          </Nav>
        </ScrollSpy>
        <div className="overflow-auto px-2" style={{ maxHeight: 130 }}>
          <div id="scrollspyTabsSection1" className="pb-3">
            <h5>First heading</h5>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep
              adding some more example copy here to emphasize the scrolling and highlighting.
            </p>
          </div>
          <div id="scrollspyTabsSection2" className="pb-3">
            <h5>Second heading</h5>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep
              adding some more example copy here to emphasize the scrolling and highlighting.
            </p>
          </div>
          <div id="scrollspyTabsSection3">
            <h5>Third heading</h5>
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

export default ScrollspyTabsDemo
