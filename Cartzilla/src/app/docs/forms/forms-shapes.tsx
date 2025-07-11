import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'

const FormsShapesDemo = () => {
  const code = `import Stack from 'react-bootstrap/Stack'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'

export default function FormsShapesDemo() {
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
    <section id="forms-shapes" className="docs-section pb-sm-2 mb-5">
      <h4>Shapes</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={4} className="flex-wrap flex-sm-nowrap">
          <Stack gap={3} className="w-100" style={{ maxWidth: 400 }}>
            <FormControl type="text" placeholder="Rounded input" />
            <FormControl type="text" className="rounded-pill" placeholder="Pill input" />
            <FormControl type="text" className="rounded-0" placeholder="Square input" />
          </Stack>
          <Stack gap={3} className="w-100" style={{ maxWidth: 400 }}>
            <FormSelect defaultValue="" aria-label="Rounded select">
              <option value="" disabled>
                Choose option...
              </option>
              <option value="1">Option item 1</option>
              <option value="2">Option item 2</option>
              <option value="3">Option item 3</option>
            </FormSelect>
            <FormSelect defaultValue="" aria-label="Pill select">
              <option value="" disabled>
                Choose option...
              </option>
              <option value="1">Option item 1</option>
              <option value="2">Option item 2</option>
              <option value="3">Option item 3</option>
            </FormSelect>
            <FormSelect defaultValue="" aria-label="RounSquareded select">
              <option value="" disabled>
                Choose option...
              </option>
              <option value="1">Option item 1</option>
              <option value="2">Option item 2</option>
              <option value="3">Option item 3</option>
            </FormSelect>
          </Stack>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default FormsShapesDemo
