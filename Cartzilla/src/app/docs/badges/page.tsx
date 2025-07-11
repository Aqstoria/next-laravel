import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import BadgesSolidDemo from './badges-solid'
import BadgesOutlineDemo from './badges-outline'
import BadgesSubtleDemo from './badges-subtle'
import BadgesWithIconDemo from './badges-icon'
import BadgesShapesDemo from './badges-shapes'
import BadgesHeadingDemo from './badges-heading'
import BadgesButtonDemo from './badges-button'
import BadgesListGroupDemo from './badges-list-group'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Badges',
}

const BadgesDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/badge"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Badges</h1>
      <p className="text-body-secondary mb-4">Small count and labeling component.</p>
    </section>
    <BadgesSolidDemo />
    <BadgesOutlineDemo />
    <BadgesSubtleDemo />
    <BadgesWithIconDemo />
    <BadgesShapesDemo />
    <BadgesHeadingDemo />
    <BadgesButtonDemo />
    <BadgesListGroupDemo />
  </>
)

export default BadgesDocsPage
