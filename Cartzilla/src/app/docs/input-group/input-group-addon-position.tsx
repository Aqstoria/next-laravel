import DocsComponentDemo from '@/components/docs/docs-component-demo'
import InputGroup from 'react-bootstrap/InputGroup'
import InputGroupText from 'react-bootstrap/InputGroupText'
import FormControl from 'react-bootstrap/FormControl'

const InputGroupAddonPositionDemo = () => {
  const code = `import InputGroup from 'react-bootstrap/InputGroup'
import InputGroupText from 'react-bootstrap/InputGroupText'
import FormControl from 'react-bootstrap/FormControl'

export default function InputGroupAddonPositionDemo() {
  return (
    <>
      {/* Addon on the left */}
      <InputGroup className="mb-3">
        <InputGroupText id="addon-left">
          <i className="ci-user"/>
        </InputGroupText>
        <FormControl placeholder="Username" aria-label="Username" aria-describedby="addon-left" />
      </InputGroup>

      {/* Addon on the right */}
      <InputGroup className="mb-3">
        <FormControl
          type="email"
          placeholder="Recipient's e-mail"
          aria-label="Recipient's e-mail"
          aria-describedby="addon-right"
        />
        <InputGroupText id="addon-right">@example.com</InputGroupText>
      </InputGroup>

      {/* Addon on both sides */}
      <InputGroup>
        <InputGroupText>
          <i className="ci-dollar-sign"/>
        </InputGroupText>
        <FormControl aria-label="Amount (to the nearest dollar)" />
        <InputGroupText>.00</InputGroupText>
      </InputGroup>
    </>
  )
}`

  return (
    <section id="input-group-addon-position" className="docs-section pb-sm-2 mb-5">
      <h4>Addon position</h4>
      <DocsComponentDemo code={code}>
        <InputGroup className="mb-3" style={{ maxWidth: 400 }}>
          <InputGroupText id="addon-left">
            <i className="ci-user" />
          </InputGroupText>
          <FormControl placeholder="Username" aria-label="Username" aria-describedby="addon-left" />
        </InputGroup>
        <InputGroup className="mb-3" style={{ maxWidth: 400 }}>
          <FormControl
            type="email"
            placeholder="Recipient's e-mail"
            aria-label="Recipient's e-mail"
            aria-describedby="addon-right"
          />
          <InputGroupText id="addon-right">@example.com</InputGroupText>
        </InputGroup>
        <InputGroup style={{ maxWidth: 400 }}>
          <InputGroupText>
            <i className="ci-dollar-sign" />
          </InputGroupText>
          <FormControl aria-label="Amount (to the nearest dollar)" />
          <InputGroupText>.00</InputGroupText>
        </InputGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default InputGroupAddonPositionDemo
