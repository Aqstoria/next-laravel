import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import LightboxInfoAlert from './info-alert'
import LightboxImageDemo from './lightbox-image'
import LightboxVideoDemo from './lightbox-video'
import LightboxIframeDemo from './lightbox-iframe'
import LightboxZoomGalleryDemo from './lightbox-zoom-gallery'
import LightboxCardDemo from './lightbox-inside-card'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Lightbox (Gallery)',
}

const LightboxDocsPage = () => (
  <>
    <section className="pt-2 pb-md-2">
      <Badge bg="info-subtle" text="info" pill className="fw-semibold py-2 px-3 mb-2">
        Cartzilla component
      </Badge>
      <h1 className="pt-1">Lightbox (Gallery)</h1>
      <p className="text-body-secondary mb-4">
        JavaScript-based lightbox component designed to display various types of media.
      </p>
    </section>
    <LightboxInfoAlert />
    <LightboxImageDemo />
    <LightboxVideoDemo />
    <LightboxIframeDemo />
    <LightboxZoomGalleryDemo />
    <LightboxCardDemo />
  </>
)

export default LightboxDocsPage
