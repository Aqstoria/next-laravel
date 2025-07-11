import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

const CarouselNavButtonsDemo = () => {
  const code = `import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

export default function CarouselNavButtonsDemo() {
  return (
    <Stack direction="horizontal" gap={4} className="flex-wrap">

      {/* Large buttons */}
      <Stack direction="horizontal" gap={2}>
        <Button
          variant="outline-secondary"
          size="lg"
          className="btn-icon animate-slide-start rounded-circle me-1"
          aria-label="Prev"
        >
          <i className="ci-chevron-left fs-xl animate-target"/>
        </Button>
        <Button
          variant="outline-secondary"
          size="lg"
          className="btn-icon animate-slide-end rounded-circle"
          aria-label="Next"
        >
          <i className="ci-chevron-right fs-xl animate-target"/>
        </Button>
      </Stack>

      {/* Normal buttons */}
      <Stack direction="horizontal" gap={2}>
        <Button
          variant="outline-secondary"
          className="btn-icon animate-slide-start rounded-circle me-1"
          aria-label="Prev"
        >
          <i className="ci-chevron-left fs-lg animate-target"/>
        </Button>
        <Button
          variant="outline-secondary"
          className="btn-icon animate-slide-end rounded-circle"
          aria-label="Next"
        >
          <i className="ci-chevron-right fs-lg animate-target"/>
        </Button>
      </Stack>

      {/* Small buttons */}
      <Stack direction="horizontal" gap={2}>
        <Button
          variant="outline-secondary"
          size="sm"
          className="btn-icon animate-slide-start rounded-circle"
          aria-label="Prev"
        >
          <i className="ci-chevron-left fs-base animate-target"/>
        </Button>
        <Button
          variant="outline-secondary"
          size="sm"
          className="btn-icon animate-slide-end rounded-circle"
          aria-label="Next"
        >
          <i className="ci-chevron-right fs-base animate-target"/>
        </Button>
      </Stack>
    </Stack>
  )
}`

  return (
    <section id="carousel-navigation" className="docs-section pb-sm-2 mb-5">
      <h4>Navigation (Prev / next buttons)</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={4} className="flex-wrap">
          <Stack direction="horizontal" gap={2}>
            <Button
              variant="outline-secondary"
              size="lg"
              className="btn-icon animate-slide-start rounded-circle me-1"
              aria-label="Prev"
            >
              <i className="ci-chevron-left fs-xl animate-target" />
            </Button>
            <Button
              variant="outline-secondary"
              size="lg"
              className="btn-icon animate-slide-end rounded-circle"
              aria-label="Next"
            >
              <i className="ci-chevron-right fs-xl animate-target" />
            </Button>
          </Stack>
          <Stack direction="horizontal" gap={2}>
            <Button
              variant="outline-secondary"
              className="btn-icon animate-slide-start rounded-circle me-1"
              aria-label="Prev"
            >
              <i className="ci-chevron-left fs-lg animate-target" />
            </Button>
            <Button variant="outline-secondary" className="btn-icon animate-slide-end rounded-circle" aria-label="Next">
              <i className="ci-chevron-right fs-lg animate-target" />
            </Button>
          </Stack>
          <Stack direction="horizontal" gap={2}>
            <Button
              variant="outline-secondary"
              size="sm"
              className="btn-icon animate-slide-start rounded-circle"
              aria-label="Prev"
            >
              <i className="ci-chevron-left fs-base animate-target" />
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              className="btn-icon animate-slide-end rounded-circle"
              aria-label="Next"
            >
              <i className="ci-chevron-right fs-base animate-target" />
            </Button>
          </Stack>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default CarouselNavButtonsDemo
