import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const ButtonsSizesDemo = () => {
  const code = `import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

export default function ButtonsSizesDemo() {
  return (
    <>
      <Stack direction="horizontal" gap={2} className="flex-wrap mb-3">
        <Button size="lg">Large button</Button>
        <Button>Normal button</Button>
        <Button size="sm">Small button</Button>
      </Stack>
      <Button className="w-100">Block level button</Button>
    </>
  )
}`

  return (
    <section id="buttons-sizes" className="docs-section pb-sm-2 mb-5">
      <h4>Sizes</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap mb-3">
          <Button size="lg" className="me-1 mb-1">
            Large button
          </Button>
          <Button className="me-1 mb-1">Normal button</Button>
          <Button size="sm" className="me-1 mb-1">
            Small button
          </Button>
        </Stack>
        <Stack direction="horizontal" gap={2} className="flex-wrap mb-3">
          <Button variant="outline-primary" size="lg" className="me-1 mb-1">
            Large button
          </Button>
          <Button variant="outline-primary" className="me-1 mb-1">
            Normal button
          </Button>
          <Button variant="outline-primary" size="sm" className="mb-1">
            Small button
          </Button>
        </Stack>
        <div className="d-flex flex-column flex-sm-row gap-3 gap-sm-4">
          <Button className="w-100">Block level button</Button>
          <Button variant="outline-primary" className="w-100">
            Block level button
          </Button>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default ButtonsSizesDemo
