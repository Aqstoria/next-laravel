'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'

const TabsUnderlineStyleDemo = () => {
  const code = `'use client'

import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'

export default function TabsUnderlineStyleDemo() {
  return (
    <TabContainer defaultActiveKey="home">
      <Nav variant="underline" className="mb-3">
        <NavItem>
          <NavLink eventKey="home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="disabled" disabled>Disabled</NavLink>
        </NavItem>
      </Nav>
      <TabContent>
        <TabPane eventKey="home">
          This is some placeholder content the <strong>Home tab&apos;s</strong> associated content. Clicking another
          tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the
          content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered
          navigation.
        </TabPane>
        <TabPane eventKey="profile">
          This is some placeholder content the <strong>Profile tab&apos;s</strong> associated content. Clicking
          another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling. You can use it with tabs, pills, and any other
          <code>.nav</code>-powered navigation.
        </TabPane>
        <TabPane eventKey="contact">
          This is some placeholder content the <strong>Contact tab&apos;s</strong> associated content. Clicking
          another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling. You can use it with tabs, pills, and any other
          <code>.nav</code>-powered navigation.
        </TabPane>
        <TabPane eventKey="disabled">
          This is some placeholder content the <strong>Disabled tab&apos;s</strong> associated content. Clicking
          another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling. You can use it with tabs, pills, and any other
          <code>.nav</code>-powered navigation.
        </TabPane>
      </TabContent>
    </TabContainer>
  )
}`

  return (
    <section id="tabs-underline" className="docs-section pb-sm-2 mb-5">
      <h4>Underline style</h4>
      <DocsComponentDemo code={code}>
        <TabContainer defaultActiveKey="home">
          <Nav variant="underline" className="mb-3">
            <NavItem>
              <NavLink eventKey="home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="disabled" disabled>
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane eventKey="home">
              This is some placeholder content the <strong>Home tab&apos;s</strong> associated content. Clicking another
              tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the
              content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered
              navigation.
            </TabPane>
            <TabPane eventKey="profile">
              This is some placeholder content the <strong>Profile tab&apos;s</strong> associated content. Clicking
              another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
              control the content visibility and styling. You can use it with tabs, pills, and any other
              <code>.nav</code>-powered navigation.
            </TabPane>
            <TabPane eventKey="contact">
              This is some placeholder content the <strong>Contact tab&apos;s</strong> associated content. Clicking
              another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
              control the content visibility and styling. You can use it with tabs, pills, and any other
              <code>.nav</code>-powered navigation.
            </TabPane>
            <TabPane eventKey="disabled">
              This is some placeholder content the <strong>Disabled tab&apos;s</strong> associated content. Clicking
              another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
              control the content visibility and styling. You can use it with tabs, pills, and any other
              <code>.nav</code>-powered navigation.
            </TabPane>
          </TabContent>
        </TabContainer>
      </DocsComponentDemo>
    </section>
  )
}

export default TabsUnderlineStyleDemo
