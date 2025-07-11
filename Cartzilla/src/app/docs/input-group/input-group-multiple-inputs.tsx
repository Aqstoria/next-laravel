import DocsComponentDemo from '@/components/docs/docs-component-demo'
import InputGroup from 'react-bootstrap/InputGroup'
import InputGroupText from 'react-bootstrap/InputGroupText'
import FormControl from 'react-bootstrap/FormControl'

const InputGroupMultipleInputsDemo = () => {
  const code = `import InputGroup from 'react-bootstrap/InputGroup'
import InputGroupText from 'react-bootstrap/InputGroupText'
import FormControl from 'react-bootstrap/FormControl'

export default function InputGroupMultipleInputsDemo() {
  return (
    <>
      {/* Multiple inputs with addon on the left */}
      <InputGroup className="mb-3">
        <InputGroupText id="addon-icon">
          <i className="ci-id-card fs-base"/>
        </InputGroupText>
        <FormControl placeholder="First name" aria-label="First name" />
        <FormControl placeholder="Last name" aria-label="Last name" />
      </InputGroup>

      {/* Multiple inputs with addon on the right */}
      <InputGroup>
        <FormControl placeholder="From" aria-label="From time" />
        <FormControl placeholder="To" aria-label="To time" />
        <InputGroupText id="addon-icon">
          <i className="ci-clock fs-base"/>
        </InputGroupText>
      </InputGroup>
    </>
  )
}`

  return (
    <section id="input-group-multiple-inputs" className="docs-section pb-sm-2 mb-5">
      <h4>Multiple inputs</h4>
      <DocsComponentDemo code={code}>
        <InputGroup className="mb-3" style={{ maxWidth: 400 }}>
          <InputGroupText id="addon-icon">
            <i className="ci-id-card fs-base" />
          </InputGroupText>
          <FormControl placeholder="First name" aria-label="First name" />
          <FormControl placeholder="Last name" aria-label="Last name" />
        </InputGroup>
        <InputGroup style={{ maxWidth: 400 }}>
          <FormControl placeholder="From" aria-label="From time" />
          <FormControl placeholder="To" aria-label="To time" />
          <InputGroupText id="addon-icon">
            <i className="ci-clock fs-base" />
          </InputGroupText>
        </InputGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default InputGroupMultipleInputsDemo
