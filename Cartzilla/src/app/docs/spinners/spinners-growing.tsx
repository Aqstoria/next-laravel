import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Spinner from 'react-bootstrap/Spinner'
import Stack from 'react-bootstrap/Stack'

const SpinnersGrowingDemo = () => {
  const code = `import Spinner from 'react-bootstrap/Spinner'

export default function SpinnersGrowingDemo() {
  return (
    <>
      <Spinner animation="grow" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="grow" variant="body-tertiary" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="grow" variant="primary" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="grow" variant="secondary" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="grow" variant="success" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="grow" variant="danger" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="grow" variant="warning" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="grow" variant="info" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="grow" variant="light" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="grow" variant="dark" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  )
}`

  return (
    <section id="spinners-growing" className="docs-section pb-sm-2 mb-5">
      <h4>Growing spinner</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={1} className="flex-wrap">
          <Spinner animation="grow" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="grow" variant="body-tertiary" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="grow" variant="primary" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="grow" variant="secondary" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="grow" variant="success" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="grow" variant="danger" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="grow" variant="warning" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="grow" variant="info" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <div className="d-inline-block bg-dark ms-2">
            <Spinner animation="grow" variant="light" role="status" className="my-2 mx-3">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
          <div className="d-inline-block bg-light">
            <Spinner animation="grow" variant="dark" role="status" className="my-2 mx-3">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default SpinnersGrowingDemo
