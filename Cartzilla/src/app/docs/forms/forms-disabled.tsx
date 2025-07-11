import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'

const FormsDisabledDemo = () => {
  const code = `import Stack from 'react-bootstrap/Stack'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'

export default function FormsDisabledDemo() {
  return (
    <Stack gap={3}>
      <FormControl type="text" defaultValue="Readonly input" readOnly />
      <FormControl type="text" plaintext className="fs-sm" defaultValue="Plain text input" readOnly />
      <FormControl type="text" defaultValue="Disabled input" disabled />
      <FormSelect defaultValue="" aria-label="Disabled select" disabled>
        <option value="" disabled>Disabled select</option>
        <option value="1">Option item 1</option>
        <option value="2">Option item 2</option>
        <option value="3">Option item 3</option>
      </FormSelect>
    </Stack>
  )
}`

  return (
    <section id="forms-disabled" className="docs-section pb-sm-2 mb-5">
      <h4>Readonly &amp; disabled</h4>
      <DocsComponentDemo code={code}>
        <Stack gap={3} style={{ maxWidth: 400 }}>
          <FormControl type="text" defaultValue="Readonly input" readOnly />
          <FormControl type="text" plaintext className="fs-sm" defaultValue="Plain text input" readOnly />
          <FormControl type="text" defaultValue="Disabled input" disabled />
          <FormSelect defaultValue="" aria-label="Disabled select" disabled>
            <option value="" disabled>
              Disabled select
            </option>
            <option value="1">Option item 1</option>
            <option value="2">Option item 2</option>
            <option value="3">Option item 3</option>
          </FormSelect>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default FormsDisabledDemo
