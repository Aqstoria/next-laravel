import DocsComponentDemo from '@/components/docs/docs-component-demo'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import DropdownHeader from 'react-bootstrap/DropdownHeader'
import DropdownDivider from 'react-bootstrap/DropdownDivider'
import Badge from 'react-bootstrap/Badge'

const DropdownsDarkDemo = () => {
  const code = `import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import DropdownHeader from 'react-bootstrap/DropdownHeader'
import DropdownDivider from 'react-bootstrap/DropdownDivider'
import Badge from 'react-bootstrap/Badge'

export default function DropdownsDarkDemo() {
  return (
    <>
      <DropdownMenu data-bs-theme="dark">
        <DropdownItem href="#">Regular link</DropdownItem>
        <DropdownItem href="#">Another regular link</DropdownItem>
        <DropdownItem href="#" active>
          Active link
        </DropdownItem>
        <DropdownItem href="#" disabled>
          Disabled link
        </DropdownItem>
      </DropdownMenu>

      <DropdownMenu data-bs-theme="dark">
        <DropdownHeader as="h6">Dropdown header</DropdownHeader>
        <DropdownItem href="#">Action</DropdownItem>
        <DropdownItem href="#">Another action</DropdownItem>
        <DropdownDivider />
        <DropdownItem href="#">Separated link</DropdownItem>
      </DropdownMenu>

      <DropdownMenu data-bs-theme="dark">
        <DropdownItem href="#">
          <i className="ci-home opacity-75 me-2"/>
          Home
          <Badge bg="primary" pill className="ms-auto">
            2
          </Badge>
        </DropdownItem>
        <DropdownItem href="#">
          <i className="ci-user opacity-75 me-2"/>
          Profile
          <Badge bg="warning" pill className="ms-auto">
            3
          </Badge>
        </DropdownItem>
        <DropdownItem href="#">
          <i className="ci-message-square opacity-75 me-2"/>
          Messages
          <Badge bg="success" pill className="ms-auto">
            5
          </Badge>
        </DropdownItem>
        <DropdownItem href="#">
          <i className="ci-settings opacity-75 me-2"/>
          Settings
        </DropdownItem>
      </DropdownMenu>
    </>
  )
}`

  return (
    <section id="dropdowns-dark" className="docs-section pb-sm-2 mb-5">
      <h4>Dark dropdowns</h4>
      <DocsComponentDemo code={code}>
        <DropdownMenu
          show
          data-bs-theme="dark"
          className="position-static d-inline-block align-top me-4 mb-3"
          style={{ width: '12.5rem' }}
        >
          <DropdownItem href="#">Regular link</DropdownItem>
          <DropdownItem href="#">Another regular link</DropdownItem>
          <DropdownItem href="#" active>
            Active link
          </DropdownItem>
          <DropdownItem href="#" disabled>
            Disabled link
          </DropdownItem>
        </DropdownMenu>
        <DropdownMenu
          show
          data-bs-theme="dark"
          className="position-static d-inline-block align-top me-4 mb-3"
          style={{ width: '12.5rem' }}
        >
          <DropdownHeader as="h6">Dropdown header</DropdownHeader>
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Another action</DropdownItem>
          <DropdownDivider />
          <DropdownItem href="#">Separated link</DropdownItem>
        </DropdownMenu>
        <DropdownMenu
          show
          data-bs-theme="dark"
          className="position-static d-inline-block align-top mb-3"
          style={{ width: '12.5rem' }}
        >
          <DropdownItem href="#">
            <i className="ci-home opacity-75 me-2" />
            Home
            <Badge bg="primary" pill className="ms-auto">
              2
            </Badge>
          </DropdownItem>
          <DropdownItem href="#">
            <i className="ci-user opacity-75 me-2" />
            Profile
            <Badge bg="warning" pill className="ms-auto">
              3
            </Badge>
          </DropdownItem>
          <DropdownItem href="#">
            <i className="ci-message-square opacity-75 me-2" />
            Messages
            <Badge bg="success" pill className="ms-auto">
              5
            </Badge>
          </DropdownItem>
          <DropdownItem href="#">
            <i className="ci-settings opacity-75 me-2" />
            Settings
          </DropdownItem>
        </DropdownMenu>
      </DocsComponentDemo>
    </section>
  )
}

export default DropdownsDarkDemo
