'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'

const PillsTabsDemo = () => {
  const code = `'use client'

import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'

export default function PillsTabsDemo() {
  return (
    <TabContainer defaultActiveKey="home">
      <Nav variant="pills" className="mb-3">
        <NavItem>
          <NavLink eventKey="home">
            <i className="ci-home me-2 ms-n1"/>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="profile">
            <i className="ci-user me-2 ms-n1"/>
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="messages">
            <i className="ci-message-square me-2 ms-n1"/>
            Messages
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent>
        <TabPane eventKey="home">
          Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor.
          Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat
          nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud
          sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim
          voluptatum iure autem atque quaerat.
        </TabPane>
        <TabPane eventKey="profile">
          Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad
          laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim
          incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi
          culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo
          itaque dolores dolorum similique architecto.
        </TabPane>
        <TabPane eventKey="messages">
          Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum
          voluptate. Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim
          tempor. Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit
          sint voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt. Consectetur et fugiat
          anim do eiusmod aliquip.
        </TabPane>
      </TabContent>
    </TabContainer>
  )
}`

  return (
    <section id="pills-tabs" className="docs-section">
      <h4>Tabs-like behavior</h4>
      <DocsComponentDemo code={code}>
        <TabContainer defaultActiveKey="home">
          <Nav variant="pills" className="mb-3">
            <NavItem>
              <NavLink eventKey="home">
                <i className="ci-home me-2 ms-n1" />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="profile">
                <i className="ci-user me-2 ms-n1" />
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="messages">
                <i className="ci-message-square me-2 ms-n1" />
                Messages
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane eventKey="home">
              Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor.
              Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat
              nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud
              sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim
              voluptatum iure autem atque quaerat.
            </TabPane>
            <TabPane eventKey="profile">
              Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad
              laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim
              incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi
              culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo
              itaque dolores dolorum similique architecto.
            </TabPane>
            <TabPane eventKey="messages">
              Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum
              voluptate. Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim
              tempor. Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit
              sint voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt. Consectetur et fugiat
              anim do eiusmod aliquip.
            </TabPane>
          </TabContent>
        </TabContainer>
      </DocsComponentDemo>
    </section>
  )
}

export default PillsTabsDemo
