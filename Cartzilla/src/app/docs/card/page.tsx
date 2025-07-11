import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import CardBasicDemo from './card-basic'
import CardAltStyleDemo from './card-alt-style'
import CardImageCapsDemo from './card-image-caps'
import CardImageHoverDemo from './card-image-hover'
import CardHorizontalDemo from './card-horizontal'
import CardHeaderFooterDemo from './card-header-footer'
import CardTextAlignmentDemo from './card-text-alignment'
import CardNavTabsDemo from './card-nav-tabs'
import CardNavPillsDemo from './card-nav-pills'
import CardListGroupDemo from './card-list-group'
import CardSolidBgDemo from './card-bg-solid'
import CardSubtleBgDemo from './card-bg-subtle'
import CardBorderColorDemo from './card-border-color'
import CardGroupDemo from './card-group'
import CardGridDemo from './card-grid'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Card',
}

const CardDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/cards"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Card</h1>
      <p className="text-body-secondary mb-4">Flexible and extensible content container.</p>
    </section>
    <CardBasicDemo />
    <CardAltStyleDemo />
    <CardImageCapsDemo />
    <CardImageHoverDemo />
    <CardHorizontalDemo />
    <CardHeaderFooterDemo />
    <CardTextAlignmentDemo />
    <CardNavTabsDemo />
    <CardNavPillsDemo />
    <CardListGroupDemo />
    <CardSolidBgDemo />
    <CardSubtleBgDemo />
    <CardBorderColorDemo />
    <CardGroupDemo />
    <CardGridDemo />
  </>
)

export default CardDocsPage
