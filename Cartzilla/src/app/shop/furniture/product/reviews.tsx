'use client'

import { useState, type PropsWithChildren, type FormEvent } from 'react'
import { useModal } from '@/contexts/modal-context'
import ReviewVariantTwo from '@/components/reviews/review-variant-two'
import StarRating from '@/components/reviews/star-rating'
import SelectBox from '@/components/forms/select-box'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Collapse from 'react-bootstrap/Collapse'
import Nav from 'react-bootstrap/Nav'

interface Review {
  author: string
  verified: boolean
  rating: number
  date: string
  text: string
  recommendation: 'yes' | 'no'
  likes: number
}

const reviews: Review[] = [
  {
    author: 'Rafael Marquez',
    verified: true,
    rating: 5,
    date: 'June 25, 2025',
    text: "Absolutely love this chair! It's exactly what I was looking for to complete my Scandinavian-themed living room. The wooden legs add a touch of warmth and the design is timeless. Comfortable and sturdy, couldn't be happier with my purchase!",
    recommendation: 'yes',
    likes: 0,
  },
  {
    author: 'Bessie Cooper',
    verified: true,
    rating: 2,
    date: 'April 8, 2025',
    text: "While the design of the chair is nice and it does add a touch of retro vibe to my space, I found the quality to be lacking. After just a few weeks of use, one of the legs started to wobble, and the seat isn't as comfortable as I had hoped. Disappointed with the durability. Additionally, the assembly process was a bit frustrating as some of the screws didn't align properly with the holes, requiring extra effort to secure them in place. Overall, while it looks good, I expected better quality for the price.",
    recommendation: 'no',
    likes: 3,
  },
  {
    author: 'Savannah Nguyen',
    verified: false,
    rating: 4,
    date: 'March 30, 2025',
    text: 'Great addition to our dining room! The chair looks fantastic and is quite comfortable for short sits. Assembly was a breeze, and the quality seems decent for the price. Overall, satisfied with the purchase.',
    recommendation: 'yes',
    likes: 7,
  },
  {
    author: 'Daniel Adams',
    verified: false,
    rating: 5,
    date: 'March 16, 2025',
    text: "Couldn't be happier with this chair! It's not only stylish but also incredibly comfortable. The size is perfect for our space, and the wooden legs feel sturdy. Definitely recommend it to anyone looking for a chic and functional seating option.",
    recommendation: 'yes',
    likes: 14,
  },
  {
    author: 'Jenny Wilson',
    verified: true,
    rating: 5,
    date: 'February 19, 2025',
    text: "This chair exceeded my expectations! It's well-made, comfortable, and looks even better in person. The Scandinavian design adds a sophisticated touch to my home office. I've received so many compliments already. Five stars all the way!",
    recommendation: 'yes',
    likes: 2,
  },
  {
    author: 'Kristin Watson',
    verified: false,
    rating: 3,
    date: 'February 7, 2025',
    text: "The chair is nice, but it's not the most comfortable for extended periods of sitting. The wooden legs give it a nice aesthetic, but they seem a bit fragile. It's a decent chair for occasional use, but I wouldn't recommend it for daily use or long sitting sessions.",
    recommendation: 'no',
    likes: 9,
  },
]

const Review = ({
  author,
  verified,
  rating,
  date,
  recommendation,
  likes,
  children,
}: PropsWithChildren<Omit<Review, 'text'>>) => {
  const [likeCount, setLikeCount] = useState(likes)
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
      author={author}
      verified={verified}
      rating={rating}
      darkRating
      date={date}
      recommendation={[recommendation]}
      likeButton={{
        count: likeCount,
        onClick: handleLike,
      }}
      className="border-bottom py-4"
    >
      {children}
    </ReviewVariantTwo>
  )
}

