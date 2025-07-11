import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'

const CardTextAlignmentDemo = () => {
  const code = `import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'

export default function CardTextAlignmentDemo() {
  return (
    <Row xs={1} md={3} className="g-4">
      {['start', 'center', 'end'].map((alignment) => (
        <Col key={alignment}>
          <Card body className={\`text-\${alignment}\`}>
            <CardTitle as="h5">Card title</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button href="#">Go somewhere</Button>
          </Card>
        </Col>
      ))}
    </Row>
  )
}`

  return (
    <section id="card-text-alignment" className="docs-section pb-sm-2 mb-5">
      <h4>Text alignment</h4>
      <DocsComponentDemo code={code}>
        <Row xs={1} md={3} className="g-4">
          {['start', 'center', 'end'].map((alignment) => (
            <Col key={alignment}>
              <Card body className={`text-${alignment}`}>
                <CardTitle as="h5">Card title</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button href="#">Go somewhere</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default CardTextAlignmentDemo
