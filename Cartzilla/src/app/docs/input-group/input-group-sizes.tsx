import DocsComponentDemo from '@/components/docs/docs-component-demo'
import InputGroup from 'react-bootstrap/InputGroup'
import InputGroupText from 'react-bootstrap/InputGroupText'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const InputGroupSizesDemo = () => {
  const code = `import InputGroup from 'react-bootstrap/InputGroup'
import InputGroupText from 'react-bootstrap/InputGroupText'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

export default function InputGroupSizesDemo() {
  return (
    <Stack direction="horizontal" gap={4} className="flex-wrap flex-sm-nowrap">
      <Stack gap={3} className="w-100">

        {/* Large input group with icon addon on the left */}
        <InputGroup size="lg">
          <InputGroupText id="addon-icon-large">
            <i className="ci-user"/>
          </InputGroupText>
          <FormControl
            placeholder="Large input group"
            aria-label="Large input group with icon addon"
            aria-describedby="addon-icon-large"
          />
        </InputGroup>

        {/* Normal input group with icon addon on the left */}
        <InputGroup>
          <InputGroupText id="addon-icon-normal">
            <i className="ci-user"/>
          </InputGroupText>
          <FormControl
            placeholder="Normal input group"
            aria-label="Pill input group with icon addon"
            aria-describedby="addon-icon-normal"
          />
        </InputGroup>

        {/* Small input group with icon addon on the left */}
        <InputGroup size="sm">
          <InputGroupText id="addon-icon-small">
            <i className="ci-user"/>
          </InputGroupText>
          <FormControl
            placeholder="Small input group"
            aria-label="Square input group with icon addon"
            aria-describedby="addon-icon-small"
          />
        </InputGroup>

      </Stack>
      <Stack gap={3} className="w-100">

        {/* Large input group with button addon on the right */}
        <InputGroup size="lg">
          <FormControl
            placeholder="Large input group"
            aria-label="Large input group with button addon"
            aria-describedby="addon-button-large"
          />
          <Button variant="outline-dark" id="addon-button-large">
            Button
          </Button>
        </InputGroup>

        {/* Normal input group with button addon on the right */}
        <InputGroup>
          <FormControl
            placeholder="Normal input group"
            aria-label="Normal input group with button addon"
            aria-describedby="addon-button-normal"
          />
          <Button variant="outline-dark" id="addon-button-normal">
            Button
          </Button>
        </InputGroup>

        {/* Small input group with button addon on the right */}
        <InputGroup size="sm">
          <FormControl
            placeholder="Small input group"
            aria-label="Small input group with button addon"
            aria-describedby="addon-button-small"
          />
          <Button variant="outline-dark" id="addon-button-small">
            Button
          </Button>
        </InputGroup>
      </Stack>
    </Stack>
  )
}`

  return (
    <section id="input-group-sizes" className="docs-section">
      <h4>Sizes</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={4} className="flex-wrap flex-sm-nowrap">
          <Stack gap={3} className="w-100" style={{ maxWidth: 400 }}>
            <InputGroup size="lg">
              <InputGroupText id="addon-icon-large">
                <i className="ci-user" />
              </InputGroupText>
              <FormControl
                placeholder="Large input group"
                aria-label="Large input group with icon addon"
                aria-describedby="addon-icon-large"
              />
            </InputGroup>
            <InputGroup>
              <InputGroupText id="addon-icon-normal">
                <i className="ci-user" />
              </InputGroupText>
              <FormControl
                placeholder="Normal input group"
                aria-label="Pill input group with icon addon"
                aria-describedby="addon-icon-normal"
              />
            </InputGroup>
            <InputGroup size="sm">
              <InputGroupText id="addon-icon-small">
                <i className="ci-user" />
              </InputGroupText>
              <FormControl
                placeholder="Small input group"
                aria-label="Square input group with icon addon"
                aria-describedby="addon-icon-small"
              />
            </InputGroup>
          </Stack>
          <Stack gap={3} className="w-100" style={{ maxWidth: 400 }}>
            <InputGroup size="lg">
              <FormControl
                placeholder="Large input group"
                aria-label="Large input group with button addon"
                aria-describedby="addon-button-large"
              />
              <Button variant="outline-dark" id="addon-button-large">
                Button
              </Button>
            </InputGroup>
            <InputGroup>
              <FormControl
                placeholder="Normal input group"
                aria-label="Normal input group with button addon"
                aria-describedby="addon-button-normal"
              />
              <Button variant="outline-dark" id="addon-button-normal">
                Button
              </Button>
            </InputGroup>
            <InputGroup size="sm">
              <FormControl
                placeholder="Small input group"
                aria-label="Small input group with button addon"
                aria-describedby="addon-button-small"
              />
              <Button variant="outline-dark" id="addon-button-small">
                Button
              </Button>
            </InputGroup>
          </Stack>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default InputGroupSizesDemo
