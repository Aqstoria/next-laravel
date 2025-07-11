import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Spinner from 'react-bootstrap/Spinner'
import Stack from 'react-bootstrap/Stack'

const SpinnersSizingDemo = () => {
  const code = `import Spinner from 'react-bootstrap/Spinner'

export default function SpinnersSizingDemo() {
  return (
    <>
      <Spinner animation="border" size="sm" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="grow" size="sm" role="status" className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="border" role="status" style={{ width: '3rem', height: '3rem' }} className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <Spinner animation="grow" role="status" style={{ width: '3rem', height: '3rem' }} className="m-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  )
}`

  return (
    <section id="spinners-sizing" className="docs-section pb-sm-2 mb-5">
      <h4>Sizing</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={1} className="flex-wrap">
          <Spinner animation="border" size="sm" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="grow" size="sm" role="status" className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="border" role="status" style={{ width: '3rem', height: '3rem' }} className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Spinner animation="grow" role="status" style={{ width: '3rem', height: '3rem' }} className="m-2">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default SpinnersSizingDemo
