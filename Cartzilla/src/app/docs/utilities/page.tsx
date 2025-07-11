import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import UtilitiesDottedBgDemo from './utilities-dotted-bg'
import UtilitiesBordersDemo from './utilities-borders'
import UtilitiesCursorsDemo from './utilities-cursors'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Utilities',
}

const UtilitiesDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge bg="warning-subtle" text="warning" pill className="fw-semibold py-2 px-3 mb-2">
        Utilities &amp; helpers
      </Badge>
      <h1 className="pt-1">Cartzilla utilities</h1>
      <p className="text-body-secondary mb-4">Custom Cartzilla utility classes.</p>
    </section>
    <UtilitiesDottedBgDemo />
    <UtilitiesBordersDemo />
    <UtilitiesCursorsDemo />
  </>
)

export default UtilitiesDocsPage
