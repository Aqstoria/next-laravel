import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import PopoverHeader from 'react-bootstrap/PopoverHeader'
import PopoverBody from 'react-bootstrap/PopoverBody'

const PopoversLiveDemo = () => {
  const code = `import Stack from 'react-bootstrap/Stack'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import PopoverHeader from 'react-bootstrap/PopoverHeader'
import PopoverBody from 'react-bootstrap/PopoverBody'

export default function PopoversLiveDemo() {
  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      {(['top', 'right', 'bottom', 'left'] as const).map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Popover id={\`popover-positioned-\${placement}\`}>
              <PopoverHeader as="h3">{\`Popover \${placement}\`}</PopoverHeader>
              <PopoverBody>And here&apos;s some amazing content. It&apos;s very engaging. Right?</PopoverBody>
            </Popover>
          }
        >
          <Button variant="outline-secondary me-1 mb-1">Popover on {placement}</Button>
        </OverlayTrigger>
      ))}
    </Stack>
  )
}`

  return (
    <section id="popovers-live" className="docs-section pb-sm-2 mb-5">
      <h4>Live demo</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          {(['top', 'right', 'bottom', 'left'] as const).map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <PopoverHeader as="h3">{`Popover ${placement}`}</PopoverHeader>
                  <PopoverBody>And here&apos;s some amazing content. It&apos;s very engaging. Right?</PopoverBody>
                </Popover>
              }
            >
              <Button variant="outline-secondary me-1 mb-1">Popover on {placement}</Button>
            </OverlayTrigger>
          ))}
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default PopoversLiveDemo
