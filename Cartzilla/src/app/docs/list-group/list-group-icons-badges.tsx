import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Badge from 'react-bootstrap/Badge'

const ListGroupIconsBadgesDemo = () => {
  const code = `import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export default function ListGroupIconsBadgesDemo() {
  return (
    <ListGroup style={{ maxWidth: 300 }}>
      <ListGroupItem action className="d-flex align-items-center">
        <i className="ci-message-circle fs-base opacity-75 me-2"/>
        Messages
        <Badge bg="info" pill className="ms-auto">
          5
        </Badge>
      </ListGroupItem>
      <ListGroupItem action className="d-flex align-items-center">
        <i className="ci-shopping-bag fs-base opacity-75 me-2"/>
        Orders
        <Badge bg="warning" pill className="ms-auto">
          3
        </Badge>
      </ListGroupItem>
      <ListGroupItem action className="d-flex align-items-center">
        <i className="ci-bell fs-base opacity-75 me-2"/>
        Notifications
        <Badge bg="success" pill className="ms-auto">
          7
        </Badge>
      </ListGroupItem>
      <ListGroupItem action className="d-flex align-items-center">
        <i className="ci-heart fs-base opacity-75 me-2"/>
        Favorites
        <Badge bg="danger" pill className="ms-auto">
          2
        </Badge>
      </ListGroupItem>
    </ListGroup>
  )
}`

  return (
    <section id="list-group-icons" className="docs-section pb-sm-2 mb-5">
      <h4>With icons and badges</h4>
      <DocsComponentDemo code={code}>
        <ListGroup style={{ maxWidth: 300 }}>
          <ListGroupItem action className="d-flex align-items-center">
            <i className="ci-message-circle fs-base opacity-75 me-2" />
            Messages
            <Badge bg="info" pill className="ms-auto">
              5
            </Badge>
          </ListGroupItem>
          <ListGroupItem action className="d-flex align-items-center">
            <i className="ci-shopping-bag fs-base opacity-75 me-2" />
            Orders
            <Badge bg="warning" pill className="ms-auto">
              3
            </Badge>
          </ListGroupItem>
          <ListGroupItem action className="d-flex align-items-center">
            <i className="ci-bell fs-base opacity-75 me-2" />
            Notifications
            <Badge bg="success" pill className="ms-auto">
              7
            </Badge>
          </ListGroupItem>
          <ListGroupItem action className="d-flex align-items-center">
            <i className="ci-heart fs-base opacity-75 me-2" />
            Favorites
            <Badge bg="danger" pill className="ms-auto">
              2
            </Badge>
          </ListGroupItem>
        </ListGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default ListGroupIconsBadgesDemo
