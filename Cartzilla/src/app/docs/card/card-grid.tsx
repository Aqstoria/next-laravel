import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardImg from 'react-bootstrap/CardImg'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'

const CardGridDemo = () => {
  const code = `import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardImg from 'react-bootstrap/CardImg'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'

export default function CardGridDemo() {
  return (
    <Row xs={1} sm={2} md={3} className="g-4">
      {[
        '/img/blog/grid/v2/01.jpg',
        '/img/blog/grid/v2/02.jpg',
        '/img/blog/grid/v2/03.jpg',
        '/img/blog/grid/v2/04.jpg',
        '/img/blog/grid/v2/05.jpg',
        '/img/blog/grid/v2/06.jpg',
      ].map((image, index) => (
        <Col key={index}>
          <Card>
            <CardImg
              as={Image}
              variant="top"
              src={image}
              width={636}
              height={466}
              className="bg-body-tertiary"
              alt="Card image"
            />
            <CardBody>
              <CardTitle as="h5">Card title</CardTitle>
              <CardText>Some quick example text to build on the card title.</CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  )
}`

  return (
    <section id="card-grid" className="docs-section">
      <h4>Layout: Card grid</h4>
      <DocsComponentDemo code={code}>
        <Row xs={1} sm={2} md={3} className="g-4">
          {[
            '/img/blog/grid/v2/01.jpg',
            '/img/blog/grid/v2/02.jpg',
            '/img/blog/grid/v2/03.jpg',
            '/img/blog/grid/v2/04.jpg',
            '/img/blog/grid/v2/05.jpg',
            '/img/blog/grid/v2/06.jpg',
          ].map((image, index) => (
            <Col key={index}>
              <Card>
                <CardImg
                  as={Image}
                  variant="top"
                  src={image}
                  width={636}
                  height={466}
                  className="bg-body-tertiary"
                  alt="Card image"
                />
                <CardBody>
                  <CardTitle as="h5">Card title</CardTitle>
                  <CardText>Some quick example text to build on the card title.</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default CardGridDemo
