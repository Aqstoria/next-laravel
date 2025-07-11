import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Image from 'next/image'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const CardHorizontalDemo = () => {
  const code = `import Image from 'next/image'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function CardHorizontalDemo() {
  return (
    <>
      <Card className="overflow-hidden mb-4">
        <Row className="g-0">
          <Col sm={4} className="position-relative bg-body-tertiary" style={{ minHeight: 220 }}>
            <Image src="/img/blog/grid/v2/09.jpg" fill={true} className="object-fit-cover" alt="Card image" />
          </Col>
          <Col sm={8}>
            <CardBody>
              <CardTitle as="h5">Card title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </CardText>
              <Button href="#">Go somewhere</Button>
            </CardBody>
          </Col>
        </Row>
      </Card>

      <Card className="overflow-hidden mb-4">
        <Row className="g-0">
          <Col sm={4} className="position-relative order-sm-2 bg-body-tertiary" style={{ minHeight: 220 }}>
            <Image src="/img/blog/grid/v2/11.jpg" fill={true} className="object-fit-cover" alt="Card image" />
          </Col>
          <Col sm={8} className="order-sm-1">
            <CardBody>
              <CardTitle as="h5">Card title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </CardText>
              <Button href="#">Go somewhere</Button>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </>
  )
}`

  return (
    <section id="card-horizontal" className="docs-section pb-sm-2 mb-5">
      <h4>Horizontal layout</h4>
      <DocsComponentDemo code={code}>
        <Card className="overflow-hidden mb-4">
          <Row className="g-0">
            <Col sm={4} className="position-relative bg-body-tertiary" style={{ minHeight: 220 }}>
              <Image src="/img/blog/grid/v2/09.jpg" fill={true} className="object-fit-cover" alt="Card image" />
            </Col>
            <Col sm={8}>
              <CardBody>
                <CardTitle as="h5">Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </CardText>
                <Button href="#">Go somewhere</Button>
              </CardBody>
            </Col>
          </Row>
        </Card>
        <Card className="overflow-hidden mb-4">
          <Row className="g-0">
            <Col sm={4} className="position-relative order-sm-2 bg-body-tertiary" style={{ minHeight: 220 }}>
              <Image src="/img/blog/grid/v2/11.jpg" fill={true} className="object-fit-cover" alt="Card image" />
            </Col>
            <Col sm={8} className="order-sm-1">
              <CardBody>
                <CardTitle as="h5">Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </CardText>
                <Button href="#">Go somewhere</Button>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </DocsComponentDemo>
    </section>
  )
}

export default CardHorizontalDemo
