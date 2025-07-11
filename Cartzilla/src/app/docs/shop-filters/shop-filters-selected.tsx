import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

const ShopFiltersSelectedDemo = () => {
  const code = `import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

export default function ShopFiltersSelectedDemo() {
  return (
    <div style={{ maxWidth: 280 }}>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h4 className="h6 mb-0">Filter</h4>
        <Button
          variant="secondary"
          size="sm"
          className="bg-transparent border-0 text-decoration-underline p-0 ms-2"
        >
          Clear all
        </Button>
      </div>
      <Stack direction="horizontal" gap={2} className="flex-wrap">
        {['Sale', 'Adidas', 'Bilabong', 'Size: XXS', '$40 - $150'].map((filter, index) => (
          <Button key={index} variant="secondary" size="sm">
            <i className="ci-close fs-sm ms-n1 me-1"/>
            {filter}
          </Button>
        ))}
      </Stack>
    </div>
  )
}`

  return (
    <section id="filter-selected" className="docs-section">
      <h4>Selected filters</h4>
      <DocsComponentDemo code={code}>
        <div style={{ maxWidth: 280 }}>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h4 className="h6 mb-0">Filter</h4>
            <Button
              variant="secondary"
              size="sm"
              className="bg-transparent border-0 text-decoration-underline p-0 ms-2"
            >
              Clear all
            </Button>
          </div>
          <Stack direction="horizontal" gap={2} className="flex-wrap">
            {['Sale', 'Adidas', 'Bilabong', 'Size: XXS', '$40 - $150'].map((filter, index) => (
              <Button key={index} variant="secondary" size="sm">
                <i className="ci-close fs-sm ms-n1 me-1" />
                {filter}
              </Button>
            ))}
          </Stack>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default ShopFiltersSelectedDemo
