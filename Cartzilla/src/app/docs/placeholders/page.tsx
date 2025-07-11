import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import PlaceholdersWidthDemo from './placeholders-width'
import PlaceholdersColorsDemo from './placeholders-color'
import PlaceholdersSizingDemo from './placeholders-sizing'
import PlaceholdersAnimationDemo from './placeholders-animation'
import PlaceholdersLoadingCardDemo from './placeholders-loading-card'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Placeholders',
}

const PlaceholdersDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/placeholder"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Placeholders</h1>
      <p className="text-body-secondary mb-4">
        Use placeholders for your components or pages to indicate something may still be loading.
      </p>
    </section>
    <PlaceholdersWidthDemo />
    <PlaceholdersColorsDemo />
    <PlaceholdersSizingDemo />
    <PlaceholdersAnimationDemo />
    <PlaceholdersLoadingCardDemo />
  </>
)

export default PlaceholdersDocsPage
