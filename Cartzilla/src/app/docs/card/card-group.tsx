import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Image from 'next/image'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import CardImg from 'react-bootstrap/CardImg'
import CardBody from 'react-bootstrap/CardBody'
import CardFooter from 'react-bootstrap/CardFooter'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'

const CardGroupDemo = () => {
  const code = `import Image from 'next/image'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import CardImg from 'react-bootstrap/CardImg'
import CardBody from 'react-bootstrap/CardBody'
import CardFooter from 'react-bootstrap/CardFooter'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'

export default function CardGroupDemo() {
  return (
    <CardGroup>
      <Card>
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
            This is a wider card with supporting text below as a natural lead-in to additional content. This card
            has even longer content than the first to show that equal height action.
          </CardText>
        </CardBody>
        <CardFooter className="text-body-tertiary bg-transparent border-0 fs-sm pt-0 pb-4">
          Last updated 3 mins ago
        </CardFooter>
      </Card>

      <Card>
        <CardImg
          as={Image}
          variant="top"
          src="/img/blog/grid/v1/10.jpg"
          width={624}
          height={458}
          className="bg-body-tertiary"
          alt="Card image"
        />
        <CardBody>
          <CardTitle as="h5">Card title</CardTitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
        <CardFooter className="text-body-tertiary bg-transparent border-0 fs-sm pt-0 pb-4">
          Last updated 5 mins ago
        </CardFooter>
      </Card>
    </CardGroup>
  )
}`

  return (
    <section id="card-group" className="docs-section pb-sm-2 mb-5">
      <h4>Layout: Card group</h4>
      <DocsComponentDemo code={code}>
        <CardGroup>
          <Card>
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
                This is a wider card with supporting text below as a natural lead-in to additional content. This card
                has even longer content than the first to show that equal height action.
              </CardText>
            </CardBody>
            <CardFooter className="text-body-tertiary bg-transparent border-0 fs-sm pt-0 pb-4">
              Last updated 3 mins ago
            </CardFooter>
          </Card>
          <Card>
            <CardImg
              as={Image}
              variant="top"
              src="/img/blog/grid/v1/10.jpg"
              width={624}
              height={458}
              className="bg-body-tertiary"
              alt="Card image"
            />
            <CardBody>
              <CardTitle as="h5">Card title</CardTitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
            <CardFooter className="text-body-tertiary bg-transparent border-0 fs-sm pt-0 pb-4">
              Last updated 5 mins ago
            </CardFooter>
          </Card>
        </CardGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default CardGroupDemo
