import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import ImgComparisonSliderInfoAlert from './info-alert'
import ImgComparisonSliderHorizontalDemo from './img-comparison-slider-horizontal'
import ImgComparisonSliderVerticalDemo from './img-comparison-slider-vertical'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Image comparison slider',
}

const ImgComparisonSliderDocsPage = () => (
  <>
    <section className="pt-2 pb-md-2">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://github.com/sneas/img-comparison-slider/blob/master/packages/react/README.md"
        target="_blank"
        rel="noreferrer"
      >
        ImgComparisonSlider docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Image comparison slider</h1>
      <p className="text-body-secondary mb-4">
        Slider component that can be used to demonstrate the difference between two images.
      </p>
    </section>
    <ImgComparisonSliderInfoAlert />
    <ImgComparisonSliderHorizontalDemo />
    <ImgComparisonSliderVerticalDemo />
  </>
)

export default ImgComparisonSliderDocsPage
