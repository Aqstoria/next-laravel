import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardHeader from 'react-bootstrap/CardHeader'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

const CardNavPillsDemo = () => {
  const code = `import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardHeader from 'react-bootstrap/CardHeader'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function CardNavPillsDemo() {
  return (
    <Row xs={1} md={w} className="g-4">
      <Col>
        <Card className="text-center">
          <CardHeader className="bg-transparent">
            <Nav variant="pills" defaultActiveKey="#first">
              <NavItem>
                <NavLink href="#first">Active</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#second">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#third" disabled>
                  Disabled
                </NavLink>
              </NavItem>
            </Nav>
          </CardHeader>
          <CardBody>
            <CardTitle as="h5">Card title</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button href="#">Go somewhere</Button>
          </CardBody>
        </Card>
      </Col>

      <Col>
        <Card className="text-center">
          <CardHeader className="bg-transparent">
            <Nav variant="pills" className="nav-justified" defaultActiveKey="#first">
              <NavItem>
                <NavLink href="#first" className="rounded">
                  Active
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#second" className="rounded">
                  Link
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#third" className="rounded" disabled>
                  Disabled
                </NavLink>
              </NavItem>
            </Nav>
          </CardHeader>
          <CardBody>
            <CardTitle as="h5">Card title</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button href="#">Go somewhere</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}`

  return (
    <section id="card-nav-pills" className="docs-section pb-sm-2 mb-5">
      <h4>Navigation: Pills</h4>
      <DocsComponentDemo code={code}>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card className="text-center">
              <CardHeader className="bg-transparent">
                <Nav variant="pills" defaultActiveKey="#first">
                  <NavItem>
                    <NavLink href="#first">Active</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#second">Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#third" disabled>
                      Disabled
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <CardTitle as="h5">Card title</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button href="#">Go somewhere</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <CardHeader className="bg-transparent">
                <Nav variant="pills" defaultActiveKey="#first">
                  <NavItem>
                    <NavLink href="#first" className="rounded">
                      Active
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#second" className="rounded">
                      Link
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#third" className="rounded" disabled>
                      Disabled
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <CardTitle as="h5">Card title</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button href="#">Go somewhere</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default CardNavPillsDemo
