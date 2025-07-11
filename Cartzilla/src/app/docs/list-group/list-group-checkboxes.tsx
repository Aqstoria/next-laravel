import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import FormCheckInput from 'react-bootstrap/FormCheckInput'

const ListGroupCheckboxesDemo = () => {
  const code = `import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import FormCheckInput from 'react-bootstrap/FormCheckInput'

export default function ListGroupCheckboxesDemo() {
  return (
    <>
      <ListGroup style={{ maxWidth: 300 }}>
        <ListGroupItem as="label">
          <FormCheckInput type="checkbox" value="first" className="me-2" defaultChecked />
          First checkbox
        </ListGroupItem>
        <ListGroupItem as="label">
          <FormCheckInput type="checkbox" value="second" className="me-2" />
          Second checkbox
        </ListGroupItem>
        <ListGroupItem as="label">
          <FormCheckInput type="checkbox" value="third" className="me-2" />
          Third checkbox
        </ListGroupItem>
        <ListGroupItem as="label">
          <FormCheckInput type="checkbox" value="fourth" className="me-2" />
          Fourth checkbox
        </ListGroupItem>
      </ListGroup>

      <ListGroup style={{ maxWidth: 300 }}>
        <ListGroupItem as="label">
          <FormCheckInput type="radio" name="lg-radio" value="first" className="me-2" defaultChecked />
          First radio
        </ListGroupItem>
        <ListGroupItem as="label">
          <FormCheckInput type="radio" name="lg-radio" value="second" className="me-2" />
          Second radio
        </ListGroupItem>
        <ListGroupItem as="label">
          <FormCheckInput type="radio" name="lg-radio" value="third" className="me-2" />
          Third radio
        </ListGroupItem>
        <ListGroupItem as="label">
          <FormCheckInput type="radio" name="lg-radio" value="fourth" className="me-2" />
          Fourth radio
        </ListGroupItem>
      </ListGroup>
    </>
  )
}`

  return (
    <section id="list-group-checkboxes" className="docs-section pb-sm-2 mb-5">
      <h4>Checkboxes and radios</h4>
      <DocsComponentDemo code={code}>
        <ListGroup className="d-inline-flex w-100 mb-3 me-4" style={{ maxWidth: 300 }}>
          <ListGroupItem as="label">
            <FormCheckInput type="checkbox" value="first" className="me-2" defaultChecked />
            First checkbox
          </ListGroupItem>
          <ListGroupItem as="label">
            <FormCheckInput type="checkbox" value="second" className="me-2" />
            Second checkbox
          </ListGroupItem>
          <ListGroupItem as="label">
            <FormCheckInput type="checkbox" value="third" className="me-2" />
            Third checkbox
          </ListGroupItem>
          <ListGroupItem as="label">
            <FormCheckInput type="checkbox" value="fourth" className="me-2" />
            Fourth checkbox
          </ListGroupItem>
        </ListGroup>
        <ListGroup className="d-inline-flex w-100 mb-3" style={{ maxWidth: 300 }}>
          <ListGroupItem as="label">
            <FormCheckInput type="radio" name="lg-radio" value="first" className="me-2" defaultChecked />
            First radio
          </ListGroupItem>
          <ListGroupItem as="label">
            <FormCheckInput type="radio" name="lg-radio" value="second" className="me-2" />
            Second radio
          </ListGroupItem>
          <ListGroupItem as="label">
            <FormCheckInput type="radio" name="lg-radio" value="third" className="me-2" />
            Third radio
          </ListGroupItem>
          <ListGroupItem as="label">
            <FormCheckInput type="radio" name="lg-radio" value="fourth" className="me-2" />
            Fourth radio
          </ListGroupItem>
        </ListGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default ListGroupCheckboxesDemo
