import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Spinner from 'react-bootstrap/Spinner'
import Stack from 'react-bootstrap/Stack'

const SpinnersBorderDemo = () => {
  const code = `import Spinner from 'react-bootstrap/Spinner'

export default function SpinnersBorderDemo() {
  return (
    <>
      <Spinner animation="border" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="border" variant="body-tertiary" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="border" variant="primary" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="border" variant="secondary" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="border" variant="success" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="border" variant="danger" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="border" variant="warning" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="border" variant="info" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="border" variant="light" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="border" variant="dark" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  )
}`

  return (
    <section id="spinners-border" className="docs-section pb-sm-2 mb-5">
      <h4>Border spinner</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={1} className="flex-wrap">
          <Spinner animation="border" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="border" variant="body-tertiary" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="border" variant="primary" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="border" variant="secondary" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="border" variant="success" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="border" variant="danger" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="border" variant="warning" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="border" variant="info" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <div className="d-inline-block bg-dark ms-2">
            <Spinner animation="border" variant="light" role="status" className="my-2 mx-3">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
          <div className="d-inline-block bg-light">
            <Spinner animation="border" variant="dark" role="status" className="my-2 mx-3">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default SpinnersBorderDemo
