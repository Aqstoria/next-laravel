import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import ProgressBar from 'react-bootstrap/ProgressBar'

const ProgressThinDemo = () => {
  const code = `import Stack from 'react-bootstrap/Stack'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function ProgressThinDemo() {
  return (
    <Stack direction="vertical" gap={3}>
      {[
        { variant: 'primary', value: 45 },
        { variant: 'success', value: 55 },
        { variant: 'danger', value: 40 },
        { variant: 'warning', value: 70 },
        { variant: 'info', value: 60 },
      ].map(({ variant, value }, index) => (
        <div key={index}>
          <div className="fs-sm mb-2">{value}%</div>
          <ProgressBar variant={variant} now={value} style={{ height: 4 }} aria-label={\`Progress \${variant}\`} />
        </div>
      ))}
      <div>
        <div className="fs-sm mb-2">33%</div>
        <ProgressBar
          variant="dark"
          now={33}
          style={{ height: 4 }}
          className="d-none-dark"
          aria-label="Progress dark"
        />
        <ProgressBar
          variant="light"
          now={33}
          style={{ height: 4 }}
          className="d-none d-flex-dark"
          aria-label="Progress light"
        />
      </div>
    </Stack>
  )
}`

  return (
    <section id="progress-colors-thin" className="docs-section pb-sm-2 mb-5">
      <h4>Color variations (thin)</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="vertical" gap={3}>
          {[
            { variant: 'primary', value: 45 },
            { variant: 'success', value: 55 },
            { variant: 'danger', value: 40 },
            { variant: 'warning', value: 70 },
            { variant: 'info', value: 60 },
          ].map(({ variant, value }, index) => (
            <div key={index}>
              <div className="fs-sm mb-2">{value}%</div>
              <ProgressBar variant={variant} now={value} style={{ height: 4 }} aria-label={`Progress ${variant}`} />
            </div>
          ))}
          <div>
            <div className="fs-sm mb-2">33%</div>
            <ProgressBar
              variant="dark"
              now={33}
              style={{ height: 4 }}
              className="d-none-dark"
              aria-label="Progress dark"
            />
            <ProgressBar
              variant="light"
              now={33}
              style={{ height: 4 }}
              className="d-none d-flex-dark"
              aria-label="Progress light"
            />
          </div>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default ProgressThinDemo
