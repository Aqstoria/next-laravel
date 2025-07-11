import DocsComponentDemo from '@/components/docs/docs-component-demo'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'

const DropdownsFormsDemo = () => {
  const code = `import DropdownMenu from 'react-bootstrap/DropdownMenu'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'

export default function DropdownsFormsDemo() {
  return (
    <DropdownMenu style={{ width: '19rem' }}>
      <form className="p-3" autoComplete="off">
        <div className="mb-3">
          <FormLabel htmlFor="exampleDropdownFormEmail">Email address</FormLabel>
          <FormControl type="email" id="exampleDropdownFormEmail" placeholder="email@example.com" required />
        </div>
        <div className="mb-3">
          <FormLabel htmlFor="exampleDropdownFormPassword">Password</FormLabel>
          <FormControl type="password" id="exampleDropdownFormPassword" placeholder="Password" required />
        </div>
        <FormCheck type="checkbox" id="dropdownCheck" label="Remember me" className="mb-3" />
        <Button type="submit">Sign In</Button>
      </form>
    </DropdownMenu>
  )
}`

  return (
    <section id="dropdowns-forms" className="docs-section pb-sm-2 mb-5">
      <h4>Forms inside dropdown</h4>
      <DocsComponentDemo code={code}>
        <DropdownMenu show className="position-static" style={{ width: '19rem' }}>
          <form className="p-3" autoComplete="off">
            <div className="mb-3">
              <FormLabel htmlFor="exampleDropdownFormEmail">Email address</FormLabel>
              <FormControl type="email" id="exampleDropdownFormEmail" placeholder="email@example.com" required />
            </div>
            <div className="mb-3">
              <FormLabel htmlFor="exampleDropdownFormPassword">Password</FormLabel>
              <FormControl type="password" id="exampleDropdownFormPassword" placeholder="Password" required />
            </div>
            <FormCheck type="checkbox" id="dropdownCheck" label="Remember me" className="mb-3" />
            <Button type="submit">Sign In</Button>
          </form>
        </DropdownMenu>
      </DocsComponentDemo>
    </section>
  )
}

export default DropdownsFormsDemo
