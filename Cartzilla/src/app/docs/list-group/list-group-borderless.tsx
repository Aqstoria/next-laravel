import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const ListGroupBorderlessDemo = () => {
  const code = `import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export default function ListGroupBorderlessDemo() {
  return (
    <ListGroup variant="borderless" style={{ maxWidth: 300 }}>
      <ListGroupItem>A first item</ListGroupItem>
      <ListGroupItem active>An active item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
      <ListGroupItem disabled>A disabled item</ListGroupItem>
      <ListGroupItem>And a fifth one</ListGroupItem>
    </ListGroup>
  )
}`

  return (
    <section id="list-group-borderless" className="docs-section pb-sm-2 mb-5">
      <h4>Borderless</h4>
      <DocsComponentDemo code={code}>
        <ListGroup variant="borderless" style={{ maxWidth: 300 }}>
          <ListGroupItem>A first item</ListGroupItem>
          <ListGroupItem active>An active item</ListGroupItem>
          <ListGroupItem>A third item</ListGroupItem>
          <ListGroupItem disabled>A disabled item</ListGroupItem>
          <ListGroupItem>And a fifth one</ListGroupItem>
        </ListGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default ListGroupBorderlessDemo
