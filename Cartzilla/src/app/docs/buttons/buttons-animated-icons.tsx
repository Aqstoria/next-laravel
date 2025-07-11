import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const ButtonsAnimatedIconsDemo = () => {
  const code = `import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

export default function ButtonsAnimatedIconsDemo() {
  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      <Button className="animate-scale">
        <i className="ci-thumbs-up animate-target fs-base me-2 ms-n1"/>
        Like
      </Button>

      <Button variant="outline-secondary" className="animate-slide-end">
        Send
        <i className="ci-send animate-target fs-base ms-2 me-n1"/>
      </Button>

      <Button variant="success" className="btn-icon animate-shake fs-lg" aria-label="Notifications">
        <i className="ci-bell animate-target"/>
      </Button>

      <Button
        variant="secondary"
        className="btn-icon animate-rotate fs-lg rounded-circle"
        aria-label="Settings"
      >
        <i className="ci-settings animate-target"/>
      </Button>

      <Button
        variant="outline-danger"
        className="btn-icon animate-pulse fs-base rounded-circle"
        aria-label="Favorite"
      >
        <i className="ci-heart animate-target"/>
      </Button>
    </Stack>
  )
}`

  return (
    <section id="buttons-animated-icons" className="docs-section pb-sm-2 mb-5">
      <h4>Animated icons</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          <Button className="animate-scale me-1 mb-1">
            <i className="ci-thumbs-up animate-target fs-base me-2 ms-n1" />
            Like
          </Button>
          <Button variant="outline-secondary" className="animate-slide-end me-1 mb-1">
            Send
            <i className="ci-send animate-target fs-base ms-2 me-n1" />
          </Button>
          <Button variant="success" className="btn-icon animate-shake fs-lg me-1 mb-1" aria-label="Notifications">
            <i className="ci-bell animate-target" />
          </Button>
          <Button
            variant="secondary"
            className="btn-icon animate-rotate fs-lg rounded-circle me-1 mb-1"
            aria-label="Settings"
          >
            <i className="ci-settings animate-target" />
          </Button>
          <Button
            variant="outline-danger"
            className="btn-icon animate-pulse fs-base rounded-circle mb-1"
            aria-label="Favorite"
          >
            <i className="ci-heart animate-target" />
          </Button>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default ButtonsAnimatedIconsDemo
