import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'

const FormsSizesDemo = () => {
  const code = `import Stack from 'react-bootstrap/Stack'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'

export default function FormsSizesDemo() {
  return (
    <Stack direction="horizontal" gap={4} className="flex-wrap flex-sm-nowrap">
      {/* Text inputs */}
      <Stack gap={3} className="w-100">
        <FormControl type="text" placeholder="Rounded input" />
        <FormControl type="text" className="rounded-pill" placeholder="Pill input" />
        <FormControl type="text" className="rounded-0" placeholder="Square input" />
      </Stack>

      {/* Selects */}
      <Stack gap={3} className="w-100">
        <FormSelect defaultValue="" aria-label="Rounded select">
          <option value="" disabled>Choose option...</option>
          <option value="1">Option item 1</option>
          <option value="2">Option item 2</option>
          <option value="3">Option item 3</option>
        </FormSelect>
        <FormSelect defaultValue="" aria-label="Pill select">
          <option value="" disabled>Choose option...</option>
          <option value="1">Option item 1</option>
          <option value="2">Option item 2</option>
          <option value="3">Option item 3</option>
        </FormSelect>
        <FormSelect defaultValue="" aria-label="RounSquareded select">
          <option value="" disabled>Choose option...</option>
          <option value="1">Option item 1</option>
          <option value="2">Option item 2</option>
          <option value="3">Option item 3</option>
        </FormSelect>
      </Stack>
    </Stack>
  )
}`

  return (
    <section id="forms-sizes" className="docs-section pb-sm-2 mb-5">
      <h4>Sizes</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={4} className="flex-wrap flex-sm-nowrap">
          <Stack gap={3} className="w-100" style={{ maxWidth: 400 }}>
            <div>
              <FormLabel htmlFor="input-lg">Large input</FormLabel>
              <FormControl type="text" id="input-lg" size="lg" placeholder="Large input placeholder" />
            </div>
            <div>
              <FormLabel htmlFor="input-md">Normal input</FormLabel>
              <FormControl type="text" id="input-md" placeholder="Normal input placeholder" />
            </div>
            <div>
              <FormLabel htmlFor="input-sm">Small input</FormLabel>
              <FormControl type="text" id="input-sm" size="sm" placeholder="Small input placeholder" />
            </div>
          </Stack>
          <Stack gap={3} className="w-100" style={{ maxWidth: 400 }}>
            <div>
              <FormLabel htmlFor="select-lg">Large select</FormLabel>
              <FormSelect id="select-lg" defaultValue="" size="lg">
                <option value="" disabled>
                  Choose option...
                </option>
                <option value="1">Option item 1</option>
                <option value="2">Option item 2</option>
                <option value="3">Option item 3</option>
              </FormSelect>
            </div>
            <div>
              <FormLabel htmlFor="select-md">Normal select</FormLabel>
              <FormSelect id="select-md" defaultValue="">
                <option value="" disabled>
                  Choose option...
                </option>
                <option value="1">Option item 1</option>
                <option value="2">Option item 2</option>
                <option value="3">Option item 3</option>
              </FormSelect>
            </div>
            <div>
              <FormLabel htmlFor="select-sm">Small select</FormLabel>
              <FormSelect id="select-sm" defaultValue="" size="sm">
                <option value="" disabled>
                  Choose option...
                </option>
                <option value="1">Option item 1</option>
                <option value="2">Option item 2</option>
                <option value="3">Option item 3</option>
              </FormSelect>
            </div>
          </Stack>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default FormsSizesDemo
