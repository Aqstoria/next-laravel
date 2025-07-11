import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Badge from 'react-bootstrap/Badge'

const BadgesHeadingDemo = () => {
  const code = `import Badge from 'react-bootstrap/Badge'

export default function BadgesHeadingDemo() {
  return (
    <>
      <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
      <h2>
        Example heading <Badge bg="secondary">New</Badge>
      </h2>
      <h3>
        Example heading <Badge bg="secondary">New</Badge>
      </h3>
      <h4>
        Example heading <Badge bg="secondary">New</Badge>
      </h4>
      <h5>
        Example heading <Badge bg="secondary">New</Badge>
      </h5>
      <h6>
        Example heading <Badge bg="secondary">New</Badge>
      </h6>
    </>
  )
}`

  return (
    <section id="badges-heading" className="docs-section pb-sm-2 mb-5">
      <h4>Inside heading</h4>
      <DocsComponentDemo code={code}>
        <h1>
          Example heading <Badge bg="secondary">New</Badge>
        </h1>
        <h2>
          Example heading <Badge bg="secondary">New</Badge>
        </h2>
        <h3>
          Example heading <Badge bg="secondary">New</Badge>
        </h3>
        <h4>
          Example heading <Badge bg="secondary">New</Badge>
        </h4>
        <h5>
          Example heading <Badge bg="secondary">New</Badge>
        </h5>
        <h6 className="mb-2">
          Example heading <Badge bg="secondary">New</Badge>
        </h6>
      </DocsComponentDemo>
    </section>
  )
}

export default BadgesHeadingDemo
