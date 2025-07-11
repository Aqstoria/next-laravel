import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import CarouselInfoAlert from './info-alert'
import CarouselNavButtonsDemo from './carousel-navigation'
import CarouselPaginationDemo from './carousel-pagination'
import CarouselMultipleSlidesDemo from './carousel-multiple-slides'
import CarouselFadeTransitionDemo from './carousel-fade-transition'
import CarouselThumbnailsDemo from './carousel-thumbnails'
import CarouselSyncDemo from './carousel-sync'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Carousel (Slider)',
}

const CarouselDocsPage = () => (
  <>
    <section className="pt-2 pb-md-2">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://swiperjs.com/react"
        target="_blank"
        rel="noreferrer"
      >
        Swiper docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Carousel (Slider)</h1>
      <p className="text-body-secondary mb-4">
        A slideshow component for cycling through elements (images or slides with various content) like a carousel.
      </p>
    </section>
    <CarouselInfoAlert />
    <CarouselNavButtonsDemo />
    <CarouselPaginationDemo />
    <CarouselMultipleSlidesDemo />
    <CarouselFadeTransitionDemo />
    <CarouselThumbnailsDemo />
    <CarouselSyncDemo />
  </>
)

export default CarouselDocsPage
