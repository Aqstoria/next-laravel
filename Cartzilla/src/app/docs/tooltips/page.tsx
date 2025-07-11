import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import TooltipsStaticDemo from './tooltips-static'
import TooltipsLiveDemo from './tooltips-live'
import TooltipsSmallDemo from './tooltips-small'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Tooltips',
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
        href="https://react-bootstrap.netlify.app/docs/components/overlays#tooltips"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Tooltips</h1>
      <p className="text-body-secondary mb-4">Custom tooltips for local title storage.</p>
    </section>
    <TooltipsStaticDemo />
    <TooltipsLiveDemo />
    <TooltipsSmallDemo />
  </>
)

export default PopoversDocsPage
