import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'

const FormsInlineDemo = () => {
  const code = `import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'

export default function FormsInlineDemo() {
  return (
    <Row as="form" sm="auto" className="g-3 align-items-center">
      <Col xs={12}>
        <FormLabel htmlFor="inline-form-input" className="visually-hidden">
          Full name
        </FormLabel>
        <FormControl type="text" id="inline-form-input" placeholder="Full name" />
      </Col>
      <Col xs={12}>
        <FormLabel htmlFor="inline-form-select" className="visually-hidden">
          Preference
        </FormLabel>
        <FormSelect id="inline-form-select" defaultValue="choose">
          <option value="choose" disabled>
            Choose...
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </FormSelect>
      </Col>
      <Col xs={12}>
        <FormCheck id="inline-form-check" label="Remember me" />
      </Col>
      <Col xs={12}>
        <Button type="submit">Submit</Button>
      </Col>
    </Row>
  )
}`

  return (
    <section id="forms-inline" className="docs-section pb-sm-2 mb-5">
      <h4>Inline form</h4>
      <DocsComponentDemo code={code}>
        <Row as="form" sm="auto" className="g-3 align-items-center">
          <Col xs={12}>
            <FormLabel htmlFor="inline-form-input" className="visually-hidden">
              Full name
            </FormLabel>
            <FormControl type="text" id="inline-form-input" placeholder="Full name" />
          </Col>
          <Col xs={12}>
            <FormLabel htmlFor="inline-form-select" className="visually-hidden">
              Preference
            </FormLabel>
            <FormSelect id="inline-form-select" defaultValue="choose">
              <option value="choose" disabled>
                Choose...
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </FormSelect>
          </Col>
          <Col xs={12}>
            <FormCheck id="inline-form-check" label="Remember me" />
          </Col>
          <Col xs={12}>
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default FormsInlineDemo
