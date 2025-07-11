import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Card from 'react-bootstrap/Card'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'

const CardAltStyleDemo = () => {
  const code = `import Card from 'react-bootstrap/Card'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'

export default function CardAltStyleDemo() {
  return (
    <div className="d-flex flex-column flex-sm-row gap-4">
      <Card body className="bg-body-tertiary border-0" style={{ maxWidth: 350 }}>
        <CardTitle as="h5">Card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        </CardText>
        <Button href="#">Go somewhere</Button>
      </Card>

      <Card body className="border-0 shadow" style={{ maxWidth: 350 }}>
        <CardTitle as="h5">Card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        </CardText>
        <Button href="#">Go somewhere</Button>
      </Card>
    </div>
  )
}`

  return (
    <section id="card-alt-style" className="docs-section pb-sm-2 mb-5">
      <h4>Alternative card style</h4>
      <DocsComponentDemo code={code}>
        <div className="d-flex flex-column flex-sm-row gap-4">
          <Card body className="bg-body-tertiary border-0" style={{ maxWidth: 350 }}>
            <CardTitle as="h5">Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
            </CardText>
            <Button href="#">Go somewhere</Button>
          </Card>
          <Card body className="border-0 shadow" style={{ maxWidth: 350 }}>
            <CardTitle as="h5">Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
            </CardText>
            <Button href="#">Go somewhere</Button>
          </Card>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default CardAltStyleDemo
