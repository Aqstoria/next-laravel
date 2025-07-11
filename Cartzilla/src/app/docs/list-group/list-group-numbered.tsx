import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const ListGroupNumberedDemo = () => {
  const code = `import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export default function ListGroupNumberedDemo() {
  return (
    <ListGroup as="ol" numbered style={{ maxWidth: 300 }}>
      <ListGroupItem as="li">A list item</ListGroupItem>
      <ListGroupItem as="li">A list item</ListGroupItem>
      <ListGroupItem as="li">A list item</ListGroupItem>
      <ListGroupItem as="li">A list item</ListGroupItem>
    </ListGroup>
  )
}`

  return (
    <section id="list-group-numbered" className="docs-section pb-sm-2 mb-5">
      <h4>Numbered list group</h4>
      <DocsComponentDemo code={code}>
        <ListGroup as="ol" numbered style={{ maxWidth: 300 }}>
          <ListGroupItem as="li">A list item</ListGroupItem>
          <ListGroupItem as="li">A list item</ListGroupItem>
          <ListGroupItem as="li">A list item</ListGroupItem>
          <ListGroupItem as="li">A list item</ListGroupItem>
        </ListGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default ListGroupNumberedDemo
