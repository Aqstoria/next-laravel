import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import ListGroupBasicDemo from './list-group-basic'
import ListGroupBorderlessDemo from './list-group-borderless'
import ListGroupLinksDemo from './list-group-links'
import ListGroupFlushDemo from './list-group-flush'
import ListGroupIconsBadgesDemo from './list-group-icons-badges'
import ListGroupCheckboxesDemo from './list-group-checkboxes'
import ListGroupNumberedDemo from './list-group-numbered'
import ListGroupHorizontalDemo from './list-group-horizontal'
import ListGroupCustomContentlDemo from './list-group-custom-content'
import ListGroupColorsDemo from './list-group-colors'
import ListGroupTabsDemo from './list-group-tabs'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | List group',
}

const ListGroupDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/list-group"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">List group</h1>
      <p className="text-body-secondary mb-4">Flexible component for displaying a series of content.</p>
    </section>
    <ListGroupBasicDemo />
    <ListGroupBorderlessDemo />
    <ListGroupLinksDemo />
    <ListGroupFlushDemo />
    <ListGroupIconsBadgesDemo />
    <ListGroupCheckboxesDemo />
    <ListGroupNumberedDemo />
    <ListGroupHorizontalDemo />
    <ListGroupCustomContentlDemo />
    <ListGroupColorsDemo />
    <ListGroupTabsDemo />
  </>
)

export default ListGroupDocsPage
