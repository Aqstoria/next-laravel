import DocsComponentDemo from '@/components/docs/docs-component-demo'
import MarketButton from '@/components/market-button'
import Stack from 'react-bootstrap/Stack'

const ButtonsMarketDemo = () => {
  const code = `import MarketButton from '@/components/market-button'
import Stack from 'react-bootstrap/Stack'

export default function ButtonsMarketDemo() {
  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      <MarketButton href="#" market="google" variant="dark" aria-label="Download on Google Play" />
      <MarketButton href="#" market="google" variant="dark" large aria-label="Download on Google Play" />
    </Stack>

    <Stack direction="horizontal" gap={2} className="flex-wrap">
      <MarketButton href="#" market="apple" variant="dark" aria-label="Download on App Store" />
      <MarketButton href="#" market="apple" variant="dark" large aria-label="Download on App Store" />
    </Stack>

    <Stack direction="horizontal" gap={2} className="flex-wrap">
      <MarketButton
        href="#"
        market="google"
        variant="light"
        large
        className="rounded-pill"
        aria-label="Download on Google Play"
      />
      <MarketButton
        href="#"
        market="apple"
        variant="light"
        large
        className="rounded-pill"
        aria-label="Download on App Store"
      />
    </Stack>
  )
}`

  return (
    <section id="buttons-market" className="docs-section pb-sm-2 mb-5">
      <h4>Market buttons</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap mb-3">
          <MarketButton
            href="#"
            market="google"
            variant="dark"
            large
            className="me-1 mb-1"
            aria-label="Download on Google Play"
          />
          <MarketButton href="#" market="google" variant="dark" className="mb-1" aria-label="Download on Google Play" />
        </Stack>
        <Stack direction="horizontal" gap={2} className="flex-wrap mb-3">
          <MarketButton
            href="#"
            market="apple"
            variant="dark"
            large
            className="me-1 mb-1"
            aria-label="Download on App Store"
          />
          <MarketButton href="#" market="apple" variant="dark" className="mb-1" aria-label="Download on App Store" />
        </Stack>
        <div className="d-inline-flex align-items-center flex-wrap gap-2">
          <div className="d-table position-relative pt-4 px-4 pb-3">
            <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded d-none-dark"></span>
            <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary rounded d-none d-block-dark"></span>
            <Stack direction="horizontal" gap={2} className="position-relative flex-wrap z-1">
              <MarketButton
                href="#"
                market="google"
                variant="light"
                large
                className="rounded-pill me-1 mb-1"
                aria-label="Download on Google Play"
              />
              <MarketButton
                href="#"
                market="apple"
                variant="light"
                large
                className="rounded-pill mb-1"
                aria-label="Download on App Store"
              />
            </Stack>
          </div>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default ButtonsMarketDemo
