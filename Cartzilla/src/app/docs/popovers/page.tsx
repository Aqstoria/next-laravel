import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import PopoversStaticDemo from './popovers-static'
import PopoversLiveDemo from './popovers-live'
import PopoversToggleOptionsDemo from './popovers-toggle-options'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Popovers',
}

const PopoversDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/overlays#popovers"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Popovers</h1>
      <p className="text-body-secondary mb-4">A pop-up box that appears when the user clicks/hovers on an element.</p>
    </section>
    <PopoversStaticDemo />
    <PopoversLiveDemo />
    <PopoversToggleOptionsDemo />
  </>
)

export default PopoversDocsPage
