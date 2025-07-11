import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import ReviewsProductVariantOneDemo from './review-product-one'
import ReviewsProductVariantTwoDemo from './review-product-two'
import ReviewsCardVariantOneDemo from './review-card-one'
import ReviewsCardVariantTwoDemo from './review-card-two'
import CommentDemo from './comment'
import ReviewsRatingBreakdownDemo from './review-rating-breakdown'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Reviews',
}

const ReviewsDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge bg="info-subtle" text="info" pill className="fw-semibold py-2 px-3 mb-2">
        Cartzilla component
      </Badge>
      <h1 className="pt-1">Reviews</h1>
      <p className="text-body-secondary mb-4">
        Display customer feedback with ratings, enhancing credibility and informing potential buyers.
      </p>
    </section>
    <ReviewsProductVariantOneDemo />
    <ReviewsProductVariantTwoDemo />
    <ReviewsCardVariantOneDemo />
    <ReviewsCardVariantTwoDemo />
    <CommentDemo />
    <ReviewsRatingBreakdownDemo />
  </>
)

export default ReviewsDocsPage
