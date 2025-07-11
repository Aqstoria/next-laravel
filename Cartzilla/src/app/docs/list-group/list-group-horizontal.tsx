import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const ListGroupHorizontalDemo = () => {
  const code = `import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export default function ListGroupHorizontalDemo() {
  return (
    <>
      <ListGroup horizontal className="mb-3">
        <ListGroupItem>A first item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>A third item</ListGroupItem>
      </ListGroup>

      <ListGroup horizontal className="mb-3">
        <ListGroupItem className="flex-fill text-center">A first item</ListGroupItem>
        <ListGroupItem className="flex-fill text-center">A second item</ListGroupItem>
        <ListGroupItem className="flex-fill text-center">A third item</ListGroupItem>
      </ListGroup>

      <ListGroup horizontal defaultActiveKey="#link1" className="text-center mb-3">
        <ListGroupItem action href="#link1">
          A first link
        </ListGroupItem>
        <ListGroupItem action href="#link2">
          A second link
        </ListGroupItem>
        <ListGroupItem action href="#link3">
          A third link
        </ListGroupItem>
      </ListGroup>

      <ListGroup horizontal variant="borderless" defaultActiveKey="#link2" className="text-center">
        <ListGroupItem action href="#link1">
          A first link
        </ListGroupItem>
        <ListGroupItem action href="#link2">
          A second link
        </ListGroupItem>
        <ListGroupItem action href="#link3">
          A third link
        </ListGroupItem>
      </ListGroup>
    </>
  )
}`

  return (
    <section id="list-group-horizontal" className="docs-section pb-sm-2 mb-5">
      <h4>Horizontal list group</h4>
      <DocsComponentDemo code={code}>
        <ListGroup horizontal className="mb-3">
          <ListGroupItem>A first item</ListGroupItem>
          <ListGroupItem>A second item</ListGroupItem>
          <ListGroupItem>A third item</ListGroupItem>
        </ListGroup>
        <ListGroup horizontal className="mb-3">
          <ListGroupItem className="flex-fill text-center">A first item</ListGroupItem>
          <ListGroupItem className="flex-fill text-center">A second item</ListGroupItem>
          <ListGroupItem className="flex-fill text-center">A third item</ListGroupItem>
        </ListGroup>
        <ListGroup horizontal defaultActiveKey="#link1" className="text-center mb-3">
          <ListGroupItem action href="#link1">
            A first link
          </ListGroupItem>
          <ListGroupItem action href="#link2">
            A second link
          </ListGroupItem>
          <ListGroupItem action href="#link3">
            A third link
          </ListGroupItem>
        </ListGroup>
        <ListGroup horizontal variant="borderless" defaultActiveKey="#link2" className="text-center">
          <ListGroupItem action href="#link1">
            A first link
          </ListGroupItem>
          <ListGroupItem action href="#link2">
            A second link
          </ListGroupItem>
          <ListGroupItem action href="#link3">
            A third link
          </ListGroupItem>
        </ListGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default ListGroupHorizontalDemo
