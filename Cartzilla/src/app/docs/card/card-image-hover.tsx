import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Image from 'next/image'
import ImageSwapOnHover from '@/components/image/image-swap-on-hover'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'

const CardImageHoverDemo = () => {
  const code = `import Image from 'next/image'
import ImageSwapOnHover from '@/components/image-swap-on-hover'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'

export default function CardImageHoverDemo() {
  return (
    <div className="d-flex flex-column flex-sm-row gap-4">
      <Card style={{ maxWidth: 350 }}>
        <div className="hover-effect-scale hover-effect-opacity card-img-top position-relative overflow-hidden">
          <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1"></span>
          <div className="hover-effect-target d-flex position-absolute top-0 start-0 w-100 h-100 align-items-center justify-content-center z-2 opacity-0">
            <div className="d-flex align-items-center gap-3 fs-sm bg-dark bg-opacity-50 text-white rounded-pill py-2 px-3">
              <span className="d-flex align-items-center fw-medium">
                <i className="ci-heart fs-base me-1"/>
                12
              </span>
              <span className="d-flex align-items-center fw-medium">
                <i className="ci-message-square fs-base me-1"/>8
              </span>
            </div>
          </div>
          <Image
            src="/img/blog/grid/v1/08.jpg"
            width={624}
            height={458}
            className="hover-effect-target"
            alt="Card image"
          />
        </div>
        <CardBody>
          <CardTitle as="h5">Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
          </CardText>
          <Button href="#">Go somewhere</Button>
        </CardBody>
      </Card>

      <Card style={{ maxWidth: 350 }}>
        <ImageSwapOnHover
          imageSwapFrom={{
            src: '/img/docs/card/img.png',
            width: 624,
            height: 458,
            alt: 'Image idle',
          }}
          imageSwapTo={{
            src: '/img/docs/card/img-hover.jpg',
            width: 624,
            height: 458,
            alt: 'Image hover',
          }}
          className="card-img-top"
        />
        <CardBody>
          <CardTitle as="h5">Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
          </CardText>
          <Button href="#">Go somewhere</Button>
        </CardBody>
      </Card>
    </div>
  )
}`

  return (
    <section id="card-image-hover" className="docs-section pb-sm-2 mb-5">
      <h4>Image hover effects</h4>
      <DocsComponentDemo code={code}>
        <div className="d-flex flex-column flex-sm-row gap-4">
          <Card style={{ maxWidth: 350 }}>
            <div className="hover-effect-scale hover-effect-opacity card-img-top position-relative overflow-hidden">
              <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1"></span>
              <div className="hover-effect-target d-flex position-absolute top-0 start-0 w-100 h-100 align-items-center justify-content-center z-2 opacity-0">
                <div className="d-flex align-items-center gap-3 fs-sm bg-dark bg-opacity-50 text-white rounded-pill py-2 px-3">
                  <span className="d-flex align-items-center fw-medium">
                    <i className="ci-heart fs-base me-1" />
                    12
                  </span>
                  <span className="d-flex align-items-center fw-medium">
                    <i className="ci-message-square fs-base me-1" />8
                  </span>
                </div>
              </div>
              <Image
                src="/img/blog/grid/v1/08.jpg"
                width={624}
                height={458}
                className="hover-effect-target"
                alt="Card image"
              />
            </div>
            <CardBody>
              <CardTitle as="h5">Card title</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
              </CardText>
              <Button href="#">Go somewhere</Button>
            </CardBody>
          </Card>
          <Card style={{ maxWidth: 350 }}>
            <ImageSwapOnHover
              imageSwapFrom={{
                src: '/img/docs/card/img.png',
                width: 624,
                height: 458,
                alt: 'Image idle',
              }}
              imageSwapTo={{
                src: '/img/docs/card/img-hover.jpg',
                width: 624,
                height: 458,
                alt: 'Image hover',
              }}
              className="card-img-top"
            />
            <CardBody>
              <CardTitle as="h5">Card title</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
              </CardText>
              <Button href="#">Go somewhere</Button>
            </CardBody>
          </Card>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default CardImageHoverDemo
