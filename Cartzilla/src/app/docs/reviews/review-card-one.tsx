import Image from 'next/image'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Card from 'react-bootstrap/Card'
import StarRating from '@/components/reviews/star-rating'

const ReviewsCardVariantOneDemo = () => {
  const code = `import Image from 'next/image'
import Card from 'react-bootstrap/Card'
import StarRating from '@/components/reviews/star-rating'

export default function ReviewsCardVariantOneDemo() {
  return (
    <Card body className="rounded-4 p-sm-2" style={{ maxWidth: 416 }}>
      <div className="d-flex align-items-center mb-3">
        <Image
          src="/img/home/fashion/v1/reviews/02.png"
          className="flex-shrink-0"
          width={160}
          height={160}
          alt="Image"
        />
        <div className="ps-2 ms-1">
          <StarRating rating={5} className="fs-xs pb-2 mb-1" />
          <h3 className="h6 mb-0">Alexandra D.</h3>
        </div>
      </div>
      <p className="mb-0">
        A wonderful compact bag, holds a lot of things, good tailoring, smooth seams, strong fittings, good quality.
      </p>
    </Card>
  )
}`

  return (
    <section id="review-card-1" className="docs-section pb-sm-2 mb-5">
      <h4>Inside card: Variant 1</h4>
      <DocsComponentDemo code={code}>
        <Card body className="rounded-4 p-sm-2" style={{ maxWidth: 416 }}>
          <div className="d-flex align-items-center mb-3">
            <Image
              src="/img/home/fashion/v1/reviews/02.png"
              className="flex-shrink-0"
              width={80}
              height={80}
              alt="Image"
            />
            <div className="ps-2 ms-1">
              <StarRating rating={5} className="fs-xs pb-2 mb-1" />
              <h3 className="h6 mb-0">Alexandra D.</h3>
            </div>
          </div>
          <p className="mb-0">
            A wonderful compact bag, holds a lot of things, good tailoring, smooth seams, strong fittings, good quality.
          </p>
        </Card>
      </DocsComponentDemo>
    </section>
  )
}

export default ReviewsCardVariantOneDemo
