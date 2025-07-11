import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormLabel from 'react-bootstrap/FormLabel'
import PasswordInput from '@/components/forms/password-input'

const FormsPasswordToggleInputDemo = () => {
  const code = `import FormLabel from 'react-bootstrap/FormLabel'
import PasswordInput from '@/components/forms/password-input'

export default function FormsPasswordToggleInputDemo() {
  return (
    <>
      <FormLabel htmlFor="pass-visibility">Password</FormLabel>
      <PasswordInput id="pass-visibility" defaultValue="hidden@password" />
    </>
  )
}`

  return (
    <section id="forms-password-toggle" className="docs-section pb-sm-2 mb-5">
      <h4>Password visibility toggle</h4>
      <DocsComponentDemo code={code}>
        <FormLabel htmlFor="pass-visibility">Password</FormLabel>
        <PasswordInput id="pass-visibility" defaultValue="hidden@password" style={{ maxWidth: 400 }} />
      </DocsComponentDemo>
    </section>
  )
}

export default FormsPasswordToggleInputDemo
