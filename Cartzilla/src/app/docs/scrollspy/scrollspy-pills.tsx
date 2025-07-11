'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ScrollSpy from '@/components/scrollspy'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import Link from 'next/link'

const ScrollspyPillsDemo = () => {
  const code = `'use client'

import ScrollSpy from '@/components/scrollspy'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function ScrollspyNavbarDemo() {
  return (
    <>

      {/* Nav pills wrapped in ScrollSpy  */}
      <ScrollSpy activeClass="active">
        <Nav variant="tabs" className="mb-4" style={{ maxWidth: 350 }}>
          <NavItem>
            <NavLink href="#scrollspyPillSection1" active={false}>
              First
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#scrollspyPillSection2" active={false}>
              Second
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#scrollspyPillSection3" active={false}>
              Third
            </NavLink>
          </NavItem>
        </Nav>
      </ScrollSpy>

      {/* The content with anchors */}
      <div className="overflow-auto px-2" style={{ maxHeight: 130 }}>
        <div id="scrollspyPillSection1" className="pb-3">
          <h5>First heading</h5>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
        </div>
        <div id="scrollspyPillSection2" className="pb-3">
          <h5>Second heading</h5>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
        </div>
        <div id="scrollspyPillSection3">
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
    <section id="scrollspy-pills" className="docs-section">
      <h4>Pills</h4>
      <DocsComponentDemo code={code}>
        <ScrollSpy activeClass="active">
          <Nav variant="pills" className="mb-4" style={{ maxWidth: 350 }}>
            <NavItem>
              <NavLink href="#scrollspyPillSection1" active={false}>
                First
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#scrollspyPillSection2" active={false}>
                Second
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#scrollspyPillSection3" active={false}>
                Third
              </NavLink>
            </NavItem>
          </Nav>
        </ScrollSpy>
        <div className="overflow-auto px-2" style={{ maxHeight: 130 }}>
          <div id="scrollspyPillSection1" className="pb-3">
            <h5>First heading</h5>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep
              adding some more example copy here to emphasize the scrolling and highlighting.
            </p>
          </div>
          <div id="scrollspyPillSection2" className="pb-3">
            <h5>Second heading</h5>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It&apos;s repeated throughout the component example. We keep
              adding some more example copy here to emphasize the scrolling and highlighting.
            </p>
          </div>
          <div id="scrollspyPillSection3">
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

export default ScrollspyPillsDemo
