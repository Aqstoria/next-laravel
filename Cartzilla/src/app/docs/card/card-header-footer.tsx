import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardHeader from 'react-bootstrap/CardHeader'
import CardFooter from 'react-bootstrap/CardFooter'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'

const CardHeaderFooterDemo = () => {
  const code = `import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardHeader from 'react-bootstrap/CardHeader'
import CardFooter from 'react-bootstrap/CardFooter'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'

export default function CardHeaderFooterDemo() {
  return (
    <Card className="text-center" style={{ maxWidth: 650 }}>
      <CardHeader as="h6">Featured</CardHeader>
      <CardBody>
        <CardTitle as="h4">Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button href="#">Go somewhere</Button>
      </CardBody>
      <CardFooter className="fs-sm text-body-secondary">3 days ago</CardFooter>
    </Card>
  )
}`

  return (
    <section id="card-header-footer" className="docs-section pb-sm-2 mb-5">
      <h4>Header and footer</h4>
      <DocsComponentDemo code={code}>
        <Card className="text-center" style={{ maxWidth: 650 }}>
          <CardHeader as="h6">Featured</CardHeader>
          <CardBody>
            <CardTitle as="h4">Special title treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button href="#">Go somewhere</Button>
          </CardBody>
          <CardFooter className="fs-sm text-body-secondary">3 days ago</CardFooter>
        </Card>
      </DocsComponentDemo>
    </section>
  )
}

export default CardHeaderFooterDemo
