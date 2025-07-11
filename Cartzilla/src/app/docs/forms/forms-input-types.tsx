import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'
import FormRange from 'react-bootstrap/FormRange'

const FormsInputTypesDemo = () => {
  const code = `import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'
import FormRange from 'react-bootstrap/FormRange'

export default function FormsInputTypesDemo() {
  return (
    <>
      {/* Text input */}
      <div className="mb-3">
        <FormLabel htmlFor="text-input">Text</FormLabel>
        <FormControl type="text" id="text-input" defaultValue="Artisanal kale" />
      </div>

      {/* Search input */}
      <div className="mb-3">
        <FormLabel htmlFor="search-input">Search</FormLabel>
        <FormControl type="search" id="search-input" defaultValue="How do I shoot web" />
      </div>

      {/* Email input */}
      <div className="mb-3">
        <FormLabel htmlFor="email-input">Email</FormLabel>
        <FormControl type="email" id="email-input" defaultValue="email@example.com" />
      </div>

      {/* URL input */}
      <div className="mb-3">
        <FormLabel htmlFor="url-input">URL</FormLabel>
        <FormControl type="url" id="url-input" defaultValue="https://getbootstrap.com" />
      </div>

      {/* Phone input */}
      <div className="mb-3">
        <FormLabel htmlFor="tel-input">Phone</FormLabel>
        <FormControl type="tel" id="tel-input" defaultValue="1-(770)-334-2518" />
      </div>

      {/* Password input */}
      <div className="mb-3">
        <FormLabel htmlFor="pass-input">Password</FormLabel>
        <FormControl type="password" id="pass-input" defaultValue="mypasswordexample" />
      </div>

      {/* Textarea */}
      <div className="mb-3">
        <FormLabel htmlFor="textarea-input">Textarea</FormLabel>
        <FormControl as="textarea" id="textarea-input" rows={5} defaultValue="Hello World!" />
      </div>

      {/* Select */}
      <div className="mb-3">
        <FormLabel htmlFor="select-input">Select</FormLabel>
        <FormSelect id="select-input" defaultValue="" aria-label="Default select example">
          <option value="" disabled>Choose option...</option>
          <option value="1">Option item 1</option>
          <option value="2">Option item 2</option>
          <option value="3">Option item 3</option>
        </FormSelect>
      </div>

      {/* Multiselect */}
      <div className="mb-3">
        <FormLabel htmlFor="multiselect-input">Multiselect</FormLabel>
        <FormSelect id="multiselect-input" multiple defaultValue={['1']} aria-label="Multiple select example">
          <option value="1">Option item 1</option>
          <option value="2">Option item 2</option>
          <option value="3">Option item 3</option>
          <option value="4">Option item 4</option>
          <option value="5">Option item 5</option>
          <option value="6">Option item 6</option>
        </FormSelect>
      </div>

      {/* File input */}
      <div className="mb-3">
        <FormLabel htmlFor="file-input">File</FormLabel>
        <FormControl type="file" id="file-input" />
      </div>

      {/* Number input */}
      <div className="mb-3">
        <FormLabel htmlFor="number-input">Number</FormLabel>
        <FormControl type="number" id="number-input" defaultValue={37} />
      </div>

      {/* Datalist */}
      <div className="mb-3">
        <FormLabel htmlFor="datalist-input">Datalist</FormLabel>
        <FormControl type="text" list="datalist-options" id="datalist-input" placeholder="Type to search..." />
        <datalist id="datalist-options">
          <option value="San Francisco"></option>
          <option value="New York"></option>
          <option value="Seattle"></option>
          <option value="Los Angeles"></option>
          <option value="Chicago"></option>
        </datalist>
      </div>

      {/* Range input */}
      <div className="mb-3">
        <FormLabel htmlFor="range-input">Range</FormLabel>
        <FormRange />
      </div>

      {/* Color input */}
      <div className="mb-3">
        <FormLabel htmlFor="color-input">Color</FormLabel>
        <FormControl type="color" className="form-control-color" id="color-input" defaultValue="#ffa14a" />
      </div>
    </>
  )
}`

  return (
    <section id="forms-types" className="docs-section pb-sm-2 mb-5">
      <h4>Supported input types</h4>
      <DocsComponentDemo code={code}>
        <Row className="align-items-center mt-n3 mt-md-0 mb-2 mb-md-3">
          <Col as="label" md={2} htmlFor="text-input" className="col-form-label">
            Text
          </Col>
          <Col md={10}>
            <FormControl type="text" id="text-input" defaultValue="Artisanal kale" />
          </Col>
        </Row>
        <Row className="align-items-center mb-2 mb-md-3">
          <Col as="label" md={2} htmlFor="search-input" className="col-form-label">
            Search
          </Col>
          <Col md={10}>
            <FormControl type="search" id="search-input" defaultValue="How do I shoot web" />
          </Col>
        </Row>
        <Row className="align-items-center mb-2 mb-md-3">
          <Col as="label" md={2} htmlFor="email-input" className="col-form-label">
            Email
          </Col>
          <Col md={10}>
            <FormControl type="email" id="email-input" defaultValue="email@example.com" />
          </Col>
        </Row>
        <Row className="align-items-center mb-2 mb-md-3">
          <Col as="label" md={2} htmlFor="url-input" className="col-form-label">
            URL
          </Col>
          <Col md={10}>
            <FormControl type="url" id="url-input" defaultValue="https://getbootstrap.com" />
          </Col>
        </Row>
        <Row className="align-items-center mb-2 mb-md-3">
          <Col as="label" md={2} htmlFor="tel-input" className="col-form-label">
            Phone
          </Col>
          <Col md={10}>
            <FormControl type="tel" id="tel-input" defaultValue="1-(770)-334-2518" />
          </Col>
        </Row>
        <Row className="align-items-center mb-2 mb-md-3">
          <Col as="label" md={2} htmlFor="pass-input" className="col-form-label">
            Password
          </Col>
          <Col md={10}>
            <FormControl type="password" id="pass-input" defaultValue="mypasswordexample" />
          </Col>
        </Row>
        <Row className="mb-2 mb-md-3">
          <Col as="label" md={2} htmlFor="textarea-input" className="col-form-label">
            Textarea
          </Col>
          <Col md={10}>
            <FormControl as="textarea" id="textarea-input" rows={5} defaultValue="Hello World!" />
          </Col>
        </Row>
        <Row className="align-items-center mb-2 mb-md-3">
          <Col as="label" md={2} htmlFor="select-input" className="col-form-label">
            Select
          </Col>
          <Col md={10}>
            <FormSelect id="select-input" defaultValue="" aria-label="Default select example">
              <option value="" disabled>
                Choose option...
              </option>
              <option value="1">Option item 1</option>
              <option value="2">Option item 2</option>
              <option value="3">Option item 3</option>
            </FormSelect>
          </Col>
        </Row>
        <Row className="align-items-center mb-2 mb-md-3">
          <Col as="label" md={2} htmlFor="multiselect-input" className="col-form-label">
            Multiselect
          </Col>
          <Col md={10}>
            <FormSelect id="multiselect-input" multiple defaultValue={['1']} aria-label="Multiple select example">
              <option value="1">Option item 1</option>
              <option value="2">Option item 2</option>
              <option value="3">Option item 3</option>
              <option value="4">Option item 4</option>
              <option value="5">Option item 5</option>
              <option value="6">Option item 6</option>
            </FormSelect>
          </Col>
        </Row>
        <Row className="align-items-center mb-2 mb-md-3">
          <Col as="label" md={2} htmlFor="file-input" className="col-form-label">
            File
          </Col>
          <Col md={10}>
            <FormControl type="file" id="file-input" />
          </Col>
        </Row>
        <Row className="align-items-center mb-2 mb-md-3">
          <Col as="label" md={2} htmlFor="number-input" className="col-form-label">
            Number
          </Col>
          <Col md={10}>
            <FormControl type="number" id="number-input" defaultValue={37} />
          </Col>
        </Row>
        <Row className="align-items-center mb-2 mb-md-3">
          <Col as="label" md={2} htmlFor="datalist-input" className="col-form-label">
            Datalist
          </Col>
          <Col md={10}>
            <FormControl type="text" list="datalist-options" id="datalist-input" placeholder="Type to search..." />
            <datalist id="datalist-options">
              <option value="San Francisco"></option>
              <option value="New York"></option>
              <option value="Seattle"></option>
              <option value="Los Angeles"></option>
              <option value="Chicago"></option>
            </datalist>
          </Col>
        </Row>
        <Row className="align-items-center mb-2 mb-md-3">
          <Col as="label" md={2} className="col-form-label">
            Range
          </Col>
          <Col md={10}>
            <FormRange />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col as="label" md={2} htmlFor="color-input" className="col-form-label">
            Color
          </Col>
          <Col md={10}>
            <FormControl type="color" className="form-control-color" id="color-input" defaultValue="#ffa14a" />
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default FormsInputTypesDemo
