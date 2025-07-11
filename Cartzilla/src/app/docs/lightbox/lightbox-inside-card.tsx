import Image from 'next/image'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'
import Lightbox from '@/components/lightbox'

const LightboxCardDemo = () => {
  const code = `import Image from 'next/image'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'
import Lightbox from '@/components/lightbox'

export default function LightboxCardDemo() {
  return (
    <Card style={{ maxWidth: 350 }}>
      <Lightbox
        href="/img/blog/grid/v1/07.jpg"
        gallery="card"
        className="hover-effect-scale hover-effect-opacity card-img-top d-flex position-relative overflow-hidden"
      >
        <i className="ci-zoom-in fs-2 position-absolute top-50 start-50 translate-middle text-white opacity-0 z-2"/>
        <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1"></span>
        <Image src="/img/blog/grid/v1/07.jpg" width={416} height={305} alt="Card image" />
      </Lightbox>
      <CardBody>
        <CardTitle as="h5">Card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        </CardText>
        <Button href="#">Go somewhere</Button>
      </CardBody>
    </Card>
  )
}`

  return (
    <section id="lightbox-card" className="docs-section">
      <h4>Inside card</h4>
      <DocsComponentDemo code={code}>
        <Card style={{ maxWidth: 350 }}>
          <Lightbox
            href="/img/blog/grid/v1/07.jpg"
            gallery="card"
            className="hover-effect-scale hover-effect-opacity card-img-top d-flex position-relative overflow-hidden"
          >
            <i className="ci-zoom-in fs-2 position-absolute top-50 start-50 translate-middle text-white opacity-0 z-2" />
            <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1"></span>
            <Image src="/img/blog/grid/v1/07.jpg" width={416} height={305} alt="Card image" />
          </Lightbox>
          <CardBody>
            <CardTitle as="h5">Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
            </CardText>
            <Button href="#">Go somewhere</Button>
          </CardBody>
        </Card>
      </DocsComponentDemo>
    </section>
  )
}

export default LightboxCardDemo
