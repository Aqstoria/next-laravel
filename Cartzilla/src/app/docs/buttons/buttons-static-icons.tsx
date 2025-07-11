import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const ButtonsStaticIconsDemo = () => {
  const code = `import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

export default function ButtonsStaticIconsDemo() {
  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      <Button>
        <i className="ci-thumbs-up fs-base me-2 ms-n1"/>
        Like
      </Button>

      <Button variant="outline-secondary">
        Send
        <i className="ci-send fs-base ms-2 me-n1"/>
      </Button>

      <Button variant="success" className="btn-icon fs-lg" aria-label="Notifications">
        <i className="ci-bell"/>
      </Button>

      <Button variant="secondary" className="btn-icon fs-lg rounded-circle" aria-label="Settings">
        <i className="ci-settings"/>
      </Button>

      <Button variant="outline-danger" className="btn-icon fs-base rounded-circle" aria-label="Favorite">
        <i className="ci-heart"/>
      </Button>
    </Stack>
  )
}`

  return (
    <section id="buttons-static-icons" className="docs-section pb-sm-2 mb-5">
      <h4>Static icons</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          <Button className="me-1 mb-1">
            <i className="ci-thumbs-up fs-base me-2 ms-n1" />
            Like
          </Button>
          <Button variant="outline-secondary" className="me-1 mb-1">
            Send
            <i className="ci-send fs-base ms-2 me-n1" />
          </Button>
          <Button variant="success" className="btn-icon fs-lg me-1 mb-1" aria-label="Notifications">
            <i className="ci-bell" />
          </Button>
          <Button variant="secondary" className="btn-icon fs-lg rounded-circle me-1 mb-1" aria-label="Settings">
            <i className="ci-settings" />
          </Button>
          <Button variant="outline-danger" className="btn-icon fs-base rounded-circle mb-1" aria-label="Favorite">
            <i className="ci-heart" />
          </Button>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default ButtonsStaticIconsDemo
