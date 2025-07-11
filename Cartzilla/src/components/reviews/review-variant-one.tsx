import type { PropsWithChildren, ReactElement, ReactNode } from 'react'
import type { CommonComponentProps } from '@/types/common-component-props'
import StarRating from './star-rating'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

interface ReviewVariantOneProps extends CommonComponentProps {
  author: string
  verified?: boolean | string
  rating: number | string
  darkRating?: boolean
  date: string
  product?: Record<string, string>
  text: React.ReactNode
  pros?: {
    label?: string
    list?: string[]
  }
  cons?: {
    label?: string
    list?: string[]
  }
  replyButton?: {
    label?: string
    onClick?: () => void
  }
  likeButton?: {
    count?: number
    onClick?: () => void
  }
  dislikeButton?: {
    count?: number
    onClick?: () => void
  }
}

const ReviewVariantOne = ({
  author,
  verified,
  rating,
  darkRating,
  date,
  product,
  text,
  pros,
  cons,
  replyButton,
  likeButton,
  dislikeButton,
  children,
  ...props
}: PropsWithChildren<ReviewVariantOneProps>) => {
  const formatList = (label?: string, list?: string[]) =>
    list && list.length > 0 ? (
      <li>
        <span className="text-dark-emphasis fw-medium">{label}:</span> {list.join(', ')}
      </li>
    ) : null

  return (
    <div {...props}>
      <div className="d-flex align-items-center mb-3">
        <div className="text-nowrap me-3">
          <span className="h6 mb-0">{author}</span>
          {verified && (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip-sm">
                  {typeof verified === 'string' && verified.trim() !== '' ? verified : 'Verified customer'}
                </Tooltip>
              }
            >
              <i className="ci-check-circle text-success align-middle mt-n1 ms-2" />
            </OverlayTrigger>
          )}
        </div>
        <span className="text-body-secondary fs-sm ms-auto">{date}</span>
      </div>
      <StarRating rating={rating} dark={darkRating} className="fs-sm pb-2 mb-1" />
      {product && (
        <ul className="list-inline gap-2 pb-2 mb-1">
          {Object.entries(product).map(([key, value], index) => (
            <li key={index} className={`fs-sm ${index < Object.entries(product).length - 1 ? 'me-4' : ''}`}>
              <span className="text-dark-emphasis fw-medium">{key}:</span> {value}
            </li>
          ))}
        </ul>
      )}
      <p className="fs-sm">{text}</p>
      <>
        {(pros?.list?.length || cons?.list?.length) && (
          <ul className="list-unstyled fs-sm pb-2 mb-1">
            {formatList(pros?.label || 'Pros', pros?.list)}
            {formatList(cons?.label || 'Cons', cons?.list)}
          </ul>
        )}
      </>
      <>
        {(replyButton || likeButton || dislikeButton) && (
          <div className="nav align-items-center">
            {replyButton && (
              <button type="button" className="nav-link animate-underline px-0" onClick={replyButton.onClick}>
                <i className="ci-corner-down-right fs-base ms-1 me-1" />
                <span className="animate-target">{replyButton.label || 'Reply'}</span>
              </button>
            )}
            {(likeButton || dislikeButton) && (
              <div className="nav align-items-center ms-auto">
                {likeButton && (
                  <button
                    type="button"
                    className="nav-link text-body-secondary animate-scale px-0 me-n1"
                    onClick={likeButton.onClick}
                  >
                    <i
                      className={`ci-thumbs-up fs-base animate-target me-1 ${
                        (likeButton.count ?? 0) > 0 ? 'text-success' : ''
                      }`}
                    />
                    {likeButton.count ?? 0}
                  </button>
                )}
                {likeButton && dislikeButton && <hr className="vr my-2 mx-3" />}
                {dislikeButton && (
                  <button
                    type="button"
                    className="nav-link text-body-secondary animate-scale px-0 ms-n1"
                    onClick={dislikeButton.onClick}
                  >
                    <i
                      className={`ci-thumbs-down fs-base animate-target me-1 ${
                        (dislikeButton.count ?? 0) > 0 ? 'text-danger' : ''
                      }`}
                    />
                    {dislikeButton.count ?? 0}
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </>
      {children}
    </div>
  )
}

export default ReviewVariantOne
