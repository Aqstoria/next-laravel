import Image from 'next/image'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardFooter from 'react-bootstrap/CardFooter'
import StarRating from '@/components/reviews/star-rating'

const ReviewsCardVariantTwoDemo = () => {
  const code = `import Image from 'next/image'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardFooter from 'react-bootstrap/CardFooter'
import StarRating from '@/components/reviews/star-rating'

export default function ReviewsCardVariantTwoDemo() {
  return (
    <Card className="bg-transparent border-0 rounded-5 shadow overflow-hidden p-xl-2" style={{ maxWidth: 416 }}>
      <CardBody className="position-relative z-1 pb-1 pb-lg-2 pb-xl-3">
        <StarRating rating={5} className="mb-3" />
        <h3 className="h5 pb-2 mb-1">Perfect for daily use!</h3>
        <p className="mb-0">
          I bought the metallic blue bottle, and it has quickly become my go-to for everything! It keeps my water
          cold all day, even during my long shifts at work. Absolutely love it 🤩
        </p>
      </CardBody>
      <CardFooter className="position-relative z-1 d-flex align-items-center bg-transparent border-0 py-4">
        <Image
          src="/img/home/single-product/reviews/ava01.jpg"
          className="flex-shrink-0 bg-body-secondary rounded-circle"
          width={44}
          height={44}
          alt="Avatar"
        />
        <div className="fs-sm ps-2 ms-1">
          <div className="fw-semibold text-dark-emphasis">Jenny Wilson</div>
          <div>Freshness Bottle</div>
        </div>
      </CardFooter>
      <span className="position-absolute top-0 start-0 w-100 h-100 bg-white d-none-dark"></span>
      <span
        className="position-absolute top-0 start-0 w-100 h-100 bg-white d-none d-block-dark"
        style={{ opacity: 0.08 }}
      ></span>
    </Card>
  )
}`

  return (
    <section id="review-card-2" className="docs-section pb-sm-2 mb-5">
      <h4>Inside card: Variant 2</h4>
      <DocsComponentDemo code={code}>
        <Card className="bg-transparent border-0 rounded-5 shadow overflow-hidden p-xl-2" style={{ maxWidth: 416 }}>
          <CardBody className="position-relative z-1 pb-1 pb-lg-2 pb-xl-3">
            <StarRating rating={5} className="mb-3" />
            <h3 className="h5 pb-2 mb-1">Perfect for daily use!</h3>
            <p className="mb-0">
              I bought the metallic blue bottle, and it has quickly become my go-to for everything! It keeps my water
              cold all day, even during my long shifts at work. Absolutely love it 🤩
            </p>
          </CardBody>
          <CardFooter className="position-relative z-1 d-flex align-items-center bg-transparent border-0 py-4">
            <Image
              src="/img/home/single-product/reviews/ava01.jpg"
              className="flex-shrink-0 bg-body-secondary rounded-circle"
              width={44}
              height={44}
              alt="Avatar"
            />
            <div className="fs-sm ps-2 ms-1">
              <div className="fw-semibold text-dark-emphasis">Jenny Wilson</div>
              <div>Freshness Bottle</div>
            </div>
          </CardFooter>
          <span className="position-absolute top-0 start-0 w-100 h-100 bg-white d-none-dark"></span>
          <span
            className="position-absolute top-0 start-0 w-100 h-100 bg-white d-none d-block-dark"
            style={{ opacity: 0.08 }}
          ></span>
        </Card>
      </DocsComponentDemo>
    </section>
  )
}

export default ReviewsCardVariantTwoDemo
