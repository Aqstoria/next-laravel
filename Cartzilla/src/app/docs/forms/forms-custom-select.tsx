import Link from 'next/link'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormLabel from 'react-bootstrap/FormLabel'
import SelectBox from '@/components/forms/select-box'

const FormsCustomSelectDemo = () => {
  const code = `import FloatingLabel from 'react-bootstrap/FloatingLabel'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'

export default function FormsCustomSelectDemo() {
  return (
    <>
      {/* Basic example of custom select */}
      <FormLabel>Basic example</FormLabel>
      <SelectBox
        choices={[
          { value: 'Argentina', label: 'Argentina' },
          { value: 'Belgium', label: 'Belgium' },
          { value: 'Denmark', label: 'Denmark' },
          { value: 'France', label: 'France' },
          { value: 'Germany', label: 'Germany' },
          { value: 'Japan', label: 'Japan' },
          { value: 'Switzerland', label: 'Switzerland' },
        ]}
        placeholder="Select country..."
        className="mb-3"
        aria-label="Basic select example"
      />

      {/* Added search functionality */}
      <FormLabel>Search example</FormLabel>
      <SelectBox
        choices={[
          { value: 'Argentina', label: 'Argentina' },
          { value: 'Belgium', label: 'Belgium' },
          { value: 'Denmark', label: 'Denmark' },
          { value: 'France', label: 'France' },
          { value: 'Germany', label: 'Germany' },
          { value: 'Japan', label: 'Japan' },
          { value: 'Switzerland', label: 'Switzerland' },
          { value: 'United Kingdom', label: 'United Kingdom' },
          { value: 'United States', label: 'United States' },
        ]}
        searchEnabled
        placeholder="Select country..."
        aria-label="Select with search"
      />
    </>
  )
}`

  return (
    <section id="forms-custom-select" className="docs-section pb-sm-2 mb-5">
      <h4 className="mb-2">Custom select</h4>
      <p className="fs-sm">
        <span className="opacity-75">Learn more about this component in</span>{' '}
        <Link href="./select-box" className="fw-medium">
          Select box
        </Link>{' '}
        <span className="opacity-75">section.</span>
      </p>
      <DocsComponentDemo code={code}>
        <FormLabel>Basic example</FormLabel>
        <SelectBox
          choices={[
            { value: 'Argentina', label: 'Argentina' },
            { value: 'Belgium', label: 'Belgium' },
            { value: 'Denmark', label: 'Denmark' },
            { value: 'France', label: 'France' },
            { value: 'Germany', label: 'Germany' },
            { value: 'Japan', label: 'Japan' },
            { value: 'Switzerland', label: 'Switzerland' },
          ]}
          placeholder="Select country..."
          className="mb-3"
          aria-label="Basic select example"
          style={{ maxWidth: 400 }}
        />
        <FormLabel>Search example</FormLabel>
        <SelectBox
          choices={[
            { value: 'Argentina', label: 'Argentina' },
            { value: 'Belgium', label: 'Belgium' },
            { value: 'Denmark', label: 'Denmark' },
            { value: 'France', label: 'France' },
            { value: 'Germany', label: 'Germany' },
            { value: 'Japan', label: 'Japan' },
            { value: 'Switzerland', label: 'Switzerland' },
            { value: 'United Kingdom', label: 'United Kingdom' },
            { value: 'United States', label: 'United States' },
          ]}
          searchEnabled
          placeholder="Select country..."
          aria-label="Select with search"
          style={{ maxWidth: 400 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default FormsCustomSelectDemo
