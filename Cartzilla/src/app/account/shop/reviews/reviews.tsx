'use client'

import { useState, Fragment, type FormEvent } from 'react'
import useSWR from 'swr'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import { useModal } from '@/contexts/modal-context'
import Image from 'next/image'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Placeholder from 'react-bootstrap/Placeholder'
import Alert from 'react-bootstrap/Alert'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import StarRating from '@/components/reviews/star-rating'
import Pagination from 'react-bootstrap/Pagination'
import SelectBox from '@/components/forms/select-box'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface ReviewProps {
  id: string
  product: {
    image: string
    title: string
    price: number
    href: string
    specs?: [string, string][]
  }
  bonuses?: number
  review?: {
    bonuses?: number
    date: string
    rating: number
    text: string
    pros?: string[]
    cons?: string[]
    likes?: number
    dislikes?: number
  }
}

const AccountReviews = () => {
  const { data, error, isLoading } = useSWR<ReviewProps[]>('/data/account/shop/reviews.json', fetcher)
  const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()
  const { openModal, closeModal, isShown } = useModal()
  const [filter, setFilter] = useState('all')
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  if (isLoading)
    return (
      <>
        <h1 className="h2 pb-2 mb-ms-4">My reviews</h1>
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="d-flex align-items-center justify-content-between gap-4 border-bottom py-3">
            <div className="d-flex flex-nowrap position-relative align-items-center w-100">
              <div className="flex-shrink-0" style={{ width: 64 }}>
                <Placeholder as="div" animation="wave" className="position-relative" style={{ width: 64 }}>
                  <Placeholder className="ratio ratio-1x1 rounded-2" />
                  <i className="ci-image position-absolute top-50 start-50 translate-middle fs-4 opacity-40" />
                </Placeholder>
              </div>
              <div className="w-100 ps-3">
                <Placeholder animation="glow">
                  <Placeholder xs={12} sm={11} />
                </Placeholder>
              </div>
            </div>
            <StarRating rating={5} dark className="opacity-25" />
          </div>
        ))}
      </>
    )

  if (error)
    return (
      <>
        <h1 className="h2 pb-2 mb-ms-4">My reviews</h1>
        <Alert variant="danger" className="d-inline-flex">
          <i className="ci-alert-triangle fs-lg pe-1 mt-1 me-2" />
          <div>
            <span className="fw-semibold">Error loading reviews:</span> {error.message}
          </div>
        </Alert>
      </>
    )

  return (
    <Fragment>
      <Row className="align-items-center pb-2 mb-sm-2">
        <Col sm={6} md={7} xxl={8} className="mb-3 mb-md-0">
          <h1 className="h2 me-3 mb-0">My reviews</h1>
        </Col>
        <Col sm={6} md={5} xxl={4}>
          <SelectBox
            choices={[
              { value: 'all', label: 'Products and reviews' },
              { value: 'reviewed', label: 'My reviews' },
              { value: 'awaiting', label: 'Products awaiting reviews' },
            ]}
            value={filter}
            onChange={(value) => setFilter(value as string)}
            removeItemButton={false}
            aria-label="Reviews filter select"
          />
        </Col>
      </Row>

      {(data || []).map(({ id, product, bonuses, review }) => (
        <Fragment key={id}>
          <div
            className={`${
              (filter === 'reviewed' && !review) || (filter === 'awaiting' && review) ? 'd-none' : 'd-md-flex'
            } align-items-center justify-content-between gap-4 border-bottom py-3`}
          >
            <Nav className="flex-nowrap position-relative align-items-center">
              <div className="flex-shrink-0" style={{ width: 64 }}>
                <Image src={product.image} width={128} height={128} alt={product.title} />
              </div>
              <Nav.Link as={Link} href={product.href} className="stretched-link hover-effect-underline ps-3 p-0">
                {product.title}
              </Nav.Link>
            </Nav>
            {bonuses && (
              <div className="d-flex h6 fs-sm pt-2 pt-md-0 ps-3 ps-md-0 mb-2 mb-md-0">
                <div className="flex-shrink-0 d-md-none" style={{ width: 64 }} />
                <svg
                  className="text-warning flex-shrink-0 me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M1.333 9.667H7.5V16h-5c-.64 0-1.167-.527-1.167-1.167V9.667zm13.334 0v5.167c0 .64-.527 1.167-1.167 1.167h-5V9.667h6.167zM0 5.833V7.5c0 .64.527 1.167 1.167 1.167h.167H7.5v-1-3H1.167C.527 4.667 0 5.193 0 5.833zm14.833-1.166H8.5v3 1h6.167.167C15.473 8.667 16 8.14 16 7.5V5.833c0-.64-.527-1.167-1.167-1.167z"></path>
                  <path d="M8 5.363a.5.5 0 0 1-.495-.573C7.752 3.123 9.054-.03 12.219-.03c1.807.001 2.447.977 2.447 1.813 0 1.486-2.069 3.58-6.667 3.58zM12.219.971c-2.388 0-3.295 2.27-3.595 3.377 1.884-.088 3.072-.565 3.756-.971.949-.563 1.287-1.193 1.287-1.595 0-.599-.747-.811-1.447-.811z"></path>
                  <path d="M8.001 5.363c-4.598 0-6.667-2.094-6.667-3.58 0-.836.641-1.812 2.448-1.812 3.165 0 4.467 3.153 4.713 4.819a.5.5 0 0 1-.495.573zM3.782.971c-.7 0-1.448.213-1.448.812 0 .851 1.489 2.403 5.042 2.566C7.076 3.241 6.169.971 3.782.971z"></path>
                </svg>
                +{bonuses} bonuses for a review
              </div>
            )}
            {review ? (
              <div className="position-relative d-flex align-items-center text-decoration-none min-w-0 pt-1 pt-md-0 ps-3 ps-md-0 mb-2 mb-md-0">
                <div className="flex-shrink-0 d-md-none" style={{ width: 64 }} />
                {review.bonuses && (
                  <div className="h6 fs-sm text-body-secondary text-truncate p-0 me-3 me-sm-4 mb-0">
                    +{review.bonuses} bonuses earned
                  </div>
                )}
                <StarRating rating={review.rating} className="fs-sm me-2 me-sm-3" />
                <Button
                  variant="secondary"
                  className="btn-icon btn-ghost stretched-link border-0"
                  aria-label="Show review details"
                  onClick={() => openOffcanvas(id)}
                >
                  <i className="ci-chevron-right fs-lg" />
                </Button>
              </div>
            ) : (
              <div className="d-flex pt-2 pt-md-0 ps-3 ps-md-0 mb-2 mb-md-0">
                <div className="d-md-none" style={{ width: 64 }}></div>
                <Button variant="secondary" onClick={() => openModal(id)}>
                  Leave a review
                </Button>
              </div>
            )}
          </div>

          {/* Review details offcanvas | Leave review modal */}
          {review ? (
            <Offcanvas
              show={isOpen(id)}
              onHide={() => closeOffcanvas(id)}
              placement="end"
              className="pb-sm-2 px-sm-2"
              style={{ width: 500 }}
              aria-labelledby={`label-${id}`}
            >
              <Offcanvas.Header closeButton className="py-3 pt-lg-4">
                <Offcanvas.Title as="h4" id={`label-${id}`}>
                  My review
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="pt-2">
                <div className="d-flex align-items-center border-bottom mb-4">
                  <Link href={product.href} className="d-flex flex-shrink-0" style={{ width: 110 }}>
                    <Image src={product.image} width={220} height={220} alt={product.title} />
                  </Link>
                  <div className="w-100 min-w-0 ps-2 ps-sm-3">
                    <h5 className="d-flex animate-underline mb-2">
                      <Link href={product.href} className="d-block fs-sm fw-medium text-truncate animate-target">
                        {product.title}
                      </Link>
                    </h5>
                    <div className="h6 mb-0">
                      $
                      {product.price?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <StarRating rating={review.rating} className="fs-sm me-2 me-sm-3" />
                  <div className="fs-sm text-body-secondary">{review.date}</div>
                </div>
                {product.specs && (
                  <div className="d-flex flex-wrap gap-2 pb-2 mb-1">
                    {product.specs.map((item, index, arr) => (
                      <div key={index} className={`d-flex fs-sm${index !== arr.length - 1 ? ' me-3 me-sm-4' : ''}`}>
                        <span className="text-dark-emphasis fw-medium me-2">{item[0]}:</span>
                        {item[1]}
                      </div>
                    ))}
                  </div>
                )}
                <p className="fs-sm">{review.text}</p>
                {(review.pros?.length || review.cons?.length) && (
                  <ul className="list-unstyled fs-sm pb-2 mb-1">
                    {review.pros?.length && (
                      <li>
                        <span className="text-dark-emphasis fw-medium me-1">Pros:</span>
                        {review.pros.join(', ')}
                      </li>
                    )}
                    {review.cons?.length && (
                      <li>
                        <span className="text-dark-emphasis fw-medium me-1">Cons:</span>
                        {review.cons.join(', ')}
                      </li>
                    )}
                  </ul>
                )}
                <Nav className="align-items-center">
                  <Nav.Link as="div" className="text-body-secondary px-0 ms-auto me-n1 pe-none">
                    <i className="ci-thumbs-up fs-base me-1" />
                    {review.likes || 0}
                  </Nav.Link>
                  <hr className="vr my-2 mx-3" />
                  <Nav.Link as="div" className="text-body-secondary px-0 ms-auto ms-n1 pe-none">
                    <i className="ci-thumbs-down fs-base me-1" />
                    {review.dislikes || 0}
                  </Nav.Link>
                </Nav>
                {review.bonuses && (
                  <div className="pt-4 mt-2 mt-md-3">
                    <div className="d-flex align-items-center bg-body-tertiary text-dark-emphasis fs-sm rounded p-3 px-sm-4">
                      <svg
                        className="text-warning flex-shrink-0 me-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                      >
                        <path d="M1.333 9.667H7.5V16h-5c-.64 0-1.167-.527-1.167-1.167V9.667zm13.334 0v5.167c0 .64-.527 1.167-1.167 1.167h-5V9.667h6.167zM0 5.833V7.5c0 .64.527 1.167 1.167 1.167h.167H7.5v-1-3H1.167C.527 4.667 0 5.193 0 5.833zm14.833-1.166H8.5v3 1h6.167.167C15.473 8.667 16 8.14 16 7.5V5.833c0-.64-.527-1.167-1.167-1.167z"></path>
                        <path d="M8 5.363a.5.5 0 0 1-.495-.573C7.752 3.123 9.054-.03 12.219-.03c1.807.001 2.447.977 2.447 1.813 0 1.486-2.069 3.58-6.667 3.58zM12.219.971c-2.388 0-3.295 2.27-3.595 3.377 1.884-.088 3.072-.565 3.756-.971.949-.563 1.287-1.193 1.287-1.595 0-.599-.747-.811-1.447-.811z"></path>
                        <path d="M8.001 5.363c-4.598 0-6.667-2.094-6.667-3.58 0-.836.641-1.812 2.448-1.812 3.165 0 4.467 3.153 4.713 4.819a.5.5 0 0 1-.495.573zM3.782.971c-.7 0-1.448.213-1.448.812 0 .851 1.489 2.403 5.042 2.566C7.076 3.241 6.169.971 3.782.971z"></path>
                      </svg>
                      You have earned&nbsp;<span className="fw-semibold">+{review.bonuses} bonuses</span>
                    </div>
                  </div>
                )}
              </Offcanvas.Body>
            </Offcanvas>
          ) : (
            <Modal
              show={isShown(id)}
              onHide={() => closeModal(id)}
              scrollable={true}
              centered={true}
              backdrop="static"
              aria-labelledby={`label-${id}`}
            >
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="d-flex flex-column mh-100 overflow-hidden"
              >
                <Modal.Header className="d-block pb-3">
                  <div className="d-flex align-items-center mb-3">
                    <Modal.Title as="h5" id={`label-${id}`}>
                      Leave a review for:
                    </Modal.Title>
                    <CloseButton onClick={() => closeModal(id)} />
                  </div>
                  <div className="d-flex align-items-center">
                    <Link href={product.href} className="d-flex flex-shrink-0" style={{ width: 110 }}>
                      <Image src={product.image} width={220} height={220} alt={product.title} />
                    </Link>
                    <div className="w-100 min-w-0 ps-2 ps-sm-3">
                      <h5 className="d-flex animate-underline mb-2">
                        <Link href={product.href} className="d-block fs-sm fw-medium text-truncate animate-target">
                          {product.title}
                        </Link>
                      </h5>
                      <div className="h6 mb-0">
                        $
                        {product.price?.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                    </div>
                  </div>
                </Modal.Header>
                <Modal.Body className="pb-3">
                  <Form.Group controlId="review-name" className="mb-3">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" defaultValue="Susan Gardner" readOnly />
                    <Form.Text>Will be displayed on the comment.</Form.Text>
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
                  <Button type="reset" variant="secondary" className="w-100 m-0" onClick={() => closeModal(id)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="w-100 m-0">
                    Submit review
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
          )}
        </Fragment>
      ))}

      {/* Pagination */}
      <Pagination className="pt-3 pb-2 pb-sm-0 mt-2 mt-md-3" aria-label="Reviews pagination">
        <Pagination.Item active aria-current="page">
          1
        </Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Item>4</Pagination.Item>
      </Pagination>
    </Fragment>
  )
}

export default AccountReviews
