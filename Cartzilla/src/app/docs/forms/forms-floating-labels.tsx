import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'

const FormsFloatingLabelsDemo = () => {
  const code = `import FloatingLabel from 'react-bootstrap/FloatingLabel'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'

export default function FormsFloatingLabelsDemo() {
  return (
    <>
      {/* Text input */}
      <FloatingLabel controlId="fl-text" label="Your name" className="mb-3">
        <FormControl type="text" placeholder="Your name" />
      </FloatingLabel>

      {/* Select */}
      <FloatingLabel controlId="fl-select" label="Your country" className="mb-3">
        <FormSelect aria-label="Floating label select">
          <option value="Argentina">Argentina</option>
          <option value="Belgium">Belgium</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="Japan">Japan</option>
          <option value="Spain">Spain</option>
          <option value="USA">USA</option>
        </FormSelect>
      </FloatingLabel>

      {/* Textarea */}
      <FloatingLabel controlId="fl-textarea" label="Your message">
        <FormControl as="textarea" placeholder="Your message" style={{ height: 120 }} />
      </FloatingLabel>
    </>
  )
}`

  return (
    <section id="forms-floating-labels" className="docs-section pb-sm-2 mb-5">
      <h4>Floating labels</h4>
      <DocsComponentDemo code={code}>
        <div style={{ maxWidth: 400 }}>
          <FloatingLabel controlId="fl-text" label="Your name" className="mb-3">
            <FormControl type="text" placeholder="Your name" />
          </FloatingLabel>
          <FloatingLabel controlId="fl-select" label="Your country" className="mb-3">
            <FormSelect aria-label="Floating label select">
              <option value="Argentina">Argentina</option>
              <option value="Belgium">Belgium</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
              <option value="Spain">Spain</option>
              <option value="USA">USA</option>
            </FormSelect>
          </FloatingLabel>
          <FloatingLabel controlId="fl-textarea" label="Your message">
            <FormControl as="textarea" placeholder="Your message" style={{ height: 120 }} />
          </FloatingLabel>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default FormsFloatingLabelsDemo
