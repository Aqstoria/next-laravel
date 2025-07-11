'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ReviewVariantTwo from '@/components/reviews/review-variant-two'

const ReviewsProductVariantTwoDemo = () => {
  const code = `'use client'

import { useState } from 'react'
import ReviewVariantTwo from '@/components/reviews/review-variant-two'

export default function ReviewsProductVariantTwoDemo() {
  const [likeCount, setLikeCount] = useState(3)
  const [userLike, setUserLike] = useState(false)

  const handleLike = () => {
    if (userLike) {
      setLikeCount(likeCount - 1)
      setUserLike(false)
    } else {
      setLikeCount(likeCount + 1)
      setUserLike(true)
    }
  }

  return (
    <ReviewVariantTwo
      author="Bessie Cooper"
      verified // Can also be a string of text that is displayed in a tooltip
      rating={2}
      darkRating
      date="April 8, 2025"
      recommendation={['no']} // 'yes' | 'no'. Optionally you add the second string to override the text.
      likeButton={{
        // label: '' // default "Helpful?" label can be altered
        count: likeCount,
        onClick: handleLike,
      }}
      className="border-top border-bottom py-4"
    >
      While the design of the chair is nice and it does add a touch of retro vibe to my space, I found the quality
      to be lacking. After just a few weeks of use, one of the legs started to wobble, and the seat isn&apos;t as
      comfortable as I had hoped. Disappointed with the durability. Additionally, the assembly process was a bit
      frustrating as some of the screws didn&apos;t align properly with the holes, requiring extra effort to secure them
      in place. Overall, while it looks good, I expected better quality for the price.
    </ReviewVariantTwo>
  )
}`

  const [likeCount, setLikeCount] = useState(3)
  const [userLike, setUserLike] = useState(false)

  const handleLike = () => {
    if (userLike) {
      setLikeCount(likeCount - 1)
      setUserLike(false)
    } else {
      setLikeCount(likeCount + 1)
      setUserLike(true)
    }
  }

  return (
    <section id="review-product-2" className="docs-section pb-sm-2 mb-5">
      <h4>Product review: Variant 2</h4>
      <DocsComponentDemo code={code}>
        <ReviewVariantTwo
          author="Bessie Cooper"
          verified
          rating={2}
          darkRating
          date="April 8, 2025"
          recommendation={['no']}
          likeButton={{
            count: likeCount,
            onClick: handleLike,
          }}
          className="border-top border-bottom py-4"
        >
          While the design of the chair is nice and it does add a touch of retro vibe to my space, I found the quality
          to be lacking. After just a few weeks of use, one of the legs started to wobble, and the seat isn&apos;t as
          comfortable as I had hoped. Disappointed with the durability. Additionally, the assembly process was a bit
          frustrating as some of the screws didn&apos;t align properly with the holes, requiring extra effort to secure
          them in place. Overall, while it looks good, I expected better quality for the price.
        </ReviewVariantTwo>
      </DocsComponentDemo>
    </section>
  )
}

export default ReviewsProductVariantTwoDemo
