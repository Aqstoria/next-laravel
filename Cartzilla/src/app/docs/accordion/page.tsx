import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import AccordionBasicDemo from './accordion-basic'
import AccordionAltButtonIconDemo from './accordion-alt-icon'
import AccordionWithIconsDemo from './accordion-icons'
import AccordionSizingDemo from './accordion-sizing'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Accordion',
}

const AccordionDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/accordion"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Accordion</h1>
      <p className="text-body-secondary mb-4">
        Vertically stacked list of headers that can be clicked to reveal or hide content associated with them.
      </p>
    </section>
    <AccordionBasicDemo />
    <AccordionAltButtonIconDemo />
    <AccordionWithIconsDemo />
    <AccordionSizingDemo />
  </>
)

export default AccordionDocsPage
