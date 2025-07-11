'use client'

import { useState, type PropsWithChildren, type FormEvent } from 'react'
import { useModal } from '@/contexts/modal-context'
import Nav from 'react-bootstrap/Nav'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Pagination from 'react-bootstrap/Pagination'
import PageItem, { Ellipsis } from 'react-bootstrap/PageItem'
import ReviewVariantTwo from '@/components/reviews/review-variant-two'
import StarRating from '@/components/reviews/star-rating'
import SelectBox from '@/components/forms/select-box'

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
    rating: 3,
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
    author: 'Kristin Watson',
    verified: false,
    rating: 4,
    date: 'February 7, 2025',
    text: "The chair is nice, but it's not the most comfortable for extended periods of sitting. The wooden legs give it a nice aesthetic, but they seem a bit fragile. It's a decent chair for occasional use, but I wouldn't recommend it for daily use or long sitting sessions.",
    recommendation: 'yes',
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

const ProductDetailsTabsFashion = () => {
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

  return (
    <>
      <TabContainer defaultActiveKey="description">
        {/* Nav tabs */}
        <Nav as="ul" variant="underline" className="flex-nowrap border-bottom">
          <Nav.Item as="li" className="me-md-1">
            <Nav.Link eventKey="description">Description</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="me-md-1">
            <Nav.Link eventKey="washing">
              Washing<span className="d-none d-md-inline">&nbsp;instructions</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="me-md-1">
            <Nav.Link eventKey="delivery">
              Delivery<span className="d-none d-md-inline">&nbsp;and returns</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="reviews">
              Reviews<span className="d-none d-md-inline">&nbsp;(23)</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <TabContent className="pt-4 mt-sm-1 mt-md-3">
          {/* Description tab */}
          <TabPane eventKey="description">
            <Row>
              <Col lg={6} className="fs-sm">
                <ul className="list-unstyled">
                  <li>
                    Model&apos;s height: <span className="text-dark-emphasis fw-semibold">176 cm</span>
                  </li>
                  <li>
                    The model is wearing size: <span className="text-dark-emphasis fw-semibold">S/36</span>
                  </li>
                </ul>
                <p>
                  This skirt is designed to fall just below the knee, offering a flattering length that is suitable for
                  various occasions. It is made from a soft and lightweight fabric that drapes beautifully, ensuring
                  comfort and ease of movement. The blue color adds a vibrant touch, making it a standout piece in your
                  wardrobe.
                </p>
                <ul>
                  <li>fitted waistband</li>
                  <li>fastened with a hidden zipper</li>
                  <li>midi length</li>
                </ul>
                <p className="mb-0">
                  The blue color of the skirt allows for easy pairing with a variety of tops. You can opt for a crisp
                  white blouse for a classic and polished outfit, or choose a patterned or contrasting-colored top for a
                  more vibrant and fashion-forward look.
                </p>
              </Col>
              <Col lg={6} xl={5} className="offset-xl-1">
                <Row xs={2} className="g-4 my-0 my-lg-n2">
                  {[
                    [
                      'ci-feather',
                      'Lightweight',
                      'Designed with lightweight European fabrics, perfect for life on the go.',
                    ],
                    [
                      'ci-hanger',
                      'Perfect fir',
                      'Our clothing is designed to fit any body type, find your perfect look!',
                    ],
                    ['ci-delivery-2', 'Free delivery', 'Get free door-to-door delivery for all orders over $250.'],
                    ['ci-leaf', 'Sustainability', 'We are proud to offer a Lifetime Guarantee on all products.'],
                  ].map((item, index) => (
                    <Col key={index}>
                      <div className="py-md-1 py-lg-2 pe-sm-2">
                        <i className={`${item[0]} fs-3 text-body-emphasis mb-2 mb-md-3`} />
                        <h6 className="fs-sm mb-2">{item[1]}</h6>
                        <p className="fs-sm mb-0">{item[2]}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </TabPane>

          {/* Washing instructions tab */}
          <TabPane eventKey="washing" className="fs-sm">
            <p>
              Following below washing instructions can help prolong the life of your denim skirt and keep it looking its
              best for longer.
            </p>
            <Row xs={1} md={2}>
              <Col className="mb-3 mb-md-0">
                <dl className="pe-lg-2 pe-xl-3 mb-0">
                  <dt>Machine wash cold</dt>
                  <dd>
                    Turn the denim midi skirt inside out before placing it in the washing machine. Use cold water to
                    help preserve the color and fabric integrity.
                  </dd>
                  <dt>Gentle cycle</dt>
                  <dd>
                    Select the gentle or delicate cycle on your washing machine to prevent excessive agitation, which
                    can cause unnecessary wear and tear on the denim.
                  </dd>
                  <dt>Mild detergent</dt>
                  <dd>
                    Use a mild detergent specifically formulated for denim or delicate fabrics. Avoid using bleach or
                    harsh chemicals, as they can damage the denim fibers.
                  </dd>
                  <dt>Avoid overloading</dt>
                  <dd className="mb-0">
                    Do not overcrowd the washing machine with too many garments. This can lead to inadequate cleaning
                    and may cause friction that damages the denim skirt.
                  </dd>
                </dl>
              </Col>
              <Col>
                <dl className="ps-lg-2 ps-xl-3 mb-0">
                  <dt>Wash separately</dt>
                  <dd>
                    Wash the denim midi skirt separately from items with zippers, buttons, or other sharp accessories
                    that could snag or damage the fabric.
                  </dd>
                  <dt>Skip fabric softener</dt>
                  <dd>
                    Avoid using fabric softener, as it can leave a residue on the denim and reduce its natural
                    stiffness, which is characteristic of denim garments.
                  </dd>
                  <dt>Air dry or tumble dry low</dt>
                  <dd>
                    After washing, reshape the skirt and either lay it flat to air dry or tumble dry on a low heat
                    setting. Avoid high heat, as it can shrink or distort the denim.
                  </dd>
                  <dt>Ironing</dt>
                  <dd className="mb-0">
                    If necessary, iron the denim midi skirt inside out using a low to medium heat setting. Avoid ironing
                    directly on any embellishments or pockets to prevent damage.
                  </dd>
                </dl>
              </Col>
            </Row>
          </TabPane>

          {/* Delivery and returns tab */}
          <TabPane eventKey="delivery" className="fs-sm">
            <Row xs={1} md={2}>
              <Col className="mb-3 mb-md-0">
                <div className="pe-lg-2 pe-xl-3">
                  <h6>Delivery</h6>
                  <p>
                    We strive to deliver your denim midi skirt with pockets to you as quickly as possible. Our estimated
                    delivery times are as follows:
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      Standard delivery:{' '}
                      <span className="text-dark-emphasis fw-semibold">Within 3-7 business days</span>
                    </li>
                    <li>
                      Express delivery: <span className="text-dark-emphasis fw-semibold">Within 1-3 business days</span>
                    </li>
                  </ul>
                  <p>
                    Please note that delivery times may vary depending on your location and any ongoing promotions or
                    holidays. You can track your order using the provided tracking number once your package has been
                    dispatched.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="ps-lg-2 ps-xl-3">
                  <h6>Returns</h6>
                  <p>
                    We want you to be completely satisfied with your denim midi skirt with pockets. If for any reason
                    you are not happy with your purchase, you can return it within 30 days of receiving your order for a
                    full refund or exchange.
                  </p>
                  <p>
                    To be eligible for a return, the skirt must be unused, unwashed, and in its original condition with
                    tags attached. Please ensure that all packaging is intact when returning the item.
                  </p>
                  <p className="mb-0">
                    To initiate a return, please contact our customer service team with your order number and reason for
                    the return. We will provide you with a return shipping label and instructions on how to proceed.
                    Please note that shipping fees are non-refundable.
                  </p>
                </div>
              </Col>
            </Row>
          </TabPane>

          {/* Reviews tab */}
          <TabPane eventKey="reviews">
            <div className="d-sm-flex align-items-center justify-content-between border-bottom pb-2 pb-sm-3">
              <div className="mb-3 me-sm-3">
                <h2 className="h5 pb-2 mb-1">Customer reviews</h2>
                <div className="d-flex align-items-center text-body-secondary fs-sm">
                  <StarRating rating={4} className="me-2" />
                  Based on 23 reviews
                </div>
              </div>
              <Button variant="outline-dark" className="mb-3" onClick={() => openModal('reviewForm')}>
                Leave a review
              </Button>
            </div>
            {reviews.map((review, index) => {
              const { text, ...reviewProps } = review
              return (
                <Review key={index} {...reviewProps}>
                  {text}
                </Review>
              )
            })}
            <Pagination className="mt-3 pt-2 pt-md-3" aria-label="Reviews pagination">
              <PageItem active aria-current="page">
                1
              </PageItem>
              <PageItem>2</PageItem>
              <PageItem>3</PageItem>
              <PageItem>4</PageItem>
              <Ellipsis />
              <PageItem>6</PageItem>
            </Pagination>
          </TabPane>
        </TabContent>
      </TabContainer>

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
            <div>
              <Form.Check inline type="radio" id="yes" label="Yes, I recommend" name="recommend" defaultChecked />
              <Form.Check inline type="radio" id="no" label="No, I don't recommend" name="recommend" />
            </div>
          </Modal.Body>
          <Modal.Footer className="flex-nowrap gap-3 border-0 px-4">
            <Button type="reset" variant="secondary" className="w-100 m-0" onClick={() => closeModal('reviewForm')}>
              Cancel
            </Button>
            <Button type="submit" variant="dark" className="w-100 m-0">
              Submit review
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default ProductDetailsTabsFashion
