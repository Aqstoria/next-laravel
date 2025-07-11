'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'

const ListGroupTabsDemo = () => {
  const code = `'use client'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'

export default function ListGroupTabsDemo() {
  return (
    <TabContainer defaultActiveKey="home">
      <Row>
        <Col md={4}>
          <ListGroup>
            <ListGroupItem action eventKey="home">
              Home
            </ListGroupItem>
            <ListGroupItem action eventKey="profile">
              Profile
            </ListGroupItem>
            <ListGroupItem action eventKey="messages">
              Messages
            </ListGroupItem>
            <ListGroupItem action eventKey="settings">
              Settings
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={8} className="pt-4 pt-md-0">
          <TabContent>
            <TabPane eventKey="home">
              Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat
              tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit
              occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat
              aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in
              cupidatat nisi enim voluptatum iure autem atque quaerat.
            </TabPane>
            <TabPane eventKey="profile">
              Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad
              laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim
              incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi
              culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa
              commodo itaque dolores dolorum similique architecto.
            </TabPane>
            <TabPane eventKey="messages">
              Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum
              voluptate. Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit consequat
              enim tempor. Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id
              Lorem sit sint voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt.
              Consectetur et fugiat anim do eiusmod aliquip.
            </TabPane>
            <TabPane eventKey="settings">
              Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud
              ut dolore nisi officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est
              cupidatat aliqua labore aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure
              commodo non amet consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna labore
              dolor quis ex labore id nostrud deserunt dolor eiusmod.
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </TabContainer>
  )
}`

  return (
    <section id="list-group-tabs" className="docs-section">
      <h4>Tabbed interface</h4>
      <DocsComponentDemo code={code}>
        <TabContainer defaultActiveKey="home">
          <Row>
            <Col md={4}>
              <ListGroup>
                <ListGroupItem action eventKey="home">
                  Home
                </ListGroupItem>
                <ListGroupItem action eventKey="profile">
                  Profile
                </ListGroupItem>
                <ListGroupItem action eventKey="messages">
                  Messages
                </ListGroupItem>
                <ListGroupItem action eventKey="settings">
                  Settings
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={8} className="pt-4 pt-md-0">
              <TabContent>
                <TabPane eventKey="home">
                  Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat
                  tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit
                  occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat
                  aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in
                  cupidatat nisi enim voluptatum iure autem atque quaerat.
                </TabPane>
                <TabPane eventKey="profile">
                  Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad
                  laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim
                  incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi
                  culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa
                  commodo itaque dolores dolorum similique architecto.
                </TabPane>
                <TabPane eventKey="messages">
                  Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum
                  voluptate. Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit consequat
                  enim tempor. Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id
                  Lorem sit sint voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt.
                  Consectetur et fugiat anim do eiusmod aliquip.
                </TabPane>
                <TabPane eventKey="settings">
                  Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud
                  ut dolore nisi officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est
                  cupidatat aliqua labore aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure
                  commodo non amet consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna labore
                  dolor quis ex labore id nostrud deserunt dolor eiusmod.
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
      </DocsComponentDemo>
    </section>
  )
}

export default ListGroupTabsDemo
