import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardHeader from 'react-bootstrap/CardHeader'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'

const CardBorderColorDemo = () => {
  const code = `import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardHeader from 'react-bootstrap/CardHeader'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'

export default function CardBorderColorDemo() {
  return (
    <Row xs={1} sm={2} className="g-4">
      {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((color) => (
        <Col key={color}>
          <Card className={\`text-\${color === 'dark' ? 'body-emphasis' : color} border-\${color}\`}>
            <CardHeader className={\`bg-\${color}-subtle border-\${color}\`}>Header</CardHeader>
            <CardBody>
              <CardTitle as="h5" className={\`text-\${color === 'dark' ? 'body-emphasis' : color}\`}>
                {color.charAt(0).toUpperCase() + color.slice(1).toLowerCase()} card title
              </CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  )
}`

  return (
    <section id="card-border-color" className="docs-section pb-sm-2 mb-5">
      <h4>Card styles: Border and text color</h4>
      <DocsComponentDemo code={code}>
        <Row xs={1} sm={2} className="g-4">
          {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((color) => (
            <Col key={color}>
              <Card className={`text-${color === 'dark' ? 'body-emphasis' : color} border-${color}`}>
                <CardHeader className={`bg-${color}-subtle border-${color}`}>Header</CardHeader>
                <CardBody>
                  <CardTitle as="h5" className={`text-${color === 'dark' ? 'body-emphasis' : color}`}>
                    {color.charAt(0).toUpperCase() + color.slice(1).toLowerCase()} card title
                  </CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default CardBorderColorDemo
