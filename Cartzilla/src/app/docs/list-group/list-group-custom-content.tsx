import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const ListGroupCustomContentlDemo = () => {
  const code = `import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export default function ListGroupCustomContentlDemo() {
  return (
    <ListGroup defaultActiveKey="#link1" style={{ maxWidth: 400 }}>
      <ListGroupItem action href="#link1" className="p-3 fw-normal">
        <div className="d-flex w-100 justify-content-between">
          <h6 className="mb-1">List group item heading</h6>
          <small className="text-body-secondary">3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small className="text-body-tertiary">And some small print.</small>
      </ListGroupItem>
      <ListGroupItem action href="#link2" className="p-3 fw-normal">
        <div className="d-flex w-100 justify-content-between">
          <h6 className="mb-1">List group item heading</h6>
          <small className="text-body-secondary">3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small className="text-body-tertiary">And some small print.</small>
      </ListGroupItem>
      <ListGroupItem action href="#link3" className="p-3 fw-normal">
        <div className="d-flex w-100 justify-content-between">
          <h6 className="mb-1">List group item heading</h6>
          <small className="text-body-secondary">3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small className="text-body-tertiary">And some small print.</small>
      </ListGroupItem>
    </ListGroup>
  )
}`

  return (
    <section id="list-group-custom" className="docs-section pb-sm-2 mb-5">
      <h4>Custom content</h4>
      <DocsComponentDemo code={code}>
        <ListGroup defaultActiveKey="#link1" style={{ maxWidth: 400 }}>
          <ListGroupItem action href="#link1" className="p-3 fw-normal">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1">List group item heading</h6>
              <small className="text-body-secondary">3 days ago</small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small className="text-body-tertiary">And some small print.</small>
          </ListGroupItem>
          <ListGroupItem action href="#link2" className="p-3 fw-normal">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1">List group item heading</h6>
              <small className="text-body-secondary">3 days ago</small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small className="text-body-tertiary">And some small print.</small>
          </ListGroupItem>
          <ListGroupItem action href="#link3" className="p-3 fw-normal">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1">List group item heading</h6>
              <small className="text-body-secondary">3 days ago</small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small className="text-body-tertiary">And some small print.</small>
          </ListGroupItem>
        </ListGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default ListGroupCustomContentlDemo
