import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const CardListGroupDemo = () => {
  const code = `import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export default function CardListGroupDemo() {
  return (
    <Row xs={1} md={w} className="g-4">
      <Col>
        <Card>
          <CardBody>
            <CardTitle as="h5">Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
            </CardText>
          </CardBody>
          <ListGroup className="list-group-flush fs-base">
            <ListGroupItem>Lorem ipsum dolor sit</ListGroupItem>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <CardBody>
            <Button href="#">Go somewhere</Button>
          </CardBody>
        </Card>
      </Col>

      <Col>
        <Card>
          <CardBody>
            <CardTitle as="h5">Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
            </CardText>
          </CardBody>
          <ListGroup className="list-group-flush fs-base">
            <ListGroupItem action href="#link1">
              Lorem ipsum dolor sit
            </ListGroupItem>
            <ListGroupItem action href="#link2">
              Cras justo odio
            </ListGroupItem>
            <ListGroupItem action href="#link3">
              Dapibus ac facilisis in
            </ListGroupItem>
            <ListGroupItem action href="#link4">
              Vestibulum at eros
            </ListGroupItem>
          </ListGroup>
          <CardBody>
            <Button href="#">Go somewhere</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}`

  return (
    <section id="card-list-group" className="docs-section pb-sm-2 mb-5">
      <h4>List group inside card</h4>
      <DocsComponentDemo code={code}>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <CardBody>
                <CardTitle as="h5">Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                </CardText>
              </CardBody>
              <ListGroup className="list-group-flush fs-base">
                <ListGroupItem>Lorem ipsum dolor sit</ListGroupItem>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <CardBody>
                <Button href="#">Go somewhere</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <CardTitle as="h5">Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                </CardText>
              </CardBody>
              <ListGroup className="list-group-flush fs-base">
                <ListGroupItem action href="#link1">
                  Lorem ipsum dolor sit
                </ListGroupItem>
                <ListGroupItem action href="#link2">
                  Cras justo odio
                </ListGroupItem>
                <ListGroupItem action href="#link3">
                  Dapibus ac facilisis in
                </ListGroupItem>
                <ListGroupItem action href="#link4">
                  Vestibulum at eros
                </ListGroupItem>
              </ListGroup>
              <CardBody>
                <Button href="#">Go somewhere</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default CardListGroupDemo
