import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import PopoverHeader from 'react-bootstrap/PopoverHeader'
import PopoverBody from 'react-bootstrap/PopoverBody'

const PopoversToggleOptionsDemo = () => {
  const code = `import Stack from 'react-bootstrap/Stack'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import PopoverHeader from 'react-bootstrap/PopoverHeader'
import PopoverBody from 'react-bootstrap/PopoverBody'

export default function PopoversToggleOptionsDemo() {
  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      {(['click', 'hover', 'focus'] as const).map((trigger) => (
        <OverlayTrigger
          key={trigger}
          trigger={trigger === 'hover' ? ['hover', 'focus'] : trigger}
          placement="top"
          overlay={
            <Popover id={\`popover-on-\${trigger}\`}>
              <PopoverHeader as="h3">{\`Popover on \${trigger}\`}</PopoverHeader>
              <PopoverBody>And here&apos;s some amazing content. It&apos;s very engaging. Right?</PopoverBody>
            </Popover>
          }
        >
          <Button variant="outline-secondary me-1 mb-1">Popover on {trigger}</Button>
        </OverlayTrigger>
      ))}
    </Stack>
  )
}`

  return (
    <section id="popovers-toggle" className="docs-section">
      <h4>Toggle options</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          <OverlayTrigger
            trigger="click"
            placement="top"
            overlay={
              <Popover id="popover-on-click">
                <PopoverHeader as="h3">Popover on click</PopoverHeader>
                <PopoverBody>And here&apos;s some amazing content. It&apos;s very engaging. Right?</PopoverBody>
              </Popover>
            }
          >
            <Button variant="primary me-1 mb-1">Toggle popover on click</Button>
          </OverlayTrigger>
          <OverlayTrigger
            trigger={['hover', 'focus']}
            placement="top"
            overlay={
              <Popover id="popover-on-hover">
                <PopoverHeader as="h3">Popover on hover</PopoverHeader>
                <PopoverBody>And here&apos;s some amazing content. It&apos;s very engaging. Right?</PopoverBody>
              </Popover>
            }
          >
            <Button variant="outline-primary me-1 mb-1">Toggle popover on hover</Button>
          </OverlayTrigger>
          <OverlayTrigger
            trigger="focus"
            placement="top"
            overlay={
              <Popover id="popover-on-focus">
                <PopoverHeader as="h3">Popover on focus</PopoverHeader>
                <PopoverBody>And here&apos;s some amazing content. It&apos;s very engaging. Right?</PopoverBody>
              </Popover>
            }
          >
            <Button variant="outline-secondary me-1 mb-1">Toggle popover on focus</Button>
          </OverlayTrigger>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default PopoversToggleOptionsDemo
