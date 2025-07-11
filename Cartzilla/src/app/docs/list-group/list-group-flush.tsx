import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const ListGroupFlushDemo = () => {
  const code = `import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export default function ListGroupFlushDemo() {
  return (
    <ListGroup variant="flush" style={{ maxWidth: 300 }}>
      <ListGroupItem>A first item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
      <ListGroupItem>A forth item</ListGroupItem>
      <ListGroupItem>And a fifth one</ListGroupItem>
    </ListGroup>
  )
}`

  return (
    <section id="list-group-flush" className="docs-section pb-sm-2 mb-5">
      <h4>Flush</h4>
      <DocsComponentDemo code={code}>
        <ListGroup variant="flush" style={{ maxWidth: 300 }}>
          <ListGroupItem>A first item</ListGroupItem>
          <ListGroupItem>A second item</ListGroupItem>
          <ListGroupItem>A third item</ListGroupItem>
          <ListGroupItem>A forth item</ListGroupItem>
          <ListGroupItem>And a fifth one</ListGroupItem>
        </ListGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default ListGroupFlushDemo
