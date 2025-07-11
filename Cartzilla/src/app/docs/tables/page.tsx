import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import TablesInfoAlert from './info-alert'
import TableBasicDemo from './table-basic'
import TableDarkDemo from './table-dark'
import TableStripedRowsDemo from './table-striped-rows'
import TableStripedColsDemo from './table-striped-columns'
import TableBorderedDemo from './table-bordered'
import TableBorderlessDemo from './table-borderless'
import TableHoverableDemo from './table-hoverable'
import TableContextualDemo from './table-contextual'
import TableColorBordersDemo from './table-color-borders'
import TableSearchDemo from './table-search-demo'
import TableSortingDemo from './table-sorting-demo'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Tables',
}

const TablesDocsPage = () => (
  <>
    <section className="pt-2 pb-md-2">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/table"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Tables</h1>
      <p className="text-body-secondary mb-4">
        Examples for opt-in styling of tables, alongside searching and sorting features.
      </p>
    </section>
    <TablesInfoAlert />
    <TableBasicDemo />
    <TableSearchDemo />
    <TableSortingDemo />
    <TableDarkDemo />
    <TableStripedRowsDemo />
    <TableStripedColsDemo />
    <TableBorderedDemo />
    <TableBorderlessDemo />
    <TableHoverableDemo />
    <TableContextualDemo />
    <TableColorBordersDemo />
  </>
)

export default TablesDocsPage
