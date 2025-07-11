'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const TabsButtonStyleDemo = () => {
  const code = `'use client'

import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'

export default function TabsButtonStyleDemo() {
  return (
    <>
      <TabContainer defaultActiveKey="home">
        <Nav variant="tabs" className="mb-3" style={{ maxWidth: 450 }}>
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


      {/* Using Tabs shorthand */}
      <Tabs defaultActiveKey="home" className="mb-3" style={{ maxWidth: 450 }}>
        <Tab eventKey="home" title="Home">
          This is some placeholder content the <strong>Home tab&apos;s</strong> associated content. Clicking another
          tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the
          content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered
          navigation.
        </Tab>
        <Tab eventKey="profile" title="Profile">
          This is some placeholder content the <strong>Profile tab&apos;s</strong> associated content. Clicking
          another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
          the content visibility and styling. You can use it with tabs, pills, and any other
          <code>.nav</code>-powered navigation.
        </Tab>
        <Tab eventKey="contact" title="Contact">
          This is some placeholder content the <strong>Contact tab&apos;s</strong> associated content. Clicking
          another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
          the content visibility and styling. You can use it with tabs, pills, and any other
          <code>.nav</code>-powered navigation.
        </Tab>
        <Tab eventKey="disabled" title="Disabled" disabled>
          This is some placeholder content the <strong>Disabled tab&apos;s</strong> associated content. Clicking
          another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
          the content visibility and styling. You can use it with tabs, pills, and any other
          <code>.nav</code>-powered navigation.
        </Tab>
      </Tabs>
    </>
  )
}`

  return (
    <section id="tabs-button" className="docs-section pb-sm-2 mb-5">
      <h4>Button-like style</h4>
      <DocsComponentDemo code={code}>
        <Tabs defaultActiveKey="home" className="mb-3" style={{ maxWidth: 450 }}>
          <Tab eventKey="home" title="Home">
            This is some placeholder content the <strong>Home tab&apos;s</strong> associated content. Clicking another
            tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the
            content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered
            navigation.
          </Tab>
          <Tab eventKey="profile" title="Profile">
            This is some placeholder content the <strong>Profile tab&apos;s</strong> associated content. Clicking
            another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
            the content visibility and styling. You can use it with tabs, pills, and any other
            <code>.nav</code>-powered navigation.
          </Tab>
          <Tab eventKey="contact" title="Contact">
            This is some placeholder content the <strong>Contact tab&apos;s</strong> associated content. Clicking
            another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
            the content visibility and styling. You can use it with tabs, pills, and any other
            <code>.nav</code>-powered navigation.
          </Tab>
          <Tab eventKey="disabled" title="Disabled" disabled>
            This is some placeholder content the <strong>Disabled tab&apos;s</strong> associated content. Clicking
            another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
            the content visibility and styling. You can use it with tabs, pills, and any other
            <code>.nav</code>-powered navigation.
          </Tab>
        </Tabs>
      </DocsComponentDemo>
    </section>
  )
}

export default TabsButtonStyleDemo
