import type { PropsWithChildren } from 'react'
import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Button from 'react-bootstrap/Button'

interface CommentProps extends CommonComponentProps {
  author: {
    avatar?: string
    name: string
  }
  date: string
  likeButton?: {
    count?: number
    active?: boolean
    label?: string
    className?: string
    onClick?: () => void
  }
  replyButton?: {
    label?: string
    className?: string
    onClick?: () => void
  }
}

const Comment = ({ author, date, likeButton, replyButton, children, ...props }: PropsWithChildren<CommentProps>) => (
  <div {...props}>
    <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
      <div className="d-flex align-items-center">
        <div
          className="position-relative d-flex align-items-center justify-content-center flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
          style={{ width: 40, height: 40 }}
        >
          {author.avatar ? (
            <Image fill src={author.avatar} sizes="80px" className="object-fit-cover" alt={author.name} />
          ) : (
            <i className="ci-user fs-lg position-absolute top-50 start-50 trnaslate-middle" />
          )}
        </div>
        <div className="ps-2 ms-1">
          <div className="fs-sm fw-semibold text-dark-emphasis mb-1">{author.name}</div>
          <div className="fs-xs text-body-secondary">{date}</div>
        </div>
      </div>
      {(likeButton || replyButton) && (
        <div className="d-flex gap-2">
          {likeButton && (
            <Button
              variant="secondary"
              size="sm"
              className={`border-0 animate-pulse${likeButton.className ? ` ${likeButton.className}` : ''}`}
              onClick={likeButton.onClick}
              aria-label={likeButton.label || 'Like'}
            >
              <i className={`ci-${likeButton.active ? 'heart-filled' : 'heart'} animate-target fs-sm ms-n1 me-1`} />
              {likeButton.count}
            </Button>
          )}
          {replyButton && (
            <Button
              variant="secondary"
              size="sm"
              className={`btn-icon border-0 animate-slide-end${replyButton.className ? ` ${replyButton.className}` : ''}`}
              onClick={replyButton.onClick}
              aria-label={replyButton.label || 'Reply'}
            >
              <i className="ci-corner-up-right animate-target fs-sm" />
            </Button>
          )}
        </div>
      )}
    </div>
    <div className="fs-sm">{children}</div>
  </div>
)

export default Comment
