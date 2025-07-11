import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ProgressBar from 'react-bootstrap/ProgressBar'

const ProgressMultipleBarsDemo = () => {
  const code = `import ProgressBar from 'react-bootstrap/ProgressBar'

export default function ProgressMultipleBarsDemo() {
  return (
    <>
      <ProgressBar className="mb-3">
        <ProgressBar variant="primary" now={15} aria-label="Segment one" />
        <ProgressBar variant="success" now={10} aria-label="Segment two" />
        <ProgressBar variant="info" now={20} aria-label="Segment three" />
        <ProgressBar variant="warning" now={25} aria-label="Segment four" />
      </ProgressBar>

      <ProgressBar style={{ height: 4 }}>
        <ProgressBar variant="warning" now={25} aria-label="Segment one" />
        <ProgressBar variant="success" now={15} aria-label="Segment two" />
        <ProgressBar variant="primary" now={20} aria-label="Segment three" />
        <ProgressBar variant="info" now={10} aria-label="Segment four" />
      </ProgressBar>
    </>
  )
}`

  return (
    <section id="progress-multiple" className="docs-section pb-sm-2 mb-5">
      <h4>Multiple bars</h4>
      <DocsComponentDemo code={code}>
        <ProgressBar className="mb-3">
          <ProgressBar variant="primary" now={15} aria-label="Segment one" />
          <ProgressBar variant="success" now={10} aria-label="Segment two" />
          <ProgressBar variant="info" now={20} aria-label="Segment three" />
          <ProgressBar variant="warning" now={25} aria-label="Segment four" />
        </ProgressBar>
        <ProgressBar style={{ height: 4 }}>
          <ProgressBar variant="warning" now={25} aria-label="Segment one" />
          <ProgressBar variant="success" now={15} aria-label="Segment two" />
          <ProgressBar variant="primary" now={20} aria-label="Segment three" />
          <ProgressBar variant="info" now={10} aria-label="Segment four" />
        </ProgressBar>
      </DocsComponentDemo>
    </section>
  )
}

export default ProgressMultipleBarsDemo
