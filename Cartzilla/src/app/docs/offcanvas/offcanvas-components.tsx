import DocsComponentDemo from '@/components/docs/docs-component-demo'
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import OffcanvasTitle from 'react-bootstrap/OffcanvasTitle'
import OffcanvasBody from 'react-bootstrap/OffcanvasBody'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'

const OffcanvasComponentsDemo = () => {
  const code = `import Offcanvas from 'react-bootstrap/Offcanvas'
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import OffcanvasTitle from 'react-bootstrap/OffcanvasTitle'
import OffcanvasBody from 'react-bootstrap/OffcanvasBody'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'

export default function OffcanvasComponentsDemo() {
  return (
    <Offcanvas aria-labelledby="offcanvasLabel">
      <OffcanvasHeader closeButton>
        <OffcanvasTitle as="h5" id="offcanvasLabel">Menu</OffcanvasTitle>
      </OffcanvasHeader>
      <OffcanvasBody className="pt-0">
        <ListGroup as="nav" defaultActiveKey="#home" variant="borderless">
          <ListGroupItem action href="#home">
            Home
          </ListGroupItem>
          <ListGroupItem action href="#profile">
            User profile
          </ListGroupItem>
          <ListGroupItem action href="#services">
            Services
          </ListGroupItem>
          <ListGroupItem action href="#works">
            Our works
          </ListGroupItem>
          <ListGroupItem action href="#about">
            About
          </ListGroupItem>
          <ListGroupItem action href="#team">
            Our team
          </ListGroupItem>
        </ListGroup>
      </OffcanvasBody>
      <OffcanvasHeader className="border-top">
        <Button className="w-100 me-3">
          <i className="ci-log-in fs-base ms-n1 me-2"/>
          Login
        </Button>
        <Button variant="outline-primary" className="w-100">
          <i className="ci-user ms-n1 me-2"/>
          Sign up
        </Button>
      </OffcanvasHeader>
    </Offcanvas>
  )
}`

  return (
    <section id="offcanvas-components" className="docs-section pb-sm-2 mb-5">
      <h4>Offcanvas components</h4>
      <DocsComponentDemo code={code}>
        <div className="bg-dotted rounded p-3 p-sm-4">
          <div
            className="offcanvas offcanvas-start show position-static border-0 rounded"
            tabIndex={-1}
            aria-labelledby="offcanvasLabel"
            role="dialog"
          >
            <OffcanvasHeader closeButton>
              <OffcanvasTitle as="h5" id="offcanvasLabel">
                Menu
              </OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody className="pt-0" style={{ maxHeight: 275 }}>
              <ListGroup as="nav" defaultActiveKey="#home" variant="borderless">
                <ListGroupItem action href="#home">
                  Home
                </ListGroupItem>
                <ListGroupItem action href="#profile">
                  User profile
                </ListGroupItem>
                <ListGroupItem action href="#services">
                  Services
                </ListGroupItem>
                <ListGroupItem action href="#works">
                  Our works
                </ListGroupItem>
                <ListGroupItem action href="#about">
                  About
                </ListGroupItem>
                <ListGroupItem action href="#team">
                  Our team
                </ListGroupItem>
                <ListGroupItem action href="#dashboard">
                  Dashboard
                </ListGroupItem>
                <ListGroupItem action href="#contact">
                  Contact
                </ListGroupItem>
                <ListGroupItem action href="#help">
                  Help center
                </ListGroupItem>
                <ListGroupItem action href="#support">
                  Support
                </ListGroupItem>
              </ListGroup>
            </OffcanvasBody>
            <OffcanvasHeader className="border-top">
              <Button className="w-100 me-3">
                <i className="ci-log-in fs-base ms-n1 me-2" />
                Login
              </Button>
              <Button variant="outline-primary" className="w-100">
                <i className="ci-user ms-n1 me-2" />
                Sign up
              </Button>
            </OffcanvasHeader>
          </div>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default OffcanvasComponentsDemo
