import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import ImageShapesDemo from './image-shapes'
import ImageThumbnailsDemo from './image-thumbnails'
import FiguresWithCaptionsDemo from './figures-with-caption'
import ImageSwapOnHoverDemo from './image-swap'
import ImageScaleOnHoverDemo from './image-scale'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Images & figures',
}

const ImagesDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://getbootstrap.com/docs/5.3/content/images/"
        target="_blank"
        rel="noreferrer"
      >
        Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Images &amp; figures</h1>
      <p className="text-body-secondary mb-4">Image styles and figure component for displaying images and text.</p>
    </section>
    <ImageShapesDemo />
    <ImageThumbnailsDemo />
    <FiguresWithCaptionsDemo />
    <ImageSwapOnHoverDemo />
    <ImageScaleOnHoverDemo />
  </>
)

export default ImagesDocsPage
