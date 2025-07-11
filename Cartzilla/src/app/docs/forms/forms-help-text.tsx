import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import FormText from 'react-bootstrap/FormText'

const FormsHelpTextDemo = () => {
  const code = `import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import FormText from 'react-bootstrap/FormText'

export default function FormsHelpTextDemo() {
  return (
    <>
      <FormLabel htmlFor="inputPassword">Password</FormLabel>
      <FormControl
        type="password"
        id="inputPassword"
        placeholder="Your password..."
        aria-labelledby="passwordHelpBlock"
      />
      <FormText as="div" id="passwordHelpBlock">
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
        special characters, or emoji.
      </FormText>
    </>
  )
}`

  return (
    <section id="forms-help-text" className="docs-section pb-sm-2 mb-5">
      <h4>Help text</h4>
      <DocsComponentDemo code={code}>
        <div className="mb-2" style={{ maxWidth: 400 }}>
          <FormLabel htmlFor="inputPassword">Password</FormLabel>
          <FormControl
            type="password"
            id="inputPassword"
            placeholder="Your password..."
            aria-labelledby="passwordHelpBlock"
          />
          <FormText as="div" id="passwordHelpBlock">
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
            special characters, or emoji.
          </FormText>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default FormsHelpTextDemo
