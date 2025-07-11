import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import ProgressThickDemo from './progress-colors-thick'
import ProgressThinDemo from './progress-colors-thin'
import ProgressMultipleBarsDemo from './progress-multiple'
import ProgressAnimatedStripedDemo from './progress-striped'
import ProgressRatingBreakdownDemo from './progress-rating-breakdown'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Progress',
}

const ProgressDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/progress"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Progress</h1>
      <p className="text-body-secondary mb-4">
        Custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.
      </p>
    </section>
    <ProgressThickDemo />
    <ProgressThinDemo />
    <ProgressMultipleBarsDemo />
    <ProgressAnimatedStripedDemo />
    <ProgressRatingBreakdownDemo />
  </>
)

export default ProgressDocsPage
