import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import HeadingsDemo from './headings'
import DisplaysDemo from './displays'
import BodyTextDemo from './body-text'
import InlineTextDemo from './inline-text'
import AbbreviationsDemo from './abbreviations'
import BlockquoteDemo from './blockquote'
import ListsUnorderedOrderedDemo from './lists-unordered'
import ListsUnstyledDemo from './lists-unstyled'
import ListsInlineDemo from './lists-inline'
import DescriptionListBasicDemo from './description-list-basic'
import DescriptionListAlignmentDemo from './description-list-alignment'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Typography',
}

const TypographyDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://getbootstrap.com/docs/5.3/content/typography/"
        target="_blank"
        rel="noreferrer"
      >
        Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Typography</h1>
      <p className="text-body-secondary mb-4">Headings, body text, lists, blockquotes and more.</p>
    </section>
    <HeadingsDemo />
    <DisplaysDemo />
    <BodyTextDemo />
    <InlineTextDemo />
    <AbbreviationsDemo />
    <BlockquoteDemo />
    <ListsUnorderedOrderedDemo />
    <ListsUnstyledDemo />
    <ListsInlineDemo />
    <DescriptionListBasicDemo />
    <DescriptionListAlignmentDemo />
  </>
)

export default TypographyDocsPage
