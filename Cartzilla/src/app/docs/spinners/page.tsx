import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import SpinnersBorderDemo from './spinners-border'
import SpinnersGrowingDemo from './spinners-growing'
import SpinnersSizingDemo from './spinners-sizing'
import SpinnersInsideButtonDemo from './spinners-inside-button'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Spinners',
}

const SpinnersDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/spinners"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Spinners</h1>
      <p className="text-body-secondary mb-4">Indicate the loading state of a component or page.</p>
    </section>
    <SpinnersBorderDemo />
    <SpinnersGrowingDemo />
    <SpinnersSizingDemo />
    <SpinnersInsideButtonDemo />
  </>
)

export default SpinnersDocsPage
