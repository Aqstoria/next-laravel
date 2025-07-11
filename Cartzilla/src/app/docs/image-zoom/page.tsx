import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import ImageZoomInfoAlert from './info-alert'
import ImageZoomExternalPaneDemo from './image-zoom-external-pane'
import ImageZoomInlinePaneDemo from './image-zoom-inline-pane'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Image zoom',
}

const ImageZoomDocsPage = () => (
  <>
    <section className="pt-2 pb-md-2">
      <Badge bg="info-subtle" text="info" pill className="fw-semibold py-2 px-3 mb-2">
        Cartzilla component
      </Badge>
      <h1 className="pt-1">Image zoom</h1>
      <p className="text-body-secondary mb-4">
        JavaScript based component that adds &quot;zoom on hover&quot; functionality to images.
      </p>
    </section>
    <ImageZoomInfoAlert />
    <ImageZoomExternalPaneDemo />
    <ImageZoomInlinePaneDemo />
  </>
)

export default ImageZoomDocsPage
