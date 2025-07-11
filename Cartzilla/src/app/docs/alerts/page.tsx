import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import AlertsBasicDemo from './alerts-basic'
import AlertsWithIconDemo from './alerts-icon'
import AlertsDismissibleDemo from './alerts-dismissible'
import AlertsAdditionalContentDemo from './alerts-additional-content'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Alerts',
}

const AlertsDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/alerts"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Alerts</h1>
      <p className="text-body-secondary mb-4">Provide contextual feedback messages for typical user actions.</p>
    </section>
    <AlertsBasicDemo />
    <AlertsWithIconDemo />
    <AlertsDismissibleDemo />
    <AlertsAdditionalContentDemo />
  </>
)

export default AlertsDocsPage
