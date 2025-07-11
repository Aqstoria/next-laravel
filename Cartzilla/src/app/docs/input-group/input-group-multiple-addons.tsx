import DocsComponentDemo from '@/components/docs/docs-component-demo'
import InputGroup from 'react-bootstrap/InputGroup'
import InputGroupText from 'react-bootstrap/InputGroupText'
import FormControl from 'react-bootstrap/FormControl'

const InputGroupMultipleAddonsDemo = () => {
  const code = `import InputGroup from 'react-bootstrap/InputGroup'
import InputGroupText from 'react-bootstrap/InputGroupText'
import FormControl from 'react-bootstrap/FormControl'

export default function InputGroupMultipleAddonsDemo() {
  return (
    <>
      {/* Multiple addons on the left */}
      <InputGroup className="mb-3">
        <InputGroupText>
          <i className="ci-dollar-sign"/>
        </InputGroupText>
        <InputGroupText>0.00</InputGroupText>
        <FormControl placeholder="Amount" aria-label="Dollar amount (with dot and two decimal places)" />
      </InputGroup>

      {/* Multiple addons on the right */}
      <InputGroup className="mb-3">
        <FormControl placeholder="Amount" aria-label="Dollar amount (with dot and two decimal places)" />
        <InputGroupText>
          <i className="ci-dollar-sign"/>
        </InputGroupText>
        <InputGroupText>0.00</InputGroupText>
      </InputGroup>

      {/* Multiple addons on both sides */}
      <InputGroup>
        <InputGroupText>
          <i className="ci-user"/>
        </InputGroupText>
        <InputGroupText>
          <i className="ci-credit-card"/>
        </InputGroupText>
        <FormControl placeholder="Amount" aria-label="Dollar amount (with dot and two decimal places)" />
        <InputGroupText>
          <i className="ci-dollar-sign"/>
        </InputGroupText>
        <InputGroupText>0.00</InputGroupText>
      </InputGroup>
    </>
  )
}`

  return (
    <section id="input-group-addon-multiple" className="docs-section pb-sm-2 mb-5">
      <h4>Multiple addons</h4>
      <DocsComponentDemo code={code}>
        <InputGroup className="mb-3" style={{ maxWidth: 400 }}>
          <InputGroupText>
            <i className="ci-dollar-sign" />
          </InputGroupText>
          <InputGroupText>0.00</InputGroupText>
          <FormControl placeholder="Amount" aria-label="Dollar amount (with dot and two decimal places)" />
        </InputGroup>
        <InputGroup className="mb-3" style={{ maxWidth: 400 }}>
          <FormControl placeholder="Amount" aria-label="Dollar amount (with dot and two decimal places)" />
          <InputGroupText>
            <i className="ci-dollar-sign" />
          </InputGroupText>
          <InputGroupText>0.00</InputGroupText>
        </InputGroup>
        <InputGroup style={{ maxWidth: 400 }}>
          <InputGroupText>
            <i className="ci-user" />
          </InputGroupText>
          <InputGroupText>
            <i className="ci-credit-card" />
          </InputGroupText>
          <FormControl placeholder="Amount" aria-label="Dollar amount (with dot and two decimal places)" />
          <InputGroupText>
            <i className="ci-dollar-sign" />
          </InputGroupText>
          <InputGroupText>0.00</InputGroupText>
        </InputGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default InputGroupMultipleAddonsDemo
