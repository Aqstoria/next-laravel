import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import ScrollbarInfoAlert from './info-alert'
import ScrollbarVerticalDemo from './scrollbar-vertical'
import ScrollbarHorizontalDemo from './scrollbar-horizontal'
import ScrollbarAutohideDemo from './scrollbar-autohide'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Scrollbar',
}

const ScrollbarDocsPage = () => (
  <>
    <section className="pt-2 pb-md-2">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-react"
        target="_blank"
        rel="noreferrer"
      >
        SimpleBar docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Scrollbar</h1>
      <p className="text-body-secondary mb-4">Custom CSS-styled replacement of browser&apos;s default scrollbar.</p>
    </section>
    <ScrollbarInfoAlert />
    <ScrollbarVerticalDemo />
    <ScrollbarHorizontalDemo />
    <ScrollbarAutohideDemo />
  </>
)

export default ScrollbarDocsPage
