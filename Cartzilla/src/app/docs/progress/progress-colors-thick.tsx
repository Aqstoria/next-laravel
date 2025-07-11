import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import ProgressBar from 'react-bootstrap/ProgressBar'

const ProgressThickDemo = () => {
  const code = `import Stack from 'react-bootstrap/Stack'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function ProgressThickDemo() {
  return (
    <Stack direction="vertical" gap={3}>
      {[
        { variant: 'primary', value: 45 },
        { variant: 'success', value: 55 },
        { variant: 'danger', value: 40 },
        { variant: 'warning', value: 70 },
        { variant: 'info', value: 60 },
      ].map(({ variant, value }, index) => (
        <ProgressBar
          key={index}
          variant={variant}
          now={value}
          label={\`\${value}%\`}
          aria-label={\`Progress \${variant}\`}
        />
      ))}
      <ProgressBar
        variant="dark"
        now={33}
        label="33%"
        className="d-none-dark"
        aria-label="Progress dark"
      />
      <ProgressBar
        variant="light"
        now={33}
        label="33%"
        className="d-none d-flex-dark"
        aria-label="Progress light"
      />
    </Stack>
  )
}`

  return (
    <section id="progress-colors-thick" className="docs-section pb-sm-2 mb-5">
      <h4>Color variations (thick)</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="vertical" gap={3}>
          {[
            { variant: 'primary', value: 45 },
            { variant: 'success', value: 55 },
            { variant: 'danger', value: 40 },
            { variant: 'warning', value: 70 },
            { variant: 'info', value: 60 },
          ].map(({ variant, value }, index) => (
            <ProgressBar
              key={index}
              variant={variant}
              now={value}
              label={`${value}%`}
              aria-label={`Progress ${variant}`}
            />
          ))}
          <ProgressBar variant="dark" now={33} label="33%" className="d-none-dark" aria-label="Progress dark" />
          <ProgressBar
            variant="light"
            now={33}
            label="33%"
            className="d-none d-flex-dark"
            aria-label="Progress light"
          />
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default ProgressThickDemo
