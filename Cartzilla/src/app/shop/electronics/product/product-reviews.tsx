'use client'

import { ReactElement, useState, type FormEvent } from 'react'
import { useModal } from '@/contexts/modal-context'
import Link from 'next/link'
import ReviewVariantOne from '@/components/reviews/review-variant-one'
import SelectBox from '@/components/forms/select-box'
import StarRating from '@/components/reviews/star-rating'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Stack from 'react-bootstrap/Stack'
import Nav from 'react-bootstrap/Nav'
import Pagination from 'react-bootstrap/Pagination'
import PageItem, { Ellipsis } from 'react-bootstrap/PageItem'

interface Review {
  author: string
  verified?: boolean | string
  rating: number | string
  date: string
  product?: Record<string, string>
  text: React.ReactNode
  pros?: string[]
  cons?: string[]
  likes: number
  dislikes: number
  replies?: {
    author: string
    date: string
    text: string
  }[]
}

const Review = ({ author, verified, rating, date, product, text, pros, cons, likes, dislikes, replies }: Review) => {
  const [likeCount, setLikeCount] = useState(likes)
  const [dislikeCount, setDislikeCount] = useState(dislikes)
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
      author={author}
      verified={verified}
      rating={rating}
      date={date}
      product={product}
      text={text}
      pros={{
        list: pros,
      }}
      cons={{
        list: cons,
      }}
      replyButton={{
        onClick: () => console.log('Reply button clicked!'),
      }}
      likeButton={{
        count: likeCount,
        onClick: handleLike,
      }}
      dislikeButton={{
        count: dislikeCount,
        onClick: handleDislike,
      }}
      className="border-bottom py-3 mb-3"
    >
      {replies && (
        <>
          {replies.map(({ author, date, text }, index) => (
            <div key={index} className="ps-3 pb-2">
              <div className="d-flex align-items-center pt-3 pb-2 mb-1">
                <Badge bg="primary" className="me-2">
                  Reply
                </Badge>
                <span className="h6 mb-0 me-4">{author}</span>
                <span className="text-body-secondary fs-sm">{date}</span>
              </div>
              <p className="fs-sm mb-0">{text}</p>
            </div>
          ))}
        </>
      )}
    </ReviewVariantOne>
  )
}

const ProductReviewsElectronics = ({ data, dataSlice }: { data: Review[]; dataSlice?: [number, number] }) => {
  const { openModal, closeModal, isShown } = useModal()
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  const ratings = [
    { ratingNumber: 5, ratingLabel: 'Five', quantity: 205 },
    { ratingNumber: 4, ratingLabel: 'Four', quantity: 45 },
    { ratingNumber: 3, ratingLabel: 'Three', quantity: 20 },
    { ratingNumber: 2, ratingLabel: 'Two', quantity: 10 },
    { ratingNumber: 1, ratingLabel: 'One', quantity: 7 },
  ]

  const totalQuantity = ratings.reduce((sum, { quantity }) => sum + quantity, 0)
  const weightedSum = ratings.reduce((sum, { ratingNumber, quantity }) => sum + ratingNumber * quantity, 0)
  const averageRating = (weightedSum / totalQuantity).toFixed(1)

  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <h2 className="h3 mb-0">Reviews</h2>
        <Button variant="secondary" className=" ms-auto" onClick={() => openModal('reviewForm')}>
          <i className="ci-edit-3 fs-base ms-n1 me-2" />
          Leave a review
        </Button>
      </div>

      {/* Reviews stats */}
      <Row className="g-4 pb-3">
        <Col sm={4}>
          <div className="d-flex flex-column align-items-center justify-content-center h-100 bg-body-tertiary rounded p-4">
            <div className="h1 pb-2 mb-1">{averageRating}</div>
            <StarRating rating={averageRating} className="fs-sm mb-2" />
            <div className="fs-sm">{totalQuantity} reviews</div>
          </div>
        </Col>
        <Col sm={8}>
          <Stack direction="vertical" gap={3}>
            {ratings.map(({ ratingNumber, ratingLabel, quantity }) => (
              <Stack key={ratingNumber} direction="horizontal" gap={2} className="fs-sm">
                <Stack direction="horizontal" gap={1}>
                  {ratingNumber}
                  <i className="ci-star-filled text-warning" />
                </Stack>
                <ProgressBar
                  variant="warning"
                  now={(quantity / totalQuantity) * 100}
                  className="w-100"
                  style={{ height: 4 }}
                  aria-label={`${ratingLabel} stars`}
                />
                <div className="text-nowrap text-end" style={{ width: 40 }}>
                  {quantity}
                </div>
              </Stack>
            ))}
          </Stack>
        </Col>
      </Row>

      {/* Reviews list */}
      {(dataSlice ? data.slice(dataSlice[0], dataSlice[1]) : data).map((review, index) => (
        <Review
          key={index}
          author={review.author}
          verified={review.verified}
          rating={review.rating}
          date={review.date}
          product={review.product}
          text={review.text}
          pros={review.pros}
          cons={review.cons}
          likes={review.likes}
          dislikes={review.dislikes}
          replies={review.replies}
        />
      ))}

      {dataSlice ? (
        <Nav>
          <Nav.Link as={Link} href="./product?tab=reviews" className="text-primary animate-underline px-0">
            <span className="animate-target">See all reviews</span>
            <i className="ci-chevron-right fs-base ms-1" />
          </Nav.Link>
        </Nav>
      ) : (
        <Pagination className="mt-3 pt-2 pt-md-3" aria-label="Reviews pagination">
          <PageItem active aria-current="page">
            1
          </PageItem>
          <PageItem>2</PageItem>
          <PageItem>3</PageItem>
          <PageItem>4</PageItem>
          <Ellipsis />
          <PageItem>16</PageItem>
        </Pagination>
      )}

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
          <Modal.Body className="pb-3">
            <Form.Group controlId="review-name" className="mb-3">
              <Form.Label>
                Your name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" required />
              <Form.Control.Feedback type="invalid">Please enter your name!</Form.Control.Feedback>
              <Form.Text>Will be displayed on the comment.</Form.Text>
            </Form.Group>
            <Form.Group controlId="review-email" className="mb-3">
              <Form.Label>
                Your email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="email" required />
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
                required
                aria-label="Choose rating"
              />
              <Form.Control.Feedback type="invalid">Please choose your rating!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="review-text" className="mb-3">
              <Form.Label>
                Review <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control as="textarea" rows={4} required />
              <Form.Control.Feedback type="invalid">Please write a review!</Form.Control.Feedback>
              <Form.Text>Your review must be at least 50 characters.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="pros">Pros</Form.Label>
              <SelectBox type="text" inputId="pros" placeholder='Type and hit "Enter"' aria-label="Pros input" />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="cons">Cons</Form.Label>
              <SelectBox type="text" inputId="cons" placeholder='Type and hit "Enter"' aria-label="Pros input" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="flex-nowrap gap-3 border-0 px-4">
            <Button type="reset" variant="secondary" className="w-100 m-0" onClick={() => closeModal('reviewForm')}>
              Cancel
            </Button>
            <Button type="submit" className="w-100 m-0">
              Submit review
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default ProductReviewsElectronics
