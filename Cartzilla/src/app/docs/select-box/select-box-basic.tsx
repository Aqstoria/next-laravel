import DocsComponentDemo from '@/components/docs/docs-component-demo'
import SelectBox from '@/components/forms/select-box'

const SelectBoxBasicDemo = () => {
  const code = `import SelectBox from '@/components/forms/select-box'

export default function SelectBoxBasicDemo() {
  return (
    <>
      <SelectBox
        choices={[
          { value: 'Emily Johnson', label: 'Emily Johnson' },
          { value: 'Michael Davis', label: 'Michael Davis' },
          { value: 'Jessica Smith', label: 'Jessica Smith' },
          { value: 'Christopher Taylor', label: 'Christopher Taylor' },
          { value: 'Olivia Anderson', label: 'Olivia Anderson' },
          { value: 'Ethan Williams', label: 'Ethan Williams' },
        ]}
        placeholder="Choose name..."
        className="mb-4"
        aria-label="Basic select example"
      />

      {/* Disbaled select */}
      <SelectBox
        choices={[
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4' },
          { value: 5, label: 'Option 5' },
        ]}
        placeholder="Disabled select"
        aria-label="Disabled select example"
        disabled
      />
    </>
  )
}`

  return (
    <section id="select-basic" className="docs-section pb-sm-2 mb-5">
      <h4>Basic select</h4>
      <DocsComponentDemo code={code}>
        <SelectBox
          choices={[
            { value: 'Emily Johnson', label: 'Emily Johnson' },
            { value: 'Michael Davis', label: 'Michael Davis' },
            { value: 'Jessica Smith', label: 'Jessica Smith' },
            { value: 'Christopher Taylor', label: 'Christopher Taylor' },
            { value: 'Olivia Anderson', label: 'Olivia Anderson' },
            { value: 'Ethan Williams', label: 'Ethan Williams' },
          ]}
          placeholder="Choose name..."
          className="mb-4"
          aria-label="Basic select example"
          style={{ maxWidth: 400 }}
        />
        <SelectBox
          choices={[
            { value: 1, label: 'Option 1' },
            { value: 2, label: 'Option 2' },
            { value: 3, label: 'Option 3' },
            { value: 4, label: 'Option 4' },
            { value: 5, label: 'Option 5' },
          ]}
          placeholder="Disabled select"
          aria-label="Disabled select example"
          style={{ maxWidth: 400 }}
          disabled
        />
      </DocsComponentDemo>
    </section>
  )
}

export default SelectBoxBasicDemo
