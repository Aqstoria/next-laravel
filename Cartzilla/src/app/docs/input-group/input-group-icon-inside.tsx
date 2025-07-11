import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormControl from 'react-bootstrap/FormControl'

const InputGroupIconInsideDemo = () => {
  const code = `import FormControl from 'react-bootstrap/FormControl'

export default function InputGroupIconInsideDemo() {
  return (
    <>
      {/* Icon on the left */}
      <div className="position-relative mb-3">
        <i className="ci-lock position-absolute top-50 start-0 translate-middle-y ms-3"/>
        <FormControl type="password" className="form-icon-start" placeholder="Password" aria-label="Password" />
      </div>

      {/* Icon on the right */}
      <div className="position-relative mb-3">
        <FormControl type="search" className="form-icon-end" placeholder="Search" aria-label="Search" />
        <i className="ci-search position-absolute top-50 end-0 translate-middle-y me-3"/>
      </div>

      {/* Icons on both sides */}
      <div className="position-relative">
        <i className="ci-globe position-absolute top-50 start-0 translate-middle-y ms-3"/>
        <FormControl type="url" className="form-icon-start form-icon-end" placeholder="URL" aria-label="URL" />
        <i className="ci-external-link position-absolute top-50 end-0 translate-middle-y me-3"/>
      </div>
    </>
  )
}`

  return (
    <section id="input-group-icon" className="docs-section pb-sm-2 mb-5">
      <h4>Icon inside input</h4>
      <DocsComponentDemo code={code}>
        <div className="position-relative mb-3" style={{ maxWidth: 400 }}>
          <i className="ci-lock position-absolute top-50 start-0 translate-middle-y ms-3" />
          <FormControl type="password" className="form-icon-start" placeholder="Password" aria-label="Password" />
        </div>
        <div className="position-relative mb-3" style={{ maxWidth: 400 }}>
          <FormControl type="search" className="form-icon-end" placeholder="Search" aria-label="Search" />
          <i className="ci-search position-absolute top-50 end-0 translate-middle-y me-3" />
        </div>
        <div className="position-relative" style={{ maxWidth: 400 }}>
          <i className="ci-globe position-absolute top-50 start-0 translate-middle-y ms-3" />
          <FormControl type="url" className="form-icon-start form-icon-end" placeholder="URL" aria-label="URL" />
          <i className="ci-external-link position-absolute top-50 end-0 translate-middle-y me-3" />
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default InputGroupIconInsideDemo
