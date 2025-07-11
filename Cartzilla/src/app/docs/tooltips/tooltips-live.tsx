import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'

const TooltipsLiveDemo = () => {
  const code = `import Stack from 'react-bootstrap/Stack'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'

export default function TooltipsLiveDemo() {
  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      {(['top', 'right', 'bottom', 'left'] as const).map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={<Tooltip id={\`tooltip-positioned-\${placement}\`}>Tooltip on {placement}</Tooltip>}
        >
          <Button variant="outline-secondary me-1 mb-1">Tooltip on {placement}</Button>
        </OverlayTrigger>
      ))}
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip>
            <i>Tooltip</i> <u>with</u> <strong>HTML</strong>
          </Tooltip>
        }
      >
        <Button variant="outline-secondary mb-1">Tooltip with HTML</Button>
      </OverlayTrigger>
    </Stack>
  )
}`

  return (
    <section id="tooltips-live" className="docs-section pb-sm-2 mb-5">
      <h4>Live demo</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          {(['top', 'right', 'bottom', 'left'] as const).map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={<Tooltip id={`tooltip-positioned-${placement}`}>Tooltip on {placement}</Tooltip>}
            >
              <Button variant="outline-secondary me-1 mb-1">Tooltip on {placement}</Button>
            </OverlayTrigger>
          ))}
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                <i>Tooltip</i> <u>with</u> <strong>HTML</strong>
              </Tooltip>
            }
          >
            <Button variant="outline-secondary me-1 mb-1">Tooltip with HTML</Button>
          </OverlayTrigger>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default TooltipsLiveDemo
