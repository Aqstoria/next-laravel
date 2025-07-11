import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'

const PaginationLoadMoreDemo = () => {
  const code = `import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'

export default function PaginationLoadMoreDemo() {
  return (
    <div className="d-flex flex-column align-items-center" style={{ maxWidth: 300 }}>
      <div className="fs-sm text-center mb-3">Showing 16 from 48</div>
      <ProgressBar
        variant="dark"
        now={30}
        className="d-none-dark w-100 mb-3"
        style={{ height: 4 }}
        aria-label="Items shown"
      />
      <ProgressBar
        variant="light"
        now={30}
        className="d-none d-flex-dark w-100 mb-3"
        style={{ height: 4 }}
        aria-label="Items shown"
      />
      <Button variant="link" size="lg" className="text-body-emphasis text-decoration-none animate-underline">
        <span className="animate-target">Show more</span>
        <i className="ci-chevron-down fs-lg ms-2"/>
      </Button>
    </div>
  )
}`

  return (
    <section id="pagination-load-more" className="docs-section">
      <h4>Load more (One-page)</h4>
      <DocsComponentDemo code={code}>
        <div className="d-flex flex-column align-items-center" style={{ maxWidth: 300 }}>
          <div className="fs-sm text-center mb-3">Showing 16 from 48</div>
          <ProgressBar
            variant="dark"
            now={30}
            className="d-none-dark w-100 mb-3"
            style={{ height: 4 }}
            aria-label="Items shown"
          />
          <ProgressBar
            variant="light"
            now={30}
            className="d-none d-flex-dark w-100 mb-3"
            style={{ height: 4 }}
            aria-label="Items shown"
          />
          <Button variant="link" size="lg" className="text-body-emphasis text-decoration-none animate-underline">
            <span className="animate-target">Show more</span>
            <i className="ci-chevron-down fs-lg ms-2" />
          </Button>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default PaginationLoadMoreDemo
