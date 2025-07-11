import CodeBlock from '@/components/code-block'

const CarouselInfoAlert = () => (
  <section className="d-sm-flex text-body-emphasis bg-info-subtle rounded py-4 px-3 mb-5">
    <i className="ci-info text-info fs-4 mb-2 mb-sm-0" />
    <div className="ps-sm-3 pe-sm-5 w-100">
      <p className="pb-1">
        The Carousel component relies on the{' '}
        <a
          href="https://swiperjs.com/react"
          className="fw-semibold text-dark-emphasis"
          target="_blank"
          rel="noreferrer"
        >
          Swiper
        </a>{' '}
        component. Ensure that you have imported all necessary component&apos;s files. Below is an example of imports
        necessary for the slider with navigation buttons and pagination (bullets):
      </p>
      <CodeBlock border copyButton={false} className="mb-3">
        {`import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'`}
      </CodeBlock>
      <div className="h6 pb-1 mb-2">See also:</div>
      <p className="mb-1">
        <a
          className="d-inline-flex alert-link fw-medium text-decoration-none"
          href="https://swiperjs.com/demos"
          target="_blank"
          rel="noopener"
        >
          <i className="ci-external-link mt-1 me-2" />
          Swiper slider demos with code examples
        </a>
      </p>
    </div>
  </section>
)

export default CarouselInfoAlert
