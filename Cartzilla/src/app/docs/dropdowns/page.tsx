import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import DropdownsStaticDemo from './dropdowns-static'
import DropdownsDarkDemo from './dropdowns-dark'
import DropdownsFormsDemo from './dropdowns-forms'
import DropdownsDirectionsDemo from './dropdowns-directions'
import DropdownsHoverDemo from './dropdowns-hover-demo'
import DropdownsAlignmentDemo from './dropdowns-alignment'
import DropdownsSplitButtonDemo from './dropdowns-split-button'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Dropdowns',
}

const DropdownsDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/dropdowns"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Dropdowns</h1>
      <p className="text-body-secondary mb-4">
        Toggle contextual overlays for displaying lists of links or other content.
      </p>
    </section>
    <DropdownsStaticDemo />
    <DropdownsDarkDemo />
    <DropdownsFormsDemo />
    <DropdownsDirectionsDemo />
    <DropdownsHoverDemo />
    <DropdownsAlignmentDemo />
    <DropdownsSplitButtonDemo />
  </>
)

export default DropdownsDocsPage
