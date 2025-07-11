import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import ToastsTinyDemo from './toasts-tiny'
import ToastsTinyWithIconDemo from './toasts-tiny-with-icon'
import ToastsWithHeaderIconDemo from './toasts-with-header-icon'
import ToastsActionButtonsDemo from './toasts-action-buttons'
import ToastsPlacementDemo from './toasts-placement'
import ToastsLiveDemo from './toasts-live'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Toasts',
}

const TabsDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/toasts"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Toasts</h1>
      <p className="text-body-secondary mb-4">
        Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.
      </p>
    </section>
    <ToastsTinyDemo />
    <ToastsTinyWithIconDemo />
    <ToastsWithHeaderIconDemo />
    <ToastsActionButtonsDemo />
    <ToastsPlacementDemo />
    <ToastsLiveDemo />
  </>
)

export default TabsDocsPage