const ProductReviewsFurniture = () => {
  const { openModal, closeModal, isShown } = useModal()
  const [open, setOpen] = useState(false)
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <>
      <section className="pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <div className="d-sm-flex align-items-center justify-content-between border-bottom pb-2 pb-sm-3">
          <div className="mb-3 me-sm-3">
            <h2 className="h3 pb-2 mb-1">Customer reviews</h2>
            <div className="d-flex align-items-center text-body-secondary fs-sm">
              <StarRating rating={4} dark className="me-2" />
              Based on 6 reviews
            </div>
          </div>
          <Button
            variant="outline-dark"
            size="lg"
            className="rounded-pill mb-3"
            onClick={() => openModal('reviewForm')}
          >
            Leave a review
          </Button>
        </div>
        {reviews.slice(0, 3).map((review, index) => {
          const { text, ...reviewProps } = review
          return (
            <Review key={index} {...reviewProps}>
              {text}
            </Review>
          )
        })}
        <Collapse in={open}>
          <div id="moreReviews">
            {reviews.slice(3, reviews.length).map((review, index) => {
              const { text, ...reviewProps } = review
              return (
                <Review key={index} {...reviewProps}>
                  {text}
                </Review>
              )
            })}
          </div>
        </Collapse>
        <Nav className="pt-3 mt-md-2 mb-xxl-2">
          <Nav.Link
            className={`animate-underline px-0${!open ? ' collapsed' : ''} `}
            aria-controls="moreReviews"
            aria-label="Show / hide reviews"
            onClick={() => setOpen(!open)}
          >
            <span
              className="animate-target"
              data-label-collapsed="Show more reviews"
              data-label-expanded="Show less reviews"
            />
            <i className="collapse-toggle-icon ci-chevron-down fs-base mt-1 ms-1" />
          </Nav.Link>
        </Nav>
      </section>

      {/* Leave a review modal */}
      <Modal
        show={isShown('reviewForm')}
        onHide={() => closeModal('reviewForm')}
        scrollable={true}
        centered={true}
        backdrop="static"
        aria-labelledby="reviewFormLabel"
      >
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="d-flex flex-column mh-100 overflow-hidden"
        >
          <Modal.Header closeButton className="border-0">
            <Modal.Title as="h5" id="reviewFormLabel">
              Leave a review
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-0 pb-3">
            <Form.Group controlId="review-name" className="mb-3">
              <Form.Label>
                Your name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" className="rounded-pill" required />
              <Form.Control.Feedback type="invalid">Please enter your name!</Form.Control.Feedback>
              <Form.Text>Will be displayed on the comment.</Form.Text>
            </Form.Group>
            <Form.Group controlId="review-email" className="mb-3">
              <Form.Label>
                Your email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="email" className="rounded-pill" required />
              <Form.Control.Feedback type="invalid">Please provide a valid email address!</Form.Control.Feedback>
              <Form.Text>Authentication only - we won&apos;t spam you.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="rating">
                Rating <span className="text-danger">*</span>
              </Form.Label>
              <SelectBox
                inputId="rating"
                customTemplate
                choices={[
                  { value: '', label: 'Choose rating', placeholder: true },
                  {
                    value: '1',
                    label: '<span class="visually-hidden">1 star</span>',
                    customProperties: {
                      icon: '<span class="d-flex gap-1 py-1"><i class="ci-star-filled text-warning"></i></span>',
                      selected: '1 star',
                    },
                  },
                  {
                    value: '2',
                    label: '<span class="visually-hidden">2 stars</span>',
                    customProperties: {
                      icon: '<span class="d-flex gap-1 py-1"><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i></span>',
                      selected: '2 stars',
                    },
                  },
                  {
                    value: '3',
                    label: '<span class="visually-hidden">3 stars</span>',
                    customProperties: {
                      icon: '<span class="d-flex gap-1 py-1"><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i></span>',
                      selected: '3 stars',
                    },
                  },
                  {
                    value: '4',
                    label: '<span class="visually-hidden">4 stars</span>',
                    customProperties: {
                      icon: '<span class="d-flex gap-1 py-1"><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i></span>',
                      selected: '4 stars',
                    },
                  },
                  {
                    value: '5',
                    label: '<span class="visually-hidden">5 stars</span>',
                    customProperties: {
                      icon: '<span class="d-flex gap-1 py-1"><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i><i class="ci-star-filled text-warning"></i></span>',
                      selected: '5 stars',
                    },
                  },
                ]}
                inputClassName="rounded-pill"
                required
                aria-label="Choose rating"
              />
              <Form.Control.Feedback type="invalid">Please choose your rating!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="review-text" className="mb-3">
              <Form.Label>
                Review <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control as="textarea" rows={4} className="rounded-6" required />
              <Form.Control.Feedback type="invalid">Please write a review!</Form.Control.Feedback>
              <Form.Text>Your review must be at least 50 characters.</Form.Text>
            </Form.Group>
            <div>
              <Form.Check inline type="radio" id="yes" label="Yes, I recommend" name="recommend" defaultChecked />
              <Form.Check inline type="radio" id="no" label="No, I don't recommend" name="recommend" />
            </div>
          </Modal.Body>
          <Modal.Footer className="flex-nowrap gap-3 border-0 px-4">
            <Button
              type="reset"
              variant="secondary"
              className="w-100 rounded-pill m-0"
              onClick={() => closeModal('reviewForm')}
            >
              Cancel
            </Button>
            <Button type="submit" variant="dark" className="w-100 rounded-pill m-0">
              Submit review
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default ProductReviewsFurniture
