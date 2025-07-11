import DocsComponentDemo from '@/components/docs/docs-component-demo'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'

const TooltipsSmallDemo = () => {
  const code = `import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'

export default function TooltipsSmallDemo() {
  return (
    <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-sm">I&apos;m a small tooltip</Tooltip>}>
      <Button variant="outline-secondary me-1 mb-1">Small tooltip example</Button>
    </OverlayTrigger>
  )
}`

  return (
    <section id="tooltips-small" className="docs-section">
      <h4>Small size</h4>
      <DocsComponentDemo code={code}>
        <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-sm">I&apos;m a small tooltip</Tooltip>}>
          <Button variant="outline-secondary me-1 mb-1">Small tooltip example</Button>
        </OverlayTrigger>
      </DocsComponentDemo>
    </section>
  )
}

export default TooltipsSmallDemo
