import DocsComponentDemo from '@/components/docs/docs-component-demo'
import SelectBox from '@/components/forms/select-box'

const SelectBoxTagsInputDemo = () => {
  const code = `import SelectBox from '@/components/forms/select-box'

export default function SelectBoxTagsInputDemo() {
  return (
    <>
      <SelectBox
        type="text"
        defaultValue="tag-1, tag-2"
        placeholder="Enter something"
        className="mb-4"
        aria-label="Tags input example"
      />

      {/* Disbaled input */}
      <SelectBox
        type="text"
        defaultValue="tag-1, tag-2"
        placeholder="Disabled input"
        aria-label="Disabled tags input"
        disabled
      />
    </>
  )
}`

  return (
    <section id="select-tags-input" className="docs-section pb-sm-2 mb-5">
      <h4>Tags input</h4>
      <DocsComponentDemo code={code}>
        <SelectBox
          type="text"
          defaultValue="tag-1, tag-2"
          placeholder="Enter something"
          className="mb-4"
          aria-label="Tags input example"
          style={{ maxWidth: 500 }}
        />
        <SelectBox
          type="text"
          defaultValue="tag-1, tag-2"
          placeholder="Disabled input"
          aria-label="Disabled tags input"
          style={{ maxWidth: 500 }}
          disabled
        />
      </DocsComponentDemo>
    </section>
  )
}

export default SelectBoxTagsInputDemo
