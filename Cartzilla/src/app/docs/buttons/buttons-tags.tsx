import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const ButtonsTagsDemo = () => {
  const code = `import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

export default function ButtonsTagsDemo() {
  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      <Button as="a" href="#">Link</Button>
      <Button type="submit">Button</Button>
      <Button as="input" type="reset" value="Input" />
      <Button as="span">Span</Button>
    </Stack>
  )
}`

  return (
    <section id="buttons-tags" className="docs-section pb-sm-2 mb-5">
      <h4>Button tags</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          <Button as="a" href="#" className="me-1 mb-1">
            Link
          </Button>
          <Button type="submit" className="me-1 mb-1">
            Button
          </Button>
          <Button as="input" type="reset" value="Input" className="me-1 mb-1" />
          <Button as="span" className="mb-1">
            Span
          </Button>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default ButtonsTagsDemo
