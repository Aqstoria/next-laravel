import DocsComponentDemo from '@/components/docs/docs-component-demo'
import InputGroup from 'react-bootstrap/InputGroup'
import InputGroupText from 'react-bootstrap/InputGroupText'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'
import FormCheck from 'react-bootstrap/FormCheck'

const InputGroupTypesDemo = () => {
  const code = `import InputGroup from 'react-bootstrap/InputGroup'
import InputGroupText from 'react-bootstrap/InputGroupText'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'
import FormCheck from 'react-bootstrap/FormCheck'

export default function InputGroupTypesDemo() {
  return (
    <>
      {/* Icon addon + textarea */}
      <InputGroup className="mb-3">
        <InputGroupText id="addon-icon">
          <i className="ci-edit fs-base"/>
        </InputGroupText>
        <FormControl
          as="textarea"
          rows={5}
          placeholder="Type your message here..."
          aria-label="Message"
          aria-describedby="addon-icon"
        />
      </InputGroup>

      {/* Textual addon + select */}
      <InputGroup className="mb-3">
        <InputGroupText as="label" className="text-body-emphasis fw-medium" htmlFor="addon-text">
          Options
        </InputGroupText>
        <FormSelect id="addon-text">
          <option>Choose one...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </FormSelect>
      </InputGroup>

      {/* Checkbox addon + text input */}
      <InputGroup className="mb-3">
        <InputGroupText>
          <FormCheck className="mt-0" aria-label="Checkbox for following text input" />
        </InputGroupText>
        <FormControl placeholder="Text input" aria-label="Text input with checkbox" />
      </InputGroup>

      {/* Radio button addon + text input */}
      <InputGroup>
        <InputGroupText>
          <FormCheck type="radio" className="mt-0" aria-label="Radio button for following text input" />
        </InputGroupText>
        <FormControl placeholder="Text input" aria-label="Text input with radio button" />
      </InputGroup>
    </>
  )
}`

  return (
    <section id="input-group-types" className="docs-section pb-sm-2 mb-5">
      <h4>Different addon / input types</h4>
      <DocsComponentDemo code={code}>
        <InputGroup className="mb-3" style={{ maxWidth: 400 }}>
          <InputGroupText id="addon-icon">
            <i className="ci-edit fs-base" />
          </InputGroupText>
          <FormControl
            as="textarea"
            rows={5}
            placeholder="Type your message here..."
            aria-label="Message"
            aria-describedby="addon-icon"
          />
        </InputGroup>
        <InputGroup className="mb-3" style={{ maxWidth: 400 }}>
          <InputGroupText as="label" className="text-body-emphasis fw-medium" htmlFor="addon-text">
            Options
          </InputGroupText>
          <FormSelect id="addon-text">
            <option>Choose one...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </FormSelect>
        </InputGroup>
        <InputGroup className="mb-3" style={{ maxWidth: 400 }}>
          <InputGroupText>
            <FormCheck className="mt-0" aria-label="Checkbox for following text input" />
          </InputGroupText>
          <FormControl placeholder="Text input" aria-label="Text input with checkbox" />
        </InputGroup>
        <InputGroup style={{ maxWidth: 400 }}>
          <InputGroupText>
            <FormCheck type="radio" className="mt-0" aria-label="Radio button for following text input" />
          </InputGroupText>
          <FormControl placeholder="Text input" aria-label="Text input with radio button" />
        </InputGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default InputGroupTypesDemo
