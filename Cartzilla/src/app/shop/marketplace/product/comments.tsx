'use client'

import { useState, type FormEvent } from 'react'
import { useModal } from '@/contexts/modal-context'
import Comment from '@/components/reviews/comment'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const initialComments = [
  {
    id: 'comment01',
    author: {
      avatar: '/img/shop/marketplace/single/comments/01.jpg',
      name: 'Randy Walker',
    },
    date: 'October 28, 2025',
    likeCount: 12,
    comment:
      'This set of Tablet Pro mockups exceeded my expectations! The high resolution and attention to detail make my designs look incredibly polished. The smart objects make editing a breeze, and the realistic lighting adds a professional touch to all my presentations. Highly recommend it for anyone serious about their design work.',
  },
  {
    id: 'comment02',
    author: {
      avatar: '/img/shop/marketplace/single/comments/02.jpg',
      name: 'Daniel Adams',
    },
    date: 'August 15, 2025',
    likeCount: 6,
    comment:
      "I've used a lot of mockups, but these are some of the best. The variety of angles and perspectives really helped me showcase my app from different viewpoints. Plus, the customizable backgrounds are a fantastic feature — I could easily match the mockups to my brand colors. A must-have for designers!",
  },
  {
    id: 'comment03',
    author: {
      avatar: '/img/shop/marketplace/single/comments/03.jpg',
      name: 'Darrell Steward',
    },
    date: 'June 2, 2025',
    likeCount: 19,
    comment:
      "The quality of these mockups is superb, and they're incredibly easy to use. The only thing I'd love to see is a few more device color options to match different product lines. Other than that, it's a fantastic set that's well worth the investment.",
  },
]

const ProductCommentsMarketplace = () => {
  const { openModal, closeModal, isShown } = useModal()
  const [validated, setValidated] = useState(false)

  // State to track likes for each comment
  const [comments, setComments] = useState(
    initialComments.map((comment) => ({
      ...comment,
      userLike: false,
    }))
  )

  // Handle like for a specific comment by ID
  const handleLike = (commentId: string) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === commentId) {
          const newUserLike = !comment.userLike
          const newLikeCount = newUserLike ? comment.likeCount + 1 : comment.likeCount - 1

          return {
            ...comment,
            userLike: newUserLike,
            likeCount: newLikeCount,
          }
        }
        return comment
      })
    )
  }

  // Form validation
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
      <div className="d-flex align-items-center gap-3 pt-5 mt-md-2 mb-3" id="comments" style={{ scrollMarginTop: 60 }}>
        <h2 className="h4 mb-0">Comments (3)</h2>
        <Button variant="outline-secondary" className="rounded-pill ms-auto" onClick={() => openModal('commentForm')}>
          <i className="ci-edit-3 fs-base ms-n1 me-2" />
          Leave a comment
        </Button>
      </div>
      <div className="bg-body-tertiary rounded-4 p-4 p-sm-5">
        <div className="vstack gap-3 gap-md-4 mt-n3">
          {comments.map(({ id, author, date, likeCount, userLike, comment }) => (
            <Comment
              key={id}
              author={author}
              date={date}
              likeButton={{
                count: likeCount,
                active: userLike,
                onClick: () => handleLike(id),
                className: 'bg-body rounded-pill',
              }}
              replyButton={{
                onClick: () => console.log('Reply button is clicked!'),
                className: 'bg-body rounded-pill',
              }}
              className="mt-3"
            >
              {comment}
            </Comment>
          ))}
        </div>
      </div>

      {/* Review form modal */}
      <Modal
        show={isShown('commentForm')}
        onHide={() => closeModal('commentForm')}
        centered={true}
        backdrop="static"
        aria-labelledby="commentFormLabel"
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton className="border-0">
            <Modal.Title as="h5" id="commentFormLabel">
              Leave a comment
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pb-3 pt-0">
            <Form.Group controlId="commentName" className="mb-3">
              <Form.Label>
                Your name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" className="rounded-pill" required />
              <Form.Control.Feedback type="invalid">Please enter your name!</Form.Control.Feedback>
              <Form.Text>Will be displayed on the comment.</Form.Text>
            </Form.Group>
            <Form.Group controlId="commentEmail" className="mb-3">
              <Form.Label>
                Your email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="email" className="rounded-pill" required />
              <Form.Control.Feedback type="invalid">Please provide a valid email address!</Form.Control.Feedback>
              <Form.Text>Authentication only - we won&apos;t spam you.</Form.Text>
            </Form.Group>
            <Form.Group controlId="commentText">
              <Form.Label>
                Comment <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control as="textarea" rows={5} className="rounded-6" required />
              <Form.Control.Feedback type="invalid">Please write your comment!</Form.Control.Feedback>
              <Form.Text>Your comment must be at least 50 characters.</Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="flex-nowrap gap-3 border-0 px-4">
            <Button
              type="reset"
              variant="secondary"
              className="w-100 rounded-pill m-0"
              onClick={() => closeModal('commentForm')}
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

export default ProductCommentsMarketplace
