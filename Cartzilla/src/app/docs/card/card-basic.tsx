import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Card from 'react-bootstrap/Card'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'

const CardBasicDemo = () => {
  const code = `import Card from 'react-bootstrap/Card'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'

export default function CardBasicDemo() {
  return (
    <Card body style={{ maxWidth: 350 }}>
      <CardTitle as="h5">Card title</CardTitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
      </CardText>
      <Button href="#">Go somewhere</Button>
    </Card>
  )
}`

  return (
    <section id="card-basic" className="docs-section pb-sm-2 mb-5">
      <h4>Basic example</h4>
      <DocsComponentDemo code={code}>
        <Card body style={{ maxWidth: 350 }}>
          <CardTitle as="h5">Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
          </CardText>
          <Button href="#">Go somewhere</Button>
        </Card>
      </DocsComponentDemo>
    </section>
  )
}

export default CardBasicDemo
