import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const ListGroupColorsDemo = () => {
  const code = `import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export default function ListGroupColorsDemo() {
  return (
    <ListGroup style={{ maxWidth: 350 }}>
      <ListGroupItem>A simple default list group item</ListGroupItem>
      <ListGroupItem variant="primary">A simple primary list group item</ListGroupItem>
      <ListGroupItem variant="secondary">A simple secondary list group item</ListGroupItem>
      <ListGroupItem variant="success">A simple success list group item</ListGroupItem>
      <ListGroupItem variant="danger">A simple danger list group item</ListGroupItem>
      <ListGroupItem variant="warning">A simple warning list group item</ListGroupItem>
      <ListGroupItem variant="info">A simple info list group item</ListGroupItem>
      <ListGroupItem variant="light">A simple light list group item</ListGroupItem>
      <ListGroupItem variant="dark">A simple dark list group item</ListGroupItem>
    </ListGroup>
  )
}`

  return (
    <section id="list-group-colors" className="docs-section pb-sm-2 mb-5">
      <h4>Color variations</h4>
      <DocsComponentDemo code={code}>
        <ListGroup style={{ maxWidth: 350 }}>
          <ListGroupItem>A simple default list group item</ListGroupItem>
          <ListGroupItem variant="primary">A simple primary list group item</ListGroupItem>
          <ListGroupItem variant="secondary">A simple secondary list group item</ListGroupItem>
          <ListGroupItem variant="success">A simple success list group item</ListGroupItem>
          <ListGroupItem variant="danger">A simple danger list group item</ListGroupItem>
          <ListGroupItem variant="warning">A simple warning list group item</ListGroupItem>
          <ListGroupItem variant="info">A simple info list group item</ListGroupItem>
          <ListGroupItem variant="light">A simple light list group item</ListGroupItem>
          <ListGroupItem variant="dark">A simple dark list group item</ListGroupItem>
        </ListGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default ListGroupColorsDemo
