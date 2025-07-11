import type { Metadata } from 'next'
import { ModalProvider } from '@/contexts/modal-context'
import Badge from 'react-bootstrap/Badge'
import ModalMarkupDemo from './modal-markup'
import ModalTabsFormsDemo from './modal-tabs-forms'
import ModalLiveDemo from './modal-live-demo'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Modal',
}

const ModalDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/modal"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Modal</h1>
      <p className="text-body-secondary mb-4">
        Dialogs for lightboxes, user notifications, or completely custom content.
      </p>
    </section>
    <ModalProvider>
      <ModalMarkupDemo />
      <ModalTabsFormsDemo />
      <ModalLiveDemo />
    </ModalProvider>
  </>
)

export default ModalDocsPage
