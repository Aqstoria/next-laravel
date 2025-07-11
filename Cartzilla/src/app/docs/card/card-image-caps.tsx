import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Image from 'next/image'
import Card from 'react-bootstrap/Card'
import CardImg from 'react-bootstrap/CardImg'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'

const CardImageCapsDemo = () => {
  const code = `import Image from 'next/image'
import Card from 'react-bootstrap/Card'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'

export default function CardImageCapsDemo() {
  return (
    <div className="d-flex flex-column flex-sm-row gap-4">
      <Card style={{ maxWidth: 350 }}>
        <CardImg
          as={Image}
          variant="top"
          src="/img/blog/grid/v1/07.jpg"
          width={624}
          height={458}
          className="bg-body-tertiary"
          alt="Card image"
        />
        <CardBody>
          <CardTitle as="h5">Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
          </CardText>
          <Button href="#">Go somewhere</Button>
        </CardBody>
      </Card>

      <Card style={{ maxWidth: 350 }}>
        <CardBody>
          <CardTitle as="h5">Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
          </CardText>
          <Button href="#">Go somewhere</Button>
        </CardBody>
        <CardImg
          as={Image}
          variant="bottom"
          src="/img/blog/grid/v1/10.jpg"
          width={624}
          height={458}
          className="bg-body-tertiary"
          alt="Card image"
        />
      </Card>
    </div>
  )
}`

  return (
    <section id="card-image-caps" className="docs-section pb-sm-2 mb-5">
      <h4>Image caps</h4>
      <DocsComponentDemo code={code}>
        <div className="d-flex flex-column flex-sm-row gap-4">
          <Card style={{ maxWidth: 350 }}>
            <CardImg
              as={Image}
              variant="top"
              src="/img/blog/grid/v1/07.jpg"
              width={624}
              height={458}
              className="bg-body-tertiary"
              alt="Card image"
            />
            <CardBody>
              <CardTitle as="h5">Card title</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
              </CardText>
              <Button href="#">Go somewhere</Button>
            </CardBody>
          </Card>
          <Card style={{ maxWidth: 350 }}>
            <CardBody>
              <CardTitle as="h5">Card title</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
              </CardText>
              <Button href="#">Go somewhere</Button>
            </CardBody>
            <CardImg
              as={Image}
              variant="bottom"
              src="/img/blog/grid/v1/10.jpg"
              width={624}
              height={458}
              className="bg-body-tertiary"
              alt="Card image"
            />
          </Card>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default CardImageCapsDemo
