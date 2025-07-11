'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import { useModal } from '@/contexts/modal-context'
import Modal, { type ModalProps } from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const ModalLiveDemo = () => {
  const code = `'use client'

import { ModalProvider, useModal } from '@/contexts/modal-context'
import Modal, { type ModalProps } from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

export default function ModalLiveDemo() {

  interface ModalDemoProps extends ModalProps {
    id: string
    buttonLabel: string
    modalContent: React.ReactNode
  }

  const modals: ModalDemoProps[] = [
    {
      id: 'modal-sm',
      size: 'sm',
      buttonLabel: 'Small modal',
      modalContent: <p>...</p>,
    },
    {
      id: 'modal-default',
      buttonLabel: 'Default modal',
      modalContent: <p>Modal body text goes here.</p>,
    },
    {
      id: 'modal-lg',
      size: 'lg',
      buttonLabel: 'Large modal',
      modalContent: <p>Modal body text goes here.</p>,
    },
    {
      id: 'modal-xl',
      size: 'xl',
      buttonLabel: 'Extra large modal',
      modalContent: <p>Modal body text goes here.</p>,
    },
    {
      id: 'modal-long',
      buttonLabel: 'Long modal',
      modalContent: (
        <>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
        </>
      ),
    },
    {
      id: 'modal-scrollable',
      buttonLabel: 'Scrolling content',
      modalContent: (
        <>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
        </>
      ),
      scrollable: true,
    },
    {
      id: 'modal-centered',
      buttonLabel: 'Vertically centered modal',
      modalContent: <p>Modal body text goes here.</p>,
      centered: true,
    },
    {
      id: 'modal-fullscreen',
      buttonLabel: 'Full screen modal',
      modalContent: <p>Modal body text goes here.</p>,
      fullscreen: true,
    },
  ]

  const ModalDemo = ({ id, buttonLabel, modalContent, size, scrollable, centered, fullscreen }: ModalDemoProps) => {
    const { openModal, closeModal, isShown } = useModal()

    return (
      <>
        <Button variant="outline-secondary me-1 mb-1" onClick={() => openModal(id)}>
          {buttonLabel}
        </Button>
        <Modal
          show={isShown(id)}
          onHide={() => closeModal(id)}
          size={size}
          scrollable={scrollable}
          centered={centered}
          fullscreen={fullscreen}
          aria-labelledby={\`label-\${id}\`}
        >
          <Modal.Header closeButton>
            <Modal.Title as="h5" id={\`label-\${id}\`}>
              Modal title
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalContent}</Modal.Body>
          {size !== 'sm' && (
            <Modal.Footer className="flex-column flex-sm-row align-items-stretch">
              <Button variant="outline-secondary" onClick={() => closeModal(id)}>
                Close
              </Button>
              <Button>Save changes</Button>
            </Modal.Footer>
          )}
        </Modal>
      </>
    )
  }

  return (
    <ModalProvider>
      <Stack direction="horizontal" gap={2} className="flex-wrap">
        {modals.map(({ id, buttonLabel, modalContent, size, scrollable, centered, fullscreen }) => (
          <ModalDemo
            key={id}
            id={id}
            buttonLabel={buttonLabel}
            modalContent={modalContent}
            size={size}
            scrollable={scrollable}
            centered={centered}
            fullscreen={fullscreen}
          />
        ))}
      </Stack>
    </ModalProvider>
  )
}`

  interface ModalDemoProps extends ModalProps {
    id: string
    buttonLabel: string
    modalContent: React.ReactNode
  }

  const modals: ModalDemoProps[] = [
    {
      id: 'modal-sm',
      size: 'sm',
      buttonLabel: 'Small modal',
      modalContent: <p>...</p>,
    },
    {
      id: 'modal-default',
      buttonLabel: 'Default modal',
      modalContent: <p>Modal body text goes here.</p>,
    },
    {
      id: 'modal-lg',
      size: 'lg',
      buttonLabel: 'Large modal',
      modalContent: <p>Modal body text goes here.</p>,
    },
    {
      id: 'modal-xl',
      size: 'xl',
      buttonLabel: 'Extra large modal',
      modalContent: <p>Modal body text goes here.</p>,
    },
    {
      id: 'modal-long',
      buttonLabel: 'Long modal',
      modalContent: (
        <>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
        </>
      ),
    },
    {
      id: 'modal-scrollable',
      buttonLabel: 'Scrolling content',
      modalContent: (
        <>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
        </>
      ),
      scrollable: true,
    },
    {
      id: 'modal-centered',
      buttonLabel: 'Vertically centered modal',
      modalContent: <p>Modal body text goes here.</p>,
      centered: true,
    },
    {
      id: 'modal-fullscreen',
      buttonLabel: 'Full screen modal',
      modalContent: <p>Modal body text goes here.</p>,
      fullscreen: true,
    },
  ]

  const ModalDemo = ({ id, buttonLabel, modalContent, size, scrollable, centered, fullscreen }: ModalDemoProps) => {
    const { openModal, closeModal, isShown } = useModal()

    return (
      <>
        <Button variant="outline-secondary me-1 mb-1" onClick={() => openModal(id)}>
          {buttonLabel}
        </Button>
        <Modal
          show={isShown(id)}
          onHide={() => closeModal(id)}
          size={size}
          scrollable={scrollable}
          centered={centered}
          fullscreen={fullscreen}
          aria-labelledby={`label-${id}`}
        >
          <Modal.Header closeButton>
            <Modal.Title as="h5" id={`label-${id}`}>
              Modal title
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalContent}</Modal.Body>
          {size !== 'sm' && (
            <Modal.Footer className="flex-column flex-sm-row align-items-stretch">
              <Button variant="outline-secondary" onClick={() => closeModal(id)}>
                Close
              </Button>
              <Button>Save changes</Button>
            </Modal.Footer>
          )}
        </Modal>
      </>
    )
  }

  return (
    <section id="modal-demo" className="docs-section">
      <h4>Live demo</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          {modals.map(({ id, buttonLabel, modalContent, size, scrollable, centered, fullscreen }) => (
            <ModalDemo
              key={id}
              id={id}
              buttonLabel={buttonLabel}
              modalContent={modalContent}
              size={size}
              scrollable={scrollable}
              centered={centered}
              fullscreen={fullscreen}
            />
          ))}
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default ModalLiveDemo
