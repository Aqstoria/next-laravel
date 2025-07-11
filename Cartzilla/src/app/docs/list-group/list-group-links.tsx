'use client'

import Link from 'next/link'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const ListGroupLinksDemo = () => {
  const code = `'use client'

import Link from 'next/link'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export default function ListGroupLinksDemo() {
  return (
    <ListGroup defaultActiveKey="#link2" style={{ maxWidth: 300 }}>
      <ListGroupItem action href="#link1">
        A first link item
      </ListGroupItem>
      <ListGroupItem action href="#link2">
        A second link item
      </ListGroupItem>
      <ListGroupItem action as={Link} href="#link3">
        Next.js link item
      </ListGroupItem>
      <ListGroupItem action href="#link4" disabled>
        A disabled link item
      </ListGroupItem>
      <ListGroupItem action onClick={() => alert('You clicked the button ListGroupItem!')}>
        This one is a button
      </ListGroupItem>
    </ListGroup>
  )
}`

  return (
    <section id="list-group-links" className="docs-section pb-sm-2 mb-5">
      <h4>Links or buttons</h4>
      <DocsComponentDemo code={code}>
        <ListGroup defaultActiveKey="#link2" className="d-inline-flex w-100 mb-3 me-4" style={{ maxWidth: 300 }}>
          <ListGroupItem action href="#link1">
            A first link item
          </ListGroupItem>
          <ListGroupItem action href="#link2">
            A second link item
          </ListGroupItem>
          <ListGroupItem action as={Link} href="#link3">
            Next.js link item
          </ListGroupItem>
          <ListGroupItem action href="#link4" disabled>
            A disabled link item
          </ListGroupItem>
          <ListGroupItem action onClick={() => alert('You clicked the button ListGroupItem!')}>
            This one is a button
          </ListGroupItem>
        </ListGroup>
        <ListGroup
          variant="borderless"
          defaultActiveKey="#link2"
          className="d-inline-flex w-100 mb-1"
          style={{ maxWidth: 300 }}
        >
          <ListGroupItem action href="#link1">
            A first link item
          </ListGroupItem>
          <ListGroupItem action href="#link2">
            A second link item
          </ListGroupItem>
          <ListGroupItem action as={Link} href="#link3">
            Next.js link item
          </ListGroupItem>
          <ListGroupItem action href="#link4" disabled>
            A disabled link item
          </ListGroupItem>
          <ListGroupItem action onClick={() => alert('You clicked the button ListGroupItem!')}>
            This one is a button
          </ListGroupItem>
        </ListGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default ListGroupLinksDemo
