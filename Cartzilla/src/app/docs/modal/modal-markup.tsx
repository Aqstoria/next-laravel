import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'

const ModalMarkupDemo = () => {
  const code = `import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'

export default function ModalMarkupDemo() {
  return (
    <Modal aria-labelledby="modalLabel">
      <ModalHeader closeButton>
        <ModalTitle as="h5" id="modalLabel">Modal title</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <p>Modal body content goes here.</p>
      </ModalBody>
      <ModalFooter className="flex-column flex-sm-row align-items-stretch">
        <Button variant="outline-secondary">Close</Button>
        <Button>Save changes</Button>
      </ModalFooter>
    </Modal>
  )
}`

  return (
    <section id="modal-markup" className="docs-section pb-sm-2 mb-5">
      <h4>Modal markup</h4>
      <DocsComponentDemo code={code}>
        <div className="bg-dotted rounded p-4 m-n2">
          <div className="modal d-block position-static" tabIndex={-1} role="dialog" aria-labelledby="modalLabel">
            <ModalDialog>
              <ModalHeader closeButton>
                <ModalTitle as="h5" id="modalLabel">
                  Modal title
                </ModalTitle>
              </ModalHeader>
              <ModalBody>
                <p>Modal body content goes here.</p>
              </ModalBody>
              <ModalFooter className="flex-column flex-sm-row align-items-stretch">
                <Button variant="outline-secondary">Close</Button>
                <Button>Save changes</Button>
              </ModalFooter>
            </ModalDialog>
          </div>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default ModalMarkupDemo
