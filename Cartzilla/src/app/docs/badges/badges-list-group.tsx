import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const BadgesListGroupDemo = () => {
  const code = `import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export default function BadgesListGroupDemo() {
  return (
    <ListGroup>
      <ListGroupItem action href="#link1" className="d-flex justify-content-between align-items-center">
        Messages
        <Badge bg="success">14</Badge>
      </ListGroupItem>
      <ListGroupItem action href="#link2" className="d-flex justify-content-between align-items-center">
        Orders
        <Badge bg="warning">2</Badge>
      </ListGroupItem>
      <ListGroupItem action href="#link3" className="d-flex justify-content-between align-items-center">
        Favourites
        <Badge bg="danger">6</Badge>
      </ListGroupItem>
    </ListGroup>
  )
}`

  return (
    <section id="badges-list-group" className="docs-section">
      <h4>Inside list group</h4>
      <DocsComponentDemo code={code}>
        <ListGroup style={{ maxWidth: 300 }}>
          <ListGroupItem action href="#link1" className="d-flex justify-content-between align-items-center">
            Messages
            <Badge bg="success">14</Badge>
          </ListGroupItem>
          <ListGroupItem action href="#link2" className="d-flex justify-content-between align-items-center">
            Orders
            <Badge bg="warning">2</Badge>
          </ListGroupItem>
          <ListGroupItem action href="#link3" className="d-flex justify-content-between align-items-center">
            Favourites
            <Badge bg="danger">6</Badge>
          </ListGroupItem>
        </ListGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default BadgesListGroupDemo
