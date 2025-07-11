import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import TabsButtonStyleDemo from './tabs-button-style'
import TabsUnderlineStyleDemo from './tabs-underline-style'
import TabsVerticalDemo from './tabs-vertical'
import TabsIconsDemo from './tabs-icons'
import TabsShapesDemo from './tabs-shapes'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Tabs',
}

const TabsDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/tabs"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Tabs</h1>
      <p className="text-body-secondary mb-4">
        Horizontally or vertically stacked list of items. When clicked each item switch content in the tab pane.
      </p>
    </section>
    <TabsButtonStyleDemo />
    <TabsUnderlineStyleDemo />
    <TabsVerticalDemo />
    <TabsIconsDemo />
    <TabsShapesDemo />
  </>
)

export default TabsDocsPage
