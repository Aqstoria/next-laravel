import DocsComponentDemo from '@/components/docs/docs-component-demo'
import InputGroup from 'react-bootstrap/InputGroup'
import InputGroupText from 'react-bootstrap/InputGroupText'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const InputGroupShapesDemo = () => {
  const code = `import InputGroup from 'react-bootstrap/InputGroup'
import InputGroupText from 'react-bootstrap/InputGroupText'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

export default function InputGroupShapesDemo() {
  return (
    <Stack direction="horizontal" gap={4} className="flex-wrap flex-sm-nowrap">
      <Stack gap={3} className="w-100">

        {/* Rounded (default) input group with icon addon on the left */}
        <InputGroup>
          <InputGroupText id="addon-icon-rounded">
            <i className="ci-user"/>
          </InputGroupText>
          <FormControl
            placeholder="Rounded (default)"
            aria-label="Rounded input group with icon addon"
            aria-describedby="addon-icon-rounded"
          />
        </InputGroup>

        {/* Pill input group with icon addon on the left */}
        <InputGroup>
          <InputGroupText className="rounded-pill rounded-end-0" id="addon-icon-pill">
            <i className="ci-user"/>
          </InputGroupText>
          <FormControl
            className="rounded-pill rounded-start-0"
            placeholder="Pill shape"
            aria-label="Pill input group with icon addon"
            aria-describedby="addon-icon-pill"
          />
        </InputGroup>

        {/* Square input group with icon addon on the left */}
        <InputGroup>
          <InputGroupText className="rounded-0" id="addon-icon-square">
            <i className="ci-user"/>
          </InputGroupText>
          <FormControl
            className="rounded-0"
            placeholder="Square shape"
            aria-label="Square input group with icon addon"
            aria-describedby="addon-icon-square"
          />
        </InputGroup>

      </Stack>
      <Stack gap={3} className="w-100">

        {/* Rounded (default) input group with button addon on the right */}
        <InputGroup>
          <FormControl
            placeholder="Rounded (default)"
            aria-label="Rounded input group with button addon"
            aria-describedby="addon-button-rounded"
          />
          <Button variant="outline-dark" id="addon-button-rounded">Button</Button>
        </InputGroup>

        {/* Pill input group with button addon on the right */}
        <InputGroup>
          <FormControl
            className="rounded-pill rounded-end-0"
            placeholder="Pill shape"
            aria-label="Pill input group with button addon"
            aria-describedby="addon-button-pill"
          />
          <Button variant="outline-dark" className="rounded-pill rounded-start-0" id="addon-button-pill">
            Button
          </Button>
        </InputGroup>

        {/* Square input group with button addon on the right */}
        <InputGroup>
          <FormControl
            className="rounded-0"
            placeholder="Square shape"
            aria-label="Square input group with button addon"
            aria-describedby="addon-button-square"
          />
          <Button variant="outline-dark rounded-0" id="addon-button-square">
            Button
          </Button>
        </InputGroup>
      </Stack>
    </Stack>
  )
}`

  return (
    <section id="input-group-shapes" className="docs-section pb-sm-2 mb-5">
      <h4>Shapes</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={4} className="flex-wrap flex-sm-nowrap">
          <Stack gap={3} className="w-100" style={{ maxWidth: 400 }}>
            <InputGroup>
              <InputGroupText id="addon-icon-rounded">
                <i className="ci-user" />
              </InputGroupText>
              <FormControl
                placeholder="Rounded (default)"
                aria-label="Rounded input group with icon addon"
                aria-describedby="addon-icon-rounded"
              />
            </InputGroup>
            <InputGroup>
              <InputGroupText className="rounded-pill rounded-end-0" id="addon-icon-pill">
                <i className="ci-user" />
              </InputGroupText>
              <FormControl
                className="rounded-pill rounded-start-0"
                placeholder="Pill shape"
                aria-label="Pill input group with icon addon"
                aria-describedby="addon-icon-pill"
              />
            </InputGroup>
            <InputGroup>
              <InputGroupText className="rounded-0" id="addon-icon-square">
                <i className="ci-user" />
              </InputGroupText>
              <FormControl
                className="rounded-0"
                placeholder="Square shape"
                aria-label="Square input group with icon addon"
                aria-describedby="addon-icon-square"
              />
            </InputGroup>
          </Stack>
          <Stack gap={3} className="w-100" style={{ maxWidth: 400 }}>
            <InputGroup>
              <FormControl
                placeholder="Rounded (default)"
                aria-label="Rounded input group with button addon"
                aria-describedby="addon-button-rounded"
              />
              <Button variant="outline-dark" id="addon-button-rounded">
                Button
              </Button>
            </InputGroup>
            <InputGroup>
              <FormControl
                className="rounded-pill rounded-end-0"
                placeholder="Pill shape"
                aria-label="Pill input group with button addon"
                aria-describedby="addon-button-pill"
              />
              <Button variant="outline-dark" className="rounded-pill rounded-start-0" id="addon-button-pill">
                Button
              </Button>
            </InputGroup>
            <InputGroup>
              <FormControl
                className="rounded-0"
                placeholder="Square shape"
                aria-label="Square input group with button addon"
                aria-describedby="addon-button-square"
              />
              <Button variant="outline-dark rounded-0" id="addon-button-square">
                Button
              </Button>
            </InputGroup>
          </Stack>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default InputGroupShapesDemo
