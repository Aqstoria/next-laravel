'use client'

import { Fragment } from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardFooter from 'react-bootstrap/CardFooter'
import StarRating from '@/components/reviews/star-rating'
import Lightbox from '@/components/lightbox'
import { chunkArray } from '@/lib/chunk-array'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface ReviewProps {
  rating: number
  title: string
  text?: string
  author?: {
    avatar: string
    name: string
  }
  product?: string
  video?: {
    url: string
    cover: string
  }
}

const SingleProductStoreReviews = () => {
  const { data, error, isLoading } = useSWR<ReviewProps[]>('/data/single-store/reviews.json', fetcher)
  const reviewPairs = chunkArray(data ?? [], 2)

  if (isLoading)
    return (
      <div className="text-center">
        <Spinner animation="border" variant="body-tertiary" role="status" style={{ width: '3rem', height: '3rem' }} />
        <div className="pt-2">Loading...</div>
      </div>
    )

  if (error)
    return (
      <div className="text-center">
        <Alert variant="danger" className="d-inline-flex">
          <i className="ci-alert-triangle fs-lg pe-1 mt-1 me-2" />
          <div>
            <span className="fw-semibold">Error loading reviews:</span> {error.message}
          </div>
        </Alert>
      </div>
    )

  return (
    <Row className="g-4">
      {reviewPairs.map((pair, index) => (
        <Col key={index} lg={4} className="d-flex flex-column flex-md-row flex-lg-column gap-4">
          {pair.map(({ rating, title, text, author, product, video }, index) => (
            <Fragment key={index}>
              {video ? (
                <div className="position-relative w-100 rounded-5 overflow-hidden">
                  <div className="d-lg-none" style={{ height: 300 }}></div>
                  <div className="d-none d-lg-block" style={{ height: 364 }}></div>
                  <div className="position-absolute top-0 start-0 w-100 h-100 z-3 p-4">
                    <Lightbox
                      href={video.url}
                      className="btn btn-lg btn-light stretched-link rounded-pill mt-xl-2 ms-xl-2"
                      gallery="reviewsVideo"
                    >
                      <i className="ci-play fs-lg me-2 ms-n1" />
                      Play
                    </Lightbox>
                  </div>
                  <div className="position-absolute top-0 start-0 d-flex align-items-end w-100 h-100 z-2 p-4">
                    <div className="mb-xl-2 ms-xl-2">
                      <StarRating rating={rating} className="mb-3" />
                      <h3 className="h5 text-white mb-0">{title}</h3>
                    </div>
                  </div>
                  <span
                    className="position-absolute top-0 start-0 w-100 h-100 z-1"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%)',
                    }}
                  ></span>
                  <Image fill src={video.cover} sizes="596px" className="object-fit-cover" alt="Cover image" />
                </div>
              ) : (
                <Card className="w-100 bg-transparent border-0 rounded-5 overflow-hidden p-xl-2">
                  <CardBody className="position-relative z-1 pb-1 pb-lg-2 pb-xl-3">
                    <StarRating rating={rating} className="mb-3" />
                    <h3 className="h5 pb-2 mb-1">{title}</h3>
                    <p className="mb-0">{text}</p>
                  </CardBody>
                  {author && (
                    <CardFooter className="position-relative z-1 d-flex align-items-center bg-transparent border-0 py-4">
                      <Image
                        src={author.avatar}
                        className="flex-shrink-0 bg-body-secondary rounded-circle"
                        width={44}
                        height={44}
                        alt={author.name}
                      />
                      <div className="fs-sm ps-2 ms-1">
                        <div className="fw-semibold text-dark-emphasis">{author.name}</div>
                        <div>{product}</div>
                      </div>
                    </CardFooter>
                  )}
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-white d-none-dark"></span>
                  <span
                    className="position-absolute top-0 start-0 w-100 h-100 bg-white d-none d-block-dark"
                    style={{ opacity: 0.08 }}
                  ></span>
                </Card>
              )}
            </Fragment>
          ))}
        </Col>
      ))}
    </Row>
  )
}

export default SingleProductStoreReviews
