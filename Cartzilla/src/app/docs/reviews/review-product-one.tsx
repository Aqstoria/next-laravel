'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ReviewVariantOne from '@/components/reviews/review-variant-one'
import Badge from 'react-bootstrap/Badge'

const ReviewsProductVariantOneDemo = () => {
  const code = `'use client'

import { useState } from 'react'
import ReviewVariantOne from '@/components/reviews/review-variant-one'
import Badge from 'react-bootstrap/Badge'

export default function ReviewsProductVariantOneDemo() {
  const [likeCount, setLikeCount] = useState(29)
  const [dislikeCount, setDislikeCount] = useState(5)
  const [userLike, setUserLike] = useState(false)
  const [userDislike, setUserDislike] = useState(false)

  const handleLike = () => {
    if (userLike) {
      setLikeCount(likeCount - 1)
      setUserLike(false)
    } else {
      setLikeCount(likeCount + 1)
      if (userDislike) {
        setDislikeCount(dislikeCount - 1)
        setUserDislike(false)
      }
      setUserLike(true)
    }
  }

  const handleDislike = () => {
    if (userDislike) {
      setDislikeCount(dislikeCount - 1)
      setUserDislike(false)
    } else {
      setDislikeCount(dislikeCount + 1)
      if (userLike) {
        setLikeCount(likeCount - 1)
        setUserLike(false)
      }
      setUserDislike(true)
    }
  }

  return (
    <ReviewVariantOne
      author="Andrew Richards"
      verified // Can also be a string of text that is displayed in a tooltip
      rating={5}
      // darkRating // Switch to dark color (rating stars)
      date="May 7, 2025"
      product={{
        Color: 'Purple',
        Model: '128GB',
        // Add as many Key: value pairs as you need
      }}
      text="The iPhone 14 is nothing short of exceptional, combining cutting-edge technology with a design that continues to set the standard for premium smartphones. That's why it deserves a perfect 5-star rating."
      pros={{
        // label: '' // default "Pros" label can be altered
        list: ['Unparalleled performance', 'great camera', 'stunning design'],
      }}
      cons={{
        // label: '' // default "Cons" label can be altered
        list: ['No in my opinion'],
      }}
      replyButton={{
        // label: '' // default "Reply" label can be altered
        onClick: () => alert('Reply button clicked!'),
      }}
      likeButton={{
        count: likeCount,
        onClick: handleLike,
      }}
      dislikeButton={{
        count: dislikeCount,
        onClick: handleDislike,
      }}
    >
      <div className="ps-3 pb-2">
        <div className="d-flex align-items-center pt-3 pb-2 mb-1">
          <Badge bg="primary" className="me-2">
            Reply
          </Badge>
          <span className="h6 mb-0 me-4">Cartzilla Company</span>
          <span className="text-body-secondary fs-sm">May 8, 2025</span>
        </div>
        <p className="fs-sm mb-0">
          Thank you for your feedback! We are glad that you were satisfied with your purchase :)
        </p>
      </div>
    </ReviewVariantOne>
  )
}`

  const [likeCount, setLikeCount] = useState(29)
  const [dislikeCount, setDislikeCount] = useState(5)
  const [userLike, setUserLike] = useState(false)
  const [userDislike, setUserDislike] = useState(false)

  const handleLike = () => {
    if (userLike) {
      setLikeCount(likeCount - 1)
      setUserLike(false)
    } else {
      setLikeCount(likeCount + 1)
      if (userDislike) {
        setDislikeCount(dislikeCount - 1)
        setUserDislike(false)
      }
      setUserLike(true)
    }
  }

  const handleDislike = () => {
    if (userDislike) {
      setDislikeCount(dislikeCount - 1)
      setUserDislike(false)
    } else {
      setDislikeCount(dislikeCount + 1)
      if (userLike) {
        setLikeCount(likeCount - 1)
        setUserLike(false)
      }
      setUserDislike(true)
    }
  }

  return (
    <section id="review-product-1" className="docs-section pb-sm-2 mb-5">
      <h4>Product review: Variant 1</h4>
      <DocsComponentDemo code={code}>
        <ReviewVariantOne
          author="Andrew Richards"
          verified
          rating={5}
          date="May 7, 2025"
          product={{
            Color: 'Purple',
            Model: '128GB',
          }}
          text="The iPhone 14 is nothing short of exceptional, combining cutting-edge technology with a design that continues to set the standard for premium smartphones. That's why it deserves a perfect 5-star rating."
          pros={{
            list: ['Unparalleled performance', 'great camera', 'stunning design'],
          }}
          cons={{
            list: ['No in my opinion'],
          }}
          replyButton={{
            onClick: () => alert('Reply button clicked!'),
          }}
          likeButton={{
            count: likeCount,
            onClick: handleLike,
          }}
          dislikeButton={{
            count: dislikeCount,
            onClick: handleDislike,
          }}
          className="border-top border-bottom py-3"
        >
          <div className="ps-3 pb-2">
            <div className="d-flex align-items-center pt-3 pb-2 mb-1">
              <Badge bg="primary" className="me-2">
                Reply
              </Badge>
              <span className="h6 mb-0 me-4">Cartzilla Company</span>
              <span className="text-body-secondary fs-sm">May 8, 2025</span>
            </div>
            <p className="fs-sm mb-0">
              Thank you for your feedback! We are glad that you were satisfied with your purchase :)
            </p>
          </div>
        </ReviewVariantOne>
      </DocsComponentDemo>
    </section>
  )
}

export default ReviewsProductVariantOneDemo
