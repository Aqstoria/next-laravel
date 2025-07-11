import type { PropsWithChildren } from 'react'
import type { CommonComponentProps } from '@/types/common-component-props'
import StarRating from './star-rating'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

interface ReviewVariantTwoProps extends CommonComponentProps {
  author: string
  verified?: boolean | string
  rating: number | string
  darkRating?: boolean
  date: string
  recommendation?: ['yes' | 'no', string?]
  likeButton?: {
    label?: string
    count?: number
    onClick?: () => void
  }
}

const ReviewVariantTwo = ({
  author,
  verified,
  rating,
  darkRating,
  date,
  recommendation,
  likeButton,
  children,
  ...props
}: PropsWithChildren<ReviewVariantTwoProps>) => (
  <div {...props}>
    <div className="row py-sm-2">
      <div className="col-md-4 col-lg-3 mb-3 mb-md-0">
        <div className="d-flex h6 mb-2">
          {author}
          {verified && (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip-sm">
                  {typeof verified === 'string' && verified.trim() !== '' ? verified : 'Verified customer'}
                </Tooltip>
              }
            >
              <i className="ci-check-circle text-success mt-1 ms-2" />
            </OverlayTrigger>
          )}
        </div>
        <div className="fs-sm mb-2 mb-md-3">{date}</div>
        <StarRating rating={rating} dark={darkRating} className="fs-sm" />
      </div>
      <div className="col-md-8 col-lg-9">
        <div className="mb-3 mb-md-4">{children}</div>
        {(recommendation || likeButton) && (
          <div className="d-sm-flex">
            {recommendation && (
              <div className="d-flex align-items-center fs-sm fw-medium text-dark-emphasis pb-2 pb-sm-0 mb-1 mb-sm-0">
                {recommendation[0] === 'yes' ? (
                  <>
                    <i className="ci-check fs-base me-1" style={{ marginTop: '.125rem' }} />
                    {recommendation[1] || 'Yes, I recommend this product'}
                  </>
                ) : (
                  <>
                    <i className="ci-close fs-base me-1" style={{ marginTop: '.125rem' }} />
                    {recommendation[1] || "No, I don't recommend this product"}
                  </>
                )}
              </div>
            )}
            {likeButton && (
              <div className="d-flex align-items-center gap-2 ms-sm-auto">
                <div className="fs-sm fw-medium text-dark-emphasis me-1">
                  {likeButton.label ? likeButton.label : 'Helpful?'}
                </div>
                <button type="button" className="btn btn-sm btn-secondary" onClick={likeButton.onClick}>
                  <i className="ci-thumbs-up fs-sm ms-n1 me-1" />
                  {likeButton.count}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
)

export default ReviewVariantTwo
