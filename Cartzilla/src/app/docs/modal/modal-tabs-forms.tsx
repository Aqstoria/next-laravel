'use client'

import Image from 'next/image'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import PasswordInput from '@/components/forms/password-input'
import Col from 'react-bootstrap/Col'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import CloseButton from 'react-bootstrap/CloseButton'
import Nav from 'react-bootstrap/Nav'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'

const ModalTabsFormsDemo = () => {
  const code = `'use client'

import Image from 'next/image'
import PasswordInput from '@/components/forms/password-input'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'
import Nav from 'react-bootstrap/Nav'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'

export default function ModalTabsFormsDemo() {
  return (
    <Modal
      size="lg"
      contentClassName="row row-cols-1 row-cols-lg-2 flex-row g-0 overflow-hidden"
    >
      <Col className="order-lg-2">
        <div className="position-relative d-flex align-items-end h-100 pt-4 px-4 px-sm-5 px-lg-0">
          <CloseButton className="position-absolute top-0 end-0 z-2 mt-3 me-3" />
          <Image
            src="/img/account/cover.png"
            className="position-relative z-1"
            width={772}
            height={770}
            alt="Girl"
          />
          <span
            className="position-absolute top-0 start-0 w-100 h-100 d-none-dark"
            style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }}
          ></span>
          <span
            className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark"
            style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }}
          ></span>
        </div>
      </Col>
      <Col className="d-flex flex-column order-lg-1">
        <TabContainer defaultActiveKey="signin">
          <Modal.Header className="d-block border-0 pt-sm-5 px-sm-5 pb-2">
            <Nav variant="tabs" className="mt-sm-n2">
              <Nav.Item>
                <Nav.Link eventKey="signin">
                  <i className="ci-log-in fs-base opacity-75 ms-n1 me-2"/>
                  Sign in
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="signup">
                  <i className="ci-user fs-base opacity-75 ms-n1 me-2"/>
                  Sign up
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Modal.Header>
          <Modal.Body as={TabContent} className="px-sm-5 pb-sm-5">
            <TabPane eventKey="signin">
              <h2 className="h5 mb-4">Welcome back</h2>
              <form>
                <FormControl type="email" className="mb-4" placeholder="Email" required />
                <PasswordInput className="mb-4" placeholder="Password" required />
                <FormCheck id="remember-30" label="Remember for 30 days" className="mb-4" />
                <Button type="submit" className="w-100">
                  Sign In
                </Button>
              </form>
            </TabPane>
            <TabPane eventKey="signup">
              <h2 className="h5 mb-4">Create an account</h2>
              <form>
                <FormLabel htmlFor="register-email">Email</FormLabel>
                <FormControl type="email" className="mb-3" id="register-email" required />
                <FormLabel htmlFor="register-password">Password</FormLabel>
                <PasswordInput
                  className="mb-4"
                  id="register-password"
                  placeholder="Minimum 8 characters"
                  minLength={8}
                  required
                />
                <FormCheck id="save-pass" label="Save the password" className="mb-4" />
                <Button type="submit" className="w-100">
                  Create an account
                </Button>
              </form>
            </TabPane>
          </Modal.Body>
        </TabContainer>
      </Col>
    </Modal>
  )
}`

  return (
    <section id="modal-tabs-forms" className="docs-section pb-sm-2 mb-5">
      <h4>Tabs and forms</h4>
      <DocsComponentDemo code={code}>
        <div className="bg-dotted rounded p-4 m-n2">
          <div className="modal d-block position-static" tabIndex={-1} role="dialog">
            <ModalDialog size="lg" contentClassName="row row-cols-1 row-cols-lg-2 flex-row g-0 overflow-hidden">
              <Col className="order-lg-2">
                <div className="position-relative d-flex align-items-end h-100 pt-4 px-4 px-sm-5 px-lg-0">
                  <CloseButton className="position-absolute top-0 end-0 z-2 mt-3 me-3" />
                  <Image
                    src="/img/account/cover.png"
                    className="position-relative z-1"
                    width={772}
                    height={770}
                    alt="Girl"
                  />
                  <span
                    className="position-absolute top-0 start-0 w-100 h-100 d-none-dark"
                    style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }}
                  ></span>
                  <span
                    className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark"
                    style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }}
                  ></span>
                </div>
              </Col>
              <Col className="d-flex flex-column order-lg-1">
                <TabContainer defaultActiveKey="signin">
                  <ModalHeader className="d-block border-0 pt-sm-5 pt-lg-4 pt-xl-5 px-sm-5 px-lg-4 px-xl-5 pb-2">
                    <Nav variant="tabs" className="mt-sm-n2 mt-lg-0 mt-xl-n2">
                      <Nav.Item>
                        <Nav.Link eventKey="signin">
                          <i className="ci-log-in fs-base opacity-75 ms-n1 me-2" />
                          Sign in
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="signup">
                          <i className="ci-user fs-base opacity-75 ms-n1 me-2" />
                          Sign up
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </ModalHeader>
                  <ModalBody as={TabContent} className="px-sm-5 px-lg-4 px-xl-5 pb-sm-5 pb-lg-4 pb-xl-5">
                    <TabPane eventKey="signin">
                      <h2 className="h5 mb-4">Welcome back</h2>
                      <form>
                        <FormControl type="email" className="mb-4" placeholder="Email" required />
                        <PasswordInput className="mb-4" placeholder="Password" required />
                        <FormCheck id="remember-30" label="Remember for 30 days" className="mb-4" />
                        <Button type="submit" className="w-100">
                          Sign In
                        </Button>
                      </form>
                    </TabPane>
                    <TabPane eventKey="signup">
                      <h2 className="h5 mb-4">Create an account</h2>
                      <form>
                        <FormLabel htmlFor="register-email">Email</FormLabel>
                        <FormControl type="email" className="mb-3" id="register-email" required />
                        <FormLabel htmlFor="register-password">Password</FormLabel>
                        <PasswordInput
                          className="mb-4"
                          id="register-password"
                          placeholder="Minimum 8 characters"
                          minLength={8}
                          required
                        />
                        <FormCheck id="save-pass" label="Save the password" className="mb-4" />
                        <Button type="submit" className="w-100">
                          Create an account
                        </Button>
                      </form>
                    </TabPane>
                  </ModalBody>
                </TabContainer>
              </Col>
            </ModalDialog>
          </div>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default ModalTabsFormsDemo
